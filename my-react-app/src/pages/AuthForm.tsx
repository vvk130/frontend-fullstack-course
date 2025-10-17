import * as Yup from 'yup';
import axios from 'axios';

import {
  withFormik,
  type FormikProps,
  Form,
  Field,
} from 'formik';

interface FormValues {
  email: string;
  password: string;
}

interface MyFormProps {
  initialEmail?: string;
  message: string;
  endpoint: string;
}

const InnerForm = (props: MyFormProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;

  return (
    <Form>
      <h1>{message}</h1>

      <div>
        <label>Email</label>
        <Field type="email" name="email" />
        {touched.email && errors.email && <div>{errors.email}</div>}
      </div>

      <div>
        <label>Password</label>
        <Field type="password" name="password" />
        {touched.password && errors.password && <div>{errors.password}</div>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

const AuthForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    email: props.initialEmail || '',
    password: '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),

handleSubmit: async (values, { setSubmitting, props }) => {
  try {
    await axios.post(`http://localhost:5263/${props.endpoint}`, values); 
    alert(`User ${props.message} successful`);
  } catch (err) {
    console.error(err);
  } finally {
    setSubmitting(false);
  }
  },
})(InnerForm);

export default AuthForm;
