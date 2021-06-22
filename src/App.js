import logo from './logo.svg';
import './App.css';
import ChildA from './component/ChildA';
import ChildB from './component/ChildB';
import ChildC from './component/ChildC';
import Posts from './component/Posts';
import UserContainer from './component/UserContainer';
import UserContainerHooks from './component/UserContainerHooks';
import {createStore , applyMiddleware} from 'redux' ;
import mainReducer from './redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';



const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>This is a parent page</h2>
        <ChildA />
        <ChildB /> 
        <ChildC />
        <UserContainer/>
        <UserContainerHooks />
        <Posts />
        
      </div>
    </Provider>
  );
}

export default App;
