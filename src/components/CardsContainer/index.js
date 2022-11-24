import { Card } from './Card';
import './cardsContainer.css';


import DotNetLogo from '../../assets/techs/NET_Core_Logo.svg';
import ReactLogo from '../../assets/techs/React-icon.svg';
import LaravelLogo from '../../assets/techs/Laravel.svg';
import VueJS_Logo from '../../assets/techs/VueJS.svg';

export function CardsContainer() {
    return(
        <div className="techs">
            <h2>Tecnologias </h2>
            <main className="cards-container">
                <Card image={DotNetLogo} alt="DotNet Core" />
                <Card image={ReactLogo} alt="React" />
                <Card image={LaravelLogo} alt="Laravel" />
                <Card image={VueJS_Logo} alt="Vue JS" />
            </main>
        </div>
    )
}