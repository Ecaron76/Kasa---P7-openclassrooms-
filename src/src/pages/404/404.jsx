import  React from 'react'
import {Link} from 'react-router-dom'
import '../../style/404/404.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
export default function Error404() {
    return (
        <React.Fragment>
        <Header />
            <main>
                <div className='error-container'>
                    <div>
                        <h1 className='title404'>404</h1>
                        <p>Oups! La page que vous demandez n'éxiste pas.</p>
                    </div>
                    <Link to='/' className='homeReturn'>Retourner sur la page d'accueil</Link>
                </div>
            </main>
        <Footer />
        </React.Fragment>
    )
    
}