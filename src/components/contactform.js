import React, { useState } from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import { useForm } from "react-hook-form"




const ContactForm = () => {

  const GATEWAY_URL = "https://29v8wns725.execute-api.us-east-2.amazonaws.com/prod";
  
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    errors,
    reset,
  } = useForm();

  const onSubmit = async data => {
    try {
      await fetch(GATEWAY_URL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      setSubmitted(true );
      reset();
    } catch (error) {
      setError(
        "submit",
        "submitError",
        `Oops! There seems to be an issue! ${error.message}`
      );
    }
  };

  const showSubmitError = msg => <p className="msg-error">{msg}</p>;



  const showThankYou = (
    <div className="msg-confirm my-8 bg-blue01 text-white font-medium h-auto p-6">
      <p>Thank you for your Inquiry! Your message was sent and you will be hearing from our staff shortly.</p>
      <button className="border hover:bg-white border-white rounded p-4 m-6 font-medium hover:text-blue01" type="button" onClick={() => setSubmitted(false)}>
        Clear Form
      </button>
    </div>
  );

  const showForm = (
    <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <div className="pt-12">
        <label for="reasons">
          <div className="text-gray-700"><FormattedMessage id="form-reason" />
          </div>
          <select 
            id="reasons" 
            name="reasons" 
            ref={register({ required: true })} 
            className="mt-1 p-2 block w-full border-gray-400 rounded border-2">
            <option value="">Select One...</option>
            <option value="question">Ask a question</option>
            <option value="information">Request information</option>
            <option value="complaint">File a complaint</option>
            <option value="compliment">Make a compliment</option>
          </select>
        </label>
      </div>
      {errors.reasons && <p className="text-error font-medium italic">
        <FormattedMessage id="form-reason-error" /></p>}
      <div className="mt-4">
        <label htmlFor="name">
          <div className="text-gray-700">
          <FormattedMessage id="form-name" /></div>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            ref={register({ required: true })}
            className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
          />
        </label>
        {errors.name && <p className="text-error font-medium italic">
        <FormattedMessage id="form-name-error" /></p>}
      </div>
      
      <div className="mt-4">
      <label htmlFor="email">
        <div className="text-gray-700">
        <FormattedMessage id="form-email" />
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your@email.address"
          ref={register({ 
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
          className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
        />
      </label>
      {errors.email && <p className="text-error font-medium italic">
        <FormattedMessage id="form-email-error" /></p>}
      </div>
      <div className="mt-4">
        <label htmlFor="account">
          <div className="text-gray-700">
          <FormattedMessage id="form-account" />
          </div>
          <input
            type="text"
            name="account"
            id="account"
            placeholder="Account No."
            ref={register}
            className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
          />
        </label>
      </div>
      <div className="mt-4">
        <label htmlFor="phone">
          <div className="text-gray-700">
          <FormattedMessage id="form-phone" />
            </div>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone number"
            ref={register}
            className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
          />
        </label>
      </div>
      <div className="mt-4">
      <label htmlFor="message">
        <div className="text-gray-700">
          <FormattedMessage id="form-message" />
          </div>
        <textarea
          ref={register({ required: true })}
          name="message"
          id="message"
          rows="3"
          placeholder="Your message"
          className="mt-1 p-2 block w-full border-gray-400 rounded border-2"
        />
      </label>
      {errors.message && <p className="text-error font-medium italic"><FormattedMessage id="form-message-error" /></p>}
          </div>
      <div className="submit-wrapper py-4">
        <button type="submit" className="bg-blue01 text-white text-base rounded font-medium hover:bg-white hover:text-blue01 border-blue01 btn-outline-primary transition duration-300 ease-in-out focus:shadow-outline py-2 px-4">
        <FormattedMessage id="form-send" />
        </button>
      </div>
    </form>
    </div>
  );

  return (
    <div className="page contact-page">
      <div className="text-side">
        {errors && errors.submit && showSubmitError(errors.submit.message)}
      </div>
      <div className="form-side">{submitted ? showThankYou : showForm}</div>
    </div>
  );
};

export default injectIntl(ContactForm)