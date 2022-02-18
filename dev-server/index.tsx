import ReactDOM from 'react-dom';
import {CloseSpellbook} from '../src/index';

const Welcome = () => {
  return <CloseSpellbook />;
};

const mountingNode = document.querySelector("#root");

ReactDOM.render(<Welcome />, mountingNode);
