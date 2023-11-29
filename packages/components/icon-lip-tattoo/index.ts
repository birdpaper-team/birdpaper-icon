import type { App } from 'vue';
import _IconLipTattoo from './icon-lip-tattoo.vue';

const IconLipTattoo = Object.assign(_IconLipTattoo, {
  install: (app: App) => {
    app.component(_IconLipTattoo.name, _IconLipTattoo);
  }
});

export default IconLipTattoo;