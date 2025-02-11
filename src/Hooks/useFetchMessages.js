import { useState, useEffect } from "react";
import {createMessage} from '../Services/apiService.js'

export const useFetchMessages = (conversationId) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!conversationId) return; 
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://localhost:44331/api/Conversation/${conversationId}/messages`
        );
        if (!response.ok) {
          throw new Error("Error al recuperar los mensajes");
        }
        const data = await response.json();
        setMessages(data);
        setError(null); 
      } catch (err) {
        setError(err.message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [conversationId]); 


  const addMessage = async (newMessage, id) => {
    try {
      const message = await createMessage(newMessage, id);
      setMessages(prevMessage => [...prevMessage, message])
    } catch (error) {
      console.error(error)
    }
  }

  return { messages, addMessage, isLoading, error };
};