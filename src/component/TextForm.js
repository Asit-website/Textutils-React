import React, { useState } from 'react'
export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("uppercase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick = () =>{
        // console.log("uppercase was clicked"+ text);
        let newText = text.toLocaleLowerCase();
        setText(newText);
        // props.showAlert("Converted to lowercase","success");
    }
    
    const handleCopy = () =>{
         var text = document.getElementById('myBox');
         text.select();
         navigator.clipboard.writeText(text.value)
         props.showAlert("Copy to clipboard","success");
    }

    const handleClear = () =>{
        setText('');
        // props.showAlert("text cleared","success");
    }

    const handleExtraSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(""));
        // props.showAlert("Extra space has removed","success");
    }

    const handleOnChange = (event) =>{
          setText(event.target.value);
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
         <h1> {props.text}</h1>
            <div className="mb-3 ">
                <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor:props.mode==='dark'?'gray':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy} >CopyText</button>
            <button className="btn btn-primary mx-2" onClick={handleClear} >ClearText</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace} >RemoveExtraSpaces</button>
            </div>

            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length}</p>
                <p>{0.08 * text.split(" ").length } Minutes Read</p>
                <h3>Preview</h3>
                {/* value ko jaha jaha use kroge waha a jayega value automatic */}
                <p>{text.length>0?text:'Enter something in the text to preview it'}</p>
            </div>
        </>
    )
}
