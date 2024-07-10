import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';

interface Message {
  role: 'user' | 'ai';
  content: string;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', content: "Hello! I'm your AI health assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === '') return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: input }]);

    // Simulate AI response (replace this with actual AI integration)
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', content: `I understand you're experiencing "${input}". Can you provide more details about when these symptoms started and if you have any other accompanying symptoms?` }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="w-full mx-auto p-6 bg-blue-500 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white">AI Health Assistant</h2>
      <ScrollArea className="h-[400px] mb-4 p-4 border rounded-md bg-white">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.role === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                message.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your symptoms or ask a health question..."
          className="flex-grow"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}