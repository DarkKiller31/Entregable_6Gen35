import { useEffect, useState } from "react"
import './styles/SliderImg.css'

const SliderImg = ({ images }) => {

  const [actualImage, setActualImage] = useState(0)

  const numberImages = images?.length

  const nextImage = () => {
    setActualImage(actualImage === numberImages - 1 ? 0 : actualImage + 1)
  }

  const previewImage = () => {
    setActualImage(actualImage === 0 ? numberImages - 1 : actualImage - 1)
  }

  return (
    <div className="content__slider">
      <div className="optionImage preview" onClick={previewImage}><h2>&lt;</h2></div>
        {
          images?.map((imagen, index) => (
            <div>{actualImage === index && (
              <img className="slider__img" key={imagen.id} src={imagen.url} />
            )}
            </div>
          ))
        }
      <div className="optionImage next" onClick={nextImage}><h2>&gt;</h2></div>
    </div>
  )
}

export default SliderImg
