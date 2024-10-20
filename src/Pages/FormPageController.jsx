import React, { useMemo, useState } from "react";
import FormPage from "./FormPage";
import useValidate from "../store/hooks/useValidate";
import { createStudentPayment } from "../apis/form.api";
import { useNavigate } from "react-router-dom";

const FormPageController = ({ callBack }) => {
  const validate = useValidate();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formdata, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    standard: "",
    medium: "",
    school: "",
    school_address: "",
    err: "",
    email: "",
    subjects: [],
  });

  const handleSubjectChange = (subject) => {
    setFormData((prev) => {
      const subjects = prev.subjects.includes(subject)
        ? prev.subjects.filter((s) => s !== subject)
        : [...prev.subjects, subject];
      return { ...prev, subjects };
    });
  };

  const validationSchema = useMemo(
    () => [
      { required: true, value: formdata.name, field: "Name" },
      { required: true, value: formdata.email, field: "Email" },
      { required: true, value: formdata.city, field: "City" },
      { required: true, value: formdata.address, field: "Address" },
      { required: true, value: formdata.phone, field: "Phone" },
      { required: true, value: formdata.school, field: "School Name" },
      {
        required: true,
        value: formdata.school_address,
        field: "School Address",
      },
      { required: true, value: formdata.standard, field: "Selected Number" },
      { required: true, value: formdata.medium, field: "Selected Medium" },
    ],
    [formdata]
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    const validationResponse = validate(validationSchema);

    if (validationResponse === true) {
      if (formdata.subjects.length === 0) {
        alert("Please select at least one subject.");
        return;
      }

      setLoading(true);

      const amount = formdata.subjects.length * 100; // Assuming each subject costs 100 rupees

      const options = {
        key: "rzp_test_kpGnEu2t2Gz0JK", // Enter the Key ID generated from the Dashboard
        amount: amount * 100, // Amount in paise
        currency: "INR",
        name: "Your Company Name",
        description: "Payment for selected subjects",
        handler: async (response) => {
          // Payment success
          try {
            const paymentData = {
              ...formdata,
              payment: response.razorpay_payment_id,
            };
            console.log("console", paymentData);
            await createStudentPayment(paymentData);
            setLoading(false);
            // navigate("/success");
            navigate("/success", { state: { paymentId: response.razorpay_payment_id } });
          } catch (err) {
            setLoading(false);
            setFormData({
              ...formdata,
              err: err.message || "Error occurred while processing payment",
            });
          }
        },
        prefill: {
          name: formdata.name,
          contact: formdata.phone,
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      rzp1.on("payment.failed", (response) => {
        // Handle payment failure
        // setLoading(false);
        // setFormData({ ...formdata, err: response.error.description });
        setLoading(false);
        const errorMessage =
          response.error.description || "Payment failed. Please try again.";
        setFormData({ ...formdata, err: errorMessage });

        alert(`Payment failed: ${errorMessage}`);
      });
    } else {
      setFormData({ ...formdata, err: validationResponse });
    }
  };

  return (
    <FormPage
      loading={loading}
      formdata={formdata}
      setFormData={setFormData}
      onSubmit={onSubmit}
      handleSubjectChange={handleSubjectChange}
      err={formdata.err}
    />
  );
};

export default FormPageController;
