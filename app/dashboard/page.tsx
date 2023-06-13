"use client"
import React from 'react'
import styles from './page.module.css'
import useSWR from 'swr'
import { getAllPosts_SWR } from '@/lib/getAllPosts_SWR';
import { notFound } from 'next/navigation';

const Dashboard = () => {

  const { posts, isLoading, isError } = getAllPosts_SWR();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to fetch data.</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Use SWR hook from nextJS fetching data for client side components</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Dashboard