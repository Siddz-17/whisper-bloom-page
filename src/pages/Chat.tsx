// src/pages/Chat.tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Download, Image as ImageIcon } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { toast } from '@/hooks/use-toast';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  image?: string;
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! Describe an image you\'d like me to generate.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImage = async (prompt: string) => {
    try {
      const response = await fetch('http://localhost:8000/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          model: "black-forest-labs/FLUX.1-dev"
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate image');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error generating image:', error);
      throw error;
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsGenerating(true);

    try {
      const result = await generateImage(input);
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: `Generated image: "${result.prompt}"`,
        image: result.image,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      toast({
        title: "Image Generated!",
        description: "Your image has been created successfully.",
      });

    } catch (error) {
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error while generating the image. Please try again.',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
      toast({
        title: "Generation Failed",
        description: "There was an error generating your image.",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (imageUrl: string, prompt: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `generated-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      
      <div className="flex-grow overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <Card className={`max-w-2xl ${
                message.role === 'user' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-background'
              }`}>
                <CardContent className="p-4">
                  <p className="text-sm mb-2">{message.content}</p>
                  
                  {message.image && (
                    <div className="mt-4">
                      <img
                        src={message.image}
                        alt="Generated"
                        className="max-w-full h-auto rounded-lg shadow-md"
                      />
                      <Button
                        onClick={() => handleDownload(message.image!, message.content)}
                        size="sm"
                        variant="outline"
                        className="mt-2"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  )}
                  
                  <p className="text-xs opacity-70 mt-2">
                    {message.timestamp.toLocaleTimeString()}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
          
          {isGenerating && (
            <div className="flex justify-start">
              <Card className="bg-background">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">Generating your image...</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      <div className="border-t bg-background p-4">
        <div className="max-w-4xl mx-auto flex space-x-4">
          <Input
            type="text"
            placeholder="Describe the image you want to generate..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow"
            disabled={isGenerating}
          />
          <Button 
            onClick={handleSend} 
            disabled={isGenerating || !input.trim()}
            size="lg"
          >
            {isGenerating ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <ImageIcon className="w-4 h-4" />
            )}
            Generate
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Chat;
