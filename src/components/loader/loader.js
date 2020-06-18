import React from "react";
import "./loader-style.css"
//loader - rainbow animation
const Loader = () => {
    return(
        <div className="loader">
            <div className="loader-inner">
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
                <div className="loader-line-wrap">
                    <div className="loader-line"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader