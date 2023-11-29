import type { App } from 'vue';
import _IconFootball from './icon-football.vue';

const IconFootball = Object.assign(_IconFootball, {
  install: (app: App) => {
    app.component(_IconFootball.name, _IconFootball);
  }
});

export default IconFootball;