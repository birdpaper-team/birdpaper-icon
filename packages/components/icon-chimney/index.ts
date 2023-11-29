import type { App } from 'vue';
import _IconChimney from './icon-chimney.vue';

const IconChimney = Object.assign(_IconChimney, {
  install: (app: App) => {
    app.component(_IconChimney.name, _IconChimney);
  }
});

export default IconChimney;