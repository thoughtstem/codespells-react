import { useState } from 'react';
export {default as CloseSpellbook} from "./Components/WorldWidgets/CloseUIButton"
export {MagicMirror} from "./Components/MagicMirror"

export function SimpleComponent(){
  const [text, setText] = useState("Click me")

  function handleClick(e){
    setText("Hello")    
  }
  return(<p onClick={handleClick}>{text}</p>)
}
