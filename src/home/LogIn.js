import { Checkbox } from 'antd';
import React from 'react';
import Homepage from './homepage';

const LogInModal = () => {

    return (
        <>
            <div style={{height:"350px", width:"350px",margin:"8% 0% 0% 52%",backgroundColor:"#f9660591",padding:"10px",borderRadius:"15px"}}>
               <div ><label style={{ color: "white", fontSize: "30px", marginLeft:"88px"}}><b>Register Here</b></label></div> 
                <div style={{margin:"35px 0% 0% 0%",display:"flex",justifyContent:"space-between",marginRight:"40px"}}>
                <label style={{color:"white",fontSize: "15px"}}><b>E-Mail</b></label>
                <input style={{border:"none",borderRadius:"7px"}}/>
                </div>
                <div style={{margin:"35px 0% 0% 0%",display:"flex",justifyContent:"space-between",marginRight:"40px"}}>
                <label style={{color:"white",fontSize: "15px"}}><b>Password</b></label>
                <input style={{border:"none",borderRadius:"7px"}}/>
                </div>
                <div style={{margin:"35px 0% 0% 0%",display:"flex",justifyContent:"space-between",marginRight:"40px"}}>
                    <span>
                    <label style={{color:"white",fontSize: "10px"}}><b>Remember Me</b></label><Checkbox style={{marginLeft:"4px"}}></Checkbox>
                    </span>
               
                <a style={{color:"white",fontSize: "10px"}}><b>Forget Password</b></a>
                </div>
                <div style={{margin:"35px 0% 0% 0%"}}>
                <button style={{backgroundColor:"white",border:"none", color:"#fb5f21",height:"30px",width:"110px",borderRadius:"7px",marginLeft:"135px"}}>Log In</button>
                </div>
            </div>


        </>
    );
}
export default LogInModal;