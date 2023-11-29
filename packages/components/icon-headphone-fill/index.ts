import type { App } from 'vue';
import _IconHeadphoneFill from './icon-headphone-fill.vue';

const IconHeadphoneFill = Object.assign(_IconHeadphoneFill, {
  install: (app: App) => {
    app.component(_IconHeadphoneFill.name, _IconHeadphoneFill);
  }
});

export default IconHeadphoneFill;