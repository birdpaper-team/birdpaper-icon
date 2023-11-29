import type { App } from 'vue';
import _IconOneThirdRotation from './icon-one-third-rotation.vue';

const IconOneThirdRotation = Object.assign(_IconOneThirdRotation, {
  install: (app: App) => {
    app.component(_IconOneThirdRotation.name, _IconOneThirdRotation);
  }
});

export default IconOneThirdRotation;