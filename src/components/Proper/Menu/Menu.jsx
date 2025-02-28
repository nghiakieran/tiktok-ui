import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './Menu.module.scss'
import WrapperProper from '~/components/Proper/Proper'
import MenuItem from './MenuItem'

const cx = classNames.bind(styles)

function Menu({ children, items = [] }) {

  const renderItems = () => {
    return items.map((item, index) => {
      return (
        <MenuItem key={index} data={item} />
      )
    })
  }
  return (
    <Tippy
      // visible
      interactive
      delay={[0, 700]}
      placement='bottom-end'
      render={attrs => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <WrapperProper className={cx('menu-proper')}>
            {
              renderItems()
            }
          </WrapperProper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu
