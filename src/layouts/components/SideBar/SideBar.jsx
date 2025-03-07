import classNames from 'classnames/bind'
import styles from './SideBar.module.scss'
import MenuItem from './Menu/MenuItem'
import Menu from './Menu/Menu'
import routes from '~/config/routes'
import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/components/Icons/Icons'
import SuggestedAccount from './SuggestedAccount/SuggestedAccount'

const cx = classNames.bind(styles)
function SideBar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For You" to={routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />}/>
        <MenuItem title="Following" to={routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
        <MenuItem title="LIVE" to={routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
      </Menu>

      <SuggestedAccount label='Suggested accounts' />
      <SuggestedAccount label='Following accounts' />
    </aside>
  )
}

export default SideBar
