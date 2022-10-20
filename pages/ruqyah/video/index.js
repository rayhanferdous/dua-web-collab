import Master from "../../../components/Layout/Master";
import CatContainer from "../../../components/Details/CatContainer";
import VideoList from "../../../components/Ruqyah/Video/VideoList";

const RuqyahVideoList = () => {
  return (
    <Master ns={true}>
      <CatContainer title={"Ruqyah Videos"} />
      <div className="scrl h-[calc(100vh_-_70px)]">
        <VideoList />
      </div>
    </Master>
  );
};

export default RuqyahVideoList;
