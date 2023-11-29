import type { App } from 'vue';
import _IconTwitchFill from './icon-twitch-fill.vue';

const IconTwitchFill = Object.assign(_IconTwitchFill, {
  install: (app: App) => {
    app.component(_IconTwitchFill.name, _IconTwitchFill);
  }
});

export default IconTwitchFill;