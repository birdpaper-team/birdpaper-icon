import type { App } from 'vue';
import _IconCooperativeHandshake from './icon-cooperative-handshake.vue';

const IconCooperativeHandshake = Object.assign(_IconCooperativeHandshake, {
  install: (app: App) => {
    app.component(_IconCooperativeHandshake.name, _IconCooperativeHandshake);
  }
});

export default IconCooperativeHandshake;