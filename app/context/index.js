'use client'

import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export function AppWrapper({children}){
    let [likes, setLikes] = useState([{id:'character1'},{id:'character2'}])

    return (
        <AppContext.Provider value={{likes, setLikes}} s>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext (){
    return useContext(AppContext)
}