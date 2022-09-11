import { Link } from "react-router-dom";

const NavMenu = () => (
    <nav>
        <ul>
            <li>
                <Link to={'/'}>Accueil</Link>
            </li>
            <li>
                <Link to={'/person'}>Personnes</Link>
            </li>
            <ul>
                <li>
                    <Link to={'/person/add'}>Ajouter une personne</Link>
                </li>
            </ul>

        </ul>
    </nav>
);

export default NavMenu;