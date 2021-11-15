import './App.css';
import MyField from './components/booking-fields/BookingFields';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom'
import Card from './components/card/Card'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './redux/rootReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchLocatons} from "./components/booking-fields/BookingFields"

let store = createStore(rootReducer, composeWithDevTools())

function App() {
  return (
    <Provider store={store}>

      <Router>
        <Switch>
          <Route exact path='/' >
            <div className="App">
              <h1 className="aviaSales">booking</h1>
              <a className="registracion "> Зарегистрироваться</a>
              <a className="entrance"> Войти</a>
              <h1 className="title">Поиск дешёвых отелей</h1>
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

// Из filteredFlightData сделать карточки с отелями в css нарисоват эту карточку и вывести отели. 