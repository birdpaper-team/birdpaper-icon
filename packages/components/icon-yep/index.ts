import type { App } from 'vue';
import _IconYep from './icon-yep.vue';

const IconYep = Object.assign(_IconYep, {
  install: (app: App) => {
    app.component(_IconYep.name, _IconYep);
  }
});

export default IconYep;