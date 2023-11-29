import type { App } from 'vue';
import _IconMayuraGesture from './icon-mayura-gesture.vue';

const IconMayuraGesture = Object.assign(_IconMayuraGesture, {
  install: (app: App) => {
    app.component(_IconMayuraGesture.name, _IconMayuraGesture);
  }
});

export default IconMayuraGesture;