import { createContext } from "react";

export const WishItemsContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {},
    addToCart: () => {}
})
 
