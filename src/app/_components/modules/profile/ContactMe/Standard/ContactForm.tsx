"use client";

import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface ContactFormProps {
}

const ContactForm: React.FC<ContactFormProps> = ({}) => {
    const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Centralized Tailwind styles
    const styles = {
        container: "hidden sm:block inline-block w-full p-4",
        innerWrapper: "max-w-3xl mx-auto",

        // Status Messages
        successMessage: "bg-green-100 text-green-700 p-4 mb-6 text-left",
        errorMessage: "bg-red-100 text-red-700 p-4 rounded-md mb-6 text-left",

        // Form Field Shared Styles
        label: "block text-sm font-medium text-text dark:text-text-dark text-left",
        inputBase:
            "mt-1 block w-full px-3 py-2 text-text dark:text-text-dark border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors",
        inputValid: "border-gray-300 dark:border-primary",
        inputInvalid: "border-red-500",
        errorText: "mt-1 text-sm text-red-600",

        // Submit Section
        submitWrapper: "flex flex-col w-1/3 gap-4 mt-6",
        submitButton:
            "bg-secondary hover:bg-primary text-text-dark rounded-md font-medium py-4 px-6 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
    };

    const formik = useFormik<ContactFormData>({
        initialValues: {
            name: "",
            email: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
        }),
        onSubmit: async (values, {resetForm}) => {
            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        access_key: process.env.NEXT_PUBLIC_CONTACT_FORM_EMAIL_KEY,
                        name: values.name,
                        email: values.email,
                        message: values.message,
                        subject: `New message from ${values.name}`,
                        from_name: values.name,
                    }),
                });

                const data = await response.json();

                if (data.success) {
                    setSubmissionStatus("success");
                    resetForm();
                    setTimeout(() => setSubmissionStatus("idle"), 5000);
                } else {
                    throw new Error(data.message || "Submission failed");
                }
            } catch (error) {
                setSubmissionStatus("error");
                setErrorMessage("Failed to send message. Please try again later.");
            }
        },
    });

    const getInputClasses = (field: keyof ContactFormData) =>
        `${styles.inputBase} ${
            formik.touched[field] && formik.errors[field] ? styles.inputInvalid : styles.inputValid
        }`;

    return (
        <section role="region" aria-label="Contact form" id="contact-form" className={styles.container}>
            <div className={styles.innerWrapper}>

                {/* Success / Error Messages */}
                {submissionStatus === "success" && (
                    <div className={styles.successMessage} role="alert">
                        Thank you! Your message has been sent successfully.
                    </div>
                )}
                {submissionStatus === "error" && (
                    <div className={styles.errorMessage} role="alert">
                        {errorMessage}
                    </div>
                )}

                <form onSubmit={formik.handleSubmit} className="space-y-6" noValidate>
                    <p id="form-instructions" className="sr-only">
                        Complete the form below to send a message. All fields are required.
                    </p>

                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className={styles.label}>
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className={getInputClasses("name")}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            aria-required="true"
                            aria-invalid={formik.touched.name && !!formik.errors.name}
                            aria-describedby={formik.touched.name && formik.errors.name ? "name-error" : undefined}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <p id="name-error" className={styles.errorText} role="alert">
                                {formik.errors.name}
                            </p>
                        )}
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className={styles.label}>
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={getInputClasses("email")}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            aria-required="true"
                            aria-invalid={formik.touched.email && !!formik.errors.email}
                            aria-describedby={formik.touched.email && formik.errors.email ? "email-error" : undefined}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p id="email-error" className={styles.errorText} role="alert">
                                {formik.errors.email}
                            </p>
                        )}
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className={styles.label}>
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className={getInputClasses("message")}
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            aria-required="true"
                            aria-invalid={formik.touched.message && !!formik.errors.message}
                            aria-describedby={
                                formik.touched.message && formik.errors.message ? "message-error" : undefined
                            }
                        />
                        {formik.touched.message && formik.errors.message && (
                            <p id="message-error" className={styles.errorText} role="alert">
                                {formik.errors.message}
                            </p>
                        )}
                    </div>

                    {/* Honeypot */}
                    <div className="hidden">
                        <input type="text" name="honeypot" tabIndex={-1} aria-hidden="true"
                               onChange={formik.handleChange}/>
                    </div>

                    {/* Submit Section */}
                    <div className={styles.submitWrapper}>
                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className={styles.submitButton}
                            aria-label="Send message"
                        >
                            {formik.isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;