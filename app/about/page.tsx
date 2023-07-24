"use client"
import React from 'react'
import styles from './page.module.css'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import type { RootState } from '../GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../GlobalRedux/Features/counter/counterSlices';

interface FormValues {
    name: string;
    email: string;
}

const About = () => {
    const initialValues: FormValues = {
        name: '',
        email: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
    });

    const handleSubmit = (values: FormValues) => {
        // Xử lý logic khi form được submit
        console.log(values);
    };

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <h1>Demo Redux toolkit</h1>
            <h2>Current number: {count}</h2>
            <button onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button onClick={() => dispatch(incrementByAmount(2))}>
                Increment by 2
            </button>
            <button onClick={() => dispatch(decrement())}>
                decrement
            </button>
            <h1>Demo formik</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default About
