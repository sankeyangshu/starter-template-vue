import { createApp } from 'vue';
import App from './App.vue';
import { setupI18n } from './locales';
import { setupIconifyOffline, setupLoading } from './plugins';
import { setupRouter } from './router';
import { setupStore } from './store';
import './styles/global.css';

async function bootstrap() {
  setupLoading();

  setupIconifyOffline();

  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);

  setupI18n(app);

  app.mount('#app');
}

bootstrap();
