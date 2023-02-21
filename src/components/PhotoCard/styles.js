import styled from "styled-components";
import { FadeIn } from "../../styles/animation";


export const ImgEnv = styled.div`
 border-radius: 10px;
 display: block;
 overflow: hidden;
 padding: 56.25% 0 0 0 ;
 margin-top: 20px;
 position: relative;
 width: 100%;
`
export const Img = styled.img`
 ${FadeIn()}
 box-shadow: 0 10px 14px rgba(0,0,0,0.2);
 height: 100%;
 object-fit: cover;
 position: absolute;
 top:0;
 width: 100%;
`
export const Buttom = styled.button`
 padding-top: 8px;
 display: flex;
 align-items: center;
  & svg {
    margin-right: 5px;
  }
`
