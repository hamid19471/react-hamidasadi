import SectionHeading from "../SectionHeading/SectionHeading";
import { useFormik } from "formik";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { CiMail } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const ContactMe = () => {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const onSubmit = async (values) => {
    await emailjs
      .send("service_filtgyu", "template_39mgmol", values, "ZJ3C0CvNmWF5p7JuL")
      .then(() => {
        navigate("/about-me");
        formik.resetForm();
      });
  };

  const validationSchema = yup.object({
    fullName: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Email is required"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(
        /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
        "Please enter a valid phone number"
      ),
    message: yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container mb-28">
      <SectionHeading title="CONTACT ME" subTitle="GET IN TOUCH" />
      <div className="flex flex-col items-start justify-between gap-5 lg:flex-row">
        <div className="lg:w-[50%] w-full mr-28">
          <form onSubmit={formik.handleSubmit}>
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-500 text-sm font-extralight">
                {formik.errors.fullName}
              </div>
            ) : null}
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              {...formik.getFieldProps("fullName")}
              className="py-[10px] px-[16px] outline-none w-[100%] bg-white/0 border border-primary/70 rounded-lg placeholder:text-[14px] placeholder:text-white/70s font-extralight tracking-wider uppercase"
            />
            <div className="flex gap-5 my-5">
              <div className="w-full">
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm font-extralight">
                    {formik.errors.email}
                  </div>
                ) : null}
                <input
                  type="text"
                  name="email"
                  {...formik.getFieldProps("email")}
                  placeholder="email"
                  className="py-[10px] px-[16px] outline-none w-[100%] bg-white/0 border border-primary/70 rounded-lg placeholder:text-[14px] placeholder:text-white/70s font-extralight tracking-wider uppercase"
                />
              </div>
              <div className="w-full">
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-500 text-sm font-extralight">
                    {formik.errors.phone}
                  </div>
                ) : null}
                <input
                  type="text"
                  name="phone"
                  {...formik.getFieldProps("phone")}
                  placeholder="phone number"
                  className="py-[10px] px-[16px] outline-none w-[100%] bg-white/0 border border-primary/70 rounded-lg placeholder:text-[14px] placeholder:text-white/70s font-extralight tracking-wider uppercase"
                />
              </div>
            </div>
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500 text-sm font-extralight">
                {formik.errors.message}
              </div>
            ) : null}
            <textarea
              id="w3review"
              name="message"
              {...formik.getFieldProps("message")}
              placeholder="message"
              className="py-[10px] px-[16px] outline-none w-[100%] bg-white/0 border border-primary/70 rounded-lg placeholder:text-[14px] placeholder:text-white/70s font-extralight tracking-wider uppercase"
            />
            <button
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
              className="text-content font-extralight py-2 px-5 rounded-lg duration-300 uppercase tracking-wider bg-primary text-black mt-6 hover:scale-110 "
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mb-10 w-full lg:w-[50%]">
          <div className="w-full flex flex-col bg-secondray py-[30px] px-[30px] rounded-lg items-center hover:bg-secondray/60 duration-300">
            <CiMail className="text-primary text-[30px] mb-[20px]" />
            <h3 className="font-normal tracking-wide text-[18px]">E-mail</h3>
            <p className="text-white/80 font-extralight tracking-wider">
              info[at]hamidasadi.com
            </p>
          </div>
          <div className="w-full flex flex-col bg-secondray py-[30px] px-[30px] rounded-lg items-center hover:bg-secondray/60 duration-300">
            <BiSupport className="text-primary text-[30px] mb-[20px]" />
            <h3 className="font-normal tracking-wide text-[18px]">
              GET A QUOTE
            </h3>
            <p className="text-white/80 font-extralight tracking-wider">
              get free consultation and quote
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
