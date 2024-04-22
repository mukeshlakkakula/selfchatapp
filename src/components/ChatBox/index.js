import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import { IoMdContacts } from "react-icons/io";
import { v4 as uuidv4 } from "uuid";
import { CiPaperplane } from "react-icons/ci";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

function ChatBox() {
  let employess = [
    "Alan",
    "Bob",
    "Carol",
    "Dean",
    "Elin",
    "Alan",
    "Bob",
    "Carol",
    "Dean",
    "Elin",
  ];
  let [chat, setChat] = useState([]);
  let [text, setText] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const addEmoji = (emoji) => {
    setText(text + emoji.native);
  };
  let timeOf = new Date();
  let newObj = {
    nameEm: employess[Math.floor(Math.random() * 10)],
    time: timeOf.toLocaleTimeString(),
    id: uuidv4(),
    text: text,
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      // Scroll to the bottom of the chat container
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chat]);

  let lenghtOfVal = chat.length;
  console.log(newObj.nameEm[0]);
  let mappOF = chat.map((each) => (
    <div className="mapContainer" key={each.id}>
      <div>
        <h4 className="bg-info p-4 rounded-circle">{each.nameEm[0]}</h4>
      </div>
      <div>
        <h4>
          {each.nameEm} <span className="fs-6 text-secondary">{each.time}</span>
        </h4>
        <div className="textContainer">
          <p>{each.text}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="w-100 fullChatContainer">
      <div className="d-flex w-100 justify-content-between p-3 align-items-center pb-0">
        <div>
          <h5>Introductions</h5>
          <p>This Channel is For Company Wide Chatter </p>
        </div>
        <div>
          <p>
            {lenghtOfVal}/100 <IoMdContacts />
          </p>
        </div>
      </div>
      <hr className="m-0" />
      {/* Chat box */}
      <div className="chatboxcontainer " ref={chatContainerRef}>
        {mappOF}
        <div className={showEmojiPicker ? "d-block " : "d-none"}>
          {showEmojiPicker && (
            <Picker
              className="picker m-2"
              data={data}
              previewPosition="none"
              onEmojiSelect={addEmoji}
              style={{ position: "absolute", bottom: "50px", right: "10px" }}
            />
          )}
        </div>
      </div>

      <div>
        <form
          className="d-flex w-100"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            className="w-75 p-2 mr-3"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            type="button"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            😀
          </button>
          <button
            onSubmit={(e) => {
              e.preventDefault();
            }}
            type="submit"
            className="btn btn-primary d-flex align-items-center justify-content-center"
            onClick={() => {
              setChat((prevItems) => [...prevItems, newObj]);
              setText("");
              setShowEmojiPicker(false);
            }}
          >
            <CiPaperplane />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBox;
