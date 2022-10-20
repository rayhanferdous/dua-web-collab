import VideoList from "./VideoList";
import CatContainer from "./CatContainer";
import Page from "../../Page";

const RuqyahVideo = ({ title, subtitle }) => {
  return (
    <Page
      ns={true}
      title={title}
      subtitle={subtitle}
      home={
        <>
          <CatContainer />
          <VideoList />
        </>
      }
    />
  );
};

export default RuqyahVideo;
