import '../index.css';
import phone1 from '../images/phone1.svg'

export const TutorialStep = (props) =>{
    return(
        <div className='tutorial-step'>
            <div className="tutorial-info">
                <h1>{props.number}</h1>
                <h2>
                {props.stepName}
                </h2>
                <p>
                Lorem ipsum dolor sit amet consectetur. Porta amet sed morbi molestie ipsum. Tortor morbi leo interdum facilisis. Vulputate varius lectus ornare pellentesque ullamcorper in dui sit. Cum enim ipsum ridiculus sed purus.
                </p>
            </div>
            <div className='tutorial-img'>
                <img src={phone1} alt="" />
            </div>

        </div>
    )
}