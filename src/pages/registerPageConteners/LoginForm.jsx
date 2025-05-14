import { useState } from "react";
import Input from "./Input";

export default function registerForm() {
  const [emailVal, setEmailVal] = useState("");
  const [password, setPassword] = useState("");
  const [passwordDoubleCheck, setPasswordDoubleCheck] = useState("");
  return (
    <form className="m-5 flex flex-col items-center justify-center gap-30 p-5">
      <Input val={emailVal} setVal={setEmailVal}>
        email
      </Input>
      <Input val={password} setVal={setPassword}>
        hasło
      </Input>
      <Input val={passwordDoubleCheck} setVal={setPasswordDoubleCheck}>
        potwierdz hasło
      </Input>

      <button className="m-5 rounded border-3 border-slate-700 bg-white p-5 pr-10 pl-10 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-120 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-140">
        Login
      </button>
    </form>
  );
}
