import Menu from "../menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
        <Menu/>
        <hr/>
        <Outlet/>
        </>
    );
};
export default MainLayout;