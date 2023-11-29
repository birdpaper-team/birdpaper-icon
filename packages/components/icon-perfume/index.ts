import type { App } from 'vue';
import _IconPerfume from './icon-perfume.vue';

const IconPerfume = Object.assign(_IconPerfume, {
  install: (app: App) => {
    app.component(_IconPerfume.name, _IconPerfume);
  }
});

export default IconPerfume;