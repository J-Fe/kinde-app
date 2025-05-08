export default function CreatePostPage() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Create Post</h1>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Post Title"
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Post Content"
            className="border p-2 rounded h-32"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }