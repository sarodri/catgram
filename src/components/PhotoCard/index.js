import React from "react";
import { Img, ImgEnv, Buttom } from "./styles";
import { FcLikePlaceholder } from "react-icons/fc";

const DEFAULT_IMAGE= "https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60Å"

export const PhotoCard = ({id, likes=0, src= DEFAULT_IMAGE}) => {
  return(
    <article>
      <a href={`/detail/${id}`}>
        <ImgEnv> 
          <Img src={src} />
        </ImgEnv>
      </a>
      <Buttom>
        <FcLikePlaceholder size="25px" />{likes} likes!
      </Buttom>
    </article>
  )
}
