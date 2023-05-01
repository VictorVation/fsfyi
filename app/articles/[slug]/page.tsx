import PostBody from "@/components/posts/post-body";
import PostHeader from "@/components/posts/post-header";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import type PostType from "@/interfaces/post";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export default async function ArticlePage({ params }: Props) {
  const postData = getPostBySlug(params.slug);

  const content = await markdownToHtml(postData.content || "");
  return (
    <>
      <article className="prose-sm prose-ol:list-decimal lg:prose-xl mx-auto">
        <PostHeader
          title={postData.title}
          coverImage={postData.coverImage}
          date={postData.date}
          author={postData.author}
        />
        <PostBody content={content} />
        <Link
          className="text-sky-500 underline text-sm py-4"
          href={"/articles"}
        >
          ← Back to All Articles
        </Link>
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
