import React from "react";
import { useLocation } from "react-router-dom";

const Categoriesweb = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <>
            <div style={{ height: "auto", width: "400px", margin: "8% 0% 0% 50%", backgroundColor: "#f97a44", padding: "10px", borderRadius: "15px"}}>
                <div style={{ textAlign: "center" }}><label style={{ color: "white", fontSize: "30px" }}><b>{state?.record?.Data?.strCategory}</b></label></div>
                <div style={{ margin: "25px 0% 0% 0%",textAlign: "center"}}>
                  <span> <img style={{ width: "180px",borderRadius:"20px"}} src={state?.record?.Data?.strCategoryThumb}></img></span> 
                 
                </div>
                <div style={{ margin: "0px 0% 0% 0%", display:"flex",justifyContent: "space-between"}}>
                    <label style={{color:"white",textAlign: "center"}}>                    {state?.record?.Data?.strCategoryDescription}
                    </label>

                </div>
            </div>


        </>
    )
}
export default Categoriesweb;