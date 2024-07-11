import React from 'react';
import Homepage from './homepage';

const SignUpModal = () => {

    return (
        <>
            <div style={{ height: "370px", width: "350px", margin: "8% 0% 0% 52%", backgroundColor: "#f9660591", padding: "10px", borderRadius: "15px" }}>
                <div ><label style={{color: "white", fontSize: "30px", marginLeft:"88px" }}><b>Register Here</b></label></div>
                <div className='css-app'>
                    <label style={{ color: "white", fontSize: "15px", }}><b>Name</b></label>
                    <input style={{ border: "none", borderRadius: "7px" }} />
                </div>
                <div className='css-app'>
                    <label style={{ color: "white", fontSize: "15px" }}><b>User Name</b></label>
                    <input style={{ border: "none", borderRadius: "7px" }} />
                </div>
                <div className='css-app'>
                    <label style={{ color: "white", fontSize: "15px" }}><b>E-Mail</b></label>
                    <input style={{ border: "none", borderRadius: "7px" }} />
                </div>
                <div className='css-app'>
                    <label style={{ color: "white", fontSize: "15px" }}><b>Password</b></label>
                    <input style={{ border: "none", borderRadius: "7px" }} />
                </div>
                <div style={{ margin: "35px 0% 0% 0%", }}>
                    <button style={{ backgroundColor: "white", border: "none", color: "#fb5f21", height: "30px", width: "80px", borderRadius: "7px",marginLeft:"135px" }}>Register</button>
                </div>
            </div>


        </>
    );
}
export default SignUpModal;