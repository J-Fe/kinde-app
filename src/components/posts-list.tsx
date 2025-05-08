import Link from "next/link";

async function fetchPosts() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return data.posts;
}

const PostsList = async () => {
  const posts = await fetchPosts();

  return (
    <ul className="list-disc pl-5">
      {posts.map((post: { id: number; title: string }) => (
        <li key={post.id}>
          <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;