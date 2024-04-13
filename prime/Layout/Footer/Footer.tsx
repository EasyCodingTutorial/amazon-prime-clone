import React from 'react'

import styles from './Footer.module.css'
import Link from 'next/link'

const FooterLinks = [
    {
        LinkText: "Terms and Privacy",
        LinkTo: "https://www.primevideo.com/help/ref=dvm_MLP_EU_privacy?nodeId=202064890",
    },
    {
        LinkText: "Send us Feedback",
        LinkTo: "https://www.primevideo.com/contactus/ref=dvm_MLP_EU_contact",
    },
    {
        LinkText: "Help",
        LinkTo: "https://www.primevideo.com/help/ref=dvm_MLP_EU_help",
    },
]

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterRow}>
                <img src="/assets/MainLogo.png" alt="Footer Logo" />

                <div className={styles.FooterLinks}>
                    {
                        FooterLinks.map((I) => (
                            <Link target='_blank' href={I.LinkTo} className={styles.FooterLink} key={I.LinkText}>{I.LinkText}</Link>
                        ))
                    }

                    <p>
                        © 1996 - {new Date().getFullYear()} Amazon.com, Inc. or its affiliates
                    </p>

                </div>

            </div>
        </footer>
    )
}

export default Footer