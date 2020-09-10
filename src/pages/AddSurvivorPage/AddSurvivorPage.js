import React from "react";
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
  lastLocationX: Yup.number()
    .min(0, "Minimum is 0")
    .max(150, "Maximum is 150")
    .required("Required")
    .integer("Number must be an integer"),
  lastLocationY: Yup.number()
    .min(0, "Minimum is 0")
    .max(150, "Maximum is 150")
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
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      gender: "male",
      lastLocationX: "",
      lastLocationY: "",
      fijiWater: "",
      campbellSoup: "",
      firstAidPouch: "",
      ak47: "",
    },
    validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    },
  });

  return (
    <AddSurvivor
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
      isSubmiting={formik.isSubmiting}
    />
  );
};

export default AddSurvivorPage;
