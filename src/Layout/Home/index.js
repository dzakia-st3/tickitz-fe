import React from 'react'
import { Hero, NowShowing, Upcoming, Join} from "../../Components/Home"
import Layout from '../../Components/Layout'

const HomeLayout = () => {
  return (
    <Layout>
        <Hero/>
        <NowShowing/>
        <Upcoming/>
        <Join/>
    </Layout>
  )
}

export default HomeLayout