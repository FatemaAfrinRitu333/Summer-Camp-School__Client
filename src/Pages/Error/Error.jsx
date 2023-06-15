import { Link, useRouteError } from "react-router-dom";
import ErrorGif from "../../assets/error.gif";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 font-sans">
      <img src={ErrorGif} alt="" />
      <h1 className="text-5xl font-extrabold text-error mb-6">OOPS</h1>
      <p className="text-xl mb-8 text-accent">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'>
        <button className="btn btn-error btn-outline hover:btn-primary">
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
