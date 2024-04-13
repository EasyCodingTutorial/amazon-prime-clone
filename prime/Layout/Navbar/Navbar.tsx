import React from 'react'

import styles from './Navbar.module.css'
import Link from 'next/link'


const NavLinks = [
    {
        LinkText: "Home",
        LinkTo: "/Home",
    },
    {
        LinkText: "Store",
        LinkTo: "https://www.primevideo.com/storefront/ref=atv_hom_pri_c_9zZ8D2_str_hom?contentType=home&contentId=store",
    },
    {
        LinkText: "Live TV",
        LinkTo: "https://www.primevideo.com/storefront/ref=atv_hom_pri_c_9zZ8D2_live?contentType=home&contentId=live",
    },
    {
        LinkText: "Categories",
        LinkTo: "https://www.primevideo.com/categories/ref=atv_hom_pri_c_9zZ8D2_cat",
    },
    {
        LinkText: "My Stuff",
        LinkTo: "https://www.primevideo.com/mystuff/ref=atv_hom_pri_c_9zZ8D2_mys",
    },

]

const Navbar = () => {
    return (
        <nav className={styles.NavbarMain}>
            <Link href={"/"}>
                <img src="/assets/logo.png" alt="Logo" />
            </Link>

            <div className={styles.NavLinks}>
                {
                    NavLinks.map((I) => (
                        <Link target='_blank'
                            href={I.LinkTo}
                            key={I.LinkText}
                            className={styles.NavLink}
                        >
                            {I.LinkText}
                        </Link>
                    ))
                }
            </div>




        </nav>
    )
}

export default Navbar
