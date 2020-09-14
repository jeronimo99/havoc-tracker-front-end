import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import IdForm from "./IdForm";

const validationSchema = Yup.object().shape({
  id: Yup.string().required("Required"),
});

const IdContainer = ({ setId, setUsername }) => {
  const [modal, setModal] = useState({ status: false, message: "" });

  const onCloseModal = () => {
    setModal({ status: false, message: "" });
  };

  const sendRequest = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/people/${values.id}`
      );
      if (response.status === 500) {
        setModal({
          status: true,
          message: "No survivor encountered for this ID. Try again.",
        });
        formik.resetForm();
        return;
      }
      const person = await response.json();
      setId(person._id);
      setUsername(person.name);
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
      id: "",
    },
    validationSchema,
    onSubmit: sendRequest,
  });

  return (
    <IdForm
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
      isSubmitting={formik.isSubmitting}
      modal={modal}
      onCloseModal={onCloseModal}
    />
  );
};

export default IdContainer;
