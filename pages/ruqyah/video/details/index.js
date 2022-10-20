import Master from "../../../../components/Layout/Master";
import VideoList from "../../../../components/Ruqyah/VideoDetails/VideoList";
import VideoPlayer from "../../../../components/Ruqyah/VideoDetails/VideoPlayer";
import CommentSection from "../../../../components/Widget/CommentSection/CommentSection";

const MyApp = () => {
  return (
    <Master>
      <div className="grid gap-4 sm:relative xl:grid-cols-[70%,1fr] 2xl:grid-cols-[70%,1fr]  3xl:grid-cols-[70%,1fr] scrl h-[calc(100vh_-_100px)]">
        <div className="">
          <VideoPlayer />
          <CommentSection />
        </div>
        <VideoList />
      </div>
    </Master>
  );
};

export default MyApp;
