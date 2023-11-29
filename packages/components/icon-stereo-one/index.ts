import type { App } from 'vue';
import _IconStereoOne from './icon-stereo-one.vue';

const IconStereoOne = Object.assign(_IconStereoOne, {
  install: (app: App) => {
    app.component(_IconStereoOne.name, _IconStereoOne);
  }
});

export default IconStereoOne;