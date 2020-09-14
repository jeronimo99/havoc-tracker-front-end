import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import LocationForm from "./LocationForm";

const validationSchema = Yup.object().shape({
  lastLocationLat: Yup.number()
    .min(0, "Min 0")
    .max(150, "Max 150")
    .required("Required")
    .integer("Must be integer"),
  lastLocationLng: Yup.number()
    .min(0, "Min 0")
    .max(150, "Max 150")
    .integer("Must be integer")
    .required("Required"),
});

const UpdatePage = ({ id, username }) => {
  const [modal, setModal] = useState({ status: false, message: "" });

  const onCloseModal = () => {
    setModal({ status: false, message: "" });
  };

  const sendRequest = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/people/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      setModal({ status: true, message: "Location updated with success!" });
      formik.resetForm();
    } catch (err) {
      setModal({
        status: true,
        message: "Server is not responding. Try again.",
      });
    }
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      lastLocationLat: "",
      lastLocationLng: "",
    },
    validationSchema,
    onSubmit: sendRequest,
  });

  return (
    <LocationForm
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
      isSubmitting={formik.isSubmitting}
      modal={modal}
      onCloseModal={onCloseModal}
      username={username}
    />
  );
};

export default UpdatePage;
