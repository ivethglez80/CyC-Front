import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import Home from './views/home'
import Footer from './modules/footer'
import GiftsView from './views/giftsView'
import GiftListforGuests from './dashboards/GiftListforGuests'
import GuestCardsContainer from './cards/guestsDshBrd/guestCardsContainer'


function App() {


  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gifts" element={<GiftsView />} />
          <Route path="/gifts-list" element={<GiftListforGuests />} />
          <Route path="/lista-invitados" element={<GuestCardsContainer />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </Provider>
    </>
  )
}

export default App
