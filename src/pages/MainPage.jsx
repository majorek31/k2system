//React
import { useState, useEffect } from "react";

//Animations
import AnimatedOnScrollSection from "../animations/AnimatedOnScrollSection";
import AnimatedHoverCircle from "../animations/AnimatedHoverCircle";
import AnimatedDetailOnClick from "../animations/AnimatedDetailOnClick";

//Framer_motion
import { AnimatePresence } from "framer-motion";

//Containers
import MapContainer from "./mainPageConteners/MapContainer";
import ContactContainer from "./mainPageConteners/ContactContainer";
import SubscribeContainer from "./mainPageConteners/SubscribeContainer";
import DetailContainer from "./mainPageConteners/DetailContainer";
import RateContainer from "./mainPageConteners/RateContainer";

export default function MainPage() {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeModal]);

  return (
    <div>
      <div className="l-100vh w-full lg:flex lg:h-fit lg:flex-row lg:gap-3 lg:text-black">
        <div className="flex flex-col gap-3 p-7 pt-25 text-black lg:h-full lg:w-1/2">
          <AnimatedOnScrollSection>
            <div className="rounded-xl bg-white p-5 text-center shadow-xl">
              <h1 className="m-2 text-2xl lg:text-4xl">
                <span className="font-extrabold">
                  Drukarki dla Twojego biznesu!
                </span>
                <br />
                <br />
                kup lub wypożycz na korzystnych warunkach!
              </h1>
            </div>
          </AnimatedOnScrollSection>
          <AnimatedOnScrollSection>
            <div className="rounded-xl bg-white p-4 text-center">
              <p className="m-2 p-1 lg:text-2xl">
                <strong>Szukasz niezawodnego sprzętu do biura lub domu?</strong>
                <br />
                W naszej ofercie znajdziesz nowoczesne drukarki, które sprostają
                różnym wymaganiom – od modeli do codziennego użytku po te
                przeznaczone do intensywnego drukowania.
                <br />
                Oferujemy sprzęt w atrakcyjnych cenach, który zapewnia wysoką
                jakość druku oraz niezawodność. Nasze drukarki są łatwe w
                obsłudze, a ich długowieczność sprawia, że stanowią idealne
                rozwiązanie zarówno do biura, jak i użytku domowego.
                <br />
                Co więcej, nasze produkty dostępne są{" "}
                <em>bez długoterminowych zobowiązań</em>, co daje Ci pełną
                elastyczność!
              </p>
            </div>
          </AnimatedOnScrollSection>
        </div>

        <div className="flex flex-col gap-3 p-7 pt-0 text-black lg:h-full lg:w-1/2 lg:pt-25">
          <AnimatedOnScrollSection>
            <div>
              <h1 className="rounded-xl p-5 text-left text-2xl font-bold text-white lg:text-4xl">
                Zajmujemy się takimi rzeczami jak:
              </h1>
            </div>
          </AnimatedOnScrollSection>
          <div className="flex flex-col gap-3 text-black lg:items-start lg:gap-9 lg:tracking-widest">
            <AnimatedOnScrollSection>
              <div
                className="flex items-center justify-center"
                onClick={() => setActiveModal("1")}
              >
                <AnimatedHoverCircle
                  image={"../public/icons/cart.svg"}
                  text={"Sprzedaż detaliczna"}
                />
              </div>
            </AnimatedOnScrollSection>
            <AnimatedOnScrollSection>
              <div
                className="flex items-center justify-center"
                onClick={() => setActiveModal("2")}
              >
                <AnimatedHoverCircle
                  image={"../public/icons/rent.svg"}
                  text={"Dzierżawa kserokopiarek"}
                />
              </div>
            </AnimatedOnScrollSection>
            <AnimatedOnScrollSection>
              <div
                className="flex items-center justify-center"
                onClick={() => setActiveModal("3")}
              >
                <AnimatedHoverCircle
                  image={"../public/icons/service.svg"}
                  text={"Serwis, części, Tonery"}
                />
              </div>
            </AnimatedOnScrollSection>
            <AnimatedOnScrollSection>
              <div
                className="flex items-center justify-center"
                onClick={() => setActiveModal("4")}
              >
                <AnimatedHoverCircle
                  image={"../public/icons/cooperation.svg"}
                  text={"Współpraca z dystrybutorami"}
                />
              </div>
            </AnimatedOnScrollSection>
          </div>
        </div>
      </div>

      <div className="flex h-fit w-full flex-col items-center justify-center gap-40 bg-white">
        <AnimatedOnScrollSection>
          <div className="lg-flex-row lg:flex">
            <div>
              <h1 className="p-4 text-center text-lg font-bold text-black lg:text-left lg:text-2xl">
                Na czym polega wynajem drukarek?
              </h1>
              <p className="font-Poppins p-5 text-justify lg:text-2xl">
                Wynajem drukarek to nowoczesna i opłacalna alternatywa dla
                zakupu urządzeń biurowych, szczególnie dla firm, które chcą
                ograniczyć koszty i zyskać pełen komfort użytkowania. Zamiast
                inwestować w drogi sprzęt, podpisujesz umowę z dostawcą, który
                dostarcza drukarkę lub urządzenie wielofunkcyjne i zapewnia jego
                pełną obsługę. W cenie miesięcznego abonamentu otrzymujesz nie
                tylko dostęp do nowoczesnego sprzętu, ale również regularne
                dostawy tonerów, kompleksowy serwis, wsparcie techniczne i
                gwarancję sprawnego działania. Dzięki temu nie musisz martwić
                się o przestoje, uzupełnianie materiałów czy kosztowne naprawy –
                wszystkim zajmuje się dostawca.
              </p>
            </div>
            <img
              src="../public/photos/printer.jpg"
              alt=""
              className="p-4 grayscale lg:m-4 lg:h-80"
            />
          </div>
        </AnimatedOnScrollSection>

        <AnimatedOnScrollSection>
          <h1 className="rounded-xl p-5 text-center text-2xl font-bold text-black lg:text-4xl">
            O to lokalizacja naszej firmy:
          </h1>
        </AnimatedOnScrollSection>

        <div className="flex h-fit flex-col">
          <AnimatedOnScrollSection>
            <MapContainer />
          </AnimatedOnScrollSection>
          <div className="flex -translate-y-10 flex-col items-center justify-center gap-10 lg:flex-row">
            <ContactContainer
              title={"Napisz do nas"}
              pars={["aaa@gmail.com", "aaa@gmail.com", "aaa@gmail.com"]}
              icon={"mail"}
            />
            <ContactContainer
              title={"Zadzwoń do nas"}
              pars={["12356123412", "12356123412", "12356123412"]}
              icon={"phone"}
            />
            <ContactContainer
              title={"Przyjedz do nas"}
              pars={["ul.asdasd Skoczów 43"]}
              icon={"map_pin"}
            />
          </div>
        </div>

        <AnimatedOnScrollSection>
          <h1 className="rounded-xl p-5 text-center text-2xl font-bold text-black lg:text-4xl">
            Dostępne możliwe sprzęty:
          </h1>
        </AnimatedOnScrollSection>

        <div className="m-10 flex h-fit flex-col items-center justify-center gap-15 text-xl lg:flex-row">
          <SubscribeContainer
            title={"drukarka"}
            features={["Czarno-biały", "Duplex", "Lan", "Usb"]}
            price={"3.99"}
          />
          <SubscribeContainer
            title={"Drukarka Wielofunkcyjna"}
            features={["Kolorowe", "Duplex", "Lan", "Usb"]}
            price={"6.99"}
          />
          <SubscribeContainer
            title={"drukarka"}
            features={[
              "Kolorowe",
              "Wbudowany Skaner",
              "Duplex",
              "Lan",
              "Ksero",
            ]}
            price={"8.99"}
          />
        </div>
      </div>

      <AnimatedOnScrollSection>
        <div>
          <h1 className="m-50 p-5 text-center text-2xl font-bold text-white lg:text-4xl">
            Oceny naszych użytkowników:
          </h1>
        </div>
      </AnimatedOnScrollSection>

      <div
        className={"mb-50 flex w-full flex-col gap-10 lg:flex-row lg:flex-wrap"}
      >
        <RateContainer
          userName={"nazwa_uzytkownika"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nulla soluta, libero qui quod rerum ipsa doloremque excepturi, unde animi culpa natus atque aliquid deleniti! Eos iusto ipsa, quae reprehenderit blanditiis excepturi at repellat ipsam ut cum beatae asperiores velit quam consequatur dolores quos accusamus quidem, dignissimos dolorem animi. Magni."
          }
        />
        <RateContainer
          userName={"nazwa_uzytkownika"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nulla soluta, libero qui quod rerum ipsa doloremque excepturi, unde animi culpa natus atque aliquid deleniti! Eos iusto ipsa, quae reprehenderit blanditiis excepturi at repellat ipsam ut cum beatae asperiores velit quam consequatur dolores quos accusamus quidem, dignissimos dolorem animi. Magni."
          }
        />
        <RateContainer
          userName={"nazwa_uzytkownika"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nulla soluta, libero qui quod rerum ipsa doloremque excepturi, unde animi culpa natus atque aliquid deleniti! Eos iusto ipsa, quae reprehenderit blanditiis excepturi at repellat ipsam ut cum beatae asperiores velit quam consequatur dolores quos accusamus quidem, dignissimos dolorem animi. Magni."
          }
        />
        <RateContainer
          userName={"nazwa_uzytkownika"}
          text={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis nulla soluta, libero qui quod rerum ipsa doloremque excepturi, unde animi culpa natus atque aliquid deleniti! Eos iusto ipsa, quae reprehenderit blanditiis excepturi at repellat ipsam ut cum beatae asperiores velit quam consequatur dolores quos accusamus quidem, dignissimos dolorem animi. Magni."
          }
        />
      </div>
      <AnimatePresence>
        {activeModal && (
          <AnimatedDetailOnClick setActiveModal={setActiveModal}>
            {activeModal === "1" && (
              <DetailContainer
                title={"Sprzedaż detaliczna"}
                content={` Oferujemy szeroki wybór drukarek i akcesoriów do użytku domowego
            oraz biurowego. Wszystkie nasze produkty pochodzą od sprawdzonych
            producentów i objęte są gwarancją. Doradzimy Ci w wyborze
            najlepszego sprzętu dopasowanego do Twoich potrzeb. Odwiedź naszą
            siedzibę w powiecie cieszyńskim lub zamów online`}
                image={"retail_sale_electronic"}
              />
            )}
            {activeModal === "2" && (
              <DetailContainer
                title={"Dzierżawa kserokopiarek"}
                content={` Zapewniamy elastyczne warunki wynajmu kserokopiarek dla firm i instytucji. Posiadamy nowoczesny sprzęt, który spełni wymagania nawet najbardziej intensywnego biura. Obsługujemy cały powiat cieszyński – szybko i bezproblemowo. W cenie dzierżawy zapewniamy również serwis i materiały eksploatacyjne.`}
                image={"photocopier_lease"}
              />
            )}
            {activeModal === "3" && (
              <DetailContainer
                title={"Serwis, części, tonery"}
                content={`Zajmujemy się kompleksowym serwisem drukarek i kserokopiarek wszystkich marek. Posiadamy części zamienne i wysokiej jakości tonery dostępne od ręki. Nasz serwis działa szybko i skutecznie, minimalizując przestoje w Twojej pracy. Dla klientów z powiatu cieszyńskiego oferujemy możliwość dojazdu na miejsce.`}
                image={"printer"}
              />
            )}
            {activeModal === "4" && (
              <DetailContainer
                title={"Współpraca z dystrybutorami"}
                content={`Chętnie podejmujemy współpracę z dystrybutorami sprzętu biurowego i materiałów eksploatacyjnych. Gwarantujemy uczciwe warunki i długofalowe relacje. Nasza firma z powiatu cieszyńskiego dynamicznie się rozwija, dlatego szukamy solidnych partnerów. Razem możemy więcej – skontaktuj się z nami, by poznać szczegóły.`}
                image={"cooperation_with_distributors"}
              />
            )}
          </AnimatedDetailOnClick>
        )}
      </AnimatePresence>
    </div>
  );
}
