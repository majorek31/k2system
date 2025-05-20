import { useEffect, useState } from "react";
import Input from "./Input";
import Radio from "./Radio";
import AniamtedOnChangeOpacity from "../../animations/AniamtedOnChangeOpacity";
import AnimatedDetailOnClick from "../../animations/AnimatedDetailOnClick";

import { AnimatePresence } from "framer-motion";

export default function registerForm() {
  const [firstName, setFirstName] = useState("");
  const [msgFirstName, setMsgFirstName] = useState("");

  const [lastName, setLastName] = useState("");
  const [msgLastName, setMsgLastName] = useState("");

  const [emailVal, setEmailVal] = useState("");
  const [msgEmail, setMsgEmail] = useState("");

  const [password, setPassword] = useState("");
  const [msgPasswrod, setMsgPassword] = useState("");

  const [passwordDoubleCheck, setPasswordDoubleCheck] = useState("");
  const [msgPasswrodDoubleCheck, setMsgPasswordDoubleCheck] = useState("");

  const [showFinalInormationContainer, setShowFinalInormationContainer] =
    useState("");
  const [showErrorContainer, setShowErrorContainer] = useState("");

  const [selectedType, setSelectedType] = useState("osoba");

  const [nip, setNip] = useState("");
  const [msgNip, setMsgNip] = useState("");

  const [firmaNazwa, setFirmaNazwa] = useState("");
  const [msgFirmaNazwa, setMsgFirmaNazwa] = useState("");

  const [visible, setVisible] = useState(true);

  const checkRegExNip = (val) => {
    val = val.trim();
    const nipRegEx = /^[0-9]{8,12}$/;
    const noSpacesRegEx = /^\S+$/;
    const noHtmlCharsRegEx = /^[^<>/&"'`]*$/;

    const msg1 = nipRegEx.test(val)
      ? ""
      : "NIP musi zawierać dokładnie miedzy 8 do 12 cyfr (bez liter, znaków specjalnych)";
    const msg2 = noHtmlCharsRegEx.test(val)
      ? ""
      : "Nazwa firmy nie może zawierać znaków HTML (np. <, >, &, \", '): ";
    const msg3 = noSpacesRegEx.test(val)
      ? ""
      : "Imię nie może zawierać spacji: ";

    setMsgNip(msg1 + msg2 + msg3);
  };

  const checkRegExFirmaNazwa = (val) => {
    val = val.trim();
    const minLenRegEx = /^.{3,}$/;
    const noHtmlCharsRegEx = /^[^<>/&"'`]*$/;

    const msg1 = minLenRegEx.test(val)
      ? ""
      : "Nazwa firmy musi mieć minimum 3 znaki: ";
    const msg2 = noHtmlCharsRegEx.test(val)
      ? ""
      : "Nazwa firmy nie może zawierać znaków HTML (np. <, >, &, \", '): ";
    setMsgFirmaNazwa(msg1 + msg2);
  };


  const checkRegExFirstName = (val) => {
    val = val.trim();
    const firstNameStartsWithCapitalRegEx = /^[A-Z]/;
    const firstNameMinLengthRegEx = /^.{3,}$/;
    const noSpacesRegEx = /^\S+$/;
    const noDigitsRegEx = /^[^0-9]*$/;
    const noHtmlCharsRegEx = /^[^<>/&"'`]*$/; // Zabronione znaki HTML

    const msg1 = firstNameStartsWithCapitalRegEx.test(val)
      ? ""
      : "Imię musi zaczynać się z dużej litery: ";

    const msg2 = firstNameMinLengthRegEx.test(val)
      ? ""
      : "Imię musi zawierać min. 3 znaki: ";

    const msg3 = noSpacesRegEx.test(val)
      ? ""
      : "Imię nie może zawierać spacji: ";

    const msg4 = noDigitsRegEx.test(val) ? "" : "Imię nie może zawierać cyfr: ";

    const msg5 = noHtmlCharsRegEx.test(val)
      ? ""
      : "Imię nie może zawierać znaków HTML (np. <, >, &, \", '): ";

    let finalMsg = msg1 + msg2 + msg3 + msg4 + msg5;
    setMsgFirstName(finalMsg);
  };

  const checkRegExLastName = (val) => {
    val = val.trim();
    const lastNameStartsWithCapitalRegEx = /^[A-Z]/;
    const lastNameMinLengthRegEx = /^.{3,}$/;
    const noSpacesRegEx = /^\S+$/;
    const noDigitsRegEx = /^[^0-9]*$/;
    const noHtmlCharsRegEx = /^[^<>/&"'`]*$/;

    const msg1 = lastNameStartsWithCapitalRegEx.test(val)
      ? ""
      : "Nazwisko musi zaczynać się z dużej litery: ";

    const msg2 = lastNameMinLengthRegEx.test(val)
      ? ""
      : "Nazwisko musi zawierać min. 3 znaki: ";

    const msg3 = noSpacesRegEx.test(val)
      ? ""
      : "Nazwisko nie może zawierać spacji: ";

    const msg4 = noDigitsRegEx.test(val)
      ? ""
      : "Nazwisko nie może zawierać cyfr: ";

    const msg5 = noHtmlCharsRegEx.test(val)
      ? ""
      : "Nazwisko nie może zawierać znaków HTML (np. <, >, &, \", '): ";

    setMsgLastName(msg1 + msg2 + msg3 + msg4 + msg5);
  };

  const checkRegExEmail = (val) => {
    const emailContainsAt = /@/;
    const emailContainsDot = /\./;
    const noSpacesRegEx = /^\S+$/;
    const noSpecialCharsRegEx = /^[\w.@+-]+$/;
    const noHtmlCharsRegEx = /^[^<>/&"'`]*$/;

    const msg1 = emailContainsAt.test(val) ? "" : `email musi zawierac "@": `;
    const msg2 = emailContainsDot.test(val) ? "" : `email musi zawierac ".": `;
    const msg3 = noSpacesRegEx.test(val)
      ? ""
      : "Email nie może zawierać spacji: ";
    const msg4 = noSpecialCharsRegEx.test(val)
      ? ""
      : "Email zawiera niedozwolone znaki: ";
    const msg5 = noHtmlCharsRegEx.test(val)
      ? ""
      : "Email nie może zawierać znaków HTML (np. <, >, &, \", '): ";

    setMsgEmail(msg1 + msg2 + msg3 + msg4 + msg5);
  };

  const checkRegExPass = (val) => {
    val = val.trim();
    const passwordMinLength = /^.{8,}$/;
    const passwordHasCapital = /[A-Z]/;
    const passwordHasNumber = /[0-9]/;
    const noSpacesRegEx = /^\S+$/;
    const noHtmlCharsRegEx = /^[^<>/&"'`]*$/;

    const msg1 = passwordMinLength.test(val)
      ? ""
      : `hasło musi zawierać min. 8 znaków: `;

    const msg2 = passwordHasCapital.test(val)
      ? ""
      : `hasło musi zawierać przynajmniej jedną wielką literę: `;

    const msg3 = passwordHasNumber.test(val)
      ? ""
      : `hasło musi zawierać przynajmniej jedną cyfrę: `;

    const msg4 = noSpacesRegEx.test(val)
      ? ""
      : "Hasło nie może zawierać spacji: ";

    const msg5 = noHtmlCharsRegEx.test(val)
      ? ""
      : "Hasło nie może zawierać znaków HTML (np. <, >, &, \", '): ";

    setMsgPassword(msg1 + msg2 + msg3 + msg4 + msg5);
  };

  const checkRegExPassDoubleCheck = (val, val2) => {
    val === val2 && val !== ""
      ? setMsgPasswordDoubleCheck("")
      : setMsgPasswordDoubleCheck(
        "Podane hasło różńi się od wcześniej podanego hasła",
      );
    console.log(msgPasswrodDoubleCheck);
  };

  const sendData = () => {
    if (
      msgFirstName === "" &&
      firstName !== "" &&
      msgLastName === "" &&
      lastName !== "" &&
      msgEmail === "" &&
      emailVal !== "" &&
      msgPasswrod === "" &&
      password !== "" &&
      msgPasswrodDoubleCheck === "" &&
      passwordDoubleCheck !== ""
    ) {
      const data = {
        firstName,
        lastName,
        emailVal,
        password,
        passwordDoubleCheck,
      };
      console.log(data);
      setShowFinalInormationContainer(true);
      setShowErrorContainer(false);
      // setFirstName("");
      // setLastName("");
      // setEmailVal("");
      // setPassword("");
      // setPasswordDoubleCheck("");
    } else {
      setShowErrorContainer(true);
      setShowFinalInormationContainer(false);
    }
  };

  useEffect(() => {
    console.log(firstName);
    if (firstName === "") {
      return;
    }
    checkRegExFirstName(firstName);
  }, [firstName]);

  useEffect(() => {
    if (lastName === "") {
      return;
    }
    checkRegExLastName(lastName);
  }, [lastName]);

  useEffect(() => {
    if (nip === "") return;
    checkRegExNip(nip);
  }, [nip]);

  useEffect(() => {
    if (firmaNazwa === "") return;
    checkRegExFirmaNazwa(firmaNazwa);
  }, [firmaNazwa]);


  useEffect(() => {
    if (emailVal === "") {
      return;
    }
    checkRegExEmail(emailVal);
  }, [emailVal]);

  useEffect(() => {
    if (password === "") {
      return;
    }
    checkRegExPass(password);
  }, [password]);

  useEffect(() => {
    if (passwordDoubleCheck === "") {
      return;
    }
    checkRegExPassDoubleCheck(password, passwordDoubleCheck);
  }, [passwordDoubleCheck]);

  return (
    <form
      className="m-5 flex flex-col items-center justify-center gap-15 p-5"
      onSubmit={(e) => (e.preventDefault(), sendData())}
    >
      <div className="flex gap-15">
        <Radio
          name="accountType"
          value="osoba"
          checked={selectedType === "osoba"}
          onChange={() => setSelectedType("osoba")}
          onClick={() => (setVisible(true))}
        >
          Konto Osobiste
        </Radio>
        <Radio
          name="accountType"
          value="firma"
          checked={selectedType === "firma"}
          onChange={() => setSelectedType("firma")}
          onClick={() => (setVisible(true))}
        >
          Konto Firmowe
        </Radio>
      </div>

      {selectedType === "osoba" && (
        <AniamtedOnChangeOpacity isVisible={visible}>
          <div className="flex flex-col lg:flex-row gap-4 min-h-[70vh] lg:min-h-[50vh] max-h-[700px]">
            {/* Kolumna 1 */}
            <div className="flex-1 m-5 flex flex-col items-center justify-center gap-12 p-5">
              <Input
                val={firstName}
                msg={msgFirstName}
                setVal={setFirstName}
                type="text"
              >
                Name
              </Input>
              <Input
                val={lastName}
                msg={msgLastName}
                setVal={setLastName}
                type="text"
              >
                nazwisko
              </Input>
            </div>

            {/* Kolumna 2 */}
            <div className="flex-1 m-5 flex flex-col items-center justify-center gap-12 p-5">
              <Input val={emailVal} msg={msgEmail} setVal={setEmailVal} type="text">
                email
              </Input>
              <Input
                val={password}
                msg={msgPasswrod}
                setVal={setPassword}
                type="password"
              >
                hasło
              </Input>
              <Input
                val={passwordDoubleCheck}
                msg={msgPasswrodDoubleCheck}
                setVal={setPasswordDoubleCheck}
                type="password"
              >
                potwierdz hasło
              </Input>
            </div>
          </div>
        </AniamtedOnChangeOpacity>
      )}

      {selectedType === "firma" && (
        <AniamtedOnChangeOpacity isVisible={visible}>
          <div className="flex flex-col lg:flex-row gap-4 min-h-[50vh] max-h-[700px]">
            {/* Kolumna 1 */}
            <div className="flex-1 m-5 flex flex-col items-center justify-center gap-12 p-5">
              <Input
                val={firstName}
                msg={msgFirstName}
                setVal={setFirstName}
                type="text"
              >
                Name
              </Input>
              <Input
                val={lastName}
                msg={msgLastName}
                setVal={setLastName}
                type="text"
              >
                nazwisko
              </Input>
              <Input val={emailVal} msg={msgEmail} setVal={setEmailVal} type="text">
                email
              </Input>
            </div>

            {/* Kolumna 2 */}
            <div className="flex-1 m-5 flex flex-col items-center justify-center gap-12 p-5">
              <Input val={nip} msg={msgNip} setVal={setNip} type="text">
                NIP
              </Input>
              <Input
                val={firmaNazwa}
                msg={msgFirmaNazwa}
                setVal={setFirmaNazwa}
                type="text"
              >
                Nazwa Firmy
              </Input>
              <Input
                val={password}
                msg={msgPasswrod}
                setVal={setPassword}
                type="password"
              >
                hasło
              </Input>
              <Input
                val={passwordDoubleCheck}
                msg={msgPasswrodDoubleCheck}
                setVal={setPasswordDoubleCheck}
                type="password"
              >
                potwierdz hasło
              </Input>
            </div>
          </div>
        </AniamtedOnChangeOpacity>
      )}


      <button
        type="submit"
        className="m-5 rounded border-3 border-slate-700 bg-white p-5 pr-10 pl-10 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-120 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-140"
      >
        Register
      </button>
      <AnimatePresence>
        {showFinalInormationContainer && (
          <AnimatedDetailOnClick
            setActiveModal={setShowFinalInormationContainer}
          >
            <div className="z-[100] m-3 flex w-[33vh] flex-col gap-7 p-3 select-none lg:w-[105]">
              <h1 className="text-center text-3xl font-bold">
                Dane zostały dodane
              </h1>
            </div>
          </AnimatedDetailOnClick>
        )}
        {showErrorContainer && (
          <AnimatedDetailOnClick setActiveModal={setShowErrorContainer}>
            <div className="z-[100] m-3 flex w-[33vh] flex-col gap-7 p-3 select-none lg:w-[105]">
              <h1 className="text-center text-3xl font-bold">
                Nie wypełniłeś danych poprawnie lub podałeś błedne dane
              </h1>
            </div>
          </AnimatedDetailOnClick>
        )}
      </AnimatePresence>
    </form >
  );
}
