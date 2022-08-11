import React, { FC } from "react";
export interface FormProps { }

const Form: FC<FormProps> = (props) => {
  return (
    <>
      <div>Form</div>
    </>
  );
};

Form.defaultProps = {};

export default Form;
