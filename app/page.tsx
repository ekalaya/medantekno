import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import RecentBlogs from '@/components/RecentBlogs';
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  const allPosts = getSortedPostsData();
  const recentPosts = allPosts.slice(0, 6);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Services />
      <RecentBlogs posts={recentPosts} />
      <Contact />
    </main>
  );
}
