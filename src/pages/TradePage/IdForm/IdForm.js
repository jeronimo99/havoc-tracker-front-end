import React from "react";
import {
  Wrapper,
  Form,
  Title,
  InputGroup,
  Input,
  Button,
  Loader,
  Error,
} from "./styles";
import Modal from "../../../components/Modal";

const IdForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  modal,
  onCloseModal,
}) => {
  return (
    <Wrapper>
      {isSubmitting ? (
        <Loader />
      ) : (
        <Form>
          <Title htmlFor="id1">Survivor 1 ID</Title>
          <InputGroup>
            <Input
              id="id1"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.id1}
            />
            <Error>{touched.id1 && errors.id1}</Error>
          </InputGroup>
          <Title htmlFor="id2">Survivor 2 ID</Title>
          <InputGroup>
            <Input
              id="id2"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.id2}
            />
            <Error>{touched.id2 && errors.id2}</Error>
          </InputGroup>
          <Button type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            Connect
          </Button>
        </Form>
      )}
      {modal.status && (
        <Modal onCloseModal={onCloseModal}>{modal.message}</Modal>
      )}
    </Wrapper>
  );
};

export default IdForm;
