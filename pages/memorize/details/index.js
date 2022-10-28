import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import Master from "../../../components/Layout/Master";
import MemorizeDetails from "../../../components/Memorize/Details/DetailsCard";

const MyApp = () => {
  const [currentPlan, setCurrentPlan] = useState();
  const plans = useSelector(state => state.memorizePlans.plans);

  const router = useRouter();

  useState(() => {
    if (plans.length > 0) {
      const { plan } = router.query;
      setCurrentPlan(plans[plan]);
    }
  }, [])

  return (
    <Master>
      <div className="scrl h-[calc(100vh_-_100px)] 
      xs:pb-10
      sm:pb-10
      md:pt-24 md:pb-5
      lg:pt-24 lg:pb-5
      xl:pb-16
      2xl:pb-16
      3xl:pb-16">
        {
          currentPlan?.duas.map((dua, index) => (
            <MemorizeDetails key={index} dua={dua} plan={currentPlan} />
          ))
        }
        {/* <MemorizeDetails /> */}
      </div>
    </Master>
  );
};

export default MyApp;
