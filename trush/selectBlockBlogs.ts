// "use server";

// import { BlogPostType } from "@/app/app/blog/page";
// import getSession from "../auth/getSession";
// import selectBlogs from "@/database/queries/blog/selectBlogs";

// interface selectBlockBlogsProps {
//   numBlogsPerBlock: number;
//   blockNumber: number;
//   orderBy: "date" | "likes";
//   descending: boolean;
// }

// export default async function selectBlockBlogs({
//   numBlogsPerBlock,
//   blockNumber,
//   orderBy,
//   descending,
// }: selectBlockBlogsProps): Promise<BlogPostType[]> {
//   const session = await getSession();
//   if (!session) throw new Error("User not logged in");

//   const blogs = await selectBlogs({
//     numBlogs: numBlogsPerBlock,
//     offset: numBlogsPerBlock * (blockNumber - 1),
//     orderBy,
//     descending,
//   });

//   const formattedBlogs = blogs.map((blog) => ({
//     id: blog.blogs.id,
//     title: blog.blogs.title,
//     content: blog.blogs.content,
//     tags: blog.blogs.tags,
//     isRead: blog.blogs.isRead,
//     pageNumber: blog.blogs.pageNumber,
//     author: blog.users?.name as string,
//   }));

//   return formattedBlogs;
// }
