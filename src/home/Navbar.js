import React from 'react';
import { Button, Drawer, Radio, Space } from 'antd';

const NavBar = (props) => {
    const { setOpenNav, openNav } = props;
    const onCloseNev = () => {
        setOpenNav(false);
    }


    return (
        <>
            <Drawer
                title="Welcome"
                headerStyle={{ color: "#fb5f21",height:"20%"}}
                style={{ width: "60%"}}
                open={openNav}
                bodyStyle={{ backgroundColor: "#dfd2c9",padding:"140px 25px 25px 50px", fontSize:"20px",fontWeight:"15px",height:"60%"}}
                placement={"left"}
                closeIcon={null}
                onClose={onCloseNev}
                footer={"About Us"}
                footerStyle={{ color: "#fb5f21",height:"10%"}}
            >
                <ul >
                    <li><a >Sign In</a></li>
                    <li> <a >Log In</a></li>
                    <li><a >Contact</a></li>
                </ul>
            </Drawer>
        </>
    );
}
export default NavBar;