import type { App } from 'vue';
import _IconStereoPerspective from './icon-stereo-perspective.vue';

const IconStereoPerspective = Object.assign(_IconStereoPerspective, {
  install: (app: App) => {
    app.component(_IconStereoPerspective.name, _IconStereoPerspective);
  }
});

export default IconStereoPerspective;