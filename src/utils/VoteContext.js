import React,{createContext, useState} from 'react';

export const VoteContext = createContext();

export const VoteProvider = props =>{
    const [voted, setVoted] = useState(false)

    return(
        <AuthContext.Provider value={[voted, setVoted]}>
            {props.children}
        </AuthContext.Provider>
    )
}
