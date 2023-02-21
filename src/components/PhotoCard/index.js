import React, { useEffect, useRef, useState } from "react";
import { Article, Img, ImgEnv, Buttom } from "./styles";
import { FcLikePlaceholder } from "react-icons/fc";

const DEFAULT_IMAGE= "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60Å"

export const PhotoCard = ({id, likes=0, src= DEFAULT_IMAGE}) => {
  const element = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const loadPollyFill = async () => {
      try{
        await import('intersection-observer')
      } catch (error){
        console.log (error)
      }
    }

    if (!window.IntersectionObserver) loadPollyFill()

    const observer = new window.IntersectionObserver(entries => {
      const { isIntersecting } = entries[0]
      if (isIntersecting){ 
        console.log("showing")
        setShow(true)
        observer.disconnect()}
     }) 
    observer.observe(element.current)
  },[element])

  return(
    <Article ref= {element}>
    { show && <>
      <a href={`/detail/${id}`}>
        <ImgEnv> 
          <Img src={src} />
        </ImgEnv>
      </a>
      <Buttom>
        <FcLikePlaceholder size="25px" />{likes} likes!
      </Buttom>
      </>}
      
    </Article>
  )
}
