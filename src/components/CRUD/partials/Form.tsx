import React, { useState } from "react";
import { useCRUD } from "../hooks/CRUDProvider";

export default function FormCRUD(props: any) {
  const [form, setForm] = useState<any>([]);
  const { title } = useCRUD();
  const [dataTest, setDataTest] = useState<any>(props.data[3]);
  const keyDataTest: any = Object.keys(dataTest);
  const valueDataTest: any = Object.values(dataTest);
  const inputForm: any = [];
  const newData: any = [];
  for (let i = 0; i < keyDataTest.length; i++) {
    newData.push({ key: keyDataTest[i], value: valueDataTest[i] });
  }
  const [dataForm, setDataForm] = useState(newData);

  // if (title) {
  // title.map((item: any) => {
  // inputForm.push({ name: item, content: null });
  // });
  // }
  // if (dataTest) {
  // keyDataTest.map((item: any) => {
  // inputForm.push({ key: item, value: null });
  // });
  // }

  let newForm: any = [];
  const updateForm = (key: any, value: any) => {
    newForm = dataForm.map((field: any) => {
      if (field.key === key) {
        return {
          ...field,
          value: value,
        };
      }
      return field;
    });
    setDataForm(newForm);
  };

  const handleInput = () => {
    setForm(dataForm);
    console.log(form);
  };

  return (
    <div>
      <h3>update Form or default form</h3>
      {/* <form>
{inputForm &&
inputForm.map((item: any) => (
<div key={item}>
<label>{item.key}</label>
<input
onChange={(e) => {
item.value = e.target.value;
}}
/>
</div>
))}
</form> */}

      <form>
        {dataForm.map((item: any, index: number) => (
          <div key={index}>
            <label>{item.key}</label>
            <input
              value={item.value}
              onChange={(e) => updateForm(item.key, e.target.value)}
            />
          </div>
        ))}
      </form>
      <button onClick={handleInput}>Submit</button>
    </div>
  );
}

const dataTest1 = {
  name: "name 2",
  age: 37,
  telephone: "telephone 2",
  location: "location 2",
  id: "2",
};

export const FormTest = () => {
  const newData: any = [];

  const keyDataTest: any = Object.keys(dataTest1);
  const valueDataTest: any = Object.values(dataTest1);

  for (let i = 0; i < keyDataTest.length; i++) {
    newData.push({ key: keyDataTest[i], value: valueDataTest[i] });
  }
  const [dataForm, setDataForm] = useState(newData);
  let newForm: any = [];
  const updateForm = (key: any, value: any) => {
    newForm = dataForm.map((field: any) => {
      if (field.key === key) {
        return {
          ...field,
          value: value,
        };
      }
      return field;
    });
    setDataForm(newForm);
  };

  const handleClick = () => {
    setDataForm(newForm);
  };

  console.log(dataForm);

  return (
    <div>
      {dataForm.map((field: any, idx: number) => (
        <div key={idx}>
          {field.key}
          <input
            value={field.value}
            onChange={(e) => updateForm(field.key, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleClick}>update</button>
    </div>
  );
};