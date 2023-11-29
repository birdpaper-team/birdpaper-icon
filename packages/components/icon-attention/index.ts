import type { App } from 'vue';
import _IconAttention from './icon-attention.vue';

const IconAttention = Object.assign(_IconAttention, {
  install: (app: App) => {
    app.component(_IconAttention.name, _IconAttention);
  }
});

export default IconAttention;