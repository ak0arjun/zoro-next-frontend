"use client"
/**
 * Dashboard page UI
 * 
 */
import { FloatingChatButton } from "../../components/ui/floating-chat-button";
import { ChatBox } from "../../components/ui/chat-box";
import { useState } from "react";

export default function Home() {
    const [chatOpen, setChatOpen] = useState(false);
    return (
        <>
            <FloatingChatButton onClick={() => setChatOpen(true)} />
            <ChatBox open={chatOpen} onClose={() => setChatOpen(false)} />
        </>
    );
}