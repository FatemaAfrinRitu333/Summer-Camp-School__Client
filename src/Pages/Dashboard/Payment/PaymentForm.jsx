import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import './Payment.css'

const PaymentForm = () => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
//   const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
//   const [transactionId, setTransactionId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      setError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment intent", paymentIntent);
    setProcessing(false);
    // if (paymentIntent.status === "succeeded") {
    //   setTransactionId(paymentIntent.id);
    //   // save payment information to the server
    //   const payment = {
    //     email: user?.email,
    //     transactionId: paymentIntent.id,
    //     price,
    //     quantity: cart.length,
    //     cartItems: cart.map((item) => item._id),
    //     menuItem: cart.map((item) => item.menuItemId),
    //     itemsNames: cart.map((item) => item.name),
    //     date: new Date(),
    //     status: "service pending",
    //   };
    //   axiosSecure.post("/payments", payment).then((res) => {
    //     console.log(res.data);
    //     if (res.data.insertResult.insertedId) {
    //       Swal.fire("Good job!", "You clicked the button!", "success");
    //     }
    //   });
    // }
  };
  return (
    <form className="text-center" onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                  base: {
                      fontSize: "16px",
                      //   color: "#424770",
                      "::placeholder": {
                          color: "#aab7c4",
                        },
                    },
                    invalid: {
                        color: "#9e2146",
                    },
                },
            }}
            className="w-full bg-white px-10 py-5 rounded-lg shadow-lg"
          />
          <button type="submit" className="btn btn-outline btn-primary w-full mt-5 shadow-lg" disabled={!stripe}>
            Pay
          </button>
        </form>
  );
};

export default PaymentForm;
