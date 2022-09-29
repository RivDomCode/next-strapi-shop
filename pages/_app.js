import {
  useEffect,
  useState
} from 'react'
import { AppProvider } from '../context/AppContext';
import '../styles/globals.css'

function MyApp({
  Component,
  pageProps
}) {

  //MobileMenu

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () =>{
    setIsMenuOpen(true);
    console.log("open")
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  //Shopping cart

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('cart')) ?? [];
    setCart(cartLS)
  }, [])


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);


  const addToCart = (product) => {
    if (cart.some(article => article.id === product.id)) {
      const updatedCart = cart.map((article) => {
        if (article.id === product.id) {
          article.quantity = product.quantity
        }
        return article
      })
      setCart(updatedCart)
    } else {
      setCart([...cart, product])
    }
  }

  const updateQuantity = product => {
    const updatedCart = cart.map((article) => {

      if (article.id === product.id) {
        article.quantity = product.quantity
      }

      return article
    })
    setCart(updatedCart)
  }

  const removeArticle = id => {
    const updatedCart = cart.filter(article => article.id !== id);
    setCart(updatedCart)
  }

  return <AppProvider>
<Component {
    ...pageProps
  }
  cart = {
    cart
  }
  addToCart = {
    addToCart
  }
  updateQuantity = {
    updateQuantity
  }

  removeArticle= {
    removeArticle
  }

  openMenu= {
    openMenu
  }

  closeMenu = {
    closeMenu
  }

  isMenuOpen={isMenuOpen}
  />
  </AppProvider>
}

export default MyApp