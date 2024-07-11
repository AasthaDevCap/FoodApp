import { Checkbox } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomeDatapage = () => {
    
    return (
        <>
          <div style={{ height: "370px", width: "350px", margin: "8% 0% 0% 52%", padding: "10px", borderRadius: "15px" }}>
                <div className='css-app'>
                    <a style={{ color: "#fb5f21", fontSize: "30px",fontStyle:"italic"}} href='/main'><b>Home Page</b></a>
                </div>
                <div className='css-app'>
                    <a style={{ color: "#fb5f21", fontSize: "30px",fontStyle:"italic"}} href='/menu'><b>Menu</b></a>
                </div>
                <div className='css-app'>
                <a style={{ color: "#fb5f21", fontSize: "30px", fontStyle:"italic"}} href='/favorite'><b>Favorites</b></a>
                </div>
                <div className='css-app'>
                <a style={{ color: "#fb5f21", fontSize: "30px",fontStyle:"italic" }} href='/random'><b>Random Meal</b></a>
                </div>
                <div className='css-app'>
                <a style={{ color: "#fb5f21", fontSize: "30px",fontStyle:"italic" }} href='/about'><b>About Us</b></a>
                </div>
                
            </div>
        </>
    );
}
export default HomeDatapage;