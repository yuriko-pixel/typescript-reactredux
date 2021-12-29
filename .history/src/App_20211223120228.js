import {useSelector, useDispatch, ReactReduxContext} from 'react-redux'
import * as React from 'react'
import {fetchShopCreator} from './actions'

function App() {
  const items = useSelector(state => state.items);
  React.useEffect(() => {
    fetchShopCreator()
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
