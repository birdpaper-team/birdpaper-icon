import type { App } from 'vue';
import _IconBroadcast from './icon-broadcast.vue';

const IconBroadcast = Object.assign(_IconBroadcast, {
  install: (app: App) => {
    app.component(_IconBroadcast.name, _IconBroadcast);
  }
});

export default IconBroadcast;