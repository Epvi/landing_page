import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import contactUsStyles from "../../styles/ContactUs.module.css";
import TextError from "./TextError";

const GetContactUsFrom = () => {
  const initialValues = {
    first: "",
    last: "",
    email: "",
    phone: "",
    message: "",
    privacyCheck: false,
  };

  const onSubmit = (values) => {
    console.log("Form Data", values);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    first: Yup.string().required("Required"),
    last: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string()
      .required("Required")
      .matches(phoneRegExp, "Please enter a valid phone number"),
    message: Yup.string().required("Required"),
    privacyCheck: Yup.bool()
      .oneOf([true], "Please accept our privacy policy")
      .required("Required"),
  });

  return (
    <>
      <div className={contactUsStyles.contact_us_form}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <div className={contactUsStyles.contact_us_form_data}>
                  <div className={contactUsStyles.contact_us_form_name}>
                    <div>
                      <label htmlFor="first">First name</label>
                      <Field
                        type="text"
                        id="first"
                        name="first"
                        placeholder="First Name"
                        required
                      />
                      <ErrorMessage name="first" component={TextError} />
                    </div>
                    <div>
                      <label htmlFor="last">Last name</label>
                      <Field
                        type="text"
                        id="last"
                        name="last"
                        placeholder="Last Name"
                        required
                      />
                      <ErrorMessage name="last" component={TextError} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email">Your Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="enter your email"
                      required
                    />
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <div>
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
                  <div>
                    <label htmlFor="message">Message</label>
                    <Field
                      as="textarea"
                      name="message"
                      type="text"
                      id="message"
                      placeholder="Leave us a message..."
                      required
                    />
                    <ErrorMessage name="message" component={TextError} />
                  </div>
                  <div className={contactUsStyles.contact_us_form_checkbox}>
                    <Field
                      type="checkbox"
                      id="checkbox"
                      name="privacyCheck"
                      required
                    />
                    <ErrorMessage name="privacyCheck" component={TextError} />
                    <p>You agree to our friendly</p>
                    <Link href="/privacy">privacy policy.</Link>
                  </div>
                  <button
                    className={contactUsStyles.contact_us_form_btn}
                    type="submit"
                  >
                    Send message
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default GetContactUsFrom;
