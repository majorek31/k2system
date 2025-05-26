import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Input from "../registerPageConteners/Input";
import { AnimatePresence } from "framer-motion";
import { useFetch } from "../../hooks/useFetch";
import { useValidToken } from "../../hooks/useValidToken";
import AnimatedDetailOnClick from "../../animations/AnimatedDetailOnClick";

export default function AddProductForm({onProductAdded}) {
  const [nameVal, setNameVal] = useState("");
  const [msgNameVal, setMsgNameVal] = useState("");

  const [skuVal, setSkuVal] = useState("");
  const [msgSkuVal, setMsgSkuVal] = useState("");

  const [quantityInStock, setQuantityInStock] = useState("");
  const [msgQuantityInStock, setMsgQuantityInStock] = useState("");

  const [price, setPrice] = useState("");
  const [msgPrice, setMsgPrice] = useState("");

  const [imageUrl, setImageUrl] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [msgImageUrls, setMsgImageUrls] = useState("");

  const [editorVal, setEditorVal] = useState("");
  const [msgEditorVal, setMsgEditorVal] = useState("");

  const [showFinalInormationContainer, setShowFinalInormationContainer] =
    useState("");
  const [showErrorContainer, setShowErrorContainer] = useState("");

  const noHtmlCharsRegEx = /^[^<>&"'`]*$/;
  const noExtraSpacesRegEx = /^\S+(?: \S+)*$/;
  const { doFetch: addProduct } = useFetch();
  const { getToken } = useValidToken();

  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  const checkRegExName = (val) => {
    val = val.trim();

    const nameRegex = /^[a-zA-Z0-9\s]{3,}$/;

    const msg1 = nameRegex.test(val)
      ? ""
      : "Nazwa produktu musi mieć co najmniej 3 znaki (litery, cyfry, spacje). ";

    const msg2 = noHtmlCharsRegEx.test(val)
      ? ""
      : "Nazwa nie może zawierać znaków HTML (np. <, >, &, \", '). ";

    const msg3 = noExtraSpacesRegEx.test(val)
      ? ""
      : "Nazwa nie może zaczynać się lub kończyć spacją. ";

    setMsgNameVal(msg1 + msg2 + msg3);
  };

  const checkRegExSku = (val) => {
    val = val.trim();

    const skuRegex = /^[a-zA-Z0-9]{3,10}$/;

    const msg1 = skuRegex.test(val)
      ? ""
      : "SKU musi mieć 3-10 znaków (litery i cyfry bez spacji). ";

    const msg2 = noHtmlCharsRegEx.test(val)
      ? ""
      : "SKU nie może zawierać znaków HTML (np. <, >, &, \", '). ";

    const msg3 = noExtraSpacesRegEx.test(val)
      ? ""
      : "SKU nie może zaczynać się lub kończyć spacją. ";

    setMsgSkuVal(msg1 + msg2 + msg3);
  };

  const checkRegExQuantity = (val) => {
    val = val.trim();

    const quantityRegex = /^\d+$/;

    const msg1 = quantityRegex.test(val)
      ? ""
      : "Ilość produktów musi być liczbą całkowitą nieujemną. ";

    const msg2 = noHtmlCharsRegEx.test(val)
      ? ""
      : "Ilość produktów nie może zawierać znaków HTML (np. <, >, &, \", '). ";

    const msg3 = noExtraSpacesRegEx.test(val)
      ? ""
      : "Ilość produktów nie może zaczynać się lub kończyć spacją. ";

    setMsgQuantityInStock(msg1 + msg2 + msg3);
  };

  const checkRegExPrice = (val) => {
    val = val.trim();

    const priceRegex = /^\d+(\.\d{1,2})?$/;

    const msg1 = priceRegex.test(val)
      ? ""
      : "Cena musi być liczbą z maksymalnie dwoma miejscami po przecinku. ";

    const msg2 = noHtmlCharsRegEx.test(val)
      ? ""
      : "Cena nie może zawierać znaków HTML (np. <, >, &, \", '). ";

    const msg3 = noExtraSpacesRegEx.test(val)
      ? ""
      : "Cena nie może zaczynać się lub kończyć spacją. ";

    setMsgPrice(msg1 + msg2 + msg3);
  };

  const checkRegExImageUrl = (val) => {
    val = val.trim();

    const urlRegex = /^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i;

    const msg1 = urlRegex.test(val)
      ? ""
      : "URL musi być poprawnym linkiem do obrazka (jpg, png, gif). ";

    const msg2 = noHtmlCharsRegEx.test(val)
      ? ""
      : "URL nie może zawierać znaków HTML (np. <, >, &, \", '). ";

    const msg3 = noExtraSpacesRegEx.test(val)
      ? ""
      : "URL nie może zaczynać się lub kończyć spacją. ";

    setMsgImageUrls(msg1 + msg2 + msg3);
  };

  const checkRegExEditorVal = (val) => {
    const textOnly = stripHtml(val).trim();

    const msg1 =
      textOnly.length >= 10
        ? ""
        : "Opis produktu musi mieć minimum 10 znaków. ";

    const msg2 = noHtmlCharsRegEx.test(textOnly)
      ? ""
      : "Opis nie może zawierać znaków HTML (np. <, >, &, \", '). ";

    const msg3 = noExtraSpacesRegEx.test(textOnly)
      ? ""
      : "Opis nie może zaczynać się lub kończyć spacją. ";

    setMsgEditorVal(msg1 + msg2 + msg3);
  };

  useEffect(() => {
    if (nameVal === "") {
      setMsgNameVal("");
      return;
    }
    checkRegExName(nameVal);
    console.log(msgNameVal);
  }, [nameVal]);

  useEffect(() => {
    if (skuVal === "") {
      setMsgSkuVal("");
      return;
    }
    checkRegExSku(skuVal);
  }, [skuVal]);

  useEffect(() => {
    if (quantityInStock === "") {
      setMsgQuantityInStock("");
      return;
    }
    checkRegExQuantity(quantityInStock);
  }, [quantityInStock]);

  useEffect(() => {
    if (price === "") {
      setMsgPrice("");
      return;
    }
    checkRegExPrice(price);
  }, [price]);

  useEffect(() => {
    if (imageUrl === "") {
      setMsgImageUrls("");
      return;
    }
    checkRegExImageUrl(imageUrl);
  }, [imageUrl]);

  useEffect(() => {
    if (editorVal === "") {
      setMsgEditorVal("");
      return;
    }
    checkRegExEditorVal(editorVal);
  }, [editorVal]);

  const sendData = async (e) => {
    const token = await getToken();
    if (!token) return;

    e.preventDefault();
    if (
      msgNameVal === "" &&
      nameVal.trim() !== "" &&
      msgSkuVal === "" &&
      skuVal.trim() !== "" &&
      msgQuantityInStock === "" &&
      quantityInStock.trim() !== "" &&
      msgPrice === "" &&
      price.trim() !== "" &&
      msgImageUrls === "" &&
      imageUrls.length > 0 &&
      msgEditorVal === "" &&
      editorVal.trim() !== ""
    ) {
      const data = {
        name: nameVal.trim(),
        description: editorVal.trim(),
        sku: skuVal.trim(),
        quantityInStock: Number(quantityInStock),
        price: Number(price),
        imageUrls: imageUrls,
      };
      
      setShowFinalInormationContainer(true);
      setShowErrorContainer(false);

      if (onProductAdded) onProductAdded();

      addProduct("http://localhost:5000/product", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });
      console.log("dane zostały wysłane");
    } else {
      setShowErrorContainer(true);
      setShowFinalInormationContainer(false);
    }
  };

  return (
    <form onSubmit={sendData} className="max-h-[90vh] w-[65vw] overflow-auto">
      <div className="flex h-[90vh] flex-col justify-between">
        <h1 className="text-leftr p-5 text-5xl font-bold text-slate-700">
          Dodaj produkt !
        </h1>

        <div className="flex flex-col items-center justify-center p-5 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-15 p-5">
            <Input
              val={nameVal}
              msg={msgNameVal}
              setVal={setNameVal}
              type="text"
            >
              Nazwa produktu
            </Input>
            <Input val={skuVal} msg={msgSkuVal} setVal={setSkuVal} type="text">
              SKU
            </Input>
            <Input
              val={quantityInStock}
              msg={msgQuantityInStock}
              setVal={setQuantityInStock}
              type="number"
            >
              Ilość produktów
            </Input>
          </div>

          <div className="flex flex-col gap-15 p-5">
            <Input val={price} msg={msgPrice} setVal={setPrice} type="number">
              Cena
            </Input>

            <div className="flex items-center gap-10">
              <div className="flex flex-col items-center gap-10">
                <Input
                  val={imageUrl}
                  msg={msgImageUrls}
                  setVal={setImageUrl}
                  type="text"
                >
                  URL obrazu
                </Input>

                <button
                  type="button"
                  className="rounded border-3 border-slate-700 bg-white p-2 pr-4 pl-4 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-120 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-140"
                  onClick={() => {
                    if (imageUrl.trim() !== "") {
                      setImageUrls([...imageUrls, imageUrl]);
                    }
                  }}
                >
                  Dodaj URL
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-5 text-center">
            <h1>Dodane obrazy:</h1>
            <div className="flex h-45 max-h-45 w-40 flex-col gap-5 overflow-auto">
              {imageUrls.length === 0
                ? "brak urlów"
                : imageUrls.map((el, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3"
                    >
                      <p>{el.substring(0, 10) + "..."}</p>
                      <button
                        type="button"
                        onClick={() => {
                          setImageUrls(
                            imageUrls.filter((_, index) => index !== i),
                          );
                          setMsgImageUrls("");
                        }}
                        className="rounded bg-slate-700 px-2 py-1 text-white transition hover:bg-red-800"
                      >
                        Usuń
                      </button>
                    </div>
                  ))}
            </div>
          </div>
        </div>

        <div>
          <Editor
            apiKey="l5u12v9slda9lwla3wxl78cvlmtsn3k80v82pibuwq23qo8y"
            value={editorVal}
            init={{
              menubar: false,
              width: "100%",
              height: 500,
              plugins:
                "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount",
              toolbar:
                "undo redo | formatselect | bold italic backcolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={(content) => setEditorVal(content)}
          />

          {msgEditorVal ? (
            <p className="mt-2 text-sm text-red-600">{msgEditorVal}</p>
          ) : (
            <p className="mt-2 text-sm text-white">.</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-5 rounded border-3 border-slate-700 bg-white p-5 pr-10 pl-10 text-xl text-slate-700 shadow-xl transition-all duration-300 hover:scale-120 hover:cursor-pointer hover:bg-slate-700 hover:text-white active:scale-140"
        >
          Dodaj produkt
        </button>
      </div>

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
    </form>
  );
}
