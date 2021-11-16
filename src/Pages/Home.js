import React from 'react'
import About from '../components/About/About'
import Cake from '../components/Cakedetaills/Cake'
import DeliveryNo from '../components/DeliveryboyNo/DeliveryNo'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Form from '../components/Orderform/Form'

function Home() {
    return (
        <div>
            <Header />
            <Form />
            <Cake />
            <DeliveryNo />
            <About />
            <Footer />
        </div>
    )
}

export default Home
