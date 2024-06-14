import './App.css'
import Cards from './components/cards'
import Front from './components/front'
// import Spline from '@splinetool/react-spline';
import Marquee from './components/marquee'
import Services from './components/services'
import Navbar from './components/nav'
import IconGrid from './components/techstack'
import Topdown from './components/topdown'

function App() {

  return (
    <>
    <Navbar />
    <Front />
    
      {/* Add more content to see the scrolling effect */}
      
    <Cards />
    <Marquee /> 
    {/* <Front />  */}
    {/* <Spline scene="https://prod.spline.design/G3XyWtyW-2xuJbsq/scene.splinecode" /> */}
    <Services />
    <Topdown />
    <IconGrid />


    
    </>
  )
}

export default App