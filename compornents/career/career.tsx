import { getCareer } from "@/lib/microcms";
import { Career } from "@/type/career";
import styles from './career.module.css';
import { useEffect, useState } from "react";

export default function Career() {
    const [career, setCareer] = useState<Career[]>([]);

    useEffect(() => {
        getCareer().then(data => {
            setCareer(data);
        });
    }, []);

    return (
        <div className={styles.career_container}>
            {career.map((career) => {
                return (
                    <div className={styles.career_item} key={career.id}>
                        <h2 className={styles.career_date}>
                            <span className={styles.career_date_year}>{new Date(career.date).toLocaleString('en-US', { timeZone: 'Asia/Tokyo', year: 'numeric' })}</span>
                            <span className={styles.career_date_month}>{new Date(career.date).toLocaleString('en-US', { timeZone: 'Asia/Tokyo', month: 'short' })}</span>
                        </h2>
                        <p className={styles.career_detail}>{career.detail}</p>
                    </div>
                );
            })}
        </div>
    );
}