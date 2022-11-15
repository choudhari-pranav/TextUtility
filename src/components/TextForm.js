import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLowClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };
  const handleCopy = () => {
  
    //The Clipboard interface's writeText() property writes the specified text string to the system clipboard.
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); //use RegExp Object A regular expression is a pattern of characters.
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-2"> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1
            "
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1
            "
          onClick={handleLowClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1
            "
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1
            "
          onClick={handleExtraSpaces}
        >
          Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1
            "
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>

      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        {/* <h4>Length of text</h4> */}
        <p>
          Number of Characters :- {text.replace(/\s+/g,'').length} and Number of words :-
          {
            text.split(/\s+/).filter((element) => {
              //jo array text.split kelayvr milel tyatun blank remove karanar. agar function(filter) true return karrta hai to element rahega nai to remove hoga.
              // About .filter() 1)The filter() method creates a new array filled with elements that pass a test provided by a function.
              // 2)The filter() method does not execute the function for empty elements.
              // 3)The filter() method does not change the original array.*/

              return element.length !== 0;
              //jis bhi element ke liye true returnkarega vo isme rahega jiske liye false karega vo nai rahega
            }).length
          }{" "}
          in text
        </p>
        {/* agara element ki length zero hai to vo element is array me nai rahaega */}
        <p>
          Maximum Time to read this text is :-{" "}
          {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read..
        </p>
        <p>
          <h3>Preview</h3>
          {text.length > 0 ? text : "Nothing to preview ..."}
        </p>
      </div>
    </>
  );
}
