import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(
    "plugin:vue/vue3-essential"
  ,"plugin:vue/essential",
  "plugin:vue/vue3-strongly-recommended"
  , "plugin:vue/strongly-recommended"
  ,"plugin:vue/vue3-recommended"
  ,"plugin:vue/recommended"
  )],
})
