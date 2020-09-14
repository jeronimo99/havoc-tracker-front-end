import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import IdForm from "./IdForm";
import LocationForm from "./LocationForm";

const idValidationSchema = Yup.object().shape({
  id: Yup.string().required("Required")
});

const locationValidationSchema = Yup.object().shape({
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

const UpdatePage = () => {
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

  const locationFormik = useFormik({
    initialValues: {
      lastLocationLat: "",
      lastLocationLng: "",
    },
    validationSchema: locationValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      try {
        fetch(
          `${process.env.REACT_APP_BACKEND_URL}/people/${id}`,
          {
            method: "PATCH",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        setModal({ status: true, message: "Location updated with success!" });
        locationFormik.resetForm();
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
      /> :
      <LocationForm
        values={locationFormik.values}
        errors={locationFormik.errors}
        touched={locationFormik.touched}
        handleChange={locationFormik.handleChange}
        handleBlur={locationFormik.handleBlur}
        handleSubmit={locationFormik.handleSubmit}
        isSubmitting={locationFormik.isSubmitting}
        modal={modal}
        onCloseModal={onCloseModal}
        username={username}
      />}
    </>
  );
};

export default UpdatePage;
