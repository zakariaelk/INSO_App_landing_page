import { memo, SVGProps } from 'react';

const FloorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 314 1' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M313.34 1.00031H0.289917V0.212891H313.483L313.34 1.00031Z' fill='#EEF1F4' />
  </svg>
);
const Memo = memo(FloorIcon);
export { Memo as FloorIcon };
