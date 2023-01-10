import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😄": "smiley",
  "😀": "grinning",
  "😊": "blush",
  "☺": "relaxed",
  "😉": "wink",
  "😍": "heart_eyes",
  "😘": "kissing_heart",
  "😚": "kissing_closed_eyes",
  "😗": "kissing",
  "😙": "kissing_smiling_eyes",
  "😜": "stuck_out_tongue_winking_eye",
  "😝": "stuck_out_tongue_closed_eyes",
  "😛": "stuck_out_tongue",
  "😳": "flushed",
  "😁": "grin",
  "😔": "pensive",
  "😌": "relieved",
  "😒":
    "unamused" /** add some more to show how the app now expands when there's new data */
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Enter Emoji </h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
