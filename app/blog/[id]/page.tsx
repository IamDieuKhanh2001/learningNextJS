import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import getPostById from '@/lib/getPostById'

interface BlogPostProps {
  params: {
    id: number;
  };
}

const BlogPost = async ({ params }: BlogPostProps) => {
  const data: Post = await getPostById(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            {data.body}
          </p>
          <div className={styles.author}>
            <Image
              src={"/img/user/user1.jpg"}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>username user 1</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={"/img/content/char1.jpg"}
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.body}
        </p>
      </div>
    </div>
  )
}

export default BlogPost
