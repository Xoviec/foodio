import { TutorialStep } from "./tutorialStep"

export const Tutorial = () =>{
    return(
        <div>
            <TutorialStep number='01' stepName='Powiedz nam co lubisz (a czego nie)'></TutorialStep>
            <TutorialStep number='02' stepName='Zatwierdź plan'></TutorialStep>
            <TutorialStep number='03' stepName='Odbierz posiłki jak i gdzie chcesz'></TutorialStep>
        </div>
    )
}