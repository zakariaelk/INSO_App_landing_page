import { memo, SVGProps } from 'react';

const FgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1069 927' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1068.5L724 927H0V0Z' fill='#F9F9F9' />
  </svg>
);
const Memo = memo(FgIcon);
export { Memo as FgIcon };
