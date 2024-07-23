import { Checkbox } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { map } from "lodash";
const FavoritesWeb = () => {
    const dispatch = useDispatch();
    const dataOfFav = useSelector((state) => state.favpProduct);
    console.log("dataOfFav-->", dataOfFav);
    const [mealData, setmealData] = React.useState([]);
    let userDataaa = [];
    useEffect(() => {
        userDataaa = JSON.parse(localStorage.getItem('mealinfo'));
        setmealData(userDataaa)
    }, []);
    return (
        <>
            <h1>FavoritesWeb</h1>
            {mealData.map((item) => {
                console.log(item,"item");
                return (<div style={{ height: "auto", width: "700px", margin: "25px 0% 0% 39%", backgroundColor: "#f9660591", padding: "10px", display: "flex", justifyContent: "space-between", }}>
                    <div style={{ margin: "5px" }} className="center"> <img style={{ width: "70px", borderRadius: "15px" }} src={item?.strMealThumb}></img></div>
                    <div style={{ marginTop: "18px", margin: "5px" }}><label style={{ fontSize: "24px", fontFamily: "cursive", marginRight: "380px", textAlign: "left" }}>{item.strMeal}</label></div>
                    {/* <div style={{ marginRight: "3px" }}><HeartOutlined  /></div> */}
                    <div style={{ marginRight: "3px" }}><Checkbox checked={item.idMeal} onChange={() => { onHaldleCheck(item?.idMeal) }} /></div>

                </div>
                )
            })}

        </>
    )
}
//
export default FavoritesWeb;