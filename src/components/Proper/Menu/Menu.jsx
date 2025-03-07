import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import PropTypes from 'prop-types'
import styles from './Menu.module.scss'
import WrapperProper from '~/components/Proper/Proper'
import MenuItem from './MenuItem'
import Header from './Header'
import { useState } from 'react'

const cx = classNames.bind(styles)
const defaultFn = () => { }
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

  const [history, setHistory] = useState([{ data: items }])
  const current = history[history.length - 1]
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children
      return (
        <MenuItem
          key={index}
          data={item}
          onClick = {() => {
            if (isParent) {
              setHistory(prev => [...prev, item.children])
            } else {
              onChange(item)
            }
          }
          }
        />
      )
    })
  }

  const handleBack = prev => prev.slice(0, prev.length - 1)
  const renderResult = attrs => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <WrapperProper className={cx('menu-proper')}>
        {history.length > 1 &&
          <Header title={current.title} onBack={() => {
            setHistory(handleBack)
          }} />}
        <div className={cx('menu-body')}>{renderItems()}</div>
      </WrapperProper>
    </div>
  )

  const handleReset = () => {
    setHistory(prev => prev.slice(0, 1))
  }
  return (
    <Tippy
      // visible
      hideOnClick={hideOnClick}
      interactive
      delay={[0, 700]}
      offset={[12, 8]}
      placement='bottom-end'
      render={renderResult}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  )
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func
}
export default Menu
