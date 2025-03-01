import { useEffect, useState, useRef } from 'react'
import {
  faCircleXmark,
  faSpinner
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless'
import 'tippy.js/dist/tippy.css'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'


import AccountItem from '~/components/AccountItem/AccountItem'
import { SearchIcon } from '~/components/Icons'
import WrapperProper from '~/components/Proper/Proper'

const cx = classNames.bind(styles)

function Search() {
  const [searchResult, setSearchResult] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [showResult, setShowResult] = useState(true)
  const inputRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2])
    }, 0)
  }, [])

  const handleClear = () => {
    setSearchValue('')
    setSearchResult([])
    inputRef.current.focus()

  }
  const handleHideResult = () => {
    setShowResult(false)
  }
  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
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
      onClickOutside={handleHideResult}
    >
      <div className={(cx('search'))}>
        <input
          ref={inputRef}
          placeholder='Search accounts and videos'
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          onFocus={() => setShowResult(true)}
        />
        <button className={cx('clear')} onClick={handleClear}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  )
}

export default Search
