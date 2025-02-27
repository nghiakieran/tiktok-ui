import { useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames/bind'

// import { Proper as WrapperProper } from '~/components/Layout/Proper/Proper'
import styles from './Header.module.scss'
import images from '~/assets/images'
import WrapperProper from '~/components/Proper/Proper'
import AccountItem from '~/components/AccountItem/AccountItem'
const cx = classNames.bind(styles)
function Header() {
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2])
    }, 0)
  }, [])
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='tiktok'/>
        </div>
        <Tippy
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
        </Tippy>
        <div className={cx('action')}></div>
      </div>
    </div>
  )
}

export default Header
