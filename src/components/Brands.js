import React from "react";
import css from "../styles/Brands.module.css"

function Brands() {
    return (
        <div className={css.container}>
            <img style={{width: "300px", height: "21px"}} src="./brands/Svenkts.png" alt="Swenkts"/>
            <img style={{width: "137px", height: "120px"}} src="./brands/YasuragiLogo.png" alt="YasuragiLogo"/>
            <img style={{width: "163px", height: "19px"}} src="./brands/Marimekko.png" alt="Marimekko"/>
            <img style={{width: "120px", height: "61px"}} src="./brands/Louis.png" alt="Louis"/>
            <img style={{width: "173px", height: "22px"}} src="./brands/Global.png" alt="Global"/>

        </div>
    )
}

export default Brands