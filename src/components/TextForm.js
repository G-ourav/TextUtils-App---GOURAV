import React , {useState} from 'react'  



export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  props.showAlert("uppercase!","success");
  }
  const handleDoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
  props.showAlert("lowercase!","success");

  }
  const handleclearClick = ()=>{
      let newText = " "
      setText(newText)
  props.showAlert("clear!","success");

  }
  const handleExtraSpaces  = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  props.showAlert("removed!","success");

  }
   const handleCopy = ()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  props.showAlert("copyed!","success");

  }

  const handleUpChange = (event)=>{
    setText(event.target.value)
  }
  const [text , setText] = useState(' ');
  return (
    <>
    <div>
   <h1>
   {props.heading}
   </h1>
   <div>
   <textarea className="form-control" value={text} onChange={handleUpChange} id="myBox" rows="9"></textarea>
   </div>
   <button className='btn btn-primary my-2 ' onClick={handleUpClick}> convert to Uppercase</button>
   <button className='btn btn-primary my-2 mx-1' onClick={handleDoClick}> convert to Lowercase</button>
   <button className='btn btn-primary my-2 mx-1' onClick={handleclearClick}> clear text</button>
   <button className='btn btn-primary my-2 mx-1' onClick={handleCopy}> copy text</button>
   <button className='btn btn-primary my-2 mx-1' onClick={handleExtraSpaces}> remove Extra spaces</button>


   </div>
   <div className="container my-3">
    <h1> Your text summary </h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
   </div>
   </>
  )
}
