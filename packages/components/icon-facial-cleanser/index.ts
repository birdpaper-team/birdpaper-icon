import type { App } from 'vue';
import _IconFacialCleanser from './icon-facial-cleanser.vue';

const IconFacialCleanser = Object.assign(_IconFacialCleanser, {
  install: (app: App) => {
    app.component(_IconFacialCleanser.name, _IconFacialCleanser);
  }
});

export default IconFacialCleanser;