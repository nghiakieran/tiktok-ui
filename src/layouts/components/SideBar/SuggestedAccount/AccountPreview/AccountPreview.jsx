import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import Button from '~/components/Button/Button'
import styles from './AccountPreview.module.scss'
import images from '~/assets/images'

const cx = classNames.bind(styles)
function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header')}>
        <img className={cx('avatar')} src={images.noImage} alt="" />
        <Button className={cx('follow-btn')} primary>Follow</Button>
      </header>
      <section className={cx('body')}>
        <h4 className={cx('nickname')}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <p className={cx('name')}>Quốc Nguyễn Phú</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </section>
    </div>
  )
}
AccountPreview.propTypes = {

}
export default AccountPreview