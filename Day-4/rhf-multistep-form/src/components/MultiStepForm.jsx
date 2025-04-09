import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AccountSetup from "./AccountSetup";
import AddressInfo from "./AddressInfo";
import FormProgress from "./FormProgress";
import FormSubmissionStatus from "./FormSubmissionStatus";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const nextStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (finalData) => {
    try {
      //simulating api calls
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus({
        success: true,
        message: "Form submitted successfully!",
      });
      console.log("Form submitted:", finalData);
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Submission failed. Please try again.",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Multi-Step Form</h2>
      <FormProgress currentStep={step} totalSteps={3} />

      {submitStatus ? (
        <FormSubmissionStatus status={submitStatus} />
      ) : (
        <>
          {step === 1 && (
            <PersonalInfo initialData={formData} onNext={nextStep} />
          )}
          {step === 2 && (
            <AccountSetup
              initialData={formData}
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 3 && (
            <AddressInfo
              initialData={formData}
              onSubmit={handleSubmit}
              onBack={prevStep}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
