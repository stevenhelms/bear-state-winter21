import React, { useState, useEffect } from 'react'
import firebase from 'gatsby-plugin-firebase'
import styled from '@emotion/styled'

import { H2, Ul, Li, Heading, H3, H4, H1 } from '../utils/styles'

const MyContainer = styled.div`
    flex: 1;
    @media screen and (max-width: 480px) {
        margin-top: 30px;
    }
`

const Players = () => {
    const [players, setPlayers] = useState([])
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        firebase
            .database()
            .ref('/users')
            .get()
            .then(snapshot => {
                const p = []
                snapshot.forEach(item => {
                    // console.log(item.val())
                    p.push(item.val())
                })
                setPlayers(p)
                setIsReady(true)
            })
    }, [])

    return (
        <MyContainer>
            <Heading>
                <H2>Participants</H2>
            </Heading>
            <Ul>
                {isReady ? (
                    <>
                        {players.map((player, i) => (
                            <Li key={i}>{player.first}</Li>
                        ))}
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </Ul>
        </MyContainer>
    )
}

const Home = () => (
    <>
        <H1>Welcome to the Bear State Winter 2021 Nutrition Challenge.</H1>
        <Players />

        <div style={{ marginTop: '30px' }}>
            <H3>Overview</H3>
            <p>
                2020 left many people disconnected from friends and family, depressed, and full of anxiety, long work
                hours from home or no work at all. Some may have discovered the "COVID 15" and found an extra 15 lbs.
                With 2021 full of some of the same uncertanties, it's time to find better healthy habits that will carry
                us through the year.
            </p>
            <p>
                Our challenge this year involves adding to your lifestyle, and not restricting. By finding sustainable
                habits you can lose the weight you found last year and be armed with the tools to keep it of.
            </p>
            <p>
                Each participant will be given a unique set of goals to meet. Progress will be measured by meeting those
                daily goals. Participants will keep a daily journal of their habits and points will be assigned to each
                days journal entry. The journal will be kept online in this application and available at all times.
            </p>
            <p>
                At the end of the challenge, points will be totaled and prizes will be awarded. Additionally, various
                insights will be created based on your own journal. These insights may be able to correlate the various
                activities seen during the challenge. For example, you may regularly note that your stress is better
                when you sleep longer, but didn't notice that along the way.
            </p>
            <p>
                The challenge focuses on habits, but is still centered on foods. By following the prescribed eating plan
                you will lose weight in the process. The speed at which you lose weight varies and is highly dependant
                on you ability to stick to the plan.
            </p>
            <p>
                Since the challenge is focused on healthy habits and not solely on weight loss, anyone can participate
                and potentially be a winner.
            </p>
            <H4>Benefits</H4>
            <p>Each participant will:</p>
            <ul>
                <li>Receive an inBody scan at the beginning and end of the challenge.</li>
                <li>Receive custom nutrition goals (with macros).</li>
                <li>Have full access to the challenge application, personal journal.</li>
                <li>Have access to a nutrition coach for questions along the way.</li>
            </ul>
            <H4>Challenge Details</H4>
            <ul>
                <li>The challenge runs from Sunday, January 24, 2021 to Saturday, February 20, 2020.</li>
                <li>Participants are expected to enter their progress daily into the journal for maximum points.</li>
                <li>The calculations supporting the point system will not be made available.</li>
                <li>Multiple prizes will be awarded at the end of the challenge.</li>
            </ul>
        </div>
    </>
)

export default Home
