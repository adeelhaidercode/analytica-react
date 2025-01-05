import React, { useState } from "react";
import googleLogo from "../../assets/images/google_720255.png";
import facebook from "../../assets/images/facebook_5968764.png";
import { faEnvelope, faEye, faEyeSlash,faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/shared/Button";
import Modal from '@mui/material/Modal';
import loginImg from '../../assets/images/login.jpg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!validateEmail(formData?.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (formData?.password?.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    if (formData?.password !== formData?.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors)?.length === 0) {
      setIsModalOpen(true); 
    }
  };

  return (
    <div className="font-sans px-4">
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-2 items-center gap-4 md:gap-8 max-w-6xl w-full p-6 shadow-lg rounded-lg">
          <div className="w-full md:max-w-md px-4 py-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-12">
              <div className="backhome -mt-8">
               <ArrowBackIosIcon fontSize="extra-small " className="mb-1 -mr-2"/> <a className=" hover:border-b-primary hover:border-b-2 mb-2 " href="/">Back</a>
            </div>
                <h3 className="text-gray-800 text-3xl font-bold">Register</h3>
                <p className="text-sm mt-4 text-gray-700">
                  Already have an account?
                  <a
                    href="/"
                    className="text-primary font-semibold hover:underline ml-1"
                  >
                    Sign in here
                  </a>
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <div className="relative flex items-center">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full text-gray-800 text-sm border-b ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-primary pl-2 pr-10 py-2 outline-none`}
                    placeholder="Enter email"
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute right-2 text-gray-400"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mt-8">
                <label
                  htmlFor="password"
                  className="block text-xs font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className={`w-full text-gray-800 text-sm border-b ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } focus:border-primary pl-2 pr-10 py-2 outline-none`}
                    placeholder="Enter password"
                  />
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className="absolute right-2 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
              <div className="mt-8">
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className={`w-full text-gray-800 text-sm border-b ${
                      errors.confirmPassword ? "border-red-500" : "border-gray-300"
                    } focus:border-primary pl-2 pr-10 py-2 outline-none`}
                    placeholder="Confirm password"
                  />
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                    className="absolute right-2 text-gray-400 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              <div className="mt-12">
                <Button title="Register" className="w-full py-2.5" />
              </div>
              <div className="my-6 flex items-center gap-4">
                <hr className="w-full border-gray-300" />
                <p className="text-sm text-gray-500">or</p>
                <hr className="w-full border-gray-300" />
              </div>

                                                
                                                
                                                {/* Social Buttons */}
              <div className="flex justify-center space-x-4">
                <button type="button">
                  <img className="w-12" src={googleLogo} alt="google" />
                </button>
                <button type="button">
                  <img className="w-12" src={facebook} alt="facebook" />
                </button>
              </div>
            </form>
          </div>



                                                {/* Image Section */}
          <div className="hidden md:flex items-center justify-center bg-primary rounded-lg p-8">
            <img
              src={loginImg}
              alt="Sign In"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>


                                          {/* Success Modal */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-white rounded-lg p-6 text-center">
          <FontAwesomeIcon icon={faCheckCircle} className="text-primary text-6xl mb-4" />
          <h2 className="text-xl font-bold mb-2">Registration Successful!</h2>
          <p className="text-sm text-gray-500">
            You have successfully registered yourself.
          </p>
          <Button
            title="Close"
            onClick={() => setIsModalOpen(false)}
            className="mt-4 w-32"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Register;
