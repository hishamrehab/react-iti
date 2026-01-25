import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar/navbar.js"
import Users from './users/Users.js';
import UsersFunctional from './users/usersFunctional.js';
function App() {
  return (
    <div className="App">
     <h1>Hello From App</h1>
     <Navbar />
     {/* <Users /> */}
     <UsersFunctional />
    </div>
  );
}

export default App;
