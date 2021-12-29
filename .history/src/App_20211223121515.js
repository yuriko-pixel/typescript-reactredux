import {useSelector, useDispatch} from 'react-redux'
import * as React from 'react'
import {fetchShopCreator} from './actions'

function App() {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(result => dispatch(fetchShopCreator(result)))
  }

  React.useEffect(()=> {
    fetchData()
  },[])
  return (
    <ul className="App">
      {!items.length > 0 ? (<p>Loading</p>):(items[0].map( i=> <li key={i.id}>{i.title}</li>))}
    </ul>
  );
}


export default App;
