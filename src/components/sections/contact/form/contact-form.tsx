import type { ReactElement, SubmitEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const ContactForm = (): ReactElement => {
  const { t } = useTranslation();
  const handleSubmit = (event: SubmitEvent<HTMLFormElement>): void =>
    event.preventDefault();

  return (
    <div className="lg:col-span-2">
      <h3 className="mb-6 text-[clamp(1.375rem,1.8vw,1.75rem)] leading-[1.05] font-semibold tracking-[-0.035em] text-[#191919] dark:text-white">
        {t('contact.sendMessage')}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        <FieldGroup className="gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Field className="gap-0">
              <FieldLabel htmlFor="first-name" className="sr-only">
                {t('contact.firstName')}
              </FieldLabel>
              <Input
                id="first-name"
                type="text"
                name="firstName"
                placeholder={t('contact.firstName')}
                required
                className="h-auto rounded-lg border border-[#191919] bg-white px-4 py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 transition-shadow focus-visible:ring-[#191919] dark:border-0 dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:focus-visible:ring-white"
              />
            </Field>
            <Field className="gap-0">
              <FieldLabel htmlFor="last-name" className="sr-only">
                {t('contact.lastName')}
              </FieldLabel>
              <Input
                id="last-name"
                type="text"
                name="lastName"
                placeholder={t('contact.lastName')}
                required
                className="h-auto rounded-lg border border-[#191919] bg-white px-4 py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 transition-shadow focus-visible:ring-[#191919] dark:border-0 dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:focus-visible:ring-white"
              />
            </Field>
          </div>
          <Field className="gap-0">
            <FieldLabel htmlFor="email" className="sr-only">
              {t('contact.email')}
            </FieldLabel>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder={t('contact.email')}
              required
              className="h-auto rounded-lg border border-[#191919] bg-white px-4 py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 transition-shadow focus-visible:ring-[#191919] dark:border-0 dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:focus-visible:ring-white"
            />
          </Field>
          <Field className="gap-0">
            <FieldLabel htmlFor="message" className="sr-only">
              {t('contact.message')}
            </FieldLabel>
            <Textarea
              id="message"
              name="message"
              placeholder={t('contact.message')}
              rows={6}
              required
              className="resize-none rounded-lg border border-[#191919] bg-white px-4 py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 transition-shadow focus-visible:ring-[#191919] dark:border-0 dark:bg-[#1a1a1a] dark:text-white dark:placeholder-gray-400 dark:focus-visible:ring-white"
            />
          </Field>
        </FieldGroup>
        <Button
          type="submit"
          className="size-auto cursor-pointer rounded-xl border-2 border-transparent bg-[#191919] px-5 py-3 text-base font-semibold whitespace-nowrap text-white transition-opacity duration-300 outline-none hover:bg-[#191919] hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#191919]/50 focus-visible:outline-none dark:bg-white dark:text-[#191919] dark:hover:bg-white dark:focus-visible:ring-white/50"
        >
          <span className="-translate-y-px">{t('contact.send')}</span>
          <ArrowRight className="size-4.5" aria-hidden="true" />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
