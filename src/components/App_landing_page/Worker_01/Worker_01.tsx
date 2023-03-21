import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { FloorIcon } from './FloorIcon';
import { PersonIcon } from './PersonIcon';
import classes from './Worker_01.module.css';

interface Props {
  className?: string;
  classes?: {
    person?: string;
    root?: string;
  };
  swap?: {
    person?: ReactNode;
    floor?: ReactNode;
  };
}
/* @figmaId 5:751 */
export const Worker_01: FC<Props> = memo(function Worker_01(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.person || ''} ${classes.person}`}>
        {props.swap?.person || <PersonIcon className={classes.icon} />}
      </div>
      <div className={classes.floor}>{props.swap?.floor || <FloorIcon className={classes.icon2} />}</div>
    </div>
  );
});
