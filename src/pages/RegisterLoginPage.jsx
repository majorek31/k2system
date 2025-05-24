import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollAnimatedSection from "../animations/AnimatedSlideForm";
import LoginForm from "./registerPageConteners/LoginForm";
import RegisterForm from "./registerPageConteners/RegisterForm";
// import PrinterModel from "../components/3dModels/PrinterModel";

export default function RegisterPage() {
  const [activeForm, setActiveForm] = useState("register");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="mt-[40%] mb-[100%] flex h-screen w-full flex-col lg:mt-[10%] lg:mb-[10%] lg:flex-row">
      {/* Form section */}
      <div className="flex w-full items-center justify-center p-10 lg:w-1/2">
        <div className="w-full lg:m-15">
          <div className="flex h-fit w-full gap-[6%]">
            <div
              className={`z-[10] h-30 w-[47%] translate-y-10 transform rounded-t-3xl p-5 text-center transition-all duration-[600ms] ease-in-out hover:translate-y-[0px] ${activeForm === "register" ? "bg-white" : "bg-gray-300"
                }`}
            >
              <button
                className="h-full w-full text-xl"
                onClick={() => setActiveForm("register")}
              >
                Register
              </button>
            </div>
            <div
              className={`z-[10] h-30 w-[47%] translate-y-10 transform rounded-t-3xl p-5 text-center transition-all duration-[600ms] ease-in-out hover:translate-y-[0px] ${activeForm === "login" ? "bg-white" : "bg-gray-300"
                }`}
            >
              <button
                className="h-full w-full text-xl"
                onClick={() => setActiveForm("login")}
              >
                Login
              </button>
            </div>
          </div>

          <div className="relative z-[10] box-border h-fit rounded-b-2xl bg-white p-15 text-black">
            <AnimatePresence mode="wait">
              <ScrollAnimatedSection
                whichFormAnim={activeForm}
                key={activeForm}
              >
                {activeForm === "register" ? <RegisterForm /> : <LoginForm />}
              </ScrollAnimatedSection>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="hidden w-1/2 items-center justify-center p-10 lg:flex">
        {/* <PrinterModel /> */}
      </div>
    </div>
  );
}
