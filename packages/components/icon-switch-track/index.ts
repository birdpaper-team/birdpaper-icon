import type { App } from 'vue';
import _IconSwitchTrack from './icon-switch-track.vue';

const IconSwitchTrack = Object.assign(_IconSwitchTrack, {
  install: (app: App) => {
    app.component(_IconSwitchTrack.name, _IconSwitchTrack);
  }
});

export default IconSwitchTrack;