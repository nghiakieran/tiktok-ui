import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleXmark,
  faEllipsisVertical,
  faMagnifyingGlass,
  faSpinner,
  faCircleQuestion,
  faEarthAsia,
  faKeyboard,
  faCloudUpload,
  faUser,
  faCoins,
  faGear,
  faSignOut
} from '@fortawesome/free-solid-svg-icons'


import styles from './Header.module.scss'
import images from '~/assets/images'
import WrapperProper from '~/components/Proper/Proper'
import AccountItem from '~/components/AccountItem/AccountItem'
import Button from '~/components/Button/Button'
import Menu from '~/components/Proper/Menu/Menu'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English'
        },
        {
          code: 'vi',
          title: 'Tiếng Việt'
        }
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts'
  }
]

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@hoaa'
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin'
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings'
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true
  }
]

function Header() {
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([])
    }, 0)
  }, [])
  // Handle logic
  // const handleMenuChange = (menuItem) => {
  //   switch (menuItem.type) {
  //     case 'language':
  //       // Handle change language
  //       break;
  //     default:
  //   }
  // };
  const currentUser = true
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='tiktok'/>
        </div>
        <HeadlessTippy
          visible={searchResult.length > 0}
          interactive
          render={attrs => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <WrapperProper>
                <h4 className={cx('title')}>
                  Accounts
                </h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </WrapperProper>
            </div>
          )}
        >
          <div className={(cx('search'))}>
            <input placeholder='Search accounts and videos' spellCheck={false}/>
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu items={currentUser ? userMenu : MENU_ITEMS} >
            {currentUser ? (
              <img
                className={cx('user-avatar')}
                src='https://placehold.co/600x400'
                alt="Nguyen Van A"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </div>
  )
}

export default Header
