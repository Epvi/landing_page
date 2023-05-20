import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "../styles/DeleteUser.module.css"

const DeleteAccount = () => {
    const router = useRouter();
    const onSubmit = (values) => {
        if (values.phone.length !== 10) {
            alert("Phone number must contain 10 digits!")
            return;
        }
        router.push('/delete-process');
        // console.log("Form Data", values);
    };


    const initialValues = {
        phone: ""
    };
    const phoneRegExp =
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const validationSchema = Yup.object({
        phone: Yup.string()
            .required("Required")
            .matches(phoneRegExp, "Please enter a valid phone number"),
    });
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.Heading}>Need help with Deleting your account?</div>
                <div className={styles.supportText}>Enter the phone number associated with your account to continue the process</div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(formik) => {
                        return (
                            <Form>
                                <div className={styles.formBox}>
                                    <div className={styles.inputField}>
                                        <label htmlFor="phone_no">Phone number</label>
                                        <Field
                                            type="text"
                                            id="phone_no"
                                            name="phone"
                                            placeholder="+91"
                                            required
                                        />
                                        <ErrorMessage name="phone" component={TextError} />
                                    </div>
                                    <button
                                        className={styles.deleteBtn}
                                        type="submit"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

const TextError = (props) => {
    return <div style={{ color: "red" }}>{props.children}</div>;
};


export default DeleteAccount;