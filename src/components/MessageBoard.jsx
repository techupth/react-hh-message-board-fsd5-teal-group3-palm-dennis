import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  function addMessage() {
    if (!message) {
      return;
    }
    setMessageList([...messageList, message]);
    setMessage("");
  }

  function removeMessage(index) {
    setMessageList(messageList.filter((item, i) => index !== i));
  }
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message here"
          />
        </label>
        <button onClick={addMessage} className="submit-message-button">
          Submit
        </button>
      </div>
      <div className="board">
        {messageList.map((item, i) => {
          return (
            <div key={i} className="message">
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => removeMessage(i)}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
