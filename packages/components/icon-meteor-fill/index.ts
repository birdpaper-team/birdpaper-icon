import type { App } from 'vue';
import _IconMeteorFill from './icon-meteor-fill.vue';

const IconMeteorFill = Object.assign(_IconMeteorFill, {
  install: (app: App) => {
    app.component(_IconMeteorFill.name, _IconMeteorFill);
  }
});

export default IconMeteorFill;