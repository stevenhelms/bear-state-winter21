import React, { useEffect, useState } from 'react'
import { getProfile } from '../utils/firebase'
import { useAppContext } from '../services/context'
import { navigate } from 'gatsby'

import { H2 } from '../utils/styles'
import config from '../../config'

const Profile = ({ user, profile }) => {
    const { state, dispatch } = useAppContext()
    const [isReady, setIsReady] = useState(false)
    const [localProfile, setLocalProfile] = useState(profile)

    if (!user) {
        user = state.user
    }

    useEffect(() => {
        getProfile(user.email).then(profile => {
            if (!profile) {
                navigate('/app/registration')
                return null
            } else {
                setLocalProfile(profile)
                dispatch({ type: 'SET_PROFILE', value: profile })
                setIsReady(true)
            }
        })
    }, [user.email, dispatch])

    return (
        <>
            <H2>Profile</H2>
            {isReady ? (
                <>
                    <div>Email: {localProfile.email}</div>
                    <div>
                        Name: {localProfile.first} {localProfile.last}
                    </div>
                    <div>Age: {localProfile.age}</div>
                    <div>Gender: {localProfile.gender}</div>
                    <hr />
                    <div>Starting Weight: {localProfile.weight || 'unset'}</div>
                    <div>Goal Weight: {localProfile.goal_weight}</div>
                    <hr />
                    <div>Starting Percent Body Fat: {localProfile.pbf_start || 'unset'}</div>
                    <div>End Percent Body Fat: {localProfile.pbf_end || 'unset'}</div>
                    <hr />
                    <div>Overall Level Method Level: {config.levelMethod[localProfile.level_method]}</div>
                </>
            ) : null}
        </>
    )
}

export default Profile
