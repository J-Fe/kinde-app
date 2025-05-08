import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800">
      <Link href="/" className="text-lg font-bold">
        Logo
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:underline">
              Posts
            </Link>
          </li>
          <li>
            <Link href="/create-post" className="hover:underline">
              Create Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;