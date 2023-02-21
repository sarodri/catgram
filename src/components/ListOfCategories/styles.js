import styled, {css} from "styled-components";

export const List = styled.ul`

  list-style: none;
  display: flex;
  overflow: scroll;
  width: 100%;
  padding: 30px;
  justify-items: center;
  justify-content: space-between;
  /* Dependiendo de la cantidad de categorias podemos visiviliza o no la barra de scroll */
  &::-webkit-scrollbar {
    display: none;
  };

  ${ props => props.fixed && css`
  {
    border-radius: 50px;
    background-color: rgba(220, 175, 198, 0.6);
    box-shadow: 0 0 20px rgba(0, 0,0 , 0.6);
    padding: 5px;
    position: fixed;
    z-index: 1;
    max-width: 400px;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: -2px;
    transform: scale(.7);

  }`
  }
`


export const Item = styled.li`
  padding: 0 8px;
`
