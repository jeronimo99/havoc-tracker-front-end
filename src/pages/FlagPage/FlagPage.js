import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import IdForm from "../UpdatePage/IdForm";
import FlagForm from "./FlagForm";

const idValidationSchema = Yup.object().shape({
  id: Yup.string().required("Required")
});

const flagValidationSchema = Yup.object().shape({
  id: Yup.string().required("Required")
});

const FlagPage = () => {
  const idFormik = useFormik({
    initialValues: {
      id: "",
    },
    validationSchema: idValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
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
          idFormik.resetForm();
          return;
        }
        const person = await response.json();
        setId(person._id);
        setUsername(person.name);
        idFormik.resetForm();
      } catch (err) {
        setModal({
          status: true,
          message: "Server is not responding. Try again.",
        });
      }
      setSubmitting(false);
    },
  });

  const flagFormik = useFormik({
    initialValues: {
      infected: "",
    },
    validationSchema: flagValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
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
          idFormik.resetForm();
          return;
        }
        const person = await response.json();
        setId(person._id);
        setUsername(person.name);
        idFormik.resetForm();
      } catch (err) {
        setModal({
          status: true,
          message: "Server is not responding. Try again.",
        });
      }
      setSubmitting(false);
    },
  });

  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [modal, setModal] = useState({ status: false, message: "" });

  const onCloseModal = () => {
    setModal({ status: false, message: "" });
  };

  return (
    <>
      {!id ? <IdForm
        values={idFormik.values}
        errors={idFormik.errors}
        touched={idFormik.touched}
        handleChange={idFormik.handleChange}
        handleBlur={idFormik.handleBlur}
        handleSubmit={idFormik.handleSubmit}
        isSubmitting={idFormik.isSubmitting}
        modal={modal}
        onCloseModal={onCloseModal}
      /> : <FlagForm>Flag Form</FlagForm>}
    </>
  );
};

export default FlagPage;
