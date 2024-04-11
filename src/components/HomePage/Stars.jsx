import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

const Stars = ({ score }) => {
  return (
    <div>
      {
        [...new Array(5)].map((star, index) => {
          return index < score ? <MdOutlineStar /> : <MdOutlineStarBorder />
        })
      }
    </div>
  )
}

export default Stars



{/* <MdOutlineStar /> */}
{/* <MdOutlineStarBorder /> */}