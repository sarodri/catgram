import React from "react";
import {Anchor, Image} from "./styles"

const DEFAULT_IMAGE = 'https://static3.depositphotos.com/1007572/231/i/600/depositphotos_2319994-stock-photo-kitten-in-box.jpg'

export const Category = ({
  cover = DEFAULT_IMAGE, path, emoji = '?'}) => (
    <Anchor href={path}>
      <Image src={cover}/>
      {emoji}
    </Anchor>
  )
