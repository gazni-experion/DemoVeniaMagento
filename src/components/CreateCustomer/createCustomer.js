import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useMutation } from '@apollo/client';
import { CREATE_CUSTOMER } from './createCustomer.gql';

const CreateCustomer = () => {
    const [submitForm] = useMutation(CREATE_CUSTOMER);

    return (
        <>
            <h1>Create Customer</h1>
            <br />
            <Formik            
                initialValues={{
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    subscribed: false
                }}
                onSubmit={ async values => {
                  try {
                    const response = await submitForm({
                      variables: values
                  });
                  alert(`User created successfully! \n ${JSON.stringify( response.data.createCustomer.customer)} `);
                  } catch (error) {
                    const { message } = error;
                    console.log(error);
                    alert(message);
                  }
                }}
            >
                <Form>
                    <label htmlFor="firstname">First Name: </label>
                    <Field id="firstname" name="firstname" placeholder="John" />

                    <label htmlFor="lastname">Last Name: </label>
                    <Field id="lastname" name="lastname" placeholder="Doe" />

                    <label htmlFor="email">Email</label>
                    <Field
                        id="email"
                        name="email"
                        placeholder="jane@acme.com"
                        type="email"
                    />
                    <label htmlFor="password">Password: </label>
                    <Field id="password" name="password" type="password" />
                    <label htmlFor="subscribed">Subscribe: </label>
                    <Field id="subscribed" name="subscribed" type="checkbox" />
                    <br />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </>
    );
};

export default CreateCustomer;
