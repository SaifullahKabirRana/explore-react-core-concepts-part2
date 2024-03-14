import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';


function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("Button 2 Clicked");
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert("third clicked") }}>Third</button>

      <button onClick={() => addToFive(3)}>Four</button>


    </>
  )
}

export default App
