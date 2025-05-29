import React, { useState, useEffect } from "react";
import Input from "../registerPageConteners/Input";
import Radio from "../registerPageConteners/Radio";
import { useShopInfo } from "../../hooks/useContext/useShopInfo";
import { useValidToken } from "../../hooks/useValidToken";
import AnimatedDetailOnClick from "../../animations/AnimatedDetailOnClick";
import { AnimatePresence } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import { useShowError } from "../../hooks/useContext/useShowError";

export default function AddOrderContainer() {
  const [postalCodeVal, setPostalCodeVal] = useState("");
  const [msgPostalCodeVal, setMsgPostalCodeVal] = useState("");

  const [cityVal, setCityVal] = useState("");
  const [msgCityVal, setMsgCityVal] = useState("");

  const [streetNameVal, setStreetNameVal] = useState("");
  const [msgStreetNameVal, setMsgStreetNameVal] = useState("");

  const [buildingNumberVal, setBuildingNumberVal] = useState("");
  const [msgBuildingNumberVal, setMsgBuildingNumberVal] = useState("");

  const [selectedType, setSelectedType] = useState("");

  const [visible, setVisible] = useState(true);

  const [flatNumberVal, setFlatNumberVal] = useState("");
  const [msgFlatNumberVal, setMsgFlatNumberVal] = useState("");

  const { productsForOdrder,setProductsForOdrder,setShowOrderContainer } = useShopInfo();
  const { getToken } = useValidToken();
  const { doFetch: addOrder } = useFetch();
  const { isError, setIsError, errorContent, setErrorContent } = useShowError();

  const noHtmlCharsRegEx = /^[^<>&"'`]*$/;
  const noExtraSpacesRegEx = /^\S+(?: \S+)*$/;

  const checkRegExPostalCode = (val) => {
    val = val.trim();
    const regex = /^\d{2}-\d{3}$/;

    const msg1 = regex.test(val)
      ? ""
      : "Kod pocztowy musi być w formacie XX-XXX. ";
    const msg2 = noHtmlCharsRegEx.test(val) ? "" : "Nie używaj znaków HTML. ";
    const msg3 = noExtraSpacesRegEx.test(val)
      ? ""
      : "Nie zaczynaj ani nie kończ spacją. ";

    setMsgPostalCodeVal(msg1 + msg2 + msg3);
  };

  const checkRegExCity = (val) => {
    val = val.trim();
    const regex = /^[a-zA-Z0-9\s]{3,}$/;

    const msg1 = regex.test(val)
      ? ""
      : "Miasto musi mieć min. 3 znaki (litery/cyfry/spacje). ";
    const msg2 = noHtmlCharsRegEx.test(val) ? "" : "Nie używaj znaków HTML. ";
    const msg3 = noExtraSpacesRegEx.test(val)
      ? ""
      : "Nie zaczynaj ani nie kończ spacją. ";

    setMsgCityVal(msg1 + msg2 + msg3);
  };

  const checkRegExStreetName = (val) => {
    val = val.trim();
    const regex = /^[a-zA-Z0-9\s]{3,}$/;

    const msg1 = regex.test(val)
      ? ""
      : "Ulica musi mieć min. 3 znaki (litery/cyfry/spacje). ";
    const msg2 = noHtmlCharsRegEx.test(val) ? "" : "Nie używaj znaków HTML. ";
    const msg3 = noExtraSpacesRegEx.test(val)
      ? ""
      : "Nie zaczynaj ani nie kończ spacją. ";

    setMsgStreetNameVal(msg1 + msg2 + msg3);
  };

  const checkRegExBuildingNumber = (val) => {
    val = val.trim();
    const regex = /^\d+[a-zA-Z]?$/;

    const msg1 = regex.test(val)
      ? ""
      : "Numer budynku musi być liczbą (opcjonalnie z literą). ";
    const msg2 = noHtmlCharsRegEx.test(val) ? "" : "Nie używaj znaków HTML. ";
    const msg3 = noExtraSpacesRegEx.test(val)
      ? ""
      : "Nie zaczynaj ani nie kończ spacją. ";

    setMsgBuildingNumberVal(msg1 + msg2 + msg3);
  };

  const checkRegExFlatNumber = (val) => {
    val = val.trim();
    const regex = /^\d+$/;

    const msg1 = regex.test(val)
      ? ""
      : "Numer mieszkania musi być liczbą całkowitą. ";
    const msg2 = noHtmlCharsRegEx.test(val) ? "" : "Nie używaj znaków HTML. ";
    const msg3 = noExtraSpacesRegEx.test(val)
      ? ""
      : "Nie zaczynaj ani nie kończ spacją. ";

    setMsgFlatNumberVal(msg1 + msg2 + msg3);
  };

  useEffect(() => {
    if (postalCodeVal === "") {
      setMsgPostalCodeVal("");
      return;
    }
    checkRegExPostalCode(postalCodeVal);
  }, [postalCodeVal]);

  useEffect(() => {
    if (cityVal === "") {
      setMsgCityVal("");
      return;
    }
    checkRegExCity(cityVal);
  }, [cityVal]);

  useEffect(() => {
    if (streetNameVal === "") {
      setMsgStreetNameVal("");
      return;
    }
    checkRegExStreetName(streetNameVal);
  }, [streetNameVal]);

  useEffect(() => {
    if (buildingNumberVal === "") {
      setMsgBuildingNumberVal("");
      return;
    }
    checkRegExBuildingNumber(buildingNumberVal);
  }, [buildingNumberVal]);

  useEffect(() => {
    if (flatNumberVal === "") {
      setMsgFlatNumberVal("");
      return;
    }
    checkRegExFlatNumber(flatNumberVal);
  }, [flatNumberVal]);

  const FillCompanyAdress = () => {
    setPostalCodeVal("11-111");
    setCityVal("xxxx");
    setStreetNameVal("Xxxx");
    setBuildingNumberVal("1");
    setStreetNameVal("xxxxx");
  };

  const clearInputs = () => {
    setPostalCodeVal("");
    setCityVal("");
    setStreetNameVal("");
    setMsgBuildingNumberVal("");
    setMsgStreetNameVal("");
  };

  const sendData = async (e) => {
    e.preventDefault();

    const token = await getToken();
    if (!token) return;

    if (
      msgCityVal === "" &&
      cityVal.trim() !== "" &&
      msgStreetNameVal === "" &&
      streetNameVal.trim() !== "" &&
      msgPostalCodeVal === "" &&
      postalCodeVal.trim() !== "" &&
      msgBuildingNumberVal === "" &&
      buildingNumberVal.trim() !== "" &&
      selectedType !== "" &&
      productsForOdrder.length > 0
    ) {
      const data = {
        postalCode: postalCodeVal,
        city: cityVal,
        streetName: streetNameVal,
        buildingNumber: Number(buildingNumberVal),
        flatNumber: flatNumberVal !== "" ? Number(flatNumberVal) : null,
        orderItems: productsForOdrder.map((el) => ({
          productId: el.productId,
          quantity: el.quantity,
        })),
      };

      setIsError(true)
      setErrorContent("Zamówienie zostało złożone")
      setProductsForOdrder([])
      setShowOrderContainer(false)

      addOrder("/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

    } else {
      checkRegExPostalCode(postalCodeVal);
      checkRegExCity(cityVal);
      checkRegExStreetName(streetNameVal);
      checkRegExBuildingNumber(buildingNumberVal);
      checkRegExFlatNumber(flatNumberVal);
    }
  };

  const address =
    `${cityVal} ${streetNameVal}\n${postalCodeVal} ${buildingNumberVal}${flatNumberVal ? ` / ${flatNumberVal}` : ""}`.substring(
      0,
      40,
    );

  return (
    <form
      onSubmit={sendData}
      className="max-h-[90vh] w-[75vw] overflow-auto overflow-x-hidden"
    >
      <div className="flex h-[40vh] flex-col justify-between">
        <h1 className="text-leftr p-5 text-5xl font-bold text-slate-700">
          Dokończ swoję zamówienie:
        </h1>
        <div className="flex h-full justify-between">
          <div className="flex flex-col justify-between p-10">
            <h1 className="text-xl font-semibold">Dane Wysyłki:</h1>

            <Input
              val={cityVal}
              msg={msgCityVal}
              setVal={setCityVal}
              type="text"
            >
              Miasto
            </Input>

            <Input
              val={streetNameVal}
              msg={msgStreetNameVal}
              setVal={setStreetNameVal}
              type="text"
            >
              Ulica
            </Input>

            <Input
              val={postalCodeVal}
              msg={msgPostalCodeVal}
              setVal={setPostalCodeVal}
              type="text"
            >
              Kod pocztowy
            </Input>

            <Input
              val={buildingNumberVal}
              msg={msgBuildingNumberVal}
              setVal={setBuildingNumberVal}
              type="text"
            >
              Numer budynku
            </Input>

            <Input
              val={flatNumberVal}
              msg={msgFlatNumberVal}
              setVal={setFlatNumberVal}
              type="text"
            >
              piętro <span className="text-sm text-gray-400">opcjonalne</span>
            </Input>
          </div>
          <div className="flex h-full flex-col p-10">
            <h1 className="text-xl font-semibold">Zawartość koszyka:</h1>
            <h1 className="text-sml font-bold">
              Ilość elementów w koszyku: {productsForOdrder.length}
            </h1>
            <div
              style={{
                scrollbarWidth: "none", // firefox
                msOverflowStyle: "none", // IE and Edge
              }}
              className="flex max-h-105 flex-col overflow-auto"
            >
              {productsForOdrder.map((el, i) => (
                <div
                  key={i}
                  className="flex flex-row items-center justify-between gap-10 border-b border-slate-700 p-5 pb-4 last:mb-0 last:border-b-0"
                >
                  <img
                    src={el.image}
                    alt="img"
                    className="h-18 w-18 rounded-md object-cover"
                  />
                  <p className="text-xl">{el.name}</p>
                  <p className="text-xl">{el.quantity}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col p-10">
            <h1 className="text-center text-xl font-semibold">
              typ odbioru zamówienia
            </h1>
            <div className="flex h-full flex-col justify-between p-10 pl-0">
              <div className="flex flex-col">
                <Radio
                  name="manufacturer"
                  value="personalAdres"
                  checked={selectedType === "personalAdres"}
                  onChange={() => (
                    setSelectedType("personalAdres"), clearInputs()
                  )}
                  onClick={() => setVisible(true)}
                >
                  <p className="text-lg">Osobisty w siedzibie firmy</p>
                </Radio>
                <Radio
                  name="manufacturer"
                  value="companyAdres"
                  checked={selectedType === "companyAdres"}
                  onChange={() => (
                    setSelectedType("companyAdres"), FillCompanyAdress()
                  )}
                  onClick={() => setVisible(true)}
                >
                  <p className="text-lg">na wskazany adres</p>
                </Radio>
              </div>
              <div>
                <h1 className="text-center text-xl font-semibold">
                  Finalny adres
                </h1>
                <p className="w-70 text-center">
                  {address.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < address.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  {address.length >= 39 ? "..." : ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="m-10 mt-5 rounded border-3 border-slate-700 bg-white p-5 pr-10 pl-10 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-120 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-140"
      >
        Złóż zamówienie
      </button>
    </form>
  );
}
