type WriteTweetType = {
  parentTweetId: number | null; // Null means it isn't a reply
  author: string;
  text: string;
};

/*
Things to store in local storage:
- ParentTweetId
- Author
- Text
*/

export default function WriteTweet() {}
