import { BrowserRouter, Route, Routes } from "react-router-dom"

import { LoginModal, Error, Footer, LandingPage, Navbar, SignupModal } from './components'
import AuthWrapper from './products/AuthWrapper'
import Product from './products/Product'
import CartContainer from "./cart/CartContainer"
import DetailedProduct from "./products/DetailedProduct"
import { SearchedData } from "./products/SearchedData"



const App = () => {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/signup" element={<SignupModal />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/product" element={<><Navbar /> <AuthWrapper> <Product /> </AuthWrapper> </>} />
          <Route path="/product/:id" element={<><Navbar /> <AuthWrapper> <DetailedProduct /> </AuthWrapper> </>} />
          <Route path="/detailed-product" element={<DetailedProduct />} />
          <Route path="/searched-product" element={<><Navbar/> <AuthWrapper><SearchedData /></AuthWrapper> </>} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}
export default App