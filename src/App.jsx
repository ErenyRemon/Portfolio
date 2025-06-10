import './App.css'
import { Contact } from './components/Content/content'
import { Footer } from './components/Footer/footer'
import { Navbar } from './components/Navbar/navbar'
import { Portfolio } from './components/Portfolio/portfolio'
import { Skills } from './components/Skills/skills'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <Navbar/>
      <Contact/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App
