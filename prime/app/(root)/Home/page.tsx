"use client"
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { SeriesData } from '@/Data/Data';

import Link from 'next/link';

// For Icons
import { SlPlus } from "react-icons/sl";
import { BiLike, BiDislike } from "react-icons/bi";
import { FaShareAlt } from "react-icons/fa";

// For Components
import Series from '../_components/Series/Series';



const Page = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => (prevCounter + 1) % SeriesData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (

        <>
            <section className={styles.Home}>
                <div className={styles.HomeRow}>
                    {SeriesData.map((series, index) => (
                        <div
                            key={index}
                            className={styles.HomeBox}
                            style={{
                                visibility: index === counter ? 'visible' : 'hidden'
                            }}
                        >
                            {/* 
                            Series_Name: string;
                            Series_RelaseYear: number;
                            Series_Rating: number;
                            Series_Genre: string;
                            Series_Language: string;
                            Series_Poster_one: string;
                            Series_Trailer: string;
                            Series_Video_URL: string;
                            Series_Description: string
                        */}
                            <img
                                src={series.Series_Poster_one}
                                alt={series.Series_Name}
                            />

                            <div className={`${styles.HomeBoxContent} ${index === counter ? styles.HomeBoxContentActive : ''}`}>
                                <h6>{series.Series_Name}</h6>
                                <p className={styles.Desc}>
                                    {series.Series_Description}
                                </p>

                                <div className={styles.CustomBox}>
                                    <span>Rating : {series.Series_Rating}</span>
                                    <span> {series.Series_RelaseYear}</span>
                                </div>

                                {/* For Genre */}
                                <div className={styles.GenreBox}>
                                    <span>{series.Series_Genre}</span>
                                </div>


                                {/* For Icons Box */}


                                <div className={styles.IconsBox}>
                                    <Link href={""}>
                                        <SlPlus className={styles.Icon} />
                                    </Link>
                                    <Link href={""}>
                                        <BiLike className={styles.Icon} />
                                    </Link>
                                    <Link href={""}>
                                        <BiDislike className={styles.Icon} />
                                    </Link>
                                    <Link href={""}>
                                        <FaShareAlt className={styles.Icon} />
                                    </Link>
                                </div>





                            </div>

                        </div>
                    ))}
                </div>
            </section>


            {/* For Series */}
            <Series />



        </>





    );
};

export default Page;
