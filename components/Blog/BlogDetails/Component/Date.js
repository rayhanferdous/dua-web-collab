const Date = ({ cat, date }) => {
  return (
    <p className="text-sm font-medium text-mute-grey-200 my-5 text-left ">
      <span>{cat}</span> | <span>{date}</span>
    </p>
  );
};

export default Date;
