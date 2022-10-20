const PageTitle = ({ props }) => {
  return (
    <div className="text-left flex items-center">
      {props.back && (
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <img src="/assets/others/backBtn.svg" alt="" />
            <p className="font-inter text-xl "> {props.back}</p>
            <div className="font-poppins ml-6 text-2xl ">{props.title}</div>
          </div>
          {props.subtitle && (
            <div className="flex flex-row w-full justify-center items-center">
              <img className="mx-1" src="/assets/forwardBtn.svg" alt="" />
              <span className="font-poppins  text-xl text-text-title ">{props.subtitle}</span>
            </div>
          )}
        </div>
      )}

      {!props.back && (
        <div>
          <h1 className="text-2xl ">{props.title}</h1>
          <p className="text-sm text-mute-grey-200 ">{props.subtitle}</p>
        </div>
      )}
    </div>
  );
};

export default PageTitle;
