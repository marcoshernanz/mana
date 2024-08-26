import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export type TweetReplyType = {
  id: number;
  author: string;
  text: string;
  Liked: boolean;
};

interface TweetReplyProps {
  TweetReply: string;
  author: string;
}

export default function TweetReply({ TweetReply, author }: TweetReplyProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    if (isLoadingData) return;
    window.localStorage.setItem("Liked", JSON.stringify(isLiked));
  }, [isLiked, isLoadingData]);

  useEffect(() => {
    const Liked: boolean = JSON.parse(
      window.localStorage.getItem("Liked") ?? "false",
    );
    setIsLiked(Liked);
    setIsLoadingData(false);
  }, []);

  return (
    <div className="flex flex-col gap-2 border border-orange-500 bg-red-400 p-2">
      <div className="flex justify-end">
        <button onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? (
            <Heart size="20px" color="#ff0000" strokeWidth="3px" />
          ) : (
            <Heart size="20px" />
          )}
        </button>
      </div>
      <span>{TweetReply}</span>
      <span>{author}</span>
    </div>
  );
}
