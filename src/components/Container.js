import React from "react";
import css from "../styles/Container.module.css"
import Brands from "./Brands";
import Accordion from "./Accordion";
import SpaSlider from "./SpaSlider";
import OtherSlider from "./OtherSlider";


function Container() {
    return (
        <div className={css.container}>
            <Brands/>
            <Accordion/>
            <SpaSlider title={"SPA"} tags={["Spa", "Hotell"]}/>
            <OtherSlider title={"KITCHEN"} tags={["kitchen"]}/>
            <OtherSlider title={"INTERIOR DESIGN"} tags={["Interior design"]}/>
            <OtherSlider title={"GIFTCARDS"} tags={["Giftcard"]}/>
            <OtherSlider title={"OTHER"} tags={["Spa", "Hotell"]}/>
        </div>
    )
}
export default Container