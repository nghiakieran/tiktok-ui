import PropTypes from 'prop-types'
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

Proper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}
export default Proper
