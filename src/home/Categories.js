import { HeartOutlined } from "@ant-design/icons";
import { Checkbox, Flex } from "antd";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFavFood } from "../Store/favoriteSlice";
const Categoriesweb = () => {
    const { state } = useLocation();
    const dispatch = useDispatch();
    const [meal, setmeal] = useState([]);
    const [favitem, setfavitem] = useState([]);

    const [selectedProducts, setselectedProducts] = useState([]);
    // const favProductItem = useSelector((state) => state.favpProduct);
    let userDataaa = [];

    useEffect(() => {
        fetchText();
        userDataaa = JSON.parse(localStorage.getItem('mealinfo'));
        setfavitem(userDataaa);
    }, []);
    console.log("favitem--<", favitem);
    async function fetchText() {
        const datafood = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${state?.record?.Data?.strCategory}`;
        let response = await fetch(datafood);
        let data = await response.json();
        setmeal(data?.meals);
    }

    const onHaldleCheck = (item) => {
        dispatch(addFavFood(item));
        let index = selectedProducts.findIndex(p => p.idMeal === item.idMeal);
        if (index === -1) {
            selectedProducts.push(item);
        }
        localStorage.setItem('mealinfo', JSON.stringify(selectedProducts));

    }
    return (
        <>
            <div style={{ margin: "-6% 0% 0% 0%" }}>
                <div style={{ height: "auto", width: "96%", margin: "8% 0% 0% 1%", backgroundColor: "#f9660591", padding: "10px", borderRadius: "15px" }}>

                    <div style={{ margin: "20px 0% 0% 0%", textAlign: "center", display: "flex", justifyContent: "space-between" }}>
                        <span>
                            <img style={{ width: "160px", borderRadius: "20px" }} src={state?.record?.Data?.strCategoryThumb}></img>
                        </span>

                        <div style={{ marginTop: "-30px" }}>
                            <div>
                                <label style={{ color: "white", fontSize: "30px" }}>
                                    <b>{state?.record?.Data?.strCategory}</b>
                                </label>
                            </div>
                            <div style={{ marginTop: "7px" }}>
                                <label style={{ color: "white", textAlign: "center", }}>
                                    {state?.record?.Data?.strCategoryDescription}
                                </label>
                            </div>
                        </div>
                    </div>


                </div>
                {meal.map((item) => {
                    return (<div style={{ height: "auto", width: "700px", margin: "25px 0% 0% 39%", backgroundColor: "#f9660591", padding: "10px", display: "flex", justifyContent: "space-between", }}>
                        <div style={{ margin: "5px", width: "0px" }} className="center"> <img style={{ width: "70px", borderRadius: "15px" }} src={item?.strMealThumb}></img></div>
                        <div style={{ textAlign: "left", left: "0px" }}><label style={{ fontSize: "24px", fontFamily: "cursive", }}>{item?.strMeal}</label></div>
                        {console.log(selectedProducts)}
                        <div style={{ marginRight: "3px" }}><Checkbox checked={favitem.idMeal} onChange={() => { onHaldleCheck(item) }} /></div>

                    </div>)
                })

                }
            </div>
        </>
    )
}
export default Categoriesweb;