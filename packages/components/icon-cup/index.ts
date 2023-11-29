import type { App } from 'vue';
import _IconCup from './icon-cup.vue';

const IconCup = Object.assign(_IconCup, {
  install: (app: App) => {
    app.component(_IconCup.name, _IconCup);
  }
});

export default IconCup;