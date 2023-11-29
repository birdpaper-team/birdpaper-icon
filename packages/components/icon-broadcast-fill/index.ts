import type { App } from 'vue';
import _IconBroadcastFill from './icon-broadcast-fill.vue';

const IconBroadcastFill = Object.assign(_IconBroadcastFill, {
  install: (app: App) => {
    app.component(_IconBroadcastFill.name, _IconBroadcastFill);
  }
});

export default IconBroadcastFill;