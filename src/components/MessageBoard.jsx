import { useState } from "react";

function MessageBoard() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  const addMessage = () => {
    setMessageList([...messageList, message]);
    setMessage("");
    setIsValid(false);
  };
  const deleteMessage = (i) => {
    messageList.splice(i, 1);
    setMessageList([...messageList]);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              message ? setIsValid(true) : setIsValid(false);
            }}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={addMessage}
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
      <div className="board">
        {messageList.map((item, i) => {
          return (
            <div className="message" key={i}>
              <h1>{item}</h1>
              <button
                className="delete-button"
                onClick={() => {
                  deleteMessage(i);
                }}
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
