"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormResponse {
  status: "success" | "error";
  message: string;
}

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwpza_xT3V0ksN9AR0PoXWsYd5ofnODU0Bzs19o0mMYA5wGlydX1zPnQUNr1Mdm/exec";

const ContactForm: React.FC = () => {
  const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<FormResponse | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Tạo URL với parameters
      const formDataUrl = new URLSearchParams({
        ...formData,
        timestamp: new Date().toISOString(),
      }).toString();

      const finalUrl = `${GOOGLE_SCRIPT_URL}?${formDataUrl}`;

      const response = await fetch(finalUrl, {
        method: "GET", // Đổi thành GET request
        mode: "no-cors", // Sử dụng no-cors mode
      });
      console.log("🚀 ~ response:", response);

      // Vì using no-cors, chúng ta không thể đọc response
      // Nên cứ xem như thành công nếu không có lỗi
      setSubmitStatus({
        status: "success",
        message: "Thông tin của bạn đã được gửi thành công!",
      });
      setFormData(initialFormData);
    } catch (error) {
      console.error("Lỗi:", error);
      setSubmitStatus({
        status: "error",
        message: "Có lỗi xảy ra, vui lòng thử lại sau!",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto p-6">
      <div className="text-center text-2xl font-bold pt-5 pb-10 text-[#0D9251]">
        Để lại thông tin, chúng tôi sẽ liên hệ lại với bạn
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row items-center justify-center">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Họ và tên *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Số điện thoại *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:max-w-[200px] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
              ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#0D9251] hover:bg-[#0D9251]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }`}
          >
            {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
          </button>
        </div>

        {submitStatus && (
          <div
            className={`mt-4 p-4 rounded-md ${
              submitStatus.status === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
