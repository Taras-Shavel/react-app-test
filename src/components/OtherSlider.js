import React from "react";
import css from "../styles/Slider.module.css";
import Slider from "react-slick";
import itemsData from "../data/otherSlider.json"

function OtherSlider({title, tags}) {
    const sliderRef = React.useRef(null);

    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };


    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className={css.container}>
            <div className={css.titleBlock}>
                <h1>{title}</h1>
                <div className={css.containerButtons}>
                    <h4>SEE ALL</h4>
                    <img style={{marginRight: "8px"}} src="./buttons/leftButton.png" alt="Left Button" onClick={goToPrev} />
                    <img src="./buttons/rightButton.png" alt="Right Button" onClick={goToNext} />
                </div>
            </div>
            
            <Slider ref={sliderRef} {...settings} className={css.containerSlider}>
                {itemsData.map((item, index) => (
                    <div key={index} className={css.item}>
                        <div className={css.blockImg}>
                            <img src={item.imgSrc} alt={`Image ${item.title}`} />
                            <div className={css.selectedItem}>
                                <img src="./imageItem/iconLove.png" alt="icon love"/>
                                <p>LÄGG TILL</p>
                            </div>
                        </div>
                        <div className={css.itemDescription}>
                            <div className={css.containerTags}>
                                {tags.map((tag, tagIndex) => (
                                    <div key={tagIndex} className={css.tag}>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <div className={css.title}>{item.title}</div>
                            <div className={css.description}>{item.description}</div>
                            <div className={css.lastBlock}>
                                <div className={css.location}>{item.location}</div>
                                <div className={css.price}>{item.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default OtherSlider;
