"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { RiSendPlaneLine } from "react-icons/ri";

// import dotenv from "dotenv";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Use your EmailJS template ID and user ID
    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_USER_ID as string
      )
      .then(
        (response) => {
          alert("Email sent successfully:");
          // Add any success message or redirect user after successful submission
        },
        (error) => {
          alert("Email failed to send:");
          // Add error handling, show a message to the user, etc.
        }
      );
  };

  return (
    <div className="flex justify-center items-center w-full mx-8 ">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft(0.9)}
        className="flex flex-col items-start justify-center    "
      >
        <motion.div className="Welcome-box py-[8px] mt-4 mb-2 px-[17px] border border-[#7042f88b] opacity-[0.9] mx-2">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Send Me A Message</h1>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center border border-[#2A0E61] px-[50px] py-[30px] rounded"
          id="emailForm"
        >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=" m-2 py-2 px-3 w-full  button-primary  rounded"
            placeholder="Name"
          />

          <br />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className=" m-2 py-2 px-3 w-full button-primary rounded"
          />

          <br />

          <textarea
            value={message}
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="m-2 py-2 w-full px-3 button-primary rounded"
          />

          <br />
          <button
            type="submit"
            className="py-[7px] button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-[10px] m-2 flex items-center  border-none"
          >
            <RiSendPlaneLine className="mr-2" /> Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;
