import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)
function Button({
  to,
  href,
  primary = false,
  outline = false,
  rounded = false,
  text = false,
  small = false,
  large = false,
  children,
  disabled,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {

  let Component = 'button'
  const props = { onClick, ...passProps }

  if (to) {
    props.to = to
    Component = Link
  } else if (href) {
    props.href = href
    Component = 'a'
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    rounded,
    text,
    small,
    large,
    disabled,
    [className]: className
  }
  )

  // Handle remove event when button is disalbe
  if (disabled) {
    Object.keys(props).forEach(key => {
      if (key.startsWith('on') && typeof(props[key]) === 'function') {
        delete props[key]
      }
    })
  }
  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  )
}

export default Button
