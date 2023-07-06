import Head from "next/head";
import Image from "next/image";
import { useState, ChangeEvent } from "react";
import { DefaultLayout } from "@/layouts";
import { Button } from "@/ui/Button";
import { Input } from "@/ui/Input";
import { Textarea } from "@/ui/Textarea";
import { COLOR_THEME } from "@/constants";
import { PageTitle } from "@/components/PageTitle";
import { sendContactForm } from "@/lib/api";
import { IContactBody } from "@/interfaces";

import contactUsImage from "@/public/img/pexels-fatih-turan-8777703.jpg";

const REQUIRED_ERROR_MESSAGE = "Required";

const initValues: IContactBody = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

const initState = { values: initValues };

type TouchedFields = {
  firstName?: boolean;
  lastName?: boolean;
  email?: boolean;
  company?: boolean;
  phone?: boolean;
  message?: boolean;
};

export default function Contact() {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState<TouchedFields>({});

  const { values } = state;

  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onBlur = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const onSubmit = async () => {
    await sendContactForm(values);
  };

  return (
    <DefaultLayout home={false}>
      <Head>
        <title>Contact Us</title>
      </Head>

      <PageTitle>Contact Us</PageTitle>

      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <Image
            src={contactUsImage}
            width={800}
            height={1200}
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
            alt="Mexim Contact Us"
          />
        </div>
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Let&apos;s work together
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                We would love to hear from you! Whether you have a question, a
                business inquiry, or simply want to say hello, please feel free
                to reach out to us using the form below. Our dedicated team is
                ready to assist you and provide the information you need.
              </p>
              <form>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <Input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        className={`px-3.5 py-2 ${COLOR_THEME.ring.secondaryFocus}`}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={onBlur}
                        error={
                          touched.firstName && !values.firstName
                            ? REQUIRED_ERROR_MESSAGE
                            : undefined
                        }
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <Input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        className={`px-3.5 py-2 ${COLOR_THEME.ring.secondaryFocus}`}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={onBlur}
                        error={
                          touched.lastName && !values.lastName
                            ? REQUIRED_ERROR_MESSAGE
                            : undefined
                        }
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={`px-3.5 py-2 ${COLOR_THEME.ring.secondaryFocus}`}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                        error={
                          touched.email && !values.email
                            ? REQUIRED_ERROR_MESSAGE
                            : undefined
                        }
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Company
                    </label>
                    <div className="mt-2.5">
                      <Input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="organization"
                        className={`px-3.5 py-2 ${COLOR_THEME.ring.secondaryFocus}`}
                        value={values.company}
                        onChange={handleChange}
                        onBlur={onBlur}
                        error={
                          touched.company && !values.company
                            ? REQUIRED_ERROR_MESSAGE
                            : undefined
                        }
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="phone"
                        className="block font-semibold text-gray-900"
                      >
                        Phone
                      </label>
                      <p id="phone-description" className="text-gray-400">
                        Optional
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className={`px-3.5 py-2 ${COLOR_THEME.ring.secondaryFocus}`}
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={onBlur}
                        error={
                          touched.phone && !values.phone
                            ? REQUIRED_ERROR_MESSAGE
                            : undefined
                        }
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        How can we help you?
                      </label>
                      <p id="message-description" className="text-gray-400">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        className={`px-3.5 py-2 ${COLOR_THEME.ring.secondaryFocus}`}
                        defaultValue={""}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={onBlur}
                        error={
                          touched.message && !values.message
                            ? REQUIRED_ERROR_MESSAGE
                            : undefined
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                  <Button
                    type="submit"
                    onClick={onSubmit}
                    color={COLOR_THEME.background.primary}
                    hoverColor={COLOR_THEME.background.primaryHover}
                    outlineColor={COLOR_THEME.outline.primaryFocusVisible}
                    textColor={"text-white"}
                    size="xl"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
