import { ChevronDownIcon } from "lucide-react";

export type TweetType = {
  id: number;
  author: string;
  text: string;
  isLiked: boolean;
  replies: {
    author: string;
    text: string;
    isLiked: boolean;
  }[];
};

interface TweetProps {
  tweet: TweetType;
  isExpanded: boolean;
}

export default function Tweet({ isExpanded, tweet }: TweetProps) {
  return (
    <div>
      {/* Tweet */}
      <div>
        <button
        // onClick={} handle is expanded with expandedTweetId
        >
          <ChevronDownIcon />
        </button>
      </div>
      {isExpanded && (
        // Tweet replies with map
        // Create new component <TweetReply />
        <div></div>

        // WriteTweet (with parentTweetId = tweet.id)
      )}
    </div>
  );
}
