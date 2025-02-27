import classNames from 'classnames/bind'
import styles from './Proper.module.scss'

const cx = classNames.bind(styles)
// eslint-disable-next-line react/prop-types
function Proper( { children }) {
  return (
    <div className={cx('wrapper')}>
      {children}
    </div>
  )
}

export default Proper
