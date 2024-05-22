import {React ,useContext,useEffect} from 'react'
import './Home.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homeheo from './components/Homeheo'
import Category from './components/Category'
import HomeProduct from './components/HomeProduct'
import HomeTrack from './components/HomeTrack'
import Testimonial from './components/Testimonial'



const Home = () => {
  

  useEffect(()=>{
    window.scrollTo(0, 0);

  },[])

  
  return (
    <>
   
     
    <div className='main-content'>
      <Homeheo/>
      <Category/>
      <HomeProduct/>
      <HomeTrack/>
      <Testimonial/>

    
    
    </div>

   
    </>
    
  )
}

export default Home