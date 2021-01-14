import React from 'react'
import { InfoSection } from '../../components'
import {homeObjFour,
    homeObjThree,
    homeObjTwo}
from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home
