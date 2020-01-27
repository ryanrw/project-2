export interface Post {
  title: string
  excerpt: string
  content: string
}

export interface CreatePostOption {
  userid: string
  post: Post
}
