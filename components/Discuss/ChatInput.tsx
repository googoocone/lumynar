// app/(chat)/components/ChatInput.tsx
"use client"; // 클라이언트 컴포넌트로 지정

import React, { useState } from "react";

interface ChatInputProps {
  onSendMessage: (text: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSendMessage(inputText);
      setInputText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Enter 키로 새 줄이 만들어지는 것을 방지
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end space-x-2">
      <textarea
        className="flex-1 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        placeholder="Explore your curiosity..."
        rows={1} // 초기 높이
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{ minHeight: "42px", maxHeight: "150px" }} // 최소/최대 높이 설정
      />
      <button
        type="submit"
        className="p-3 bg-[#FF7F50] text-white rounded-lg hover:bg-[#FF6B34] focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-center"
        aria-label="Send message"
      >
        <span className="font-semibold mr-1">Send</span>
        <span>→</span>
      </button>
    </form>
  );
}
