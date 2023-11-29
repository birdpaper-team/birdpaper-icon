import type { App } from 'vue';
import _IconOutgoing from './icon-outgoing.vue';

const IconOutgoing = Object.assign(_IconOutgoing, {
  install: (app: App) => {
    app.component(_IconOutgoing.name, _IconOutgoing);
  }
});

export default IconOutgoing;