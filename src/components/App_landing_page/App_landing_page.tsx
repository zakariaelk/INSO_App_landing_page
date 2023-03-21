import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './App_landing_page.module.css';
import { AppStore_TypeDefault } from './AppStore_TypeDefault/AppStore_TypeDefault';
import { BgIcon } from './BgIcon';
import { FgIcon } from './FgIcon';
import { FloorIcon } from './FloorIcon';
import { GooglePlay_TypeDefault } from './GooglePlay_TypeDefault/GooglePlay_TypeDefault';
import { GroupIcon } from './GroupIcon';
import { GroupIcon2 } from './GroupIcon2';
import { Inso_worldIcon } from './Inso_worldIcon';
import { LogoPartialV2Icon } from './LogoPartialV2Icon';
import { PersonIcon } from './PersonIcon';
import { SocialIcon } from './SocialIcon';
import { Worker_01 } from './Worker_01/Worker_01';

interface Props {
  className?: string;
}
/* @figmaId 5:2477 */
export const App_landing_page: FC<Props> = memo(function App_landing_page(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.bg}>
        <BgIcon className={classes.icon5} />
      </div>
      <div className={classes.fg}>
        <FgIcon className={classes.icon6} />
      </div>
      <div className={classes.splash_visual2}>
        <div className={classes.group787}>
          <div className={classes.inso_world}>
            <Inso_worldIcon className={classes.icon7} />
          </div>
          <Worker_01
            className={classes.worker_01}
            classes={{ person: classes.person }}
            swap={{
              person: (
                <div className={classes.person}>
                  <PersonIcon className={classes.icon} />
                </div>
              ),
              floor: <FloorIcon className={classes.icon2} />,
            }}
          />
        </div>
      </div>
      <div className={classes.social}>
        <SocialIcon className={classes.icon8} />
      </div>
      <div className={classes.logoBg}></div>
      <div className={classes.logoPartialV2}>
        <LogoPartialV2Icon className={classes.icon9} />
      </div>
      <div className={classes.mission}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Track incidents affecting the NGO community in your area in </span>
          <span className={classes.label2}>real-time</span>
        </p>
      </div>
      <div className={classes.buttons}>
        <AppStore_TypeDefault
          className={classes.appStore}
          classes={{ group: classes.group }}
          swap={{
            group: (
              <div className={classes.group}>
                <GroupIcon className={classes.icon3} />
              </div>
            ),
          }}
        />
        <GooglePlay_TypeDefault
          className={classes.googlePlay}
          classes={{ group: classes.group2 }}
          swap={{
            group: (
              <div className={classes.group2}>
                <GroupIcon2 className={classes.icon4} />
              </div>
            ),
          }}
        />
      </div>
    </div>
  );
});
