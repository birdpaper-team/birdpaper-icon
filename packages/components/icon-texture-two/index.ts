import type { App } from 'vue';
import _IconTextureTwo from './icon-texture-two.vue';

const IconTextureTwo = Object.assign(_IconTextureTwo, {
  install: (app: App) => {
    app.component(_IconTextureTwo.name, _IconTextureTwo);
  }
});

export default IconTextureTwo;