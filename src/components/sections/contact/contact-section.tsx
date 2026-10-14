import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '@/components/common/section-title';
import { ContactForm } from '@/components/sections/contact/form/contact-form';
import { ContactProfile } from '@/components/sections/contact/profile/contact-profile';

export const ContactSection = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 py-12 sm:py-16 dark:bg-[#121212]">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <SectionTitle>{t('contact.title')}</SectionTitle>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
          <ContactProfile />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
