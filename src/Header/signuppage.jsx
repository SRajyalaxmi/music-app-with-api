import { Formik, Form, Field, ErrorMessage, } from 'formik'
import * as Yup from 'yup'

const initialValues = {
    email: '',
    password: ''
}
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email format').max(40).required('Required'),
    password: Yup.string().oneOf([Yup.ref('password'), null]).matches(/[a-z]/, "Error" )
})
const Signuppage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Formik initialValues={initialValues}
            validationSchema={validationSchema}>
            {formik => {
                console.log('Formik props', formik)
                return (
                    <center>
                        <Form onSubmit={handleSubmit}>
                            <label>Email</label><br />
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" /><br />
                            <label>Password</label>  <br />
                            <Field type="text" name="password" id="password"/>
                            <ErrorMessage name="name" /><br /><br/>
                            <button>Create</button>
                        </Form>
                    </center>
                )
            }}
        </Formik>
    );
};
export default Signuppage;
