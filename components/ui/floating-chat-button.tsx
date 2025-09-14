import React from "react";
import Image from "next/image";

interface FloatingChatButtonProps {
  onClick: () => void;
}

export const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="bg-white fixed bottom-8 right-8 rounded-full shadow-lg border-none w-16 h-16 flex items-center justify-center cursor-pointer transition-shadow duration-200 hover:shadow-xl focus:outline-none"
    aria-label="Open chat"
    data-testid='home-chat-button-id'
  >
  <Image src="/icons/swords.svg" alt="Chat" width={32} height={32} />
  </button>
);
