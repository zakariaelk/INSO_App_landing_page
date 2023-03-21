import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './GooglePlay_TypeDefault.module.css';
import { GroupIcon } from './GroupIcon';

interface Props {
  className?: string;
  classes?: {
    group?: string;
    root?: string;
  };
  swap?: {
    group?: ReactNode;
  };
}
/* @figmaId 5:176 */
export const GooglePlay_TypeDefault: FC<Props> = memo(function GooglePlay_TypeDefault(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.group || ''} ${classes.group}`}>
        {props.swap?.group || <GroupIcon className={classes.icon} />}
      </div>
    </div>
  );
});
