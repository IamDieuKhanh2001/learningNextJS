import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

const Contact = () => {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Let's keep in touch
            </h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/img/content/contact.png"
                        alt='contact'
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input
                        type='text'
                        placeholder='Your full name'
                        className={styles.input}
                    />
                    <input
                        type='text'
                        placeholder='email'
                        className={styles.input}
                    />
                    <textarea
                        className={styles.textArea}
                        placeholder='Message'
                        cols={30}
                        rows={10}
                    />
                    <Button url='#' text='Send' />
                </form>
            </div>
        </div>
    )
}

export default Contact
