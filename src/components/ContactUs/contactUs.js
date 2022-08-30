import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useMutation  } from '@apollo/client';
import { CONTACT_US } from './contactUs.gql';

const ContactUs = () => {
  const [submitForm, { data, loading, error }] = useMutation(CONTACT_US);

  if (loading) return 'Submitting...';

  if (error) return `Submission error! ${error.message}`;

  return (
    <>
    <h1>Contact Us</h1>
    <br />
    <Formik
      initialValues={{
        comment: '',
        name: '',
        email: '',
        telephone: '',
      }}
      onSubmit={ (values) => {
        // alert(JSON.stringify(values, null, 2));
        submitForm({
          variables: {
            comment: values.comment,
            name: values.name,
            email: values.email,
            telephone: values.telephone,
          },
        });
        alert(data);
      }}
    >
    <Form>
        <label htmlFor="comment">Comment: </label>
        <Field id="comment" name="comment" placeholder="Comments" />

        <label htmlFor="name">Name: </label>
        <Field id="name" name="name" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor="telephone">Telephone: </label>
        <Field
          id="telephone"
          name="telephone"
          placeholder="0123456789"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </>
  )
}

export default ContactUs