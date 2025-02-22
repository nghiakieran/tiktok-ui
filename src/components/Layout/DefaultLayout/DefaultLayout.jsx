import Header from '~/components/Layout/components/Header/Header'
import SideBar from './SideBar/SideBar'


// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className='container'>
        <SideBar />
        <div className='content'>{children}</div>
      </div>
    </div>
  )
}

export default DefaultLayout
