import React from "react";

const FormSubmissionStatus = ({ status }) => {
  return (
    <div
      className={`p-4 rounded mb-4 ${
        status.success
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-800"
      }`}
    >
      {status.message}
    </div>
  );
};

export default FormSubmissionStatus;
