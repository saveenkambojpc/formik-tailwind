import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";

type Props = {
  name: string;
  label?: string;
  required?: boolean;
  options: { key: string; value: string }[];
};

export default function Select({
  label,
  name,
  required,
  options,
  ...rest
}: Props) {
  return (
    <div>
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span className="asterisk">*</span>}
        </label>
      )}
      <Field
        className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
        as="select"
        id="name"
        name={name}
        {...rest}
      >
        <option selected hidden>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}
