import { Formik, Form, Field } from 'formik';

export const PhoneBookForm = ({ initialValue, submitForm }) => {
  return (
    <Formik initialValues={initialValue} onSubmit={submitForm}>
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
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
