import Card from "./Card";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import localStorageFnc from "../../dataStore/functions/localStorageFnc";

const Cards = () => {
  const data = useSelector((state) => state.books.data);
  const [getBookName, setBookName] = useState([]);

  useEffect(() => {
    localStorageFnc(data, "getBookName", setBookName);
  }, [data]);

  const style =
    "grid mt-6 mb-6 gap-x-4 gap-y-4 xs:grid-cols-2 xs:mt-2 xs:mb-11 xs:px-1 xs:gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-5 3xl:grid-cols-5 sm:mt-6";
  return (
    <>
      <div className={style}>
        {getBookName && getBookName?.result?.map((item) => <Card bookId={item._id} bookName={item.book_name} bookSource={item.writter} />)}
      </div>
    </>
  );
};

export default Cards;
