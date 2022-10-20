import SubCatText from "../ui/SubCatText";

const SubCatList = () => {
  return (
    <div className="ml-6 border-l-2 border-dotted my-2 border-">
      <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
        <SubCatText text="1. What is Ruqyah" />
        <SubCatText text="2. Conditions for Ruqyah to be successful" />
        <SubCatText text="3. The Methode Of Ruqyah" />
      </div>
    </div>
  );
};
export default SubCatList;
