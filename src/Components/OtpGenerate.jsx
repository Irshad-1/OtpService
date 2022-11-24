import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

export const OtpGenerate = ({ setState }) => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email().required("Required"),
      })}
      onSubmit={() => {
        swal({ title: "OTP send successfully", icon: "success" });
        setState(false);
      }}
    >
      {({ errors, touched }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "989px",
            marginTop: "-200px",
          }}
        >
          <h1 style={{ color: "white" }}>OTP Service</h1>
          <Field
            name="email"
            type="email"
            placeholder="Enter email address"
            style={{
              fontSize: "25px",
              borderRadius: "15px",
              padding: "5px",
            }}
          />
          <p style={{ color: "red" }}>{touched.email && errors.email}</p>

          <button
            type="submit"
            style={{
              backgroundColor: "#009EFF",
              marginTop: "15px",
              border: 0,
              fontSize: "20px",
              fontWeight: "600",
              padding: "10px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Send OTP
          </button>
        </Form>
      )}
    </Formik>
  );
};
