import React,{useState} from 'react'

function TextForm(props) {
const handleUpClick = ()=>{
    let newText = Text.toUpperCase();
    setText(newText);
}
const handleLoClick = ()=>{
    let newText = Text.toLowerCase();
    setText(newText);
}
const handleClrClick = ()=>{
    let newText = "";
    setText(newText);
}

const handleOnChange = (event)=>{
    setText(event.target.value);
}

    const [Text, setText] = useState("");
    //text = "new Text here"; // wrong way to update the text value
    // setText("new Text here"); // correct way
    
    const [myStyle,setmyStyle] = useState({
        color :'black',
        backgroundColor: 'white'
    })

    const [btnText,setbtnText] = useState('Enable Dark Mode')

    const changeMode = () =>{
        if (myStyle.color === 'white'){
            setmyStyle({
                color :'black',
                backgroundColor: 'white'
            })
            setbtnText('Enable Dark Mode');
        }
        else{
            setmyStyle({
                color :'white',
                backgroundColor: 'black'
            })
            setbtnText('Enable Light Mode');
        }
    }
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1 style={{color:'blue'}}>{props.head}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={Text} style={myStyle} onChange={handleOnChange} id="myBox" rows="7"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleClrClick}>Clear text</button>
            <button className="btn btn-outline-dark mx-1 my-1" onClick={changeMode}>{btnText}</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your text summary</h3>
            
            <p>There are {Text.split(" ").filter((ele)=>{return ele.length!==0}).length} no. of words, and {Text.length} no. of characters</p>
            <p>It takes {0.008 * Text.split(" ").length} minutes to read</p>
            <h4>Preview</h4>
            <p>{Text.length>0?Text:"Enter something to preview it here"}</p>
        </div>
        </>
    );
}
export default TextForm;