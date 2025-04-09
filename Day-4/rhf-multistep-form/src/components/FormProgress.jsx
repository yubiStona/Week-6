const FormProgress = ({ currentStep, totalSteps }) => {
  const steps = [
    { number: 1, label: "Personal" },
    { number: 2, label: "Account" },
    { number: 3, label: "Address" },
  ];

  return (
    <div className="flex justify-between mb-8">
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep === step.number
                ? "bg-blue-600 text-white"
                : currentStep > step.number
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {step.number}
          </div>
          <span className="text-xs mt-1">{step.label}</span>
        </div>
      ))}
    </div>
  );
};

export default FormProgress;
