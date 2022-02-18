import ReactDOM from 'react-dom';
import {CloseSpellbook, MagicMirror} from '../src/index';

const Welcome = () => {
  return (
    <>
      <p>This button lets you enter the 3D world:</p>
      <CloseSpellbook />
      <p>This editor lets you write code that executes in the world:</p>
      <MagicMirror/>
    </>);
};

const mountingNode = document.querySelector("#root");

ReactDOM.render(<Welcome />, mountingNode);
