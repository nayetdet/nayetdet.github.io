import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/common/section-title';
import { ContactForm } from '@/components/sections/contact/form/contact-form';
import { ContactProfile } from '@/components/sections/contact/profile/contact-profile';
import { sections } from '@/constants/sections';

export const ContactSection = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div
      id={sections.contact.id}
      className="scroll-mt-24 bg-gray-50 pt-[clamp(4.5rem,12vh,9rem)] pb-[clamp(8rem,16vh,14rem)] dark:bg-[#121212]"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>{t('contact.title')}</SectionTitle>
        <div className="grid grid-cols-1 gap-[clamp(2rem,4vw,4rem)] lg:grid-cols-3">
          <ContactProfile />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
