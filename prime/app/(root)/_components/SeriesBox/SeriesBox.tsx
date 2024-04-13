import React from 'react'

import styles from './SeriesBox.module.css'

import Link from 'next/link'

// For Data
import { SeriesData } from '@/Data/Data'



// For Icons
import { SlPlus } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";



const SeriesBox = () => {
    return (

        <div className={styles.SeriesRow}>

            {
                SeriesData.map((I) => (
                    <Link href={I.Series_Trailer} target='_blank'>
                        <div className={styles.SeriesBox} key={I.id}>
                            <img src={I.Series_Poster_one} alt={I.Series_Name} />

                            <div className={styles.SeriesBoxContent}>

                                <div className={styles.Icons}>
                                    <div>
                                        <FaPlay className={styles.Icon} /> <p>Watch  Now</p>
                                    </div>
                                    <div>
                                        <SlPlus className={styles.Icon} />
                                    </div>

                                </div>

                                <div className={styles.CustomBox}>
                                    <h6>{I.Series_Name}</h6>
                                    <p className={styles.Year}>{I.Series_RelaseYear}</p>

                                    <p className={styles.Lan}>{I.Series_Language}</p>
                                    <p className={styles.Desc}>{I.Series_Description}</p>
                                </div>





                            </div>

                        </div>
                    </Link>
                ))
            }
        </div>


    )
}

export default SeriesBox