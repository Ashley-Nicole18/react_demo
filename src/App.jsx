import Greeting from "./components/Greeting";
import ProductInfo from "./components/ProductInfo";



const App = () => {

  const numbers = [1,2,3,4,5];

  return <main>
    <Greeting />
    <ProductInfo />
    <div> hello teh </div>
    {numbers.map((number) => (
      <ul key={number}>
        <li>{number}</li>
      </ul>
    ))}
  </main>

};

export default App;
