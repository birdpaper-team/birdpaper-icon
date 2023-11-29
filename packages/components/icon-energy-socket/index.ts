import type { App } from 'vue';
import _IconEnergySocket from './icon-energy-socket.vue';

const IconEnergySocket = Object.assign(_IconEnergySocket, {
  install: (app: App) => {
    app.component(_IconEnergySocket.name, _IconEnergySocket);
  }
});

export default IconEnergySocket;