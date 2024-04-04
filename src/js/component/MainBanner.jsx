import React from "react";

const MainBanner = () => {
    return (
       <div className="px-3">
            <div className="container bg-grey-custom mt-4 mb-4 rounded px-md-4 px-3 pb-md-4 pb-4">
                <div>
                    <h1 className="main-title pt-md-5 pt-4">A Warm Welocome!</h1>
                </div>
                <div>
                    <p className="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga doloremque soluta ut repudiandae nihil dolorem, porro quas maxime sunt labore rerum at tempore assumenda, similique repellendus aliquid praesentium magnam sit.</p>
                </div>
                <div className="pb-md-3 pb-0">
                    <button className="btn btn-primary fs-5">Call to action!</button>
                </div>
            </div>
       </div> 
    )
}

export default MainBanner;