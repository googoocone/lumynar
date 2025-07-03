"use client";

// app/(chat)/page.tsx
import ChatFooter from "@/components/Discuss/ChatFooter";
import ChatHeader from "@/components/Discuss/ChatHeader";
import ChatInput from "@/components/Discuss/ChatInput";
import ChatMessage from "@/components/Discuss/ChatMessage";
import SuggestedPrompts from "@/components/Discuss/SuggestedPrompts";
// 실제 대화 데이터는 상태 관리 라이브러리 (Zustand, Zustand) 또는 React Context로 관리
// 여기서는 임시 데이터로 UI만 구성

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  avatar: string; // 프로필 이미지 URL
}

export default function ChatPage() {
  // 임시 메시지 데이터 (실제로는 동적으로 로드 및 업데이트)
  const messages: Message[] = [
    {
      id: "1",
      sender: "ai",
      text: "고객들이 열광하는 제품은, 그들의 진짜 문제를 말도 안 되게 잘 해결해주는 제품이야.",
      avatar: "/ai-avatar.jpg",
    },
    {
      id: "2",
      sender: "user",
      text: "예를 들어 어떤게 있을까요?",
      avatar: "/user-avatar.jpg",
    },
    {
      id: "3",
      sender: "ai",
      text: "에어비앤비 초기 창기 생각해보ㅏ—여행객들이 호텔 대신 진짜 집어 머물면서 돈도 아끼고, 현지 경험도 하게 해줬잖아.",
      avatar: "/ai-avatar.jpg",
    },
    {
      id: "4",
      sender: "ai",
      text: "또 하나, 노트북 들고 어디서든 일하고 싶은 사람들한테 워크아웃 사무실 걱정 잢 없애줬고.",
      avatar: "/ai-avatar.jpg",
    },
    {
      id: "5",
      sender: "ai",
      text: '둘 다 사람들이 "아, 이거 없으면 너무 불편해"라고 느낀 문제를 제대로 긁어주니까 폭발적으로 열광한 거지.',
      avatar: "/ai-avatar.jpg",
    },
  ];

  // 임시 제안 질문
  const suggestedPrompts = [
    "어떻게 내 비즈니스 가치를 극대화할 수 있을까?",
    "내 강점과 약점을 어떻게 분석하고 개선할까?",
  ];

  // 메시지 전송 핸들러 (실제 API 호출 로직은 여기에)
  const handleSendMessage = (text: string) => {
    console.log("메시지 전송:", text);
    // 여기에 Gemini API 호출 로직 및 대화 상태 업데이트 로직 추가
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatHeader userName="Alex Hormozi" />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            sender={msg.sender}
            text={msg.text}
            avatar={msg.avatar}
          />
        ))}
      </div>

      <div className="p-4 bg-white shadow-md">
        <SuggestedPrompts
          prompts={suggestedPrompts}
          onSelectPrompt={handleSendMessage}
        />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>

      <ChatFooter />
    </div>
  );
}
