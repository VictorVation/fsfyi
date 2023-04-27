import PostBody from "@/components/posts/post-body";
import Header from "@/components/posts/header";
import PostHeader from "@/components/posts/post-header";
import Layout from "@/components/posts/layout";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import PostTitle from "@/components/posts/post-title";
import markdownToHtml from "@/lib/markdownToHtml";
import type PostType from "@/interfaces/post";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  params: { slug: string };
};

export default async function Post({ morePosts, preview, params }: Props) {
  const postData = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(postData.content || "");
  const post = { ...postData, content };
  return (
    <>
      <article className="prose-sm prose-ol:list-decimal lg:prose-xl mx-auto">
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
