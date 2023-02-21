import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCard } from "./components/ListOfPhotoCard";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";

export const App = () => (
  <>  
  <GlobalStyle />
  <Logo />
  <ListOfCategories />
  <ListOfPhotoCard />
  </>

)
