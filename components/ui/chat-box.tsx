import React from "react";

interface ChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export const ChatBox: React.FC<ChatBoxProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div
      className="bg-white fixed bottom-28 right-8 z-50 w-80 rounded-2xl shadow-lg p-4 flex flex-col"
      data-testid='home-chat-box-id'
    >
      <div className="flex justify-between items-center">
        <span className="font-bold"></span>
        <button onClick={onClose} className="bg-none border-none text-2xl cursor-pointer">&times;</button>
      </div>
      <div className="p-2"></div>
      <input
        type="text"
        placeholder="Type a message..."
        className="p-2 rounded-xl border-1"
      />
    </div>
  );
};
