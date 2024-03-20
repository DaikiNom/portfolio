import styles from './contact.module.css';

export default function Contact() {
    return (
        <form className={styles.contact_container} action="https://docs.google.com/forms/d/e/1FAIpQLSdef6SrMWkP_tbPHOYLbg3hhqBHzGRSzQ9xtU997q_Jih5OiQ/formResponse" method='post' target=''>
            <label className={styles.contact_label} htmlFor="name">お名前</label>
            <input className={styles.contact_input} type="text" id="name" name="entry.985136581" required />
            <label className={styles.contact_label} htmlFor="email">メールアドレス</label>
            <input className={styles.contact_input} type="email" id="email" name="entry.1045781291" required />
            <label className={styles.contact_label} htmlFor="message">お問い合わせ内容</label>
            <textarea className={styles.contact_textarea} id="message" name="entry.839337160" required></textarea>
            <button className={styles.contact_button} type="submit">送信</button>
        </form>
    );
}