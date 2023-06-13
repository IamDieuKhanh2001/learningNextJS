import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import getAllPosts from '@/lib/getAllPosts'

export default async function Blog() {
  const posts: Post[] = await getAllPosts()

  return (
    <div className={styles.mainContainer}>
      {posts.map(post => {
        return (
          <Link key={post.id} href={`/blog/${post.id}`} className={styles.container} passHref>
            <div className={styles.imageContainer}>
              <Image
                src={"https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?h=1000&w=1500&fit=crop&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300%26txt%3DFree%2520Stock%2520Photos"}
                alt=""
                width={400}
                height={250} 
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.desc}>{post.body}</p>
            </div>
          </Link>
        )
      })}

    </div>
  )
}
