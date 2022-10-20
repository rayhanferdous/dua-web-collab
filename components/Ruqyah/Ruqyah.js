import Page from "../Page";
import Category from "./Category/Category";
const Ruqyah = () => {
  return (
    <Page
      title="Ruqyah Page"
      subtitle="All ruqyahs is available in this page"
      home={
        <>

          <Category />
        </>
      }
    />
  );
};

export default Ruqyah;
