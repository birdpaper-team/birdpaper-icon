import type { App } from 'vue';
import _IconTextDirectionR from './icon-text-direction-r.vue';

const IconTextDirectionR = Object.assign(_IconTextDirectionR, {
  install: (app: App) => {
    app.component(_IconTextDirectionR.name, _IconTextDirectionR);
  }
});

export default IconTextDirectionR;