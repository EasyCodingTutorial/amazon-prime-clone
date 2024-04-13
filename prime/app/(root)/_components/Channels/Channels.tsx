import React from 'react'

import styles from './Channels.module.css'
import ChannelBox from '../ChannelBox/ChannelBox'

const Channels = () => {
    return (
        <section className={styles.Channels}>

            <div>
                <h6>Your Favorite channels all in one place</h6>
                <p>
                    With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice
                </p>
            </div>


            <div>
                <ChannelBox LinkTo='' ImgSrc='/assets/Channel1.jpg' />
                <ChannelBox LinkTo='' ImgSrc='/assets/Channel1.jpg' />
                <ChannelBox LinkTo='' ImgSrc='/assets/Channel1.jpg' />
                <ChannelBox LinkTo='' ImgSrc='/assets/Channel1.jpg' />
                <ChannelBox LinkTo='' ImgSrc='/assets/Channel1.jpg' />
                <ChannelBox LinkTo='' ImgSrc='/assets/Channel1.jpg' />
                <ChannelBox LinkTo='' ImgSrc='/assets/Channel1.jpg' />
            </div>


        </section>
    )
}

export default Channels