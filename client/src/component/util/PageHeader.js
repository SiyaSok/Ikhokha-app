import React from 'react';
import { useLocation } from 'react-router-dom'


const PageHeader = ({ heading, subText }) => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/")

    return (
        <div id="PageHeader" className="row">
            <div className=" mb-4 Header text-white bg-pre-color ">
                <div className={splitLocation[1] === "blogs" && splitLocation.length === 3 ? "col-md-8 mx-auto text-center  px-0" : "col-md-6 mx-auto text-center  px-0"}>
                    <h1 className={splitLocation[1] === "blogs" && splitLocation.length === 3 ? "display-6 fst-italic" : "display-5 fst-italic"}>{heading} </h1>
                    {subText ?
                        <p className="text-white text-center ">{subText}</p> : <p className="text-white text-center ">&nbsp;</p>
                    }
                </div>
            </div>
        </div>
    );
}

export default PageHeader;