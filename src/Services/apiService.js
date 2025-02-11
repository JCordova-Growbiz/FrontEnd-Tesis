const API_URL = "https://localhost:44331/api/Conversation"

const apiRequest = async (endpoint, method = "GET", body = null) => {
    const options = {
        method,
        headers: { "Content-Type": "application/json" },
    };
    if(body){
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${API_URL}/${endpoint}`, options)
    if(!response.ok){
        const error = await response.json();
        throw new Error(error || "ERROR XD");
    }
    return response.json();
} 

export const createMessage =  (id, message) => apiRequest(`${id}/message`, "POST" , message); 