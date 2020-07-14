<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-07-13 20:40:00
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-07-14 10:45:06
--> 
<template>
  <div class="home">
   <!--   -->
    <FileComponents  
    :setUpUrl="`${config.baseURL}/yy/yytask/upload_files`"  :setHeaders="setHeaders"
    :setFileLength="2"
    :setMaxSize="10"
    :setStList="list"
    setStatus ="video"
    @updataFile="hanlderupdataFile"
    @deleteFile="henldeDeleteFile"
     />
  </div>
</template>

<script>
// @ is an alias to /src
  import FileComponents from '@/components/file.vue'
  import config from '@/api/config';
export default {
  name: 'Home',
  components: {
    FileComponents
  },
 data(){
   return{
     config:config,
     setHeaders:{
          Authorization:localStorage.getItem('merchantToken') || ''
      },
    list: [
     /*  { isStatus:'finished',
        name: 'food.jpeg', 
        url: 'http://api_test.yingyingfu.com/upload/vp/3/1594693868.jpg'
      }, 
      { isStatus:'finished',
        name: 'food2.jpeg', 
        url: 'http://api_test.yingyingfu.com/upload/vp/3/1594693897.jpg'
      } */
      ]
   }
 },
 methods:{
   hanlderupdataFile(file){
     console.log(file)
   },
   henldeDeleteFile(file){
     console.log(file)
   }
 }
}
</script>
