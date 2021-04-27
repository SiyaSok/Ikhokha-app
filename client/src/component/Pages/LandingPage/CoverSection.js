import React from 'react';


const CoverSection = () => {
    return (
        <div className="container-fluid Landing-page">
            <div className=" welcomeContent ">
                <div className="row ">
                    <div className=" col-md-6 col-12 WelcomeCopy">
                        <h1 className="">Start new... Today!</h1>
                        <p>Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <img className="img-fluid mx-lg-5" src="/images/ikhokha-img_1.png" alt="Hello" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CoverSection;

