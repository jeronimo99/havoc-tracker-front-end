import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import LocationForm from "./FlagForm";

const validationSchema = Yup.object().shape({
  infected: Yup.string().required("Required"),
});

const FlagContainer = ({ id, username }) => {
  const [modal, setModal] = useState({ status: false, message: "" });

  const onCloseModal = () => {
    setModal({ status: false, message: "" });
  };

  const sendRequest = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/people/${id}/report-infection`, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      if (response.status === 500) {
        setModal({
          status: true,
          message: data.message,
        });
        formik.resetForm();
        return;
      }
      setModal({ status: true, message: "Target flagged with success." });
      formik.resetForm();
    } catch (err) {
      setModal({
        status: true,
        message: "Server is offline. Try again.",
      });
    }
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      infected: ""
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

export default FlagContainer;
