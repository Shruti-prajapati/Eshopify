import logo from './logo.svg';
import './App.css';
import shop from './shopping_bags.jpg'

function App() {
  return (
    <div>
      <div classname="header" style={{textAlign : 'center', padding: 20, background:'green'}}>
        ESHOPIFY
      </div>
      <div classname="image">
        <img src={shop} height={300} width={1290}></img>
      </div>
      <div classname="component-body-container">
        <label for="name">Name:</label>
        <input classname="name" type="text"></input><br />
        <label for="password">Password:</label>
        <input classname="password" type ="password"></input><br />
        <button classname="signIn" style={{background:"red", textAlign: 'center'}}>SignIn</button>
        </div>
        <div>
          <br />
        </div>
        <div classname="component-body-container">
          <label for="name">Name:</label>
          <input classname="name" type="text"></input><br />
          <label for="phone">Phone:</label>
          <input classname="phone" type="tel"></input><br />
          <label for="password"> Set Password:</label>
          <input classname="password" type="password"></input><br />
          <button classname="signUp" style={{background:"red", textAlign:'center'}}>SignUp</button>
        </div>
      </div>


  );
}

export default App;
