import '../index.css';
import techcrunch from '../images/techcrunch.svg'
import business from '../images/business-insider.svg'
import nyt from '../images/nyt.svg'
import forbes from '../images/forbes.svg'
import usatoday from '../images/usa-today.svg'

export const Socialproof = () =>{
    return(
        <div className='socialproof'>
            <p>
                ZAUFALI NAM
            </p>
            <div className='brands'>
                <img src={techcrunch} alt="" />
                <img src={business} alt="" />
                <img src={nyt} alt="" />
                <img src={forbes} alt="" />
                <img src={usatoday} alt="" />
            </div>
        </div>
    )
}