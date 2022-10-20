import Master from "../../../components/Layout/Master";
import Support from "../../../components/Setting/SupportUs/Support";

const DonationPage = () => {
  return (
    <Master>
      <div className="scrl h-[calc(100vh_-_100px)] xs:pb-20 sm:pb-20 md:pt-24 md:pb-10 lg:pt-24 lg:pb-10">
        <Support support={true} />
      </div>
    </Master>
  );
};

export default DonationPage;
