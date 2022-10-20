const InputButton = (props) => {
  return (
    <input
      className={`${props.style ?? " drop-shadow-"} w-40 h-10  font-inter text-ms cursor-pointer text-black xs:w-32 xs:h-11 xs:font-medium`}
      type="button"
      value={props.name}
    />
  );
};

export default InputButton;
