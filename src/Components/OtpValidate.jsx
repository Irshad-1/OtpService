import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

export const OtpValidate = () => {
  return (
    <Formik
      initialValues={{ otp: "" }}
      validationSchema={Yup.object({
        otp: Yup.number()
          .typeError("Please enter a valid number")
          .required("Required"),
      })}
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
            name="otp"
            type="text"
            maxLength={6}
            placeholder="Enter otp"
            style={{
              fontSize: "24px",
              borderRadius: "15px",
              padding: "5px",
            }}
          />
          <p style={{ color: "red" }}>{touched.otp && errors.otp}</p>

          <button
            onClick={() => {
              swal({ title: "OTP successfully validated", icon: "success" });
            }}
            style={{
              backgroundColor: "#54B435",
              marginTop: "15px",
              border: 0,
              fontSize: "20px",
              fontWeight: "600",
              padding: "10px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            Submit
          </button>
          <button
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
            onClick={() => {
              swal({ title: "OTP resend successfully", icon: "success" });
            }}
          >
            Resend OTP
          </button>
        </Form>
      )}
    </Formik>
  );
};
