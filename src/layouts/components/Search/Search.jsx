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

import { SearchIcon } from '~/components/Icons/Icons'
import AccountItem from '~/components/AccountItem/AccountItem'
import WrapperProper from '~/components/Proper/Proper'
import useDebounce from '~/hooks/useDebounce'
import * as searchService from '~/services/searchService'

const cx = classNames.bind(styles)

function Search() {
  const [searchResult, setSearchResult] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef()

  const debounced = useDebounce(searchValue, 500)

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([])
      return
    }
    const fetchApi = async () => {
      setLoading(true)

      const result = await searchService.search(debounced)
      setSearchResult(result)

      setLoading(false)
    }
    fetchApi()

  }, [debounced])

  const handleClear = () => {
    setSearchValue('')
    setSearchResult([])
    inputRef.current.focus()

  }
  const handleHideResult = () => {
    setShowResult(false)
  }

  const handleChange = (e) => {
    const searchValue = e.target.value
    if (!searchValue.startsWith(' ')) {
      setSearchValue(searchValue)
    }
  }
  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this
    // by creating a new parentNode context.
    <div>
      <HeadlessTippy
        visible={showResult && searchResult.length > 0}
        interactive
        render={attrs => (
          <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <WrapperProper>
              <h4 className={cx('title')}>Accounts</h4>
              {searchResult.map(result => {
                return (
                  <AccountItem key={result.id} data={result} onClick={() => {
                    setShowResult(false)
                  }} />
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
            onChange={handleChange}
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
          <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  )
}

export default Search
