// import tortilla from '../images/tortilla.svg'
import kcalIcon from '../images/Vector.svg'
import heartIcon from '../images/Union.svg'
import starIcon from '../images/Star.svg'


export const DishCard = (props) =>{

    return(
        <div className="dish-card">
            <img src={props.img} alt="" />
            <p className='dish-name'>{props.name}</p>
            <div className='dish-property'>
                Normal
            </div>
            <div className='container'>
                <div className='sections'>
                    <img src={kcalIcon} alt="" />
                    <p className='p p-mid'>kalorie</p>
                    <p className='p p-last'>{props.kcal} kcal</p>
                </div>
                <div className='sections'>
                    <img src={kcalIcon} alt="" />
                    <p className='p p-mid'>zdrowie</p>
                    <p className='p p-last'>{props.health}/100</p>
                </div>
                <div className='sections'>
                    <img src={kcalIcon} alt="" />
                    <p className='p p-mid'>ocena</p>
                    <p className='p p-last'>{props.rating}/5.0</p>
                </div>
  
            </div>
            
        </div>
    )
}