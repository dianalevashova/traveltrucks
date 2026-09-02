'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'izitoast/dist/css/iziToast.min.css';
import { createBookingRequest } from '@/services/campers';
import type { BookingRequest } from '@/types/camper';
import styles from './FormBooking.module.css';
import Icon from '../Icon/Icon';

interface FormBookingProps {
  camperId: string;
}

const initialValues: BookingRequest = {
  name: '',
  email: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Please enter your email'),
});

export default function FormBooking({ camperId }: FormBookingProps) {
  const handleSubmit = async (
    values: BookingRequest,
    {
      resetForm,
      setSubmitting,
    }: { resetForm: () => void; setSubmitting: (v: boolean) => void }
  ) => {
    const { default: iziToast } = await import('izitoast');
    try {
      await createBookingRequest(camperId, values);
      iziToast.success({
        title: 'Success',
        message: 'Booking request sent successfully!',
        position: 'topRight',
      });
      resetForm();
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        position: 'topRight',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className={styles.fields}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.visuallyHidden}>
                Name
              </label>
              {errors.name && touched.name && (
                <span className={styles.floatingLabel}>Name*</span>
              )}
              <Field
                id="name"
                name="name"
                type="text"
                placeholder={errors.name && touched.name ? '' : 'Name*'}
                className={
                  errors.name && touched.name
                    ? `${styles.input} ${styles.inputError}`
                    : styles.input
                }
              />
              {errors.name && touched.name && (
                <Icon
                  name="error"
                  width={24}
                  height={24}
                  className={styles.errorIcon}
                />
              )}
              <ErrorMessage
                name="name"
                component="p"
                className={styles.errorText}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.visuallyHidden}>
                Email
              </label>
              {errors.email && touched.email && (
                <span className={styles.floatingLabel}>Email*</span>
              )}
              <Field
                id="email"
                name="email"
                type="email"
                placeholder={errors.email && touched.email ? '' : 'Email*'}
                className={
                  errors.email && touched.email
                    ? `${styles.input} ${styles.inputError}`
                    : styles.input
                }
              />
              {errors.email && touched.email && (
                <Icon
                  name="error"
                  width={24}
                  height={24}
                  className={styles.errorIcon}
                />
              )}
              <ErrorMessage
                name="email"
                component="p"
                className={styles.errorText}
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
