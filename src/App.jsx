import './App.css'
import Cards from './components/cards'
import Front from './components/front'
// import Spline from '@splinetool/react-spline';
import Marquee from './components/marquee'
import Services from './components/services'
import Navbar from './components/nav'
import IconGrid from './components/techstack'
import Topdown from './components/topdown'
import Socials from './components/socials'
import AdMarquee from './components/adMarquee'
import Links from './components/links'
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
    <Socials />
    <Topdown />
    <IconGrid />
    <Foot />


    
    </>
  )
}

export default App