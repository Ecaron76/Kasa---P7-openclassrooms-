import React from 'react';
import '../../style/Home/home.css'
import Header from '../../components/Header/Header'

import Footer from '../../components/Footer/Footer'
import LogementCard from '../../components/card/LogementCard'
import Banner from '../../components/Banner'

export default function Home() {
    return(
        <React.Fragment>
            <Header />
            <Banner src="images/bannerHome.png" text="Chez vous, partout, et ailleurs"/>
            <div className='container_cards'>
                <LogementCard />
            </div>
            <Footer />
        </React.Fragment>
    )
    
}