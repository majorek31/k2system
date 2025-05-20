import { useEffect, useState } from "react";
import Input from "./Input";
import { useFetch } from "../../hooks/useFetch";
import { decodeJwt } from 'jose';
import { useUserInfo } from "../../hooks/useContext/useUserInfo"

export default function RegisterForm() {
  const [emailVal, setEmailVal] = useState("");
  const [msgEmail, setMsgEmail] = useState("");

  const [password, setPassword] = useState("");
  const [msgPassword, setMsgPassword] = useState("");

  const [passwordDoubleCheck, setPasswordDoubleCheck] = useState("");
  const [msgPasswordDoubleCheck, setMsgPasswordDoubleCheck] = useState("");

  const [loginUrl, setLoginUrl] = useState("");

  const { data, error, isPending, doFetch } = useFetch(null, { method: "GET" }, true);
  const { setUserInfo } = useUserInfo()

  const login = (email, password) => {
    console.log("dotarło");
    const url = `http://localhost:5000/auth/login?email=${email}&password=${password}`;
    doFetch(url);
  };

  useEffect(() => {
    if (data && data.accessToken) {
      localStorage.setItem("accessToken", data.accessToken);
      const decodedUserInfo = decodeJwt(data.accessToken)
      setUserInfo(decodedUserInfo)
    }
  }, [data]);


  const checkRegExEmail = (val) => {
    const emailContainsAt = /@/;
    const emailContainsDot = /\./;
    const noSpacesRegEx = /^\S+$/;
    const noSpecialCharsRegEx = /^[\w.@+-]+$/;
    const noHtmlCharsRegEx = /^[^<>/&"'`]*$/;

    const msg1 = emailContainsAt.test(val) ? "" : `Email musi zawierać "@": `;
    const msg2 = emailContainsDot.test(val) ? "" : `Email musi zawierać ".": `;
    const msg3 = noSpacesRegEx.test(val) ? "" : "Email nie może zawierać spacji: ";
    const msg4 = noSpecialCharsRegEx.test(val) ? "" : "Email zawiera niedozwolone znaki: ";
    const msg5 = noHtmlCharsRegEx.test(val) ? "" : "Email nie może zawierać znaków HTML (np. <, >, &, \", '): ";

    setMsgEmail(msg1 + msg2 + msg3 + msg4 + msg5);
  };

  const checkRegExPass = (val) => {
    val = val.trim();
    const passwordMinLength = /^.{8,}$/;
    // const passwordHasCapital = /[A-Z]/;
    const passwordHasNumber = /[0-9]/;
    const noSpacesRegEx = /^\S+$/;
    const noHtmlCharsRegEx = /^[^<>/&"'`]*$/;

    const msg1 = passwordMinLength.test(val) ? "" : `Hasło musi zawierać min. 8 znaków: `;
    // const msg2 = passwordHasCapital.test(val) ? "" : `Hasło musi zawierać przynajmniej jedną wielką literę: `;
    const msg3 = passwordHasNumber.test(val) ? "" : `Hasło musi zawierać przynajmniej jedną cyfrę: `;
    const msg4 = noSpacesRegEx.test(val) ? "" : "Hasło nie może zawierać spacji: ";
    const msg5 = noHtmlCharsRegEx.test(val) ? "" : "Hasło nie może zawierać znaków HTML (np. <, >, &, \", '): ";

    setMsgPassword(msg1 + msg3 + msg4 + msg5);
  };

  const checkRegExPassDoubleCheck = (val, originalVal) => {
    if (val === originalVal && val !== "") {
      setMsgPasswordDoubleCheck("");
    } else {
      setMsgPasswordDoubleCheck("Podane hasło różni się od wcześniej podanego hasła");
    }
  };

  const sendData = async () => {
    if (
      msgEmail === "" &&
      emailVal !== "" &&
      msgPassword === "" &&
      password !== "" &&
      msgPasswordDoubleCheck === "" &&
      passwordDoubleCheck !== ""
    ) {
      login(emailVal, password);

    } else {
      console.log("Nie wypełniłeś danych poprawnie lub masz błędy");
    }
  };

  useEffect(() => {
    console.log("usEfect")
    if (error) {
      console.error("Błąd logowania:", error);
    }
    if (isPending) {
      console.log("loading")
    }
    if (data) {
      console.log("Dane logowania:", data);
    }
  }, [data, error, isPending]);


  useEffect(() => {
    if (emailVal === "") return;
    checkRegExEmail(emailVal);
  }, [emailVal]);

  useEffect(() => {
    if (password === "") return;
    checkRegExPass(password);
  }, [password]);

  useEffect(() => {
    if (passwordDoubleCheck === "") return;
    checkRegExPassDoubleCheck(passwordDoubleCheck, password);
  }, [passwordDoubleCheck, password]);

  return (
    <form
      className="m-5 flex flex-col items-center justify-center gap-[30%] p-5 h-[80vh]"
      onSubmit={(e) => {
        e.preventDefault();
        sendData();
      }}
    >
      <div className="flex flex-col lg:flex-row gap-4 min-h-[70vh] lg:min-h-[50vh] max-h-[700px]">

        <div className="m-5 flex flex-col items-center justify-center gap-12 p-5">

          <Input val={emailVal} msg={msgEmail} setVal={setEmailVal} type={"text"}>
            Email
          </Input>
          <Input val={password} msg={msgPassword} setVal={setPassword} type={"password"}>
            Hasło
          </Input>
          <Input
            val={passwordDoubleCheck}
            msg={msgPasswordDoubleCheck}
            setVal={setPasswordDoubleCheck}
            type={"password"}
          >
            Potwierdź hasło
          </Input>

          <button
            type="submit"
            className="m-5 rounded border-3 mt-10 border-slate-700 bg-white p-5 pr-10 pl-10 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-110 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-125"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
}
