import { memo, SVGProps } from 'react';

const FloorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 653 2' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M652.375 1.6673H0.187317V0.0268555H652.672L652.375 1.6673Z' fill='#223667' />
  </svg>
);
const Memo = memo(FloorIcon);
export { Memo as FloorIcon };
