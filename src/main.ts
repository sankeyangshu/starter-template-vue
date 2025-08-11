import { createApp } from 'vue';
import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);

  // setupStore(app);

  // await setupRouter(app);

  app.mount('#app');
}

bootstrap();
