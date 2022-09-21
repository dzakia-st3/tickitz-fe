import React from 'react'
import Layout from '../../Components/Layout global/Layout'
import { InfoProfile, AccountOrder } from '../../Components/Profile'

const ProfileLayout = () => {
    return (
        <Layout>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#e3e5e9',
                paddingTop: '2%'
            }}>
                <div style={{
                    width: '25%',
                }}>
                    <InfoProfile />
                </div>
                <div style={{
                    width: '55%',
                    marginLeft: '3%'
                }}>
                    <AccountOrder />
                </div>
            </div>
        </Layout>
    )
}

export default ProfileLayout