import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetPlans } from "../../../dataStore/feature/MemorizePlanSlicer";
import SelectOption from "../BookmarkPopup/SelectOption";
import PopupBtn from "../PopupBtn";
import CreateNew from "./CreateNew";

function PopupCont({ onClose, dua }) {
  const plans = useSelector(state => state.memorizePlans.plans);
  const [selectedPlan, setSelectedPlan] = useState({})
  const [newPlan, setNewPlan] = useState({})

  const dispatch = useDispatch();

  let lastId = 0;

  const addPlan = () => {
    if (Object.keys(newPlan).length !== 0) {
      plans.forEach(element => {
        lastId = Math.max(element.id, lastId);
      });
      newPlan.id = lastId + 1;
      newPlan.duas = [dua,];
      newPlan.targetDays = Math.max(Math.min(newPlan.targetDays, 30), 1);
      const updatedPlans = [...plans, newPlan];
      localStorage.setItem("memorize_plans", JSON.stringify(updatedPlans));
      dispatch(SetPlans(updatedPlans));
      setNewPlan({});
    } else if (Object.keys(selectedPlan).length !== 0) {
      const currentPlan = { ...selectedPlan };
      console.log(currentPlan);
      currentPlan.duas = [...currentPlan.duas, dua];
      const updatedPlans = plans.map(plan => plan.id === selectedPlan.id ? currentPlan : plan);
      localStorage.setItem("memorize_plans", JSON.stringify(updatedPlans));
      dispatch(SetPlans(updatedPlans));
      setSelectedPlan({});
    }
    onClose();
  }

  useEffect(() => {
    dispatch(SetPlans(JSON.parse(localStorage.getItem("memorize_plans")) || [{ id: 0, name: "Favorites", targetDays: 5, duas: [] },]))
  }, [selectedPlan, newPlan])

  return (
    <div className="mx-8">
      <SelectOption selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <CreateNew newPlan={newPlan} setNewPlan={setNewPlan} />
      <PopupBtn onClose={onClose} addPlan={addPlan} setNewPlan={setNewPlan} />
    </div>
  );
}

export default PopupCont;
