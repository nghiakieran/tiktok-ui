import PropTypes from 'prop-types'
import { useState } from 'react'
import classNames from 'classnames'
import styles from './Image.module.scss'
import images from '~/assets/images'

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }) {
  const [fallback, setFallback] = useState('')

  const handleError = () => {
    setFallback(customFallback)
  }
  return (
    <img
      src={fallback || src}
      alt={alt}
      className={classNames(styles.wrapper, className)}
      {...props }
      onError={handleError}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string
}
export default Image
