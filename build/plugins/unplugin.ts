import path from 'node:path';
import process from 'node:process';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import Components from 'unplugin-vue-components/vite';
import type { PluginOption } from 'vite';

/**
 * Configures the unplugin-icons/Components plugin for Vite.
 * @descCN 配置unplugin-icons/Components vite 插件
 * @param viteEnv - The Vite environment configuration containing compression settings.
 * @see {@link https://github.com/unplugin/unplugin-icons}
 * @see {@link https://github.com/unplugin/unplugin-vue-components}
 */
export function configUnPlugin(viteEnv: Env.ImportMeta) {
  const { VITE_ICON_PREFIX, VITE_ICON_LOCAL_PREFIX } = viteEnv;

  const localIconPath = path.join(process.cwd(), 'src/assets/svg-icon');

  /**
   * The name of the local icon collection
   * @descCN 本地图标集合名称
   */
  const collectionName = VITE_ICON_LOCAL_PREFIX.replace(`${VITE_ICON_PREFIX}-`, '');

  const plugins: PluginOption[] = [
    Icons({
      compiler: 'vue3',
      customCollections: {
        [collectionName]: FileSystemIconLoader(localIconPath, (svg) =>
          svg.replace(/^<svg\s/, '<svg width="1em" height="1em" ')
        ),
      },
      scale: 1,
      defaultClass: 'inline-block',
    }),
    Components({
      dts: 'src/types/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      resolvers: [IconsResolver({ customCollections: [collectionName], componentPrefix: VITE_ICON_PREFIX })],
    }),
  ];

  return plugins;
}
