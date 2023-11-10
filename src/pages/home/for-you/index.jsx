import { posts } from "~/mock/posts";
import Post from "~/components/post";

export default function ForYou() {
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
      for you
    </>
  );
}
