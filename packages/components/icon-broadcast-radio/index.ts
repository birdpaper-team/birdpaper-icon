import type { App } from 'vue';
import _IconBroadcastRadio from './icon-broadcast-radio.vue';

const IconBroadcastRadio = Object.assign(_IconBroadcastRadio, {
  install: (app: App) => {
    app.component(_IconBroadcastRadio.name, _IconBroadcastRadio);
  }
});

export default IconBroadcastRadio;