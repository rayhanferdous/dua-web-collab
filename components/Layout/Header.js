import LoginButton from "../Setting/UserProfile/LoginButton";
import PageTitle from "./Component/PageTItle";
import SearchBox from "./Component/SearchBox";

function Header(props) {
  return (
    <div className={` ${props.ns ? 'xl:ml-[11%] 2xl-min:ml-[8.8%] w-[92%] transition-transform duration-500 transform ' : ""} hidden xl:block 2xl:block 3xl:block`}>
      <div className="grid grid-cols-[78%,23%]">
      <div className={`flex flex-row justify-between`}>
        <PageTitle props={props} />
        <SearchBox hint={props.hint} />
      </div>
        <LoginButton setIsOpen={props.setIsOpen} />
      </div>
      
    </div>
  );
}

export default Header;
