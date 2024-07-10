import { notFound } from 'next/navigation';

const blogPosts = {
  '1': { title: 'First Post', content: 'This is the first post content.' },
  '2': { title: 'Second Post', content: 'This is the second post content.' },
};

export default function BlogDetails({ params }) {
  const { id } = params;
  const post = blogPosts[id];

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((id) => ({ id }));
}
