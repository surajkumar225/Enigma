import { useState } from 'react';
import Header  from '../components/Header';
import  SideBar from '../components/Sidebar';

const Main = () => {

    const [openDrawer, setOpenDrawer] = useState(true);

    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
    
    return (
        <>
            <Header toggleDrawer={toggleDrawer} />
            <SideBar toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
            
        </>
    )
}

export default Main;
