import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import images from '~/assets/images'
import styles from './SuggestedAccount.module.scss'
import Proper from '~/components/Proper/Proper'
import AccountPreview from './AccountPreview/AccountPreview'

const cx = classNames.bind(styles)
function AccountItem() {

  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <Proper>
          <AccountPreview />
        </Proper>
      </div>
    )
  }
  return (
    // Fix Tippy need wrapper div or span
    <div>
      <Tippy interactive delay={[800, 0]} placement='bottom' render={renderPreview}>
        <div className={cx('account-item')}>
          <img className={cx('avatar')} src={images.noImage} alt=''/>
          <div className={cx('item-info')}>
            <h4 className={cx('nickName')}>
              <strong>quocnguyenphu</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
            </h4>
            <p className={cx('name')}>Quốc Nguyễn Phú</p>
          </div>
        </div>
      </Tippy>
    </div>
  )
}

export default AccountItem