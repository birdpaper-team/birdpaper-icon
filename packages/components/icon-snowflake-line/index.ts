import type { App } from 'vue';
import _IconSnowflakeLine from './icon-snowflake-line.vue';

const IconSnowflakeLine = Object.assign(_IconSnowflakeLine, {
  install: (app: App) => {
    app.component(_IconSnowflakeLine.name, _IconSnowflakeLine);
  }
});

export default IconSnowflakeLine;