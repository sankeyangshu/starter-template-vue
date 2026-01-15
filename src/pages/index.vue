<template>
  <div class="relative min-h-screen overflow-hidden">
    <!-- 主要内容区域 -->
    <div
      class="
        relative z-10 mx-auto max-w-7xl px-4 py-12
        sm:px-6
        lg:px-8
      "
    >
      <div
        class="
          grid grid-cols-1 gap-6
          lg:grid-cols-3
        "
      >
        <!-- 左侧主卡片 - 欢迎信息 -->
        <div class="lg:col-span-2">
          <div
            class="
              group relative h-full rounded-3xl border border-background bg-background p-8
              shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300
              hover:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]
              dark:shadow-[6px_6px_12px_#0d0d0d,-6px_-6px_12px_#272727]
              dark:hover:shadow-[8px_8px_16px_#0d0d0d,-8px_-8px_16px_#272727]
            "
          >
            <!-- 主题切换按钮 - 卡片右上角 -->
            <div class="absolute top-4 right-4">
              <SwitchDark />
            </div>
            <div class="flex flex-col items-center justify-center space-y-6 text-center">
              <!-- 装饰性图标 - 拟态内凹效果 -->
              <div
                class="
                  flex size-32 items-center justify-center rounded-full bg-background
                  shadow-[inset_4px_4px_12px_#c5c5c5,inset_-4px_-4px_12px_#ffffff]
                  dark:shadow-[inset_4px_4px_12px_#0d0d0d,inset_-4px_-4px_12px_#272727]
                "
              >
                <SvgIcon
                  icon="mdi:vuejs"
                  class="text-6xl text-[#42b883]"
                />
              </div>

              <!-- 欢迎文字 -->
              <div class="space-y-2">
                <h1
                  class="
                    text-4xl font-bold text-gray-800
                    sm:text-5xl
                    dark:text-gray-100
                  "
                >
                  {{ greeting }}
                </h1>
                <p
                  class="
                    text-xl text-gray-600
                    dark:text-gray-300
                  "
                >
                  Welcome to
                  <span class="ml-2 font-semibold text-primary">Vue Starter Template</span>
                </p>
              </div>

              <!-- 项目介绍 -->
              <p
                class="
                  max-w-2xl text-base/relaxed text-gray-600
                  dark:text-gray-400
                "
              >
                这是一个现代化的 Vue 项目模板,集成了 Vue Router、Pinia、Tailwind CSS 等最新技术栈。采用 TypeScript 开发,支持 Dark Mode,内置国际化方案,为你的项目提供最佳的开发体验。
              </p>

              <!-- 特性标签 - 拟态凸起效果 -->
              <div class="flex flex-wrap justify-center gap-3">
                <span
                  v-for="tag in tags"
                  :key="tag"
                  :class="cn(
                    `
                      cursor-pointer rounded-full border px-4 py-2 text-sm font-medium
                      transition-all duration-300
                    `,
                    'border-background bg-background text-gray-700',
                    'shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#ffffff]',
                    'active:shadow-[inset_2px_2px_6px_#c5c5c5,inset_-2px_-2px_6px_#ffffff]',
                    'dark:text-gray-300',
                    'dark:shadow-[4px_4px_8px_#0d0d0d,-4px_-4px_8px_#272727]',
                    'dark:active:shadow-[inset_2px_2px_6px_#0d0d0d,inset_-2px_-2px_6px_#272727]',
                  )"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧卡片组 -->
        <div class="space-y-6">
          <!-- 快速开始卡片 -->
          <div
            class="
              group rounded-3xl border border-background bg-background p-6
              shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300
              hover:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]
              dark:shadow-[6px_6px_12px_#0d0d0d,-6px_-6px_12px_#272727]
              dark:hover:shadow-[8px_8px_16px_#0d0d0d,-8px_-8px_16px_#272727]
            "
          >
            <h2
              class="
                mb-4 flex items-center gap-2 text-xl font-semibold text-gray-800
                dark:text-gray-100
              "
            >
              <span class="text-2xl">🚀</span>
              快速开始
            </h2>
            <div class="grid grid-cols-3 gap-3">
              <!-- 复制命令按钮 -->
              <div
                class="
                  group/btn relative flex cursor-pointer flex-col items-center gap-2 rounded-lg
                  border border-background bg-background p-4
                  shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#ffffff] transition-all duration-300
                  hover:shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]
                  active:shadow-[inset_2px_2px_6px_#c5c5c5,inset_-2px_-2px_6px_#ffffff]
                  dark:shadow-[4px_4px_8px_#0d0d0d,-4px_-4px_8px_#272727]
                  dark:hover:shadow-[6px_6px_12px_#0d0d0d,-6px_-6px_12px_#272727]
                  dark:active:shadow-[inset_2px_2px_6px_#0d0d0d,inset_-2px_-2px_6px_#272727]
                "
                @click="copyToClipboard('pnpm create lemon project -t vue', 'command')"
              >
                <SvgIcon
                  icon="mdi:content-copy"
                  class="
                    text-2xl text-gray-600
                    dark:text-gray-400
                  "
                />
                <span
                  class="
                    text-xs font-medium text-gray-700
                    dark:text-gray-300
                  "
                >
                  复制命令
                </span>
                <span
                  v-if="copiedText === 'command'"
                  class="
                    absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-xs text-white
                  "
                >
                  ✓
                </span>
              </div>

              <!-- 创建仓库按钮 -->
              <div
                class="
                  group/btn relative flex cursor-pointer flex-col items-center gap-2 rounded-lg
                  border border-background bg-background p-4
                  shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#ffffff] transition-all duration-300
                  hover:shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]
                  active:shadow-[inset_2px_2px_6px_#c5c5c5,inset_-2px_-2px_6px_#ffffff]
                  dark:shadow-[4px_4px_8px_#0d0d0d,-4px_-4px_8px_#272727]
                  dark:hover:shadow-[6px_6px_12px_#0d0d0d,-6px_-6px_12px_#272727]
                  dark:active:shadow-[inset_2px_2px_6px_#0d0d0d,inset_-2px_-2px_6px_#272727]
                "
                @click="openLink('https://github.com/sankeyangshu/starter-template-vue/generate')"
              >
                <SvgIcon
                  icon="mdi:github"
                  class="
                    text-2xl text-gray-600
                    dark:text-gray-400
                  "
                />
                <span
                  class="
                    text-xs font-medium text-gray-700
                    dark:text-gray-300
                  "
                >
                  创建仓库
                </span>
              </div>

              <!-- 克隆仓库按钮 -->
              <div
                class="
                  group/btn relative flex cursor-pointer flex-col items-center gap-2 rounded-lg
                  border border-background bg-background p-4
                  shadow-[4px_4px_8px_#c5c5c5,-4px_-4px_8px_#ffffff] transition-all duration-300
                  hover:shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff]
                  active:shadow-[inset_2px_2px_6px_#c5c5c5,inset_-2px_-2px_6px_#ffffff]
                  dark:shadow-[4px_4px_8px_#0d0d0d,-4px_-4px_8px_#272727]
                  dark:hover:shadow-[6px_6px_12px_#0d0d0d,-6px_-6px_12px_#272727]
                  dark:active:shadow-[inset_2px_2px_6px_#0d0d0d,inset_-2px_-2px_6px_#272727]
                "
                @click="copyToClipboard('git clone https://github.com/sankeyangshu/starter-template-vue.git', 'clone')"
              >
                <SvgIcon
                  icon="mdi:git"
                  class="
                    text-2xl text-gray-600
                    dark:text-gray-400
                  "
                />
                <span
                  class="
                    text-xs font-medium text-gray-700
                    dark:text-gray-300
                  "
                >
                  克隆仓库
                </span>
                <span
                  v-if="copiedText === 'clone'"
                  class="
                    absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-xs text-white
                  "
                >
                  ✓
                </span>
              </div>
            </div>
          </div>

          <!-- 功能特性卡片 -->
          <div
            class="
              group rounded-3xl border border-background bg-background p-6
              shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300
              hover:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]
              dark:shadow-[6px_6px_12px_#0d0d0d,-6px_-6px_12px_#272727]
              dark:hover:shadow-[8px_8px_16px_#0d0d0d,-8px_-8px_16px_#272727]
            "
          >
            <h2
              class="
                mb-4 flex items-center gap-2 text-xl font-semibold text-gray-800
                dark:text-gray-100
              "
            >
              <span class="text-2xl">💎</span>
              核心特性
            </h2>
            <ul
              class="
                space-y-2 text-sm text-gray-600
                dark:text-gray-400
              "
            >
              <li class="flex items-start gap-2">
                <span class="text-primary">✓</span>
                <span>基于文件的路由系统</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary">✓</span>
                <span>完善的 TypeScript 类型支持</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary">✓</span>
                <span>开箱即用的状态管理</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-primary">✓</span>
                <span>响应式设计与主题切换</span>
              </li>
            </ul>
          </div>

          <!-- 时间卡片 -->
          <div
            class="
              group rounded-3xl border border-background bg-background p-6
              shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300
              hover:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]
              dark:shadow-[6px_6px_12px_#0d0d0d,-6px_-6px_12px_#272727]
              dark:hover:shadow-[8px_8px_16px_#0d0d0d,-8px_-8px_16px_#272727]
            "
          >
            <div class="text-center">
              <div
                class="
                  text-4xl font-bold text-gray-800
                  dark:text-gray-100
                "
              >
                {{ formattedTime }}
              </div>
              <div
                class="
                  mt-2 text-sm text-gray-600
                  dark:text-gray-400
                "
              >
                {{ formattedDate }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 底部链接卡片 -->
      <div
        class="
          mt-6 grid grid-cols-1 gap-6
          sm:grid-cols-2
          lg:grid-cols-3
        "
      >
        <div
          v-for="item in links"
          :key="item.title"
          class="
            group cursor-pointer rounded-3xl border border-background bg-background p-6
            shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300
            hover:shadow-[8px_8px_16px_#c5c5c5,-8px_-8px_16px_#ffffff]
            active:shadow-[inset_4px_4px_12px_#c5c5c5,inset_-4px_-4px_12px_#ffffff]
            dark:shadow-[6px_6px_12px_#0d0d0d,-6px_-6px_12px_#272727]
            dark:hover:shadow-[8px_8px_16px_#0d0d0d,-8px_-8px_16px_#272727]
            dark:active:shadow-[inset_4px_4px_12px_#0d0d0d,inset_-4px_-4px_12px_#272727]
          "
          @click="openLink(item.link)"
        >
          <div class="text-center">
            <div class="mb-3 flex justify-center">
              <SvgIcon
                :icon="item.icon"
                class="
                  text-4xl text-gray-700
                  dark:text-gray-300
                "
              />
            </div>
            <h3
              class="
                mb-1 font-semibold text-gray-800
                dark:text-gray-100
              "
            >
              {{ item.title }}
            </h3>
            <p
              class="
                text-sm text-gray-600
                dark:text-gray-400
              "
            >
              {{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { computed, onBeforeUnmount, ref } from 'vue';
import SvgIcon from '@/components/custom/svg-icon.vue';
import SwitchDark from '@/components/custom/switch-dark.vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'Home',
});

const currentTime = ref(new Date());
const copiedText = ref('');

// 定时器更新时间
const timer = setInterval(() => {
  currentTime.value = new Date();
}, 1000);

// 组件卸载时清除定时器
onBeforeUnmount(() => {
  clearInterval(timer);
});

// 复制到剪贴板
async function copyToClipboard(text: string, label: string) {
  try {
    await navigator.clipboard.writeText(text);
    copiedText.value = label;
    setTimeout(() => {
      copiedText.value = '';
    }, 2000);
  } catch (err) {
    console.error('复制失败:', err);
  }
}

// 打开链接
function openLink(url: string) {
  window.open(url, '_blank');
}

// 计算问候语
const greeting = computed(() => {
  const currentHour = currentTime.value.getHours();
  if (currentHour < 12) {
    return 'Good Morning';
  } else if (currentHour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
});

// 格式化时间
const formattedTime = computed(() => {
  return format(currentTime.value, 'HH:mm');
});

// 格式化日期
const formattedDate = computed(() => {
  return format(currentTime.value, 'yyyy年M月d日 EEEE', { locale: zhCN });
});

// 特性标签
const tags = [
  '⚡ Vite',
  '⚛️ Vue',
  '🎨 Tailwind CSS',
  '📦 TypeScript',
  '🌓 Dark Mode',
  '🌐 i18n',
  '🗂️ Pinia',
  '🚦 Vue Router',
];

// 底部链接
const links = [
  {
    icon: 'mdi:book-open-page-variant',
    title: '文档',
    desc: '查看完整文档',
    link: 'https://lemon-template-docs.vercel.app/vue/',
  },
  {
    icon: 'mdi:github',
    title: 'GitHub',
    desc: '访问源代码',
    link: 'https://github.com/sankeyangshu/starter-template-vue',
  },
  {
    icon: 'mdi:message-alert',
    title: '反馈',
    desc: '提交问题反馈',
    link: 'https://github.com/sankeyangshu/starter-template-vue/issues',
  },
];
</script>
