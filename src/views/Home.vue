<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-07-13 20:40:00
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-07-13 20:48:41
--> 
<template>
  <div class="home">
    <FileComponents />
  </div>
</template>

<script>
// @ is an alias to /src
import FileComponents from '@/components/file.vue'

export default {
  name: 'Home',
  components: {
    FileComponents
  },
 
}
</script>
