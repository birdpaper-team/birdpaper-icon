import type { App } from 'vue';
import _IconSoapBubble from './icon-soap-bubble.vue';

const IconSoapBubble = Object.assign(_IconSoapBubble, {
  install: (app: App) => {
    app.component(_IconSoapBubble.name, _IconSoapBubble);
  }
});

export default IconSoapBubble;