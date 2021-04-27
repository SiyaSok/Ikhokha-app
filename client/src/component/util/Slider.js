import React from 'react';
import Carousel from 'react-elastic-carousel';


const Slider = ({ sliders }) => {

    const breakPoints = [
        { width: 1, itemsToShow: 1, showArrows: false },
        {
            width: 450,
            itemsToShow: 5,
            itemsToScroll: 2,
            pagination: false,
            showArrows: false
        },
        { width: 768, itemsToShow: 5, pagination: false, showArrows: false },
        { width: 1200, itemsToShow: 5, pagination: false, showArrows: false }
    ];




    const logos = sliders.slice(0, 5);

    return (



        <div id="brands" className=" brands p-5 ">
            <div className="container-xl">
                <div className="logo">
                    <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2000} easing="cubic-bezier(1,.15,.55,1.54)"
                        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                        transitionMs={700}>
                        {logos.map(logo => <div className="brand-logo" key={logo._id}>
                            <img className="img-fluid" src={logo.brand} alt={logo.productName} />

                        </div>)}
                    </Carousel>

                </div>
            </div>
        </div>


    );
}

export default Slider;