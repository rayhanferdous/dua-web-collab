import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Master from "../../components/Layout/Master";
import Card from "../../components/Memorize/Card";
import { SetPlans } from "../../dataStore/feature/MemorizePlanSlicer";

const MyApp = () => {
  const language = useSelector(state => state.language.language);
  const plans = useSelector(state => state.memorizePlans.plans);
  const dispatch = useDispatch();

  const getElpasedDays = (date1, date2) => {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  const getCompleted = (plan) => {
    return plan.duas.filter(dua => dua.completed).length;
  }

  const getPercentage = (plan) => {
    const completed = getCompleted(plan);
    const total = plan.duas.length;
    console.log(completed, total, Math.floor((completed / total) * 100));
    return Math.floor((completed / total) * 100);
  }

  const getNumberString = (number) => {
    if (language === "bn") {
      return number.toLocaleString("bn-BD");
    }
    return number;
  };

  useEffect(() => {
    dispatch(SetPlans(JSON.parse(localStorage.getItem("memorize_plans")) || []))
  }, [])

  return (
    <Master>
      <div className="scrl h-[calc(100vh_-_80px)] md:pt-24 lg:pt-24">
        <h5 className="font-medium text-lg text-[#373737] flex justify-start mb-4 ">{language === "bn" ? "মুখস্থ" : "Memorize Plan List:"}</h5>
        <div
          className="grid mb-6 gap-x-6 gap-y-4 
        xs:gap-y-3 xs:pb-10
        sm:grid-cols-2 sm:gap-x-4 sm:pb-10
        md:grid-cols-2 md:gap-x-4 md:pb-8
        lg:grid-cols-3 lg:pb-10
        xl:grid-cols-3 xl:pb-16
        2xl:grid-cols-3 2xl:pb-16
        3xl:grid-cols-3 3xl:pb-16">
          {
            plans.map(plan => (
              <Card id={plan.id} name={plan.name} selected={plan.duas.length} remaining={(plan.targetDays - getElpasedDays(Date.parse(plan.createdAt), new Date())) + 1} completed={`${getNumberString(getCompleted(plan))}/${getNumberString(plan.duas.length)}`} percentage={getPercentage(plan)} />
            ))
          }
        </div>
      </div>
    </Master>
  );
};

export default MyApp;
