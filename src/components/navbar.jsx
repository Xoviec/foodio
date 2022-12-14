import '../index.css';
import logo from '../images/logo.png';


export const Navbar = () =>{

    return(
        <div className='navbar'>
            <div className="nav-logo-side">
                <img src={logo} className='foodio-logo' alt="Foodio" />
            </div>
            <div className="nav-buttons-side">
            <button>Jak to działa</button>
            <button>Dania</button>
            <button>Referencje</button>
            <button>Cennik</button>
            <button className='btn-special'>Spróbuj</button>
            </div>
        </div>
    )
}