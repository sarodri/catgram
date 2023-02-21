import { keyframes, css } from "styled-components";

export const FadeIn= ({time = "1s", type = "ease"} = {}) => 
 css`animation: ${time} ${FadeInKeyFrames} ${type};`


export const FadeInKeyFrames = keyframes`
from{
  filter: blur(5px);
  opacity: 0;
}
to{
  filter: blur(0);
  opacity: 1;
}
`
