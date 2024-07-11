import React, { useEffect, useState } from "react";
import { map } from "lodash";
import { useNavigate } from "react-router-dom";

const MenuWeb = () => {
    const navigate = useNavigate();
    const [categoriesResponse, setcategoriesResponse] = useState([])
    useEffect(() => {
        fetchText();
    }, []);
    const datafood = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    async function fetchText() {
        let response = await fetch(datafood);
        let data = await response.json();
        setcategoriesResponse(data?.categories);
    }
    const onCategorieClick = (item) => {
        navigate('/Categories', {
            state: {
                record: {
                    Data: item,
                    categoriesResponse: categoriesResponse,
                }
            }
        })
    }
    return (
        <>
            <h1 style={{ margin: "70px 0px 0px 750px", fontSize: "45px", color: "#ff692d" }}>Menu</h1>
            {categoriesResponse.map((item) => {
                return (<button className="btn-cat" 
                    onClick={(() => onCategorieClick(item))}
                    >{item?.strCategory}</button>)


            })}

        </>
    )
}
export default MenuWeb;