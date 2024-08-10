"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useCallback, Suspense } from "react";
import { getLogo } from "../../utils/indexedDB";
import dynamic from "next/dynamic";
import { useForm, SubmitHandler } from "react-hook-form";

const Navbar = dynamic(() => import("@/components/Designer/NavBar"), {
  suspense: true,
});

interface FormData {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
}

const DetailsPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedTemplate = searchParams.get("selectedTemplate") || "1";
  const backgroundColor = searchParams.get("backgroundColor") || "#8E1E1E";
  const stripeColor = searchParams.get("stripeColor") || "#FFFFFF";
  const fullLogoId = searchParams.get("fullLogo") || "";
  const leftLogoId = searchParams.get("leftSockLogo") || "";
  const rightLogoId = searchParams.get("rightSockLogo") || "";
  const quantity = searchParams.get("quantity") || "50";

  const [logos, setLogos] = useState({
    fullLogo: undefined as string | undefined,
    leftLogo: undefined as string | undefined,
    rightLogo: undefined as string | undefined,
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchLogos = async () => {
      const [storedFullLogo, storedLeftLogo, storedRightLogo] =
        await Promise.all([
          fullLogoId ? getLogo(fullLogoId) : undefined,
          leftLogoId ? getLogo(leftLogoId) : undefined,
          rightLogoId ? getLogo(rightLogoId) : undefined,
        ]);
      setLogos({
        fullLogo: storedFullLogo || undefined,
        leftLogo: storedLeftLogo || undefined,
        rightLogo: storedRightLogo || undefined,
      });
    };
    fetchLogos();
  }, [fullLogoId, leftLogoId, rightLogoId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = useCallback(
    async (formData) => {
      if (isSubmitting) return; // Prevent submission if already in progress
      setIsSubmitting(true); // Set submitting to true

      const data = new FormData();
      data.append("name", `${formData.firstName} ${formData.lastName}`);
      data.append("email", formData.email);
      data.append("telephone", formData.telephone);
      data.append("template", selectedTemplate);
      data.append("backgroundColor", backgroundColor);
      data.append("stripeColor", stripeColor);
      data.append("quantity", quantity);

      if (logos.fullLogo) {
        try {
          const response = await fetch(logos.fullLogo);
          const blob = await response.blob();
          const base64Logo = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          });
          data.append("fullLogo", base64Logo);
        } catch (error) {
          console.error("Error converting logo to base64:", error);
        }
      }

      data.append("message", "");

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: data,
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Server error:", errorData);
          throw new Error(
            `Response status: ${response.status}, ${errorData.message}`
          );
        }

        const responseData = await response.json();
        console.log(responseData.message);

        setSubmissionStatus("success");
      } catch (err: unknown) {
        const errorMessage =
          err instanceof Error ? err.message : "Unknown error occurred";
        console.error("Client error:", errorMessage);
        setSubmissionStatus("error");
      } finally {
        setIsSubmitting(false); // Reset submitting state
      }
    },
    [
      selectedTemplate,
      backgroundColor,
      stripeColor,
      quantity,
      logos.fullLogo,
      isSubmitting,
    ]
  );

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <div className="flex justify-center items-center min-h-screen bg-[#F5F7FA]">
        <div className="max-w-xl w-full bg-white shadow-md rounded border-2 border-gray-100 px-8 py-4 mx-4 sm:mx-0 mb-20">
          {submissionStatus === "success" ? (
            <div className="text-center p-6 ">
              <h1 className="text-2xl font-bold text-black">Order Sent</h1>
              <p className="text-lg text-black mt-2">
                We will get back to you soon.
              </p>
              <p className="text-lg text-black mt-2">
                Contact us at: gripgearsocks@gmail.com
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-center mb-4">
                Enter your details
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="m-4">
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      {...register("firstName", { required: true })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.firstName && (
                      <span className="text-red-500 text-sm">
                        First name is required
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      {...register("lastName", { required: true })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.lastName && (
                      <span className="text-red-500 text-sm">
                        Last name is required
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="telephone"
                    >
                      Telephone
                    </label>
                    <input
                      type="tel"
                      id="telephone"
                      {...register("telephone", { required: true })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.telephone && (
                      <span className="text-red-500 text-sm">
                        Telephone is required
                      </span>
                    )}
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", { required: true })}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm">
                        Email is required
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => router.back()}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      disabled={isSubmitting} // Disable button while submitting
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const DetailsPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <DetailsPageContent />
  </Suspense>
);

export default DetailsPage;
