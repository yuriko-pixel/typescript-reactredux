import {useSelector, useDispatch} from 'react-redux'
import * as React from 'react'
import {fetchShopCreator} from './actions'

const addCreator = (data) => {
  return {type: 'add', payload: data}
}


function App() {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch()

  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(result => dispatch(addCreator(result)))
  }

  useEffect(()=> {
    fetchData()
  },[])
  return (
    <ul className="App">
      {!items ? (<p>Loading</p>):(items[0].map( i=> <li key={i.id}>{i.title}</li>))}
    </ul>
  );
}


export default App;
