import meh from "../assets/meh.webp"
import bullsEye from "../assets/bullseye.svg"
import thumbsUp from "../assets/thumbs-up-emoji.png"
import { Image, ImageProps } from "@chakra-ui/react"


interface Props {
    rating: number
}


const Emogi = ({ rating }: Props) => {
    if (rating < 3) return null

    const icons: { [ key: number]: ImageProps } = {
        3: { src: meh, alt: "Meh", boxSize: '25px' },
        4: { src: thumbsUp, alt: "Recommended", boxSize: '25px' },
        5: { src: bullsEye, alt: "Exceptional", boxSize: '35px' }
    }

  return (
    <Image {...icons[rating]} marginTop={2} />
  )
}

export default Emogi