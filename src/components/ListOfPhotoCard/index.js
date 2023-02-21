import React from "react";
import { PhotoCard } from "../PhotoCard";
import db from "../../../api/db.json"

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {
        db.photos.map(category => <li key={category.id}><PhotoCard {...category} /></li>)
      }
    </ul>
  )
}

