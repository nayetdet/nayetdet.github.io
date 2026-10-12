import type { ReactElement } from 'react';
import { SectionTitle } from '@/components/common/section-title';
import { sections } from '@/constants/sections';
import { ContactForm } from '@/components/sections/contact/form/contact-form';
import { ContactProfile } from '@/components/sections/contact/profile/contact-profile';

export const ContactSection = (): ReactElement => {
  return (
    <section
      id={sections.contact.id}
      className="bg-gray-50 pt-32 pb-24 dark:bg-[#121212]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>Contact</SectionTitle>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <ContactProfile />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
