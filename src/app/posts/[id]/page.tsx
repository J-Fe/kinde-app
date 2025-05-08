async function fetchPost(id: string) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export default async function PostDetail({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}