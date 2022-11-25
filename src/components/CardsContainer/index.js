import { Card } from './Card';
import './cardsContainer.css';


import DotNetLogo from '../../assets/techs/NET_Core_Logo.svg';
import ReactLogo from '../../assets/techs/React-icon.svg';
import LaravelLogo from '../../assets/techs/Laravel.svg';
import VueJS_Logo from '../../assets/techs/VueJS.svg';
import Javascript from '../../assets/techs/Javascript.svg';
import DockerLogo from '../../assets/techs/DockerLogo.svg';

export function CardsContainer() {
    return(
        <div className="techs">
            <h2>Tecnologias </h2>
            <main className="cards-container">
                <Card image={DotNetLogo} alt="DotNet Core" />
                <Card image={ReactLogo} alt="React" />
                <Card image={LaravelLogo} alt="Laravel" />
                <Card image={VueJS_Logo} alt="Vue JS" />
                <Card image={Javascript} alt="Javascript" />
                <Card image={DockerLogo} alt="Docker"  />
            </main>
        </div>
    )
}