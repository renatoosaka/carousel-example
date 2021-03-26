// import { useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel-js'

import styles from './carousel.module.css';

type Image = {
  id: string
  url: string
}

interface CarouselProps {
  images: Image[];
}

export function Carousel({ images }: CarouselProps) {
  const { 
    carouselFragment, 
    slideToPrevItem,
    slideToNextItem,    
  } = useSpringCarousel({
    items: images.map(image => ({
      id: image.id,
      renderItem: (<img src={image.url} alt='Nome do Produto'/>)
    }))
  })

  // const [imageIndex, setImageIndex] = useState(0)
  
  // function nextImage() {
  //   if (imageIndex < images.length -1) {
  //     setImageIndex(imageIndex + 1)
  //   }
  // }

  // function priorImage() {
  //   if (imageIndex > 0) {
  //     setImageIndex(imageIndex - 1)
  //   }
  // }

  return (
    <div className={styles.container}>
      {/* {imageIndex > 0 &&  <button className={styles.prevButton} type="button" disabled={imageIndex === 0} onClick={priorImage}/>}
      
      <div>
        <img src={images[imageIndex].url} alt='Nome do Produto'/>
      </div>

      {imageIndex < images.length -1 && <button className={styles.nextButton} type="button" disabled={imageIndex === images.length -1} onClick={nextImage}/>}
       */}

      <button className={styles.prevButton} type="button" onClick={slideToPrevItem}/>
      {carouselFragment}
      <button className={styles.nextButton} type="button" onClick={slideToNextItem}/>
    </div>
  )
}