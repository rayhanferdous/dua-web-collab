import Master from "../components/Layout/Master";
import ContactUs from "../components/Setting/ContactUs/Home";

const Contact = () => {
  return (
    <Master>
      <div className="scrl h-[calc(100vh-100px)] xs:pb-12 sm:pb-12 md:pt-24 md:pb-10 lg:pt-24 lg:pb-10 2xl:pb-10">
        <ContactUs />
      </div>
    </Master>
  );
};

export default Contact;
