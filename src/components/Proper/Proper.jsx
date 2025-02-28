import classNames from 'classnames/bind'
import styles from './Proper.module.scss'

const cx = classNames.bind(styles)
function Proper( { children, className }) {
  return (
    <div className={cx('wrapper', className)}>
      {children}
    </div>
  )
}

export default Proper
