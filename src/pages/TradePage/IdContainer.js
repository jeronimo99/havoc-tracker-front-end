import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import IdForm from "./IdForm";

const validationSchema = Yup.object().shape({
  id1: Yup.string().required("Required"),
  id2: Yup.string().required("Required"),
});

const IdContainer = ({ setUser1, setUser2 }) => {
  const [modal, setModal] = useState({ status: false, message: "" });

  const onCloseModal = () => {
    setModal({ status: false, message: "" });
  };

  const sendRequest = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      if (values.id1 === values.id2) {
        setModal({
          status: true,
          message: "You can't trade with yourself.",
        });
        formik.resetForm();
        return;
      }

      const user1Response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/people/${values.id1}`
      );
      const user1Data = await user1Response.json();

      const user2Response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/people/${values.id2}`
      );
      const user2Data = await user2Response.json();

      if (user1Response.status === 500 || user2Response.status === 500) {
        setModal({
          status: true,
          message: "Something wrong. Could not find the related survivors.",
        });
        formik.resetForm();
        return;
      }

      if (user1Data.isInfected || user2Data.isInfected) {
        setModal({
          status: true,
          message: "Infected people can't trade.",
        });
        formik.resetForm();
        return;
      }
      formik.resetForm();
      setSubmitting(false);
      setUser1(user1Data);
      setUser2(user2Data);
    } catch (err) {
      setModal({
        status: true,
        message: "Server is not responding. Try again.",
      });
      setSubmitting(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      id1: "",
      id2: "",
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
