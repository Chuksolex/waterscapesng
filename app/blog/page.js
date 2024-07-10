import Link from 'next/link';

const blogPosts = [
  { id: '1', title: 'First Post' },
  { id: '2', title: 'Second Post' },
];

export default function BlogList() {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
