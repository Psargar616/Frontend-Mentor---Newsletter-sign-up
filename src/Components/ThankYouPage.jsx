import React from "react";
import Icon from "../assets/images/icon-success.svg";
const ThankYouPage = ({closePage}) => {

    const handleBtnClick = ( ) => {
        closePage();
    }
  return (
    <>
      {/* container */}
      <div className="max-w-[375px] h-[400px] bg-white rounded-3xl">
        {/* wrapper */}
        <div className="p-8 space-y-6">
          {/* content */}
          <img src={Icon}></img>
          <h1 className="text-4xl font-roboto font-bold text-[#242742]">
            Thanks for subscribing!
          </h1>
          <p className="font-normal text-xs leading-4 text-[#242742] font-roboto">
            A confirmation email has been sent to
            <span className="font-bold"> ash@loremcompany.com</span> . Please
            open it and click the button inside to confirm your subscription.
          </p>
          <button
          onClick={handleBtnClick}
            className="py-4 px-6 w-full border-0 rounded-md text-white bg-[#242742] cursor-pointer font-roboto font-bold hover:bg-gradient-to-l
                  hover:from-pink-500 hover:to-[#ff6257]
                  "
          >
            Dismiss message
          </button>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
