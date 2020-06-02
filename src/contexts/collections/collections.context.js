import { createContext } from 'react' //this method can anything. like strings, functions, int, obj, arrays....
import SHOP_DATA from './shop.data'

const CollectionsContext= createContext(SHOP_DATA);

export default CollectionsContext
