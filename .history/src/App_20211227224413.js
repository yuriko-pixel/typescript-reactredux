import {useSelector, useDispatch} from 'react-redux'
import * as React from 'react'
import {fetchShopAction} from './actions'
import { fetchData, test } from './localFn'
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
                                      <AddIcon 
                                        onClick={() => {
                                          console.log(i.id); 
                                          dispatch(addCartAction({id: i.id, title: i.title, price: i.price, img: i.image}))
                                        } } />
                                    </li>
                                    
                                  </ul>))}
    </ul>
  );
}


export default App;
