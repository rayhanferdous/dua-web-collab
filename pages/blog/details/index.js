import Master from "../../../components/Layout/Master";
import PostCard from "../../../components/Blog/BlogDetails/PostCard";
import CommentSection from "../../../components/Widget/CommentSection/CommentSection";
import RelatedBlogs from "../../../components/Blog/BlogDetails/RelatedBlogs";

const MyApp = () => {
  return (
    <Master>
      <PostCard />
      <CommentSection />
      <RelatedBlogs />
    </Master>
  );
};

export default MyApp;
