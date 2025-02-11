function ChatPane() {
  return (
    <main>
      <div className="main-content">
        <div className="main-content-chat">
          <div className="main-content-chat-pane">
            <div className="main-content-chat-header">
              <p>¿En qué puedo ayudarte?</p>
            </div>

            <div className="main-content-chat-main">
              <form action="">
                <input type="text" placeholder="Envía un mensaje a ChatGPT" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ChatPane;
