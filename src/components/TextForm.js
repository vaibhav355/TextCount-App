import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To Upper Case", "success");
    }

    const handleLowClick = ()=>{
        // console.log("UpperCase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lower Case", "success");

    }

    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("All Text Has Been Cleared", "success");

    }

    const handleCopyClick = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied All Items", "success");

    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Has Been Removed", "success");

    }


    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }




    const [text, setText] = useState('Enter Text Here'); //Learn this text thorugly
    // text = "new text" //Wrong way to change the state 
    // setText = "new text" //Correct way to change the state 
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#373838'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#373838'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#373838'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    );
}
