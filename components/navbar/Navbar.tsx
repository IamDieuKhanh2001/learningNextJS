"use client"
import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const links = [
    {
        id: 1,
        title: "ホームページ",
        url: "/"
    },
    {
        id: 2,
        title: "私の情報",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "ブログ",
        url: "/blog"
    },
    {
        id: 4,
        title: "このページは",
        url: "/about"
    },
    {
        id: 5,
        title: "連絡",
        url: "/contact"
    },
    {
        id: 6,
        title: "ダッシュボード",
        url: "/dashboard"
    },
]

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>NextJS コース</Link>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link
                        href={link.url}
                        key={link.id}
                        className={styles.link}
                    >
                        {link.title}
                    </Link>
                ))}
                <button
                    className={styles.logout}
                    onClick={() => {
                        console.log("Out")
                    }}
                >
                    ログアウト
                </button>
            </div>
        </div>
    )
}

export default Navbar
