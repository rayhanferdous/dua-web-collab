import Page from "../../Page";
import CommentSection from "../../Widget/CommentSection/CommentSection";
import PostCard from "./PostCard";
import RelatedBlogs from "./RelatedBlogs";

const BlogDetails = () => {
  return (
    <Page
      title="Blog Page"
      back="Back"
      home={
        <>
          <PostCard />
          <CommentSection />
          <RelatedBlogs />
        </>
      }
    />
  );
};

export default BlogDetails;
