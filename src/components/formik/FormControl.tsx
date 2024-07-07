import Input from "./controls/Input";
import Select from "./controls/Select";

export type Controls =
  | "input"
  | "checkbox"
  | "date"
  | "file"
  | "datetime"
  | "time"
  | "select";
export type FieldTypes = "text" | "number" | "password";

export default function FormControl({
  control,
  label,
  name,
  type,
  disabled,
  required,
  options = [],
  onChange,
  ...rest
}: {
  control: Controls;
  label?: string;
  name: string;
  type?: FieldTypes;
  disabled?: boolean;
  options?: any[];
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  switch (control) {
    case "input":
      return (
        <Input
          label={label}
          type={type}
          name={name}
          disabled={disabled}
          {...rest}
        />
      );
    case "checkbox":

    case "datetime":

    case "date":

    case "time":

    case "file":
    case "select":
      return (
        <Select
          options={options}
          label={label}
          name={name}
        //   disabled={disabled}
          {...rest}
        />
      );
    default:
      return null;
  }
}
