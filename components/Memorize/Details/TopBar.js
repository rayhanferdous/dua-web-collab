import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetPlans } from "../../../dataStore/feature/MemorizePlanSlicer";

const TopBar = ({ key, dua, plan }) => {
  const [tick, setTick] = useState(dua.completed ? "greentick" : "tick");
  const language = useSelector(state => state.language.language);
  const plans = useSelector(state => state.memorizePlans.plans);

  const dispatch = useDispatch();

  const getNumberString = (number) => {
    if (language === "bn") {
      return number.toLocaleString("bn-BD");
    }
    return number;
  };

  const handleTick = () => {
    if (tick === "tick") {
      setTick("greentick");
      console.log(plan);
      const updatedPlanList = plans.map(planItem => {
        if (plan.id === planItem.id) {
          const newDuas = planItem.duas.map(duaItem => (
            duaItem.id === dua.id ? { ...duaItem, completed: true } : duaItem
          ))

          console.log(newDuas);
          const updatedPlan = { ...planItem, duas: newDuas };
          return updatedPlan;
        } else {
          return planItem;
        }
      })
      dispatch(SetPlans(updatedPlanList));
      localStorage.setItem("memorize_plans", JSON.stringify(updatedPlanList));
    } else {
      setTick("tick");
      const updatedPlanList = plans.map(planItem => {
        if (plan.id === planItem.id) {
          const newDuas = planItem.duas.map(duaItem => (
            duaItem.id === dua.id ? { ...duaItem, completed: false } : duaItem
          ))

          console.log(newDuas);
          const updatedPlan = { ...planItem, duas: newDuas };
          console.log(updatedPlan);
          return updatedPlan;
        } else {
          return planItem;
        }
      })
      dispatch(SetPlans(updatedPlanList));
      localStorage.setItem("memorize_plans", JSON.stringify(updatedPlanList));
    }
  };
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row  justify-start items-center ">
          {/* DuaName */}
          <p className=" font-inter text-lg">{`${getNumberString(dua.id)}. ${[eval(`dua.dua_name_${language}`)]}`} </p>
        </div>
        <img onClick={handleTick} className="stroke-cyan-500" src={`/assets/memorize/${tick}.svg`} alt="" />
      </div>
      <div class="w-full h-[1px] mt-5 bg-[#E2E2E2] dark:hidden"></div>
    </div>
  );
};

export default TopBar;
