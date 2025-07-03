// app/(chat)/components/ChatMessage.tsx

import Image from "next/image";

interface ChatMessageProps {
  sender: "user" | "ai";
  text: string;
  avatar: string;
}

export default function ChatMessage({
  sender,
  text,
  avatar,
}: ChatMessageProps) {
  const isUser = sender === "user";
  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} items-start`}
    >
      {!isUser && (
        <Image
          width={40}
          height={40}
          src="/USAChina.png"
          alt="AI Avatar"
          className="w-8 h-8 rounded-full mr-2 object-cover"
        />
      )}
      <div
        className={`max-w-[70%] p-3 rounded-lg ${
          isUser
            ? "bg-[#31394D] text-white rounded-br-none"
            : "bg-gray-200 text-gray-800 rounded-bl-none"
        }`}
      >
        <p className="text-sm">{text}</p>
      </div>
      {isUser && (
        <Image
          width={40}
          height={40}
          src={avatar}
          alt="User Avatar"
          className="w-8 h-8 rounded-full ml-2 object-cover"
        />
      )}
    </div>
  );
}
