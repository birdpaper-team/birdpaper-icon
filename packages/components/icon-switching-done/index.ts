import type { App } from 'vue';
import _IconSwitchingDone from './icon-switching-done.vue';

const IconSwitchingDone = Object.assign(_IconSwitchingDone, {
  install: (app: App) => {
    app.component(_IconSwitchingDone.name, _IconSwitchingDone);
  }
});

export default IconSwitchingDone;