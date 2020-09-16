import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddSurvivor from "./AddSurvivor";

const validationSchema = Yup.object().shape({
  name: Yup.string().max(50, "Name is too Long!").required("Required"),
  age: Yup.number()
    .min(1, "Minimum age is 1 year old")
    .max(150, "Maximum age is 150 years old")
    .integer("Number must be an integer")
    .required("Required"),
  gender: Yup.string().required("Required"),
  lastLocationLat: Yup.number()
    .min(0, "Min 0")
    .max(150, "Max 150")
    .required("Required")
    .integer("Number must be an integer"),
  lastLocationLng: Yup.number()
    .min(0, "Min 0")
    .max(150, "Max 150")
    .integer("Number must be an integer")
    .required("Required"),
  fijiWater: Yup.number()
    .positive("Number must me positive")
    .integer("Number must be integer")
    .max(100, "Limit of 100 units")
    .required("Required"),
  campbellSoup: Yup.number()
    .positive("Number must me positive")
    .integer("Number must be integer")
    .max(100, "Limit of 100 units")
    .required("Required"),
  firstAidPouch: Yup.number()
    .positive("Number must me positive")
    .integer("Number must be integer")
    .max(100, "Limit of 100 units")
    .required("Required"),
  ak47: Yup.number()
    .positive("Number must me positive")
    .integer("Number must be integer")
    .max(100, "Limit of 100 units")
    .required("Required"),
});

const AddSurvivorPage = () => {
  const [modal, setModal] = useState({ status: false, message: "" });

  const onCloseModal = () => {
    setModal({ status: false, message: "" });
  };

  const sendRequest = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/people`,
        {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      formik.resetForm();
      setSubmitting(false);
      setModal({
        status: true,
        message: `Success. Identification pass: ${data._id}`,
      });
    } catch (err) {
      setSubmitting(false);
      setModal({
        status: true,
        message: "Server is not responding. Try again please.",
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "male",
      lastLocationLat: "",
      lastLocationLng: "",
      fijiWater: "",
      campbellSoup: "",
      firstAidPouch: "",
      ak47: "",
    },
    validationSchema,
    onSubmit: sendRequest,
  });

  return (
    <AddSurvivor
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

export default AddSurvivorPage;
