import { DishCard } from "./dishCard"
import tortilla from '../images/tortilla.svg'
import avocadosalad from '../images/awokado-salatka.svg'
import check from '../images/check.svg'
import arrow from '../images/arrow.svg'

export const Dishes = () =>{

    return(
        <div className="dishes">
            <p className="section-name">DANIA</p>
            <p className="section-info">FOODio AI wybiera z  10000+ przepisów</p>
            <div className="dishes-container">
                <DishCard img={tortilla} name='Tortilla z kurczakiem' kcal='781' health='100' rating='4.9'></DishCard>
                <DishCard img={avocadosalad} name='Sałatka z Awokado' kcal='411' health='100' rating='4.7'></DishCard>
                <div className="info-card">
                    <p className='diet-info'>Działa z każdą dietą:</p>
                    <ul>
                        <li>
                            <img src={check} alt="check" width='18.75px' height='auto'/>
                            <p>Wegetariańską</p>
                        </li>
                        <li>
                            <img src={check} alt="check" width='18.75px' height='auto'/>
                            <p>Wegańską</p>
                        </li>
                        <li>
                            <img src={check} alt="check" width='18.75px' height='auto'/>
                            <p>Gluten-free</p>
                        </li>
                        <li>
                            <img src={check} alt="check" width='18.75px' height='auto'/>
                            <p>Lactose-free</p>
                        </li>
                        <li>
                            <img src={check} alt="check" width='18.75px' height='auto'/>
                            <p>Keto</p>
                        </li>
                        <li>
                            <img src={check} alt="check" width='18.75px' height='auto'/>
                            <p>Paleo</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="dishes-footer">
                <p>
                    Zobacz wszystkie przepisy
                </p>
                <img src={arrow} alt="" />
            </div>
        </div>
    )
}