import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
import { FieldTypes } from "../FormControl";

export default function Input({
  label,
  name,
  required,
  disabled,
  ...rest
}: {
  label?: string;
  name: string;
  required?: boolean;
  type?: FieldTypes;
  disabled?: boolean;
}) {
  return (
    <div className="mb-2">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className="asterisk">*</span>}
        </label>
      )}
      <Field
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
