import { useState,useRef,useEffect } from 'react'
import PropTypes from 'prop-types';
import propTypes from 'prop-types';
import { getArticleChatResponse } from '../api/article';


function ArticleChat({ articleItem }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: `Hello! I've read the summary of this paper.  What would you like to ask about it?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const messageclassNames = {
    assistant: "flex gap-3",
    user: "flex gap-3 flex-row-reverse",
    ui: "flex gap-3",
    user_failed: "flex gap-3 flex-row-reverse"
  }

  // Auto-scrolls to the bottom whenever a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {

      //cleanup ui messages
      let final_messages = messages.filter(msg => msg.role !== 'ui' && msg.role !== 'user_failed')
      final_messages = [...final_messages,userMessage]
      const data = await getArticleChatResponse(articleItem.id, final_messages)
      setMessages((prev) => [...prev, { role: 'assistant', content: data.content }]);
    } catch (error) {
      console.error("Error fetching chat response:", error);
      //setMessages((prev) => [...prev, { role: 'ui', content: "Error: Could not connect to server." }]);
      setMessages((prev) => {
        // 1. Create a shallow copy of the previous state array
        const updatedMessages = [...prev];

        // 2. Find the last message (which was the user message that just failed)
        // We loop backwards to ensure we find a 'user' message to modify safely
        for (let i = updatedMessages.length - 1; i >= 0; i--) {
          if (updatedMessages[i].role === 'user') {
            // 3. Update the role in place on the copy
            updatedMessages[i] = { 
              ...updatedMessages[i], 
              role: 'user_failed' 
            };
            break; // Stop once we've updated the latest one
          }
        }
        // 3. Append your UI error block to the remaining messages
        return [
          ...updatedMessages,
          { role: 'ui', content: "Error: Could not connect to server." }
        ];
    });
    } finally {
      setIsLoading(false);
    }
  };
  return (
        <>

      <div className="w-full md:w-1/3 flex flex-col">
        <div className="bg-surface-container-lowest border border-outline-blue rounded-xl flex flex-col h-[600px] sticky top-stack-gap shadow-sm">
          <div className="p-4 border-b border-outline-blue bg-surface-bright rounded-t-xl flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">smart_toy</span>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-tertiary">Ask about this paper</h3>
              <p className="font-meta-sm text-meta-sm text-on-surface-variant">AI Research Assistant</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-surface-container-low">
            {messages.map((message, index) => {
              //grey out failed messages
              const isGreyedOut = message.role === 'ui' || message.role === 'user_failed';

              return (
              <div key={index} className={`${messageclassNames[message.role]}`}>
                
                {/* Assistant Avatar */}
                {(message.role === 'assistant'|| message.role === 'ui') && (
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-on-secondary-container text-[18px]">smart_toy</span>
                  </div>
                )}

                {/* User Avatar */}
                {(message.role === 'user'|| message.role === 'user_failed') && (
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-white text-[18px]">person</span>
                  </div>
                )}  

                {/* Message Bubble - Tail changes depending on the sender */}
                <div className={`bg-surface-container-lowest border border-outline-blue p-3 max-w-[85%] ${
                  (message.role === 'assistant' || message.role === 'ui')? 'rounded-xl rounded-tl-none' : 'rounded-xl rounded-tr-none'
                } ${isGreyedOut ? 'opacity-60 select-none' : ''}`}>
                  <p className="font-body-md text-body-md text-on-surface">{message.content}</p>
                </div> 
              </div>
            )})}


                
          </div>
                
                <div className="p-4 border-t border-outline-blue bg-surface-bright rounded-b-xl">
                <div className="flex gap-2">
                  <input id="userinput" className="flex-1 bg-surface-container-lowest border border-outline-blue rounded px-3 py-2 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Ask a question..." type="text" onChange={(e) => setInput(e.target.value)} value={input}  />
                  <button className="bg-primary text-on-primary p-2 rounded flex items-center justify-center hover:bg-primary-container transition-colors"
                  disabled={isLoading} onClick={handleSendMessage}>
                    <span className="material-symbols-outlined">send</span>
                  </button>
                </div>
                <div className="mt-2 flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
                  <button className="shrink-0 bg-[#E1E9F0] text-[#4A6B8A] px-3 py-1 rounded-full font-meta-sm text-meta-sm hover:bg-outline-variant transition-colors whitespace-nowrap" onClick={(e) => setInput('Summarize findings')}>Summarize findings</button>
                  <button className="shrink-0 bg-[#E1E9F0] text-[#4A6B8A] px-3 py-1 rounded-full font-meta-sm text-meta-sm hover:bg-outline-variant transition-colors whitespace-nowrap" onClick={(e) => setInput('Explain methodology')}>Explain methodology</button>
                </div>
              </div>
               
        </div>
      </div>


      </>
    )
}


ArticleChat.propTypes = {
  articleItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author : PropTypes.string,
    score : PropTypes.number.isRequired,
    days : PropTypes.string,
    category : PropTypes.string,
    abstract : propTypes.string.isRequired

  }).isRequired,
};
export default ArticleChat
