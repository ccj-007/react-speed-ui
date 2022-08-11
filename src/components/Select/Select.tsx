import React, { FC } from "react";
export interface SelectProps { }

const Select: FC<SelectProps> = (props) => {
  return (
    <>
      <div>Select</div>
    </>
  );
};

Select.defaultProps = {};

export default Select;
