export interface Post {
  postid: number
  postby: string
  title: string
  excerpt: string
  content: string
  postat: string
}

export interface CreatePostOption {
  userid: string
  post: Post
}

export interface GetPostOption {
  postid?: number
  title?: string
}
