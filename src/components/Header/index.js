import { SocialLink } from "./SocialLink";
import './header.css';

export  function Header() {
    return(
        <header>
            <h1>Fabrício Damasceno</h1>

            <nav>
                <SocialLink 
                    url="https://github.com/fabriciodamasceno" 
                    icon="fa-brands fa-github" />                
                <SocialLink 
                    url="https://www.linkedin.com/in/fabriciodamasceno" 
                    icon="fa-brands fa-linkedin" />
            </nav>
        </header>
    )
}