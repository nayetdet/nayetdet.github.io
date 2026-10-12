import type { ReactElement } from 'react';
import { RiGithubFill, RiGitlabFill, RiLinkedinFill } from 'react-icons/ri';
import { portfolio } from '@/data/portfolio';
import { cn } from '@/lib/utils';

type SocialNetworksVariant = 'icon' | 'pill';

interface SocialNetworksProps {
  variant?: SocialNetworksVariant;
  className?: string;
}

const socialNetworks = [
  {
    label: 'LinkedIn',
    href: portfolio.contact.linkedin,
    icon: RiLinkedinFill,
    pillClassName: 'bg-[#0a66c2] hover:opacity-90',
  },
  {
    label: 'GitHub',
    href: portfolio.contact.github,
    icon: RiGithubFill,
    pillClassName:
      'bg-[#191919] hover:opacity-80 dark:bg-white dark:text-[#191919]',
  },
  {
    label: 'GitLab',
    href: portfolio.contact.gitlab,
    icon: RiGitlabFill,
    pillClassName: 'bg-[#fc6d26] hover:opacity-90',
  },
] as const;

export const SocialNetworks = ({
  variant = 'icon',
  className,
}: SocialNetworksProps): ReactElement => {
  const isPillVariant: boolean = variant === 'pill';

  return (
    <div
      className={cn(
        isPillVariant ? 'flex flex-wrap gap-2' : 'flex gap-3',
        className,
      )}
    >
      {socialNetworks.map(
        ({ label, href, icon: Icon, pillClassName }): ReactElement => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              isPillVariant
                ? `inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white transition-opacity ${pillClassName}`
                : 'flex size-6 items-center justify-center text-[#191919] transition-opacity duration-300 hover:opacity-60 dark:text-white',
            )}
          >
            <Icon
              className={isPillVariant ? 'size-4' : 'size-5'}
              aria-hidden="true"
            />
            {isPillVariant && <span>{label}</span>}
          </a>
        ),
      )}
    </div>
  );
};
