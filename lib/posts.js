import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter(f => f.endsWith('.md'))
    .map(fileName => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      return { id, ...matterResult.data }
    })
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.filter(f => f.endsWith('.md')).map(fileName => ({
    params: { id: fileName.replace(/\.md$/, '') }
  }))
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const { remark } = await import('remark')
  const html = await import('remark-html')
  const processedContent = await remark().use(html.default).process(matterResult.content)
  const contentHtml = processedContent.toString()
  return { id, contentHtml, ...matterResult.data }
}
