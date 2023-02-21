import React, {useEffect, useState} from "react";
import { render } from "react-dom";
import { Category } from "../category";
import { List, Item } from "./styles";


//Llamada a la API
export const useCategoriesData = () => {
  const [categorias, setCategoras] = useState([])

   useEffect(function(){
    fetch('http://localhost:3000/categories')
    .then(res=> res.json())
    .then(response => {
      setCategoras(response)
    })
  }, [])

  return {categorias}
}

//Carga la lista
export const ListOfCategories = () => {
  const { categorias } = useCategoriesData()
  const [verFixed, setVerFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const mostrarFixed = window.scrollY > 200
      verFixed !== mostrarFixed && setVerFixed(mostrarFixed);
    }

    document.addEventListener('scroll', onScroll)

    //Limpiamos el listener
    return() => document.removeEventListener('scroll', onScroll)
  }, [verFixed])
  
  //Renderizado
  const renderList = (fixed) => (
     <List fixed ={fixed}>
      {
        categorias.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
  return(
    <>  
      {renderList()}
      {verFixed && renderList(true)}
    </>
  
  )
}

