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
        <div className="w-full h-[344px] mt-10 box-border overflow-hidden">
            <div className="w-full h-[32px] flex justify-between mb-5">
                <h1 className="m-0 text-2xl font-bold">{title}</h1>
                <div className="w-[145px] flex items-center justify-end">
                    <h4 className="m-0 font-bold mr-4">SEE ALL</h4>
                    <img className="w-[24px] h-[24px] cursor-pointer mr-[8px]" src="./buttons/leftButton.png" alt="Left Button" onClick={goToPrev} />
                    <img className="w-[24px] h-[24px] cursor-pointer" src="./buttons/rightButton.png" alt="Right Button" onClick={goToNext} />
                </div>
            </div>
            
            <Slider ref={sliderRef} {...settings} className={css.containerSlider}>
                {itemsData.map((item, index) => (
                    <div key={index} className="h-full w-[250px] box-border flex-shrink-0">
                        <div className="h-[150px] w-[250px] relative">
                            <img  className="h-full rounded-t-sm m-0" src={item.imgSrc} alt={`Image ${item.title}`} />
                            <div className="w-[100px] h-[34px] rounded-sm p-2.5 bg-black absolute top-2.5 right-2.5 z-20 box-border flex items-center">
                                <img className="w-[12px] h-[11px] mr-2" src="./imageItem/iconLove.png" alt="icon love"/>
                                <p className="m-0 text-xs font-bold text-white">LÄGG TILL</p>
                            </div>
                        </div>
                        <div className="h-[142px] w-[250px] m-0 rounded-b-sm bg-white pt-2">
                            <div className="flex h-[22px] px-3">
                                {tags.map((tag, tagIndex) => (
                                    <div key={tagIndex} className="rounded-full border border-black p-1.5 px-2 flex justify-center items-center mr-2 font-medium">
                                        {tag}
                                    </div>
                                ))}
                            </div>
                            <div className="px-3 my-2 text-sm font-bold">{item.title}</div>
                            <div className="h-[16px] px-3 mb-2 text-xs font-medium">{item.description}</div>
                            <div className="h-[22px] flex items-center justify-between px-3">
                                <div className="w-[104px] h-[16px] text-xs font-normal flex items-center">{item.location}</div>
                                <div className="w-[64px] h-[22px] rounded-sm p-1.5 px-1.5 bg-[#FAEBE3] text-xs font-medium flex justify-center items-center">{item.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default OtherSlider;
