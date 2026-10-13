import type { ReactElement, SubmitEvent } from 'react';
import { RiArrowRightLine } from 'react-icons/ri';

export const ContactForm = (): ReactElement => {
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void =>
    event.preventDefault();

  return (
    <div className="lg:col-span-2">
      <h3 className="mb-4 text-[2rem] font-semibold text-[#191919] dark:text-white">
        Send me a message
      </h3>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <input
            type="text"
            name="nom"
            placeholder="Last Name"
            required
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-shadow focus:ring-2 focus:ring-[#191919] focus:outline-none dark:border-gray-700 dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:focus:ring-white"
          />
          <input
            type="text"
            name="prenom"
            placeholder="First Name"
            required
            className="rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-shadow focus:ring-2 focus:ring-[#191919] focus:outline-none dark:border-gray-700 dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:focus:ring-white"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-shadow focus:ring-2 focus:ring-[#191919] focus:outline-none dark:border-gray-700 dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:focus:ring-white"
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 transition-shadow focus:ring-2 focus:ring-[#191919] focus:outline-none dark:border-gray-700 dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:focus:ring-white"
        />
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#191919] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-[#191919]"
        >
          <span className="-translate-y-px">Send</span>
          <RiArrowRightLine className="size-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
