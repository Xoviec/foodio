
import check from '../images/check.svg'

export const PriceList = () =>{

    return(

        <div className='pricing'>
                <div className='pricing-header'>
                    <p className='pricing-header-p'>CENNIK</p>
                    <span className='pricing-desc'>Dobre jedzenie bez rozbijania banku</span>
                </div>

            <div className="price-list-cards">
                <div className="price-list-card card-starter">
                    <p className="card-name">STARTER</p>
                    <div className="pricing">
                        <span className='currency'>pln </span>
                        <span className='value'>400</span>

                    </div>
                    <p className="per">/miesiąc. To tylko 13pln za posiłek!</p>
                    <div className='list'>
                        <div className="card-sections">
                            <img src={check} alt="" />
                            <p>1 posiłek na dzień</p>
                        </div>
                        <div className="card-sections">
                            <img src={check} alt="" />
                            <p>Zamówienia 11:00 - 21:00</p>
                        </div>
                        <div className="card-sections">
                            <img src={check} alt="" />
                            <p>Darmowa dostawa</p>
                        </div>
                        <div className="card-sections">
                            <img src={check} alt="" />
                            <p></p>
                        </div>
                    </div>

                    <button>Zacznij jeść zdrowo</button>
                </div>
                <div className="price-list-card card-full">
                    <div className='relative'>
                        <div className='stripe'>
                            <p>
                            BESTSELLER

                            </p>
                        </div>
                    </div>
                    <p className="card-name">FULL</p>
                        <div className="pricing">
                            <span className='currency'>pln </span>
                            <span className='value'>649</span>
                        </div>
                        <p className="per">/miesiąc. To tylko 11pln za posiłek!</p>
                        <div className='list'>
                            <div className="card-sections">
                                <img src={check} alt="" />
                                <p>2 posiłki na dzień</p>
                            </div>
                            <div className="card-sections">
                                <img src={check} alt="" />
                                <p>Zamówienia 24/7</p>
                            </div>
                            <div className="card-sections">
                                <img src={check} alt="" />
                                <p>Darmowa dostawa</p>
                            </div>
                            <div className="card-sections">
                                <img src={check} alt="" />
                                <p>Dostęp do najnowszych przepisów</p>
                            </div>
                        </div>

                        <button>Zacznij jeść zdrowo</button>
                </div>
            </div>
            <div className='pricing-footer'>
            Ceny zawierają  podatki. Możesz anulować w dowolnym momencie.
            </div>
        </div>
    )
}