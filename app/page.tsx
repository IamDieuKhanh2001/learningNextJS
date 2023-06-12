import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/img/content/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          公式のReactJSのフレームワーで開発した1:25:04
        </h1>
        <p className={styles.desc}>
        Next.js（ネクストジェイエス）は、
        Reactフレームワークをベースにした人気のあるフルスタックのJavaScriptフレームワークです。
        </p>
        <Button url="/portfolio" text="スタート" />      </div>
      <div className={styles.item}>
        <Image
          src={Hero}
          alt='Hero main'
          className={styles.img} />
      </div>
    </div>
  )
}
