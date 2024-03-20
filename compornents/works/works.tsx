import { getWorks } from "@/lib/microcms";
import { Work } from "@/type/work";
import styles from "./works.module.css";
import { useEffect, useState } from "react";

export default function Works() {
    const [works, setWorks] = useState<Work[]>([]);

    useEffect(() => {
        getWorks().then(data => {
            setWorks(data);
        });
    }, []);

    return (
        <div className={styles.works_container}>
            {works.map(work => (
                <div key={work.id} className={styles.work_card}>
                    <h3 className={styles.work_title}>{work.title}</h3>
                    <p className={styles.work_description}>{work.description}</p>
                    {work.link && (
                        <p className={styles.work_text}>ご利用は
                            <a className={styles.work_url} href={work.link} target="_blank" rel="noopener noreferrer">
                                こちら
                            </a>
                        </p>
                    )}
                    {work.code && (
                        <p className={styles.work_text}>
                            <a className={styles.work_url} href={work.code} target="_blank" rel="noopener noreferrer">
                                Github
                            </a>
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}