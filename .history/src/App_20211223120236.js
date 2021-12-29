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
      {!items ? (<p>Loading</p>):(items[0].map( i=> <li key={i.id}>{i.title}</li>))}
    </div>
  );
}

export default App;
