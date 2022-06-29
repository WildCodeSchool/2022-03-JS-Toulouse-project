import React from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Header from "../components/Header";
import "../styles/AddProject.css";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    methode: yup.string().required(),
  })
  .required();

function AddProjects() {
  const {
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/add-project", data)
      .then((response) => {
        console.error(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <Header />

      <div className="add-project-container">
        <form className="add-project-form" onSubmit={handleSubmit(onSubmit)}>
          <p>Add a new project</p>
          <Controller
            name="title"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField onChange={onChange} value={value} label="Title" />
            )}
          />
          {errors?.title && <p>{errors.title.message}</p>}
          <Controller
            name="description"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                onChange={onChange}
                value={value}
                label="Description"
              />
            )}
          />
          {errors?.description && <p>{errors.description.message}</p>}
          <Controller
            name="methode"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField onChange={onChange} value={value} label="Methode" />
            )}
          />
          {errors?.methode && <p>{errors.methode.message}</p>}
          <Button
            disabled={
              !dirtyFields.title ||
              !dirtyFields.description ||
              !dirtyFields.methode
            }
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddProjects;
