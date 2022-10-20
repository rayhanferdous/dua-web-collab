import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import localStorageFnc from "../../../dataStore/functions/localStorageFnc";
import NumCard from "../../Utils/NumCard";

const BookList = () => {
  const router = useRouter();
  const query = router.query;
  const bookId = query.book_id;
  const data = useSelector((state) => state.bookDetails.data);

  const [getBookChapter, setBookChapter] = useState([]);

  useEffect(() => {
    localStorageFnc(data, "getBookChapter", setBookChapter);
  }, [data]);

  return (
    <>
      <div className="mt-4 -mb-2 font-inter font-semibold text-lg text-title xs:mt-0  text-left">Dua Book Chapter:</div>
      <div
        className="grid grid-cols-3 my-8 gap-5 gap-y-4 xs:grid-cols-1 xs:gap-x-0 xs:gap-y-4 xs:mb-18 
sm:grid-cols-2">
        {getBookChapter &&
          getBookChapter?.result
            ?.filter((filterItem) => {
              return filterItem.book_id == bookId;
            })
            .map((item) => <NumCard link={"/#"} title={item.section_name} text={item.section_id} />)}
      </div>
    </>
  );
};

export default BookList;
