import type { App } from 'vue';
import _IconLandscapeFill from './icon-landscape-fill.vue';

const IconLandscapeFill = Object.assign(_IconLandscapeFill, {
  install: (app: App) => {
    app.component(_IconLandscapeFill.name, _IconLandscapeFill);
  }
});

export default IconLandscapeFill;