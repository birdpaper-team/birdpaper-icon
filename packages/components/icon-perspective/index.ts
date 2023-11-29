import type { App } from 'vue';
import _IconPerspective from './icon-perspective.vue';

const IconPerspective = Object.assign(_IconPerspective, {
  install: (app: App) => {
    app.component(_IconPerspective.name, _IconPerspective);
  }
});

export default IconPerspective;