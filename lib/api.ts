import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Author from '@/interfaces/author'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

//
// [
//     "title",
//     "date",
//     "slug",
//     "author",
//     "content",
//     "ogImage",
//     "coverImage",
//   ]

type PostData = { 
  title: string
  slug: string
  author: Author
  coverImage: string,
  date: string,
  content: string,
}

export function getPostBySlug(slug: string, fields: string[] = []): PostData {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Ensure only the minimal needed data is exposed
  // fields.forEach((field) => {
  //   if (field === 'slug') {
  //     items[field] = realSlug
  //   }
  //   if (field === 'content') {
  //     items[field] = content
  //   }

  //   if (typeof data[field] !== 'undefined') {
  //     items[field] = data[field]
  //   }
  // })

  return {
    title: data['title'],
    slug: realSlug,
    author: {
      name: data['author']['name'],
      picture: data['author']['picture']},
    coverImage: data['coverImage'],
    date: data['date'],
    content: content,
  }
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}
