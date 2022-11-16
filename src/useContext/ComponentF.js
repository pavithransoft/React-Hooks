import React from 'react'
import { UserContext, ChannelContext } from './Context'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
               { 
                user =>{
                        return (
                            <ChannelContext.Consumer>

                              {  
                                channel => {
                                        return <div>User Context Value {user}, Channel Context Value {channel} </div>
                                    }
                                }
                            </ChannelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF
