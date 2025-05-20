import { useState, useEffect, useRef } from "react";
import { useContent } from "../hooks/useContext/useContent";
import { useUserInfo } from "../hooks/useContext/useUserInfo";

export default function SingleWord({ whichOne, whichContent }) {
  const { data, isPending, error, fetchContent, updateContent } = useContent();
  const { isAdmin } = useUserInfo();
  const [corectWord, setCorectWord] = useState("");
  const [corectWordObj, setCorectWordObj] = useState({});
  const fetchedOnce = useRef(false);
  const [edited, setEdited] = useState(false);
  const text = corectWord;
  const inEdit = true;
  const ref = useRef();

  useEffect(() => {
    if (!fetchedOnce.current) {
      fetchContent(whichContent);
      fetchedOnce.current = true;
    }
  }, [fetchContent, whichContent]);

  useEffect(() => {
    if (!isPending && !error && data) {
      const wordObj = data.find((el) => el.key === whichOne);
      if (wordObj) {
        setCorectWord(wordObj.content);
        setCorectWordObj(wordObj);
      } else {
        setCorectWord(null);
        setCorectWordObj(null);
      }
    }
  }, [data, isPending, error, whichOne]);

  const onBlur = () => {
    if (edited) {
      const newText = ref.current.innerText;
      if (newText !== text) {
        updateContent({
          id: corectWordObj.id,
          page: corectWordObj.page,
          key: corectWordObj.key,
          content: newText,
        });
      }
      setEdited(false);
    }
  };

  return (
    <div>
      {isPending && <p>Loading...</p>}
      {data &&
        (isAdmin ? (
          !inEdit ? (
            <span>{corectWord}</span>
          ) : (
            <span
              onBlur={onBlur}
              onInput={() => setEdited(true)}
              ref={ref}
              suppressContentEditableWarning={true}
              contentEditable={true}
            >
              {corectWord}
            </span>
          )
        ) : (
          <span>{corectWord}</span>
        ))}
    </div>
  );
}
