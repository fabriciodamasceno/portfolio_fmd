import photo from '../../assets/foto.png';
import './profile.css';

export function Profile() {
    return(
        <figure>
            <img src={photo} width="200px" alt="Foto Fabrício Damasceno" />
            <figcaption>Fabrício Damasceno</figcaption>
        </figure>
    )
}