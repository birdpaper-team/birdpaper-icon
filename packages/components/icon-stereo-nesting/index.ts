import type { App } from 'vue';
import _IconStereoNesting from './icon-stereo-nesting.vue';

const IconStereoNesting = Object.assign(_IconStereoNesting, {
  install: (app: App) => {
    app.component(_IconStereoNesting.name, _IconStereoNesting);
  }
});

export default IconStereoNesting;