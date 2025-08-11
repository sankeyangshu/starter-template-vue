/**
 * Namespace Env
 * It is used to declare the type of the import.meta object
 * @descCN 声明 import.meta 对象的类型
 */
declare namespace Env {
  /**
   * Interface for import.meta
   * @descCN 声明 import.meta 对象的类型
   */
  interface ImportMeta extends ImportMetaEnv {
    /**
     * The homepage of the application
     * @descCN 应用首页
     */
    readonly VITE_APP_HOMEPAGE: string;
    /**
     * The title of the application
     * @descCN 应用标题
     */
    readonly VITE_APP_TITLE: string;
    /**
     * Base public path when served in development or production.
     * @descCN 开发或生产时，服务的基础公共路径
     */
    readonly VITE_BASE_URL: string;
    /**
     * Whether to drop console
     * @descCN 是否删除 console
     */
    readonly VITE_DROP_CONSOLE: boolean;
    /**
     * The prefix of the local icon
     * @descCN 本地图标前缀
     */
    readonly VITE_ICON_LOCAL_PREFIX: 'icon-local';
    /**
     * The prefix of the iconify icon
     * @descCN iconify 图标前缀
     */
    readonly VITE_ICON_PREFIX: 'icon';
    /**
     * Whether to automatically open the application
     * @descCN 是否自动打开应用
     */
    readonly VITE_OPEN: boolean;
    /**
     * The output directory of the application
     * @descCN 打包应用输出目录
     */
    readonly VITE_OUTPUT_DIR: string;
    /**
     * The port of the application
     * @descCN 应用端口
     */
    readonly VITE_PORT: number;
    /**
     * The proxy configuration
     * @descCN 跨域代理配置
     */
    readonly VITE_PROXY: [string, string][];
    /**
     * Whether to generate a package preview file
     * @descCN 是否生成包预览文件
     */
    readonly VITE_REPORT: boolean;
    /**
     * backend service base url
     * @descCN 后端服务基础 URL
     */
    readonly VITE_SERVICE_BASE_URL: string;
    /**
     * Iconify api provider url, if the project is deployed in intranet, you can set the api provider url to the local iconify server
     * @descCN iconify api 提供者 url, 如果项目部署在内网, 可以设置 api 提供者 url 为本地 iconify 服务
     * @see {@link https://docs.iconify.design/api/providers.html}
     */
    readonly VITE_ICONIFY_URL?: string;
  }
}

interface ImportMeta {
  readonly env: Env.ImportMeta;
}
