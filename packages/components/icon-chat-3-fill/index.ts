import type { App } from 'vue';
import _IconChat3Fill from './icon-chat-3-fill.vue';

const IconChat3Fill = Object.assign(_IconChat3Fill, {
  install: (app: App) => {
    app.component(_IconChat3Fill.name, _IconChat3Fill);
  }
});

export default IconChat3Fill;