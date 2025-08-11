import process from 'node:process';
import { fileURLToPath } from 'node:url';
import dayjs from 'dayjs';
import { defineConfig, loadEnv } from 'vite';
import { createProxy, wrapperEnv } from './build/config';
import { createVitePlugins } from './build/plugins';
import pkg from './package.json';
import type { ConfigEnv, UserConfig } from 'vite';

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version }, // APP 信息
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'), // 最后编译时间
};

// https://vite.dev/config/
export default defineConfig((config: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const { mode, command } = config;

  const env = loadEnv(mode, root) as unknown as Env.ImportMeta;
  const viteEnv = wrapperEnv(env);

  const { VITE_BASE_URL, VITE_OUTPUT_DIR, VITE_DROP_CONSOLE, VITE_PORT, VITE_PROXY, VITE_OPEN } = viteEnv;
  const isBuild = command === 'build';

  return {
    base: VITE_BASE_URL || '/',
    root,

    // 加载插件
    plugins: createVitePlugins(viteEnv, isBuild),

    // 配置路径别名
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~root': import.meta.dirname,
      },
    },

    // 跨域代理
    server: {
      host: true,
      open: VITE_OPEN,
      port: Number(VITE_PORT),
      proxy: createProxy(VITE_PROXY),
    },

    // 定义全局常量替换方式
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },

    esbuild: {
      // 使用 esbuild 压缩 剔除 console.log
      pure: VITE_DROP_CONSOLE ? ['console'] : [],
      drop: VITE_DROP_CONSOLE ? ['debugger'] : [],
    },

    build: {
      minify: 'esbuild',
      sourcemap: false,
      outDir: VITE_OUTPUT_DIR || 'dist',
      reportCompressedSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js', // 引入文件名的名称
          entryFileNames: 'js/[name]-[hash].js', // 包的入口文件名称
          assetFileNames: '[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
        },
      },
    },
  };
});
