import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import bg from "../../assets/music-sheet-bg.jpg";
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <footer className="footer p-10 bg-gradient-to-r from-base-100/80 to-warning/80 text-base-content">
        <div className="">
          <img className="w-32" src={logo} alt="" />
          <p>
            <span className="text-3xl font-extrabold text-green-800 tracking-widest">
              Chorus Camp
            </span>
            <br />
            <span className="text-green-900 font-bold">
              Get ready to rock the rhythm, <br /> strum the strings, <br /> and
              let your musical talents soar at our exceptional music camp.
            </span>
          </p>
        </div>
        <div className="">
          <span className="footer-title opacity-100 text-xl text-green-800">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title opacity-100 text-xl text-green-800">Newsletter</span>
          <div className="form-control w-80">
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                Subscribe
              </button>
            </div>
          </div>
          <div className="divider my-1">OR</div>
          <span className="footer-title opacity-100 text-lg text-green-800">Contact Us</span>
          <p>Contact No: 01923473482</p>
          <p>Email: chorus@camp.com</p>
          <p>Address: A street, B house, XYZ</p>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-gradient-to-r from-base-100/80 to-warning/80 text-base-content border-slate-300">
        <div className="items-center grid-flow-col">
          <img className="w-14" src={logo} alt="" />
          <p>Copyright © 2023 - All right reserved by the Chorus Camp</p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-7 text-3xl">
            <Link>
              <BsTwitter className="text-sky-500" />{" "}
            </Link>
            <Link>
              <BsYoutube className="text-red-600" />{" "}
            </Link>
            <Link>
              <BsFacebook className="text-blue-800" />{" "}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
