import React, { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons'
import NavBar from './Navbar';
import SignUpModal from './SignIn';
import { useNavigate } from 'react-router-dom';
import LogInModal from './LogIn';

const Homepage = () => {
    const navigate=useNavigate();
    const [openNav, setOpenNav] = useState(false);
    const [signup, setSignup] = useState(true);
    const onIconClick = () => {
        setOpenNav(true);
    }
    const onSignIn = () => {
        // navigate('/sign-up')
        setSignup(true);
    }
    const onlogin = () => {
        // navigate('/log-in')
        setSignup(false);
    }
    return (
        <>
            <header className="body">
                <div style={{ display: "flex", justifyContent: "space-between", }}>
                    <button style={{ margin: "15px 0px 0px 19px", height: "30px", backgroundColor: "transparent", border: "none" }} onClick={onIconClick} ><MenuOutlined style={{
                        fontSize: "30px"
                    }} /></button>
                    <ul >
                        <li><button className='ui-li'>Contact</button></li>
                        <li><button className='ui-li'>About Us</button></li>
                        {signup === true && <li> <button className='ui-li' onClick={onlogin}>Log In</button></li>
                        }{signup === false && <li><button className='ui-li' onClick={onSignIn} >Sign In</button></li>
                        }                </ul>
                </div>
                {signup == true && <SignUpModal />}
                {signup === false && <LogInModal />}
                {openNav == true && <NavBar setOpenNav={setOpenNav} openNav={openNav} />}

            </header>

        </>
    );
}
export default Homepage;