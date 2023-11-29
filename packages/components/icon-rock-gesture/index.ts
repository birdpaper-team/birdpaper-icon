import type { App } from 'vue';
import _IconRockGesture from './icon-rock-gesture.vue';

const IconRockGesture = Object.assign(_IconRockGesture, {
  install: (app: App) => {
    app.component(_IconRockGesture.name, _IconRockGesture);
  }
});

export default IconRockGesture;