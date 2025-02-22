import Header from '~/components/Layout/components/Header/Header'

// eslint-disable-next-line react/prop-types
function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='content'>{children}</div>
      </div>
    </div>
  )
}

export default HeaderOnly
