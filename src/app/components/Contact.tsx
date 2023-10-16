import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-16">
      <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
        <p className="text-sm uppercase text-gray-400">Contact</p>
        <h1 className="text-black text-6xl font-bold text-center pb-6">
          Contact
        </h1>
        <p className="text-xl text-neutral-800 text-center ">
          Punjab Society,Lahore,Pakistan.
        </p>
        <p className="text-xl text-neutral-800 text-center">03224958054.</p>
        <p className="text-xl text-neutral-800 text-center">
          alitayyab398@gmail.com.
        </p>
      </div>
      <div className="flex flex-col  md:w-1/2 w-3/4 ">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          className="mt-2 pl-8 w-full rounded-lg text-neutral-800 text-xl border-2 h-10 "
        />
        <input
          type="email"
          name="email-address"
          id="email"
          autoComplete="email"
          placeholder="xyz@gmail.com"
          className="mt-2 pl-8 w-full rounded-lg text-neutral-800 text-xl border-2 h-10 "
        />
        <textarea
         rows={4}
         typeof="text"
          name="message"
          id="message"
          placeholder="message"
         className="mt-2 pl-8 w-full rounded-lg text-neutral-800 text-xl border-2 h-10 ">
</textarea>
<button className="mt-5 text-xl w-full h-10 bg-neutral-900 text-white rounded-lg hover:bg-black">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
