import type { App } from 'vue';
import _IconSlyFaceWhitSmile from './icon-sly-face-whit-smile.vue';

const IconSlyFaceWhitSmile = Object.assign(_IconSlyFaceWhitSmile, {
  install: (app: App) => {
    app.component(_IconSlyFaceWhitSmile.name, _IconSlyFaceWhitSmile);
  }
});

export default IconSlyFaceWhitSmile;