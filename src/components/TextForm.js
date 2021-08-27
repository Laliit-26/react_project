import React ,{ useState }from 'react'

export default function TextFom(props) {
  const [state, setstate] = useState("");

  function change(e) {
    setstate(e.target.value);
  }
  function convertUpper() {
    setstate(state.toUpperCase());
    props.showalert("converted to uppercase", "success");
  }
  function convertLower() {
    setstate(state.toLowerCase());
    props.showalert('converted to Lowercase', 'success');
  }
  function clearText() {
    setstate("");
    props.showalert('Text cleared', 'success');
  }
  function copyText() {
    var text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert('Text copied', 'success')
  }
  function removeSpace() {
    let newText = state.split(/[  ]+/);
    setstate(newText.join(" "));
    props.showalert('spaces removed', 'success')
  }

  return (
    <>
      <div
        className='container'
        style={{ color: props.mode === 'light' ? 'black' : 'white' }}
      >
        <h2 className='text-center mt-3'>{props.heading}</h2>

        <div className='mb-3 container'>
          <textarea
            className='form-control'
            id='myBox'
            rows='8'
            onChange={change}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'gray',
              color: props.mode === 'light' ? 'black' : 'white',
              cursor: 'pointer',
            }}
            id='box'
            value={state}
          ></textarea>
          <button
            className={`m-2 btn-${props.mode === 'dark' ? 'light' : 'dark'}`}
            onClick={convertUpper}
          >
            convert to UpperCase
          </button>
          <button
            className={`m-2 btn-${props.mode === 'dark' ? 'light' : 'dark'}`}
            onClick={convertLower}
          >
            convert to LowerCase
          </button>
          <button
            className={`m-2 btn-${props.mode === 'dark' ? 'light' : 'dark'}`}
            onClick={clearText}
          >
            Clear
          </button>
          <button
            className={`m-2 btn-${props.mode === 'dark' ? 'light' : 'dark'}`}
            onClick={copyText}
          >
            Copy
          </button>
          <button
            className={`m-2 btn-${props.mode === 'dark' ? 'light' : 'dark'}`}
            onClick={removeSpace}
          >
            remove extra spaces
          </button>

          <p></p>
          <div>word count : {state.split(' ').length - 1} </div>

          <div>charactor count : {state.length} </div>
          <hr></hr>
          <p>preview : {state}</p>
        </div>
      </div>
    </>
  )
}
