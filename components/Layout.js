import Head from 'next/head'
import Footer from './Footer'
import { Header } from './Header'


const Layout = ( {children, page, articlesInCart} ) => {

  return (
    <div>
       <Head>
          <title>Plant shop - {page}</title>
          <meta name="description" content="website to sell guitars"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
       </Head>
      <Header articlesInCart={articlesInCart}/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout