import Nav from './Nav';
import { connect } from 'react-redux';
import { changeLink } from './../../redux/navbarReducer';

let mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends,
        links: state.navbar.links,
        activeLink: state.navbar.activeLink
    }
}

const NavContainer = connect(mapStateToProps, {changeLink}) (Nav);

export default NavContainer;