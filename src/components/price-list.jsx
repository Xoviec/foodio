
import check from '../images/check.svg'

export const PriceList = () =>{

    return(

        <div>
            <div>

            </div>
            <div className="price-list-cards">
                <div className="price-list-card card-starter">
                    <p className="card-name">Starter</p>
                    <div className="pricing">
                        <p className='currency'>pln</p>
                        <p className='value'>400</p>

                    </div>
                    <p className="per">/miesiąc. To tylko 13pln za posiłek!</p>
                    <div>
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

                </div>
            </div>
        </div>
    )
}