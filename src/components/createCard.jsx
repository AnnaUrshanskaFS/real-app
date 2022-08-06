import { useFormik } from "formik";
import formikValidate from "../functions/formikvalidateJoi";
import PageHeader from "./common/pageHeader";
import Input from "./common/input";
import Joi from "joi";

const CreateCard = () => {
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },
    validate: formikValidate({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/)
        .label("Phone"),
      bizImage: Joi.string().min(11).max(1024).allow("").uri().label("Image"),
    }),
    onSubmit(values) {
      console.log(values);
    },
  });
  return (
    <>
      <PageHeader title="Create Card" description="Create your Card" />
      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {/* error && <div className="alert alert-danger">{error}</div> */}
        <Input
          type="text"
          label="Name"
          {...form.getFieldProps("bizName")}
          error={form.touched.bizName && form.errors.bizName}
        />
        <Input
          type="text"
          label="Description"
          {...form.getFieldProps("bizDescription")}
          error={form.touched.bizDescription && form.errors.bizDescription}
        />
        <Input
          type="text"
          label="Address"
          {...form.getFieldProps("bizAddress")}
          error={form.touched.bizAddress && form.errors.bizAddress}
        />
        <Input
          type="text"
          label="Phone"
          {...form.getFieldProps("bizPhone")}
          error={form.touched.bizPhone && form.errors.bizPhone}
        />
        <Input
          type="text"
          label="Image"
          {...form.getFieldProps("bizImage")}
          error={form.touched.bizImage && form.errors.bizImage}
        />
        <div className="my-4">
          <button
            disabled={!form.isValid}
            type="submit"
            className=" btn btn-outline-primary"
          >
            Create Card
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateCard;
