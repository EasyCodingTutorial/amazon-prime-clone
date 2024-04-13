import React from 'react'

import styles from './ChannelBox.module.css'


import Link from 'next/link'


interface ChannelBoxProps {
    LinkTo: string,
    ImgSrc: string,
    ImgAlt?: string,
}


const ChannelBox = ({ LinkTo, ImgSrc, ImgAlt }: ChannelBoxProps) => {
    return (
        <Link href={LinkTo} className={styles.ChannelBox}>
            <img src={ImgSrc} alt={ImgAlt} />
        </Link>
    )
}

export default ChannelBox