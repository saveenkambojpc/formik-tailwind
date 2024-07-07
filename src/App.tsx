import { Form, Formik } from "formik";
import "./App.css";
import FormControl from "./components/formik/FormControl";
import { Button } from "./components/core-ui/buttons";
import { TestValidation } from "./validations/view/test";

function App() {
  return (
    <div>
      <h3 className="text-2xl">This is App.js</h3>

      <Formik
        validationSchema={TestValidation}
        initialValues={{
          name: "",
          pref: "",
        }}
        onSubmit={(values: any) => {
          console.log("VALUES are ", values);
        }}
      >
        {() => (
          <Form>
            <FormControl control={"input"} name={"name"} />
            <FormControl
              control={"select"}
              name={"pref"}
              options={[
                { key: "value1", value: "Value1" },
                { key: "value2", value: "Value2" },
                { key: "value3", value: "Value3" },
                { key: "value4", value: "Value4" },
              ]}
            />
            <Button type="submit">Here</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
