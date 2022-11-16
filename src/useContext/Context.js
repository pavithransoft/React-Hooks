import React, {createContext} from 'react'
import ComponentC from './ComponentC'

export const UserContext = createContext()
export const ChannelContext = createContext()


function Context() {
    return (
        <div>
            <UserContext.Provider value={'Pavithran'}>
                <ChannelContext.Provider value={'useContext'}>
            
                    <ComponentC />

                </ChannelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Context
