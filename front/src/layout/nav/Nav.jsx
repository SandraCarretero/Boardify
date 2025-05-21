import { BackgroundGradient, NavBar, NavItem } from './nav.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faPlus,
  faChartSimple,
  faUser
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <BackgroundGradient>
      <NavBar>
        <NavItem to="/" end>
          <div>
            <FontAwesomeIcon icon={faHome} />
          </div>
        </NavItem>
        <NavItem to="/search">
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </NavItem>
        <NavItem to="/añadir" className="plus">
          <div>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </NavItem>
        <NavItem to="/stats">
          <div>
            <FontAwesomeIcon icon={faChartSimple} />
          </div>
        </NavItem>
        <NavItem to="/profile">
          <div>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </NavItem>
      </NavBar>
    </BackgroundGradient>
  );
};

export default Nav;
