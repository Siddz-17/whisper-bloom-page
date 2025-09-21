import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import placeholderImage from "@/public/placeholder.svg";

const Chat = () => {
  const [messages, setMessages] = useState<{ role: string; content: string; image?: string }[]>([
    { role: "assistant", content: "Hello! How can I help you generate an image today?" }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);
      // Simulate AI response (replace with actual API call later)
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { 
          role: "assistant", 
          content: `Generated image based on: ${input}`,
          image: placeholderImage, // Placeholder image
        }]);
      }, 500);
      setInput('');
    }
  };

  const handleDownload = () => {
    // Simulate image download
    const link = document.createElement('a');
    link.href = placeholderImage;
    link.download = 'generated_image.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header />
      <div className="flex-grow overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 p-3 rounded-lg ${message.role === 'user' ? 'bg-blue-100 text-right' : 'bg-white'}`}>
            <p>{message.content}</p>
            {message.image && (
              <div className="mt-2">
                <img src={message.image} alt="Generated Image" className="max-w-full h-auto rounded-md" />
                <Button onClick={handleDownload} className="mt-2">Download Image</Button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="p-4 flex space-x-2">
        <Input
          type="text"
          placeholder="Enter your image description..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Chat;
