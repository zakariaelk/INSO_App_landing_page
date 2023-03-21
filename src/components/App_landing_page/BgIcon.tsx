import { memo, SVGProps } from 'react';

const BgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1680 927' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0H1680V927H0V0Z' fill='url(#paint0_linear_5_3274)' />
    <defs>
      <linearGradient
        id='paint0_linear_5_3274'
        x1={840}
        y1={200.923}
        x2={840}
        y2={1100.97}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#010613' />
        <stop offset={1} stopColor='#192A57' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(BgIcon);
export { Memo as BgIcon };
