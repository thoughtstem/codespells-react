import ReactDOM from 'react-dom';
import {CloseUIButton} from '../src/index';

const Welcome = () => {
  return <CloseUIButton />;
};

const mountingNode = document.querySelector("#root");

ReactDOM.render(<Welcome />, mountingNode);
