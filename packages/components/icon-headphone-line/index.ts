import type { App } from 'vue';
import _IconHeadphoneLine from './icon-headphone-line.vue';

const IconHeadphoneLine = Object.assign(_IconHeadphoneLine, {
  install: (app: App) => {
    app.component(_IconHeadphoneLine.name, _IconHeadphoneLine);
  }
});

export default IconHeadphoneLine;