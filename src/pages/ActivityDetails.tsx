import React from 'react'
import { useHistory } from 'react-router'

export const ActivityDetails: React.FC = () => {
    const history = useHistory()

    console.log(history)

    return (
        <div>
            More info about activity with ID {history.location.pathname.slice(1)} coming in future expansion
        </div>
    )

}