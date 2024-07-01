import './App.css'
import Cards from './components/cards'
import Front from './components/front'
// import Spline from '@splinetool/react-spline';
import Services from './components/services'
import Navbar from './components/nav'
import IconGrid from './components/techstack'
import Topdown from './components/topdown'

import AdMarquee from './components/adMarquee'

import Foot from './components/foot'
function App() {

  return (
    <>
    <Navbar />
    <Front />
    <AdMarquee/>
    
      {/* Add more content to see the scrolling effect */}
      
    <Cards />
    
    {/* <Front />  */}
    {/* <Spline scene="https://prod.spline.design/G3XyWtyW-2xuJbsq/scene.splinecode" /> */}
    <Services />
    {/* <Links /> */}
    
    <Topdown />
    <IconGrid />
    <Foot />


    
    </>
  )
}

export default App