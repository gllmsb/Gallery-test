import './App.css'
import { Myfooter } from './components/Footer/Footer'
import { Gallery } from './components/Gallery/Gallery'
import { Header } from './components/Header/Header'
import { Loyalty } from './components/Loyalty/Loyalty'
import { Main } from './components/Main/Main'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <> 
    <Navbar/>
    <Header/>
    <Main/>
    <Loyalty/>
    <Gallery/>
    <Myfooter/>
    </>
  )
}

export default App
