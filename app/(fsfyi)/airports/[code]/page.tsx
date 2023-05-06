type Props = {
  params: { code: string };
};

export default async function AirportPage({ params }: Props) {
  return <>{params.code}</>;
}

// export async function getStaticPaths() {
//   const posts = getAllPosts(["slug"]);

//   return {
//     paths: posts.map((post) => {
//       return {
//         params: {
//           slug: post.slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
