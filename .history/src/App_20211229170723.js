import {useSelector, useDispatch} from 'react-redux'
import * as React from 'react'
import fetchShopAction from './actions.tsx'
import { fetchData } from './localFn.tsx'
import AddIcon from '@mui/icons-material/Add';
import { addCartAction } from './actions.tsx';
import {itemState} from './type.ts'

const App = () => {
  const items = useSelector((state: itemState) => state.items)
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
                                      <button>
                                        <AddIcon 
                                          onClick={() => {
                                            dispatch(
                                              addCartAction({id: i.id, title: i.title, price: i.price, img: i.image})
                                            )
                                          } } />
                                        </button>
                                    </li>
                                    
                                  </ul>))}
    </ul>
  );
}


export default App;
