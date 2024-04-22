
import './App.css'
import Counter from './Counter';
import Frindes from './Friends';
import Team from './Team';
import Users from './Users';




function App() {
 
function handleClick () {
  alert('button Clicked');
}
const handleClick2 = () => {
  alert('button Clicked2');
}
const addToFive = (num) =>{
  alert(num + 5);
}

  return (
    <>
      <h3> React Core Concepts 2</h3>
      <Frindes></Frindes>
      <Users></Users>
      <Team></Team>
    <Counter></Counter>
    



      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={()=>{alert('Click thard')}}>Click Thard</button>
      <button onClick={()=> addToFive(3)}>Four</button>
    </>
  )
}

export default App
