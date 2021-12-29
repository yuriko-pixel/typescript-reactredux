import {useSelector, useDispatch} from 'react-redux'
import * as React from 'react'
import fetchShopAction from './actions.tsx'
import { fetchData } from './localFn.tsx'
import AddIcon from '@mui/icons-material/Add';
import { addCartAction } from './actions.tsx';
import {itemState} from './type.ts'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';

const StyledBtn = styled.btn`
  border-radius: 30px;
`;

const App = () => {
  const items = useSelector((state: itemState) => state.items)
  const dispatch = useDispatch();

  React.useEffect(()=> {
    dispatch(fetchData());
  },[])
  
  return (
    <ul className="App">
      <ShoppingCartIcon/>
      {!(items.items.length > 0) ? (<p>Loading</p>):
        (items.items[0].map(
          i=> 
            <ul>
              <li key={i.id}>
                {i.title}
                <StyledBtn>
                  <AddIcon 
                    onClick={() => {
                      dispatch(
                        addCartAction({id: i.id, title: i.title, price: i.price, img: i.image})
                      )
                    } } />
                  </StyledBtn>
              </li>            
            </ul>
            )
          )
        }
    </ul>
  );
}


export default App;
