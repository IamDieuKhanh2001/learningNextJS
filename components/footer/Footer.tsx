import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        @2023 My Post All rights reserved
      </div>
      <div className={styles.social}>
        <Image
          src="/img/social/facebook.png"
          className={styles.icon}
          width={15}
          height={15}
          alt="facebookIcon" />
        <Image
          src="/img/social/instagram.png"
          className={styles.icon}
          width={15}
          height={15}
          alt="facebookIcon" />
        <Image
          src="/img/social/twitter.png"
          className={styles.icon}
          width={15}
          height={15}
          alt="facebookIcon" />
        <Image
          src="/img/social/youtube.png"
          className={styles.icon}
          width={15}
          height={15}
          alt="facebookIcon" />
      </div>
    </div>
  )
}

export default Footer
