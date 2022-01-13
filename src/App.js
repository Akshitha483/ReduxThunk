import logo from './logo.svg';
import './App.css';
import { fetchProducts } from './actions/products.actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
  },[]);

  const products = useSelector((state)=>state.products);
  console.log("getting data",products);
  return (
    <div className="App">
      <h1>Products from thunk</h1>

      {products.map((product)=>{
        return(
          <div key={product.id}>
            <p>{product.name}</p>
            <img src={"https://"+product.imageUrl} alt={product.name}/>
    </div>
        );
        })}
        </div>
  );
}

export default App;
