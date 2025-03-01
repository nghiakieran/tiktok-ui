import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import HeadlessTippy from '@tippyjs/react/headless'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleXmark,
  faEllipsisVertical,
  faSpinner,
  faCircleQuestion,
  faEarthAsia,
  faKeyboard,
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
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons'
import Image from '~/components/Image'

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
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
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
              <Image
                className={cx('user-avatar')}
                src='"https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/ea0854578085ab26effc2c7b8cefa270~c5_300x300.webp?x-expires=1651489200&x-signature=Xp8iH14MDegegBpFEg%2Fg5rv6Mrw%3D"'
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
