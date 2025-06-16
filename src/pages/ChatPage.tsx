
import React from 'react';
import { AnthropicChat } from '@/components/AnthropicChat';

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-4">
            AI Chat Assistant
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chat with Claude, Anthropic's AI assistant. Ask questions, get help with tasks, or have a conversation.
          </p>
        </div>
        <AnthropicChat />
      </div>
    </div>
  );
};

export default ChatPage;
