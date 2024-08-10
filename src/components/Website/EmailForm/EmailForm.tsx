import React from "react";
import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";

const EmailForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const jsonFormData = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonFormData),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mt-8 w-full text-base max-md:max-w-full"
    >
      <InputField label="Name" name="name" />
      <InputField label="Email" name="email" type="email" />
      <TextArea
        label="Message"
        name="message"
        placeholder="Enter your message..."
      />
      <Button type="submit">Send</Button>
    </form>
  );
};

export default EmailForm;
