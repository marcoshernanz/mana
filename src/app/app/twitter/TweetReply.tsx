// export type TweetReply = {
//   id: number;
//   author: string;
//   text: string;
// };

interface TweetReplyProps {
  TweetReply: string;
  author: string;
}

export default function TweetReply({ TweetReply, author }: TweetReplyProps) {
  return (
    <div className="flex flex-col gap-2 border border-orange-500 bg-red-400 p-2">
      <span>{TweetReply}</span>
      <span>{author}</span>
    </div>
  );
}
