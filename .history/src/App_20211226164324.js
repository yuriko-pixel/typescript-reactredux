import {useSelector, useDispatch} from 'react-redux'
import * as React from 'react'
import {fetchShopAction} from './actions'
import { fetchData } from './localFn'
import AddIcon from '@mui/icons-material/Add';
import { addCartAction } from './actions';

const App = () => {
  const items = useSelector(state => state.items)
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(fetchData());
  },[])
  
  return (
    <ul className="App">
      {!items.items.length > 0 ? (<p>Loading</p>):
        (items.items[0].map( i=> <ul>
                                    <li key={i.id}>
                                      {i.title}
                                      <AddIcon onClick={() => addCartAction(i.item)} />
                                    </li>
                                    
                                  </ul>))}
    </ul>
  );
}


export default App;
