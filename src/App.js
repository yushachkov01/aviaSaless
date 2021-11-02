import './App.css';
import MyField from './components/InputField';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom'
import Card from './components/card/Card'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer'
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(rootReducer, composeWithDevTools())

function App() {
  return (
    <Provider store={store}>

      <Router>
        <Switch>
          <Route exact path='/' >
            <div className="App">
              <h1 className="aviaSales">авиасэйлс</h1>
              <a className="registracion "> Зарегистрироваться</a>
              <a className="entrance"> Войти</a>
              <h1 className="title">Поиск дешёвых авиабилетов</h1>
              <MyField />
            </div>
          </Route>
          <Route exact path='/results' >
            <Card />
          </Route>
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
