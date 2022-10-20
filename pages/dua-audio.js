import Slider from "../components/Audio/Slider";
import PlayList from "../components/Audio/PlayList";
import Master from "../components/Layout/Master";

const MyApp = () => {
  return (
    <Master>
      <Slider />
      <PlayList />
    </Master>
  );
};

export default MyApp;
