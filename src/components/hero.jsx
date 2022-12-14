import hero from '../images/hero.png';
import arrow from '../images/arrow.svg';
import customer1 from '../images/customer-1.svg';
import customer2 from '../images/customer-2.svg';
import customer3 from '../images/customer-3.svg';
import customer4 from '../images/customer-4.svg';
import customer5 from '../images/customer-5.svg';
import customer6 from '../images/customer-6.svg';


export const Hero = () =>{
    return(
        <div className="hero">
            <div className='hero-text'>
                <h1>
                    Zdrowy i pyszny posiłek pod Twoimi drzwiami, każdego dnia!   
                </h1>
                <p>
                    Subskrypcja, trwająca przez cały rok, która pomoże Ci wrócić do zdrowego odżywiania. Dostosowana do Twoich indywidualnych preferencji i zapotrzebowania na jedzenie.
                </p>
                <div className='hero-btns'>
                    <button className='btn-special'>Zacznij jeść zdrowo</button>
                    <button className='btn-special-2'>Więcej <img src={arrow} alt="" /> </button>
                </div>
                <div className='hero-info'>
                    <div className='customers'>
                    <img src={customer1} alt="customer" />
                    <img src={customer2} alt="customer" />
                    <img src={customer3} alt="customer" />
                    <img src={customer4} alt="customer" />
                    <img src={customer5} alt="customer" />
                    <img src={customer6} alt="customer" />
                    </div>
                    <div className='info'>
                        <p>250,000+ </p>
                        <p>realizacji w ubiegłym roku!</p>
                    </div>
                </div>
            </div>
            <img src={hero} alt="hero-img" />
        </div>
    )
}