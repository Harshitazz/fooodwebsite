import 'bootstrap/dist/css/bootstrap.min.css';
import Recipepost from './recipepost';
import ListProvider from './procedurestore';
import { useContext } from 'react';
import { procedurelist } from "./procedurestore";

function Final(){
  const {list} = useContext(procedurelist);
  return(
    <>

<ListProvider>
<Recipepost></Recipepost>
</ListProvider>
</>
  );

}
export default Final;