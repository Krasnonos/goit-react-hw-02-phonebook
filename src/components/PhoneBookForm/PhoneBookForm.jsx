import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

export const PhoneBookForm = ({ submitForm }) => {
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={submitForm}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" required />
        </label>
        <label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add constact</button>
      </Form>
    </Formik>
  );
};

PhoneBookForm.propTypes = {
  submitForm: PropTypes.func,
};
