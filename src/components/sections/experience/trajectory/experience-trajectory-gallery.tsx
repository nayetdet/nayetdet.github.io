import type { ReactElement } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const ExperienceTrajectoryGallery = (): ReactElement => (
  <div
    aria-hidden="true"
    className="hidden min-h-136 grid-flow-dense grid-cols-12 grid-rows-6 gap-3 md:col-start-2 md:grid"
  >
    <Skeleton className="col-span-7 row-span-4 rounded-4xl bg-[#e5e5e5] dark:bg-[#242424]" />
    <Skeleton className="col-span-5 row-span-3 rounded-4xl bg-[#e5e5e5] dark:bg-[#242424]" />
    <Skeleton className="col-span-5 row-span-3 rounded-4xl bg-[#e5e5e5] dark:bg-[#242424]" />
    <Skeleton className="col-span-7 row-span-2 rounded-4xl bg-[#e5e5e5] dark:bg-[#242424]" />
  </div>
);

export default ExperienceTrajectoryGallery;
