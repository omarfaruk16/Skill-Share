import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ReadyToStart from '../Components/Home/ReadyToStart'
import TestimonialsSection from '../Components/Home/TestimonialCard'
import TopRated from '../Components/Home/TopRated'
import HowItWorks from '../Components/Home/HowItWorks'
import Slider from '../Components/Home/Slider'
import Numbers from '../Components/Home/Numbers'
import Category from '../Components/Home/Category'
import { Outlet } from 'react-router'

const HomeLayout = () => {
  return (
    <div>
        <header className='bg-bg-base-100'>
            <Header></Header>
        </header>

        <main>
            <Slider></Slider>
            <Numbers></Numbers>
            <Category></Category>
            <div>
                <Outlet></Outlet>
            </div>
            <HowItWorks></HowItWorks>
            <TopRated></TopRated>
            <TestimonialsSection></TestimonialsSection>
            <ReadyToStart></ReadyToStart>
        </main>
        <footer>
            <Footer></Footer>
        </footer>
    </div>
  )
}

export default HomeLayout