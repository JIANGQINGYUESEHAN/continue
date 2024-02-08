import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'; // 确保导入了path模块
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),

  createSvgIconsPlugin({
    // 指定需要缓存的svg图标文件夹，即需要识别的svg都应该放在这个文件夹下
    iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
    // 指定symbolId格式（这里的配置与6.2步骤中的引入svg组件的name配置项写法有关）
    symbolId: 'icon-[dir]-[name]',
  }),
  ],
  server: {
    port: 3001, // 设置你希望的端口号
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 设置@指向src目录
    },
  },
});