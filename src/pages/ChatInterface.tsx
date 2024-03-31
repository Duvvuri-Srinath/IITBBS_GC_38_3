import React, { useState, useEffect, useRef } from 'react';
import { BsFillQuestionCircleFill } from 'react-icons/bs';
import { BackgroundBeams } from '../components/ui/background-beams';
import Header from '../components/Header';
import logo from '../assets/IITBBS_Logo.png';


const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Array<{ sender: string; content: string }>>([]);
  const [input, setInput] = useState('');
  const [showPrompts, setShowPrompts] = useState(false);
  const endOfMessagesRef = useRef<null | HTMLDivElement>(null);

  const sendMessage = (content: string) => {
    setMessages((prevMessages) => [...prevMessages, { sender: 'user', content }]);
    setInput('');
  };

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const samplePrompts = [
    "What are the library hours?",
    "How can I apply for scholarships?",
    "Who is the head of the Computer Science department?"
  ];

  return (
    <div className="h-screen w-full flex flex-col items-center justify-between bg-neutral-950 relative antialiased">
      <Header showPrompts={showPrompts} togglePrompts={() => setShowPrompts(!showPrompts)} />
      <div className="w-full max-w-2xl mx-auto p-4 z-10 flex flex-col h-full justify-between">
        <div className="flex-grow overflow-auto p-4 space-y-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg p-2 ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
                {message.content}
              </div>
            </div>
          ))}
          <div ref={endOfMessagesRef} />
        </div>
        <div className="p-4 border-t-2 border-gray-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (input.trim() !== '') {
                sendMessage(input);
              }
            }}
            className="flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500 bg-transparent text-neutral-200"
            />
            <button
              type="submit"
              disabled={input.trim() === ''}
              className={`bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 focus:outline-none ${input.trim() === '' ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default ChatInterface;