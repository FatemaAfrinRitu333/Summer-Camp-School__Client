import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = ({item}) => {
    console.log(item)
  const price = 10;
  const cart = [];

  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Student Dashboard || Payment</title>
      </Helmet>
      <SectionTitle
        heading={"Payment"}
        subHeading={"Complete your payment to confirm enroll"}
      ></SectionTitle>
      <div className="mx-auto w-3/4 bg-slate-100 p-12 rounded-lg">
        <p className="mb-9 text-xl font-bold text-primary">Amount: $</p>
        <Elements stripe={stripePromise}>
          <PaymentForm price={price} cart={cart}></PaymentForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
