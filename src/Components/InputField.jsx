import React, { useState } from "react";

const InputField = ({ onChange, val }) => {
  return (
    <div>
      <input type="text" pattern="[0-9]*" value={val} onChange={onChange} />
    </div>
  );
};

export default InputField;
