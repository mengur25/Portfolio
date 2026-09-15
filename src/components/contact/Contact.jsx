import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Target recipient email
  const recipientEmail = "nguyenduong939705@gmail.com";

  // ========== Email Validation start here ==============
  const emailValidation = (emailToValidate) => {
    return String(emailToValidate)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = async (e) => {
    e.preventDefault();
    setErrMsg("");
    setSuccessMsg("");

    if (username.trim() === "") {
      setErrMsg("Please enter your name!");
      return;
    }
    if (phoneNumber.trim() === "") {
      setErrMsg("Please enter your phone number!");
      return;
    }
    if (email.trim() === "") {
      setErrMsg("Please enter your email!");
      return;
    }
    if (!emailValidation(email)) {
      setErrMsg("Please provide a valid email address!");
      return;
    }
    if (subject.trim() === "") {
      setErrMsg("Please enter the subject!");
      return;
    }
    if (message.trim() === "") {
      setErrMsg("Message content is required!");
      return;
    }

    try {
      setIsLoading(true);

      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `[Portfolio Contact] ${subject} - From ${username}`,
          name: username,
          phone: phoneNumber,
          email: email,
          subject: subject,
          message: message,
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true || response.status === 200)) {
        setSuccessMsg(
          `Thank you ${username}! Your message has been sent directly to my email.`
        );
        setUsername("");
        setPhoneNumber("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setErrMsg(data.message || "Failed to send email. Please try again later!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setErrMsg("An error occurred while sending your message. Please try again!");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setErrMsg("");
        setSuccessMsg("");
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="GET IN TOUCH" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between gap-10">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne border border-gray-800">
            <form onSubmit={handleSend} className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="py-3 px-4 bg-red-500/10 border border-red-500/30 rounded-lg text-center text-red-400 text-sm tracking-wide">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 px-4 bg-green-500/10 border border-green-500/30 rounded-lg text-center text-green-400 text-sm tracking-wide">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-6">
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Your name
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    placeholder="Nguyen Van A"
                    disabled={isLoading}
                    className="contactInput"
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-2">
                  <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                    Phone Number
                  </label>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    placeholder="+84 947188794"
                    disabled={isLoading}
                    className="contactInput"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="example@gmail.com"
                  disabled={isLoading}
                  className="contactInput"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Subject
                </label>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  placeholder="Job Opportunity / Project Inquiry"
                  disabled={isLoading}
                  className="contactInput"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  Message
                </label>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Write your message here..."
                  disabled={isLoading}
                  className="contactTextArea"
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div className="w-full mt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full h-12 bg-[#141518] rounded-lg text-sm font-semibold text-gray-300 tracking-wider uppercase duration-300 border border-transparent ${
                    isLoading
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:text-designColor hover:border-designColor hover:bg-black shadow-shadowOne"
                  }`}
                >
                  {isLoading ? "Sending Message..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;