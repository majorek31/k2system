import { useState, useEffect, useRef } from "react";
import { useContent } from "../hooks/useContext/useContent";
import { useUserInfo } from "../hooks/useContext/useUserInfo";

export default function SingleWord({ whichOne, whichContent }) {
  const { data, isPending, error, fetchContent, updateContent } = useContent();
  const { isAdmin, isEditable,languageInUse } = useUserInfo();
  const [corectWord, setCorectWord] = useState("");
  const [corectWordObj, setCorectWordObj] = useState(null);
  const [edited, setEdited] = useState(false);
  const [inEdit, setInEdit] = useState(true);
  const ref = useRef();

  useEffect(() => {
    if (whichContent) {
      fetchContent(whichContent);
    }
  }, [whichContent]);

  useEffect(() => {
    if (!isPending && !error && data) {
      const wordObj = data.find((el) => el.key === whichOne);
      if (wordObj) {
        setCorectWord(wordObj.content);
        setCorectWordObj(wordObj);
      } else {
        setCorectWord("");
        setCorectWordObj(null);
      }
    }
  }, [data, isPending, error, whichOne]);

  const onBlur = async () => {
    if (edited && ref.current) {
      const newText = ref.current.textContent;
      if (newText !== corectWord && corectWordObj) {
        await updateContent({
          id: corectWordObj.id,
          page: corectWordObj.page,
          key: corectWordObj.key,
          content: newText,
        });
        // Odśwież dane po update
        if (whichContent && fetchContent) {
          fetchContent(whichContent);
        }
      }
      setEdited(false);
    }
  };

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {!isPending && error && <p style={{ color: "red" }}>Błąd: {error}</p>}
      {!isPending && !error && (
        <>
          {isAdmin && isEditable && inEdit ? (
            <span
              onBlur={onBlur}
              onInput={() => setEdited(true)}
              ref={ref}
              suppressContentEditableWarning={true}
              contentEditable={true}
            >
              {corectWord}
            </span>
          ) : (
            <span>{corectWord || "Brak treści"}</span>
          )}
        </>
      )}
    </div>
  );
}
