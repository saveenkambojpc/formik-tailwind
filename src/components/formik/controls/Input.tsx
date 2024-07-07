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
        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
        id="name"
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
