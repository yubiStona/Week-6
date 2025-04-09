import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
});

const AddressInfo = ({ initialData, onSubmit, onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialData,
  });
  const onFormSubmit = (data) => {
    onSubmit(data);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
      <h3 className="text-lg font-semibold">Address Information</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          {...register("address")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {errors.address && (
          <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          {...register("city")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
        />
        {errors.city && (
          <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
        )}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        >
          Back
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddressInfo;
