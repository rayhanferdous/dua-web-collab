import Master from "../components/Layout/Master";
import SearchList from "../components/Search/SearchList";

const MyApp = () => {
  return (
    <Master>
      <div className="scrl h-[calc(100vh_-_10px)]">
        <SearchList />
      </div>
    </Master>
  );
};

export default MyApp;
