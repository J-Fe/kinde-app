import PostsList from "@/components/posts-list";

export default function PostsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <PostsList />
    </div>
  );
}