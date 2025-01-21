import {
  Card,
  FormLayout,
  TextField,
  Button,
  LegacyCard,
} from "@shopify/polaris";
import * as Yup from "yup";
import { useFormik } from "formik";

function GenerateTickets({
  setIsShowTicketForm,
}: {
  setIsShowTicketForm: any;
}) {
  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setIsShowTicketForm(false); // Corrected to directly call the passed function
    },
  });

  return (
    <div style={{ padding: "30px" }}>
      <LegacyCard>
        <form onSubmit={formik.handleSubmit} style={{ padding: "30px" }}>
          {/* Title Field */}
          <div>
            <label htmlFor="">Title</label>
            <input
              style={{
                width: "100%",
                borderRadius: "10px",
                padding: "10px",
                border: "1px solid #c9c9c9",
                outline: "none",
              }}
              value={formik.values.title}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="title"
              autoComplete="off"
              required
              aria-describedby={
                formik.touched.title && formik.errors.title
                  ? "title-error"
                  : undefined
              }
            />
          </div>
          {/* Description Field */}
          <div style={{ paddingTop: "15px" }}>
            <label htmlFor="">Description</label>
            <textarea
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="description"
              autoComplete="off"
              style={{
                width: "100%",
                borderRadius: "10px",
                padding: "10px",
                border: "1px solid #c9c9c9",
                outline: "none",
                resize: "none",
              }}
              rows={15}
              required
              aria-describedby={
                formik.touched.description && formik.errors.description
                  ? "description-error"
                  : undefined
              }
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              border: "1px solid #c4c4c4",
              backgroundColor: "#3D8261",
              color: "white",
              cursor: "pointer",
              borderRadius: "4px",
              marginTop: "15px",
            }}
          >
            Submit
          </button>
        </form>
      </LegacyCard>
    </div>
  );
}

export default GenerateTickets;
