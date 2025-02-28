import classNames from 'classnames/bind'
import styles from './Proper.module.scss'

const cx = classNames.bind(styles)
function Proper( { children }) {
  return (
    <div className={cx('wrapper')}>
      {children}
    </div>
  )
}

export default Proper
