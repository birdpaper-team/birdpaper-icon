import type { App } from 'vue';
import _IconAquarius from './icon-aquarius.vue';

const IconAquarius = Object.assign(_IconAquarius, {
  install: (app: App) => {
    app.component(_IconAquarius.name, _IconAquarius);
  }
});

export default IconAquarius;