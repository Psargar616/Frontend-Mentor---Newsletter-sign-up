import React, { useState } from "react";
import mainImg from "../assets/images/illustration-sign-up-desktop.svg";
import iconList from "../assets/images/icon-list.svg";
import ThankYouPage from "./ThankYouPage";
import mobile from "../assets/images/illustration-sign-up-mobile.svg"
const NewsLetter = () => {
  const mailformat =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [showThankYouPage, setShowThankYouPage] = useState(false);
  const handleEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setValidEmail(mailformat.test(inputEmail) || inputEmail === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validEmail) {
      console.log("Sumbit Succcess!!!");
      setShowThankYouPage(true);
    } else {
      console.log("Error");
    }
  };

  const handleBtnClick = () => {
    setShowThankYouPage(false);
    setEmail("");
  };

  return showThankYouPage ? (
    <ThankYouPage closePage={handleBtnClick} />
  ) : (
    <>
      {/* container */}
      <div className=" max-w-3xl ">
        {/* wrapper */}
        <div className="flex bg-white rounded-2xl min-[375px]:flex-col-reverse min-[425px]:flex-col-reverse md:flex-row">
          {/* left div info*/}
          <div className=" p-8 flex justify-center ">
            {/* content div */}
            <div className="flex flex-col justify-around items-start mt-4 ">
              <h1 className="max-[426px]:text-3xl text-5xl font-roboto font-bold text-[#242742]">
                Stay updated!
              </h1>
              <p className="max-[426px]:text-sm font-normal text-base leading-6 text-[#242742] font-roboto">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              {/* list */}
              <div className="flex flex-col space-y-4 max-[426px]:text-sm max-[426px]:my-4 ">
                <div className="flex gap-3 items-center ">
                  <img src={iconList} alt="checkIcon" />
                  <p className="font-roboto">
                    {" "}
                    Product discovery and building what matters
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={iconList} alt="checkIcon" />
                  <p className="font-roboto">
                    {" "}
                    Measuring to ensure updates are a success
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src={iconList} alt="checkIcon" />
                  <p className="font-roboto"> And much more!</p>
                </div>
              </div>

              {/* label and form */}
              <fieldset className="w-full">
                <legend className="text-xs font-bold font-roboto mb-1">
                  {" "}
                  Email address
                </legend>
                <form
                  className="flex flex-col space-y-4 relative"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    placeholder="email@company.com"
                    value={email}
                    onChange={handleEmail}
                    className={(!validEmail && email !== "") ? "error " : "py-4 px-6 border-[1px] w-full font-roboto border-[#36384e] rounded-md text-base "}
                  ></input>
                  {!validEmail && email !== "" && (
                    <span className="absolute right-0 -top-10 text-xs text-red-500 font-bold">
                      Enter valid email
                    </span>
                  )}
                  <button
                    type="submit"
                    className="py-4 px-6 w-full border-0 rounded-md text-white bg-[#242742] cursor-pointer font-roboto font-bold hover:bg-gradient-to-l
                  hover:from-pink-500 hover:to-[#ff6257]
                  "
                  >
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </fieldset>
            </div>
          </div>
          {/* right div img */}
          <div className="flex justify-center items-center">
          <picture >
          {/* <source srcset={mainImg} media="(min-width: 600px)" /> */}
          <img src={mainImg}  className="h-[92%] mr-2  "  />
          </picture>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
