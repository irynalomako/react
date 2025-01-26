import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li> <Link to={'/'}>Home</Link></li>
                <li> <Link to={'users'}>UserPage</Link></li>
                <li> <Link to={'posts'}>PostPage</Link></li>
            </ul>
        </div>

    );
};
export default Menu