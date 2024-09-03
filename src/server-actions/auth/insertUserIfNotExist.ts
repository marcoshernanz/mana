// // server-actions/twitter/insertUser.ts

// import { db } from "@/database/db";


// export async function insertUserIfNotExist(userId: string, name: string) {
//   // Check if user exists
//   const existingUser = await db("twitterTable").where({ userId }).first();
//   if (!existingUser) {
//     // Insert new user
//     await db("twitterTable").insert({ userId, name });
//   }
// }
