"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import { getAllPosts_SWR } from '@/lib/getAllPosts_SWR';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { createPost } from '@/lib/CreatePost';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  title: string,
  desc: string,
  image: string,
  content: string,
}

const Dashboard = () => {

  const { posts, mutate, isLoading, isError } = getAllPosts_SWR();

  const initialValues: FormValues = {
    title: '',
    desc: '',
    image: '',
    content: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    desc: Yup.string().required('Description is required'),
    image: Yup.string().required('Image is required'),
    content: Yup.string().required('Content is required'),
  });

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      console.log(values);
      const response = await createPost(values);
      console.log(response)
      console.log("Success")
      resetForm();
      setSubmitting(false);
      mutate()
    } catch (err) {
      console.log("ERR");
    }
  };

  const handleDelete = async (id: number) => {
  };


  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : posts?.map((post) => (
              <div className={styles.post} key={post.id}>
                <div className={styles.imgContainer}>
                  <Image
                    src={"https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?h=1000&w=1500&fit=crop&markalign=center%2Cmiddle&txt=pexels.com&txtalign=center&txtsize=60&txtclr=eeffffff&txtfont=Avenir-Heavy&txtshad=10&mark=https%3A%2F%2Fassets.imgix.net%2F~text%3Ftxtclr%3Dfff%26txtsize%3D120%26txtpad%3D20%26bg%3D80000000%26txtfont%3DAvenir-Heavy%26txtalign%3Dcenter%26w%3D1300%26txt%3DFree%2520Stock%2520Photos"}
                    alt={post.title}
                    width={200}
                    height={100} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span
                  className={styles.delete}
                  onClick={() => handleDelete(post.id)}
                >
                  X
                </span>
              </div>
            ))}
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className={styles.new}>
              <h1>Add New Post</h1>
              <Field
                type="text"
                id="title"
                name="title"
                className={styles.input}
                placeholder="Title"
                disabled={isSubmitting} // Disable input field khi submitting
              />
              <ErrorMessage name="title" component="div" className={styles.error} />

              <Field
                type="text"
                id="desc"
                name="desc"
                className={styles.input}
                placeholder="Description"
                disabled={isSubmitting} // Disable input field khi submitting
              />
              <ErrorMessage name="desc" component="div" className={styles.error} />

              <Field
                type="text"
                id="image"
                name="image"
                className={styles.input}
                placeholder="Image URL"
                disabled={isSubmitting} // Disable input field khi submitting
              />
              <ErrorMessage name="image" component="div" className={styles.error} />

              <Field
                as="textarea"
                id="content"
                name="content"
                className={styles.textArea}
                placeholder="Content"
                disabled={isSubmitting} // Disable input field khi submitting
              />
              <ErrorMessage name="content" component="div" className={styles.error} />

              <button type="submit" className={styles.button} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Send'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  )
}

export default Dashboard