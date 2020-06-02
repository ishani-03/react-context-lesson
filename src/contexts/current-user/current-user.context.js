import { createContext } from 'react'

const CurrentUserContext = createContext(undefined) /* we have set the initial value to undefined 
because the initial value of the user will be undefined. */

export default CurrentUserContext