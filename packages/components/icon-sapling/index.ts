import type { App } from 'vue';
import _IconSapling from './icon-sapling.vue';

const IconSapling = Object.assign(_IconSapling, {
  install: (app: App) => {
    app.component(_IconSapling.name, _IconSapling);
  }
});

export default IconSapling;