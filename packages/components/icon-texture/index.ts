import type { App } from 'vue';
import _IconTexture from './icon-texture.vue';

const IconTexture = Object.assign(_IconTexture, {
  install: (app: App) => {
    app.component(_IconTexture.name, _IconTexture);
  }
});

export default IconTexture;