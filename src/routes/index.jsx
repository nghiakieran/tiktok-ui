import Home from '~/pages/Home/Home'
import Following from '~/pages/Following/Following'
import Profile from '~/pages/Profile/Profile'
import Upload from '~/pages/Upload/Upload'
import Search from '~/pages/Search/Search'
import HeaderOnly from '~/components/Layout/HeaderOnly/HeaderOnly'
// Public
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null }
]
// Login Success
const privateRoutes = [
]
export { publicRoutes, privateRoutes }
