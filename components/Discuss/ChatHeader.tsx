// app/(chat)/components/ChatHeader.tsx

interface ChatHeaderProps {
  userName: string;
}

export default function ChatHeader({ userName }: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        {/* 프로필 이미지 (임시) */}
        <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-bold text-sm">
          A
        </div>
        <h1 className="text-lg font-semibold text-gray-800">{userName}</h1>
      </div>
      <button className="text-gray-500 hover:text-gray-700 text-xl font-bold">
        X
      </button>
    </header>
  );
}
