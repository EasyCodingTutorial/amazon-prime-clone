import React from 'react'

import styles from './Series.module.css'

// For Components
import SeriesBox from '../SeriesBox/SeriesBox'

const Series = () => {
    return (
        <>

            <section className={styles.Series}>

                <div className={styles.SeriesContent}>
                    <h6>Popular Web series</h6>
                </div>
                <SeriesBox />



            </section>

        </>
    )
}

export default Series