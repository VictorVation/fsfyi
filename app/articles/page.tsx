import MoreStories from "@/components/posts/more-stories";
import HeroPost from "@/components/posts/hero-post";
import { getAllPosts } from "@/lib/api";

export default async function ArticlesPage() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mb-16 md:mb-12">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8">
          Latest Articles
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Your comprehensive guide, from ground school to the flight deck.
        </h4>
      </section>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </>
  );
}
