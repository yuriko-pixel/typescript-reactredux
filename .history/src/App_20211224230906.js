import {useSelector, useDispatch} from 'react-redux'
import * as React from 'react'
import {fetchShopCreator} from './actions'
import { fetchData } from './reducer'

const App = ({items}) => {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(fetchData());
  },[])
  return (
    <ul className="App">
      {!items.length > 0 ? (<p>Loading</p>):(items[0].map( i=> <li key={i.id}>{i.title}</li>))}
    </ul>
  );
}


export default App;
