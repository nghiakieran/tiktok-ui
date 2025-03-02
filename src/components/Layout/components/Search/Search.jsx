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
  const [loading, setLoading] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([])
      return
    }
    setLoading(true)
    fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
      .then(res => res.json())
      .then((res) => {
        setSearchResult(res.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [searchValue])

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
            <h4 className={cx('title')}>Accounts</h4>
            {searchResult.map(result => {
              return (
                <AccountItem key={result.id} data={result} />
              )
            })}
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
          onChange={(e) => {
            if (!e.target.value.startsWith(' ')) {
              setSearchValue(e.target.value)
            }
          }}
          value={searchValue}
          onFocus={() => setShowResult(true)}
        />
        {
          !!searchValue && !loading &&
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        }
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  )
}

export default Search
