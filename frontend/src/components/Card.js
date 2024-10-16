import React from 'react'
import { BotonFav } from './BotonFav'
import { ImagenFruta } from './ImagenFruta'

export const Card = ({ data }) => {
  return (
    <div className="card">
      <BotonFav />
      <ImagenFruta /> {/*Pasar data.name al componente para importar la imagen de la fruta correspondiente*/}
      <h2>{data.name}</h2>
      <p><b>Family: </b>{data.family}</p>
      <p><b>Fat: </b>{data.nutritions.fat} g</p>
      <p><b>Sugar: </b>{data.nutritions.sugar} g</p>
      <p><b>Carbohydrates: </b>{data.nutritions.carbohydrates} g</p>
      <p><b>Protein: </b>{data.nutritions.protein} g</p>
    </div>
  )
}
