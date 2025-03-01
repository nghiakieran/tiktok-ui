import { useState } from 'react'
import classNames from 'classnames'
import styles from './Image.module.scss'
import images from '~/assets/images'

function Image({ src, className, fallback: customFallback = images.noImage, ...props }) {
  const [fallback, setFallback] = useState('')

  const handleError = () => {
    setFallback(customFallback)
  }
  return (
    <img
      src={fallback || src}
      className={classNames(styles.wrapper, className)}
      {...props }
      onError={handleError}
    />
  )
}
export default Image
