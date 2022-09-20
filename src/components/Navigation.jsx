import { NavLink } from 'react-router-dom';

const Navigation = ({to, children}) => {
    return (
        <li><NavLink className={({ isActive }) => isActive ? 'on' : undefined} to={to}>{children}</NavLink></li>
    );
};

export default Navigation;