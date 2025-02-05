"use client";
import React, { useState, memo, FormEvent, ChangeEvent } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

interface FormData {
    fullName: string;
    email: string;
    subject: string;
    message: string;
}

interface FormState {
    success: boolean;
    error: boolean;
    loading: boolean;
}

const EmailSection: React.FC = () => {
    const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

    const [formData, setFormData] = useState<FormData>({
        fullName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [formState, setFormState] = useState<FormState>({
        success: false,
        error: false,
        loading: false,
    });

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormState({ success: false, error: false, loading: true });
        try {
            const response = await fetch("/api/mail", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                setFormState({ success: true, error: false, loading: false });
                setFormData({ fullName: "", email: "", subject: "", message: "" });
            } else {
                setFormState({ success: false, error: true, loading: false });
            }
        } catch (error) {
            console.log("An Error Occurred: ", error);
            setFormState({ success: false, error: true, loading: false });
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <section
            id="contact"
            className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
        >
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate[...]">
                <div className="z-10">
                    <h5 className="text-xl font-bold text-white my-2">
                        Let's Connect
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        I'm currently looking for new career opportunities, my inbox is
                        always open. Whether you have a question or just want to say hi,
                        I'll try my best to get back to you!
                    </p>
                    <div className="socials flex flex-row gap-2">
                        <Link href="https://github.com/machiavellai">
                            <Image src={GithubIcon} alt="Github Icon" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/victor-oghene-b256171b6/">
                            <Image src={LinkedinIcon} alt="Linkedin Icon" />
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                {emailSubmitted ? (
                    <p className="text-green-500 text-sm mt-2">
                        Email sent successfully!
                    </p>
                ) : (
                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label
                                htmlFor="Name"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your Full name..
                            </label>
                            <input
                                name="Name"
                                type="text"
                                required
                                value={formData.fullName}
                                placeholder="clark kent"
                                onChange={handleInputChange}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="text-white block mb-2 text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="subject"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Subject
                            </label>
                            <input
                                name="subject"
                                type="text"
                                required
                                placeholder="Just saying hi"
                                value={formData.subject}
                                onChange={handleInputChange}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="text-white block text-sm mb-2 font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                placeholder="Let's talk about..."
                                value={formData.message}
                                onChange={handleInputChange}
                                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
                        >
                            Send Message
                        </button>
                        {formState.loading && (
                            <div className="font-bold tracking-wider mt-6 bg-primary rounded-sm text-center py-4 px-4 text-xl text-white mb-3">
                                Processing... Please Wait
                            </div>
                        )}

                        {formState.error && (
                            <div className="font-bold tracking-wider mt-6 bg-red-500 rounded-sm text-center py-4 px-4 text-xl text-white mb-3">
                                An Error Occurred, Try Again.
                            </div>
                        )}

                        {formState.success && (
                            <div className="font-bold tracking-wider mt-6 bg-green-500 rounded-sm text-center py-4 px-4 text-xl text-white mb-3">
                                Message Sent
                            </div>
                        )}
                    </form>
                )}
            </div>
        </section>
    );
};

export default memo(EmailSection);