"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { sendEmail } from "@/utils/send-email";
import Link from "next/link";
import { FaDiscord, FaEnvelope, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactComp: FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const result = await sendEmail(data);

      if (result.success) {
        // Show success toast
        toast.success('Email sent successfully!', {
          id: 'success',
          duration: 3000,
        });

        // Reset the form after success
        reset();

        // Reload the page after toast duration
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        toast.error(`Failed to send email: ${result.error}`);
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    }
  };

  return (
    <div className="relative max-w-[1240px] mx-auto px-3 sm:px-4 lg:px-6 py-20">
      {/* Contact Form and Social Icons */}
      <section className="relative z-10 max-w-[800px] mx-auto p-8 rounded-xs flex flex-col md:flex-row justify-between items-start">
        {/* Form Section */}
        <div className="flex-1 md:mr-8">
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800/40 mb-4">
              Get in Touch
            </h2>
            <p className="text-md md:text-lg text-gray-600/50">
              We would love to hear from you! Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-sm text-gray-200/40 rounded-xs border border-gray-300 bg-gray-800 outline-none"
                type="text"
                id="name"
                placeholder="Your Name"
                {...register('name', { required: "Name is required" })}
              />
              {errors.name && <p className="text-red-500/40 text-xs mt-1">{errors.name.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-3 text-sm text-gray-200/40 rounded-xs border border-gray-300 bg-gray-800 outline-none"
                type="email"
                id="email"
                placeholder="example@domain.com"
                {...register('email', {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address"
                  }
                })}
              />
              {errors.email && <p className="text-red-500/40 text-xs mt-1">{errors.email.message}</p>}
            </div>

            <div className="mb-6">
              <label className="block text-gray-200/40 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-xs text-sm text-gray-200/40 border border-gray-300 bg-gray-800 outline-none"
                id="message"
                rows={5}
                placeholder="Your Message"
                {...register('message', { required: 'Message is required' })}
              ></textarea>
              {errors.message && <p className="text-red-500/40 text-xs mt-1">{errors.message.message}</p>}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-gray-800 active:bg-green-700/40 text-sm text-gray-200/40 px-6 py-3 rounded-xs border outline-none transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex-1 flex flex-row md:flex-col justify-start items-center mt-10 md:mt-0 space-x-2 md:space-y-6">
          <p className="text-gray-800/50 mb-4">Connect with us:</p>
          <Link
            href="https://x.com"
            className="bg-transparent text-gray-600/40 p-2 rounded-full border hover:bg-gray-800/50 transition"
          >
            <FaXTwitter size={20} />
          </Link>
          <Link
            href="https://discord.com"
            className="bg-transparent text-gray-600/40 p-2 rounded-full border hover:bg-indigo-600/50 transition"
          >
            <FaDiscord size={20} />
          </Link>
          <Link
            href="mailto:someone@example.com"
            className="bg-transparent text-gray-600/40 p-2 rounded-full border hover:bg-gray-200/50 transition"
          >
            <FaEnvelope size={20} />
          </Link>
          <Link
            href="https://wa.me/123456789"
            className="bg-transparent text-gray-600/40 p-2 rounded-full border hover:bg-green-600/50 transition"
          >
            <FaWhatsapp size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactComp;
