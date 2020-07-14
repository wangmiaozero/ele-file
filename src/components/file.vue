<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-07-13 20:40:00
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-07-14 10:38:58
--> 
<template>
 <div>
   
   <el-upload
  :action="updata.url"
  :headers="updata.headers"
  :limit="updata.fileLength"
  :file-list="defaultList"
  :on-exceed="handleExceed"
  :on-success="successResave"
  :before-upload="beforeAvatarUpload"
  list-type="picture-card"
  :auto-upload="true" >
    <i slot="default" class="el-icon-plus"></i>
    <div slot="file" slot-scope="{file}">
      <img 
      v-if="file.isStatus == 'finished'"
        class="el-upload-list__item-thumbnail"
        :src="file.url" alt="">
       <div style ="position:relative" v-else>
                <video id ="video" class="videoContent" controls>
                   <source :src="file.url" type="video/mp4"/>
                </video>
                <div id ="output" style ="position:absolute;left:0;left:0"></div>
        </div>
      <span class="el-upload-list__item-actions">
        <span
          class="el-upload-list__item-preview"
          @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <!-- <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span> -->
        <span
          v-if="!disabled"
          class="el-upload-list__item-delete"
          @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
    </div>
    </el-upload>
    <div v-for="(item,index) in uploadList" :key="item+index">
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" v-if="dialogVisible&&item.isStatus == 'finished'"     :src="dialogImageUrl" alt="">
        <div style ="position:relative" v-else>
            <video id ="video" class="videoContent" controls style="width: 100%;">
                <source :src="item.url" type="video/mp4"/>
            </video>
           <div id ="output" style ="position:absolute;left:0;left:0"></div>
          </div>
      </el-dialog>
  </div>
 </div>
</template>

<script scoped>
export default {
  name: 'FileComponents',
  props: {
     setUpUrl:{type:String,required:true},
     setHeaders:{type:Object,required:true},
     setFileLength:{type:Number,required:true},
     setStatus:{type:String,default:'finished'},
     setMaxSize:{type:Number,required:true},
     setStList:{type:Array,required:true},
  },
    data() {
      return {
        updata:{
          url:this.$props.setUpUrl,
          headers:this.$props.setHeaders,
          fileLength:this.$props.setFileLength||2,
          status:this.$props.setStatus,
          maxSize:this.$props.setMaxSize,
        },
        defaultList:[],
        uploadList: [],//任务商品 图片集合
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false
      };
    },
    created(){
      this.uploadList = [];
    },
    mounted() {
      let _this =this;
     setTimeout(() => {
       _this.updataFn()
     }, 1000);
    },
    methods: {
       updataFn(){
         this.$nextTick(()=>{
            this.defaultList=this.$props.setStList||[];
            this.uploadList=this.$props.setStList||[];
            this.$forceUpdate()
        })
      },
      getFileSize(fileByte){
        var fileSizeByte = fileByte;
        var fileSizeMsg = "";
        if (fileSizeByte < 1048576) fileSizeMsg = (fileSizeByte / 1024).toFixed(2) + "MB";
        else if (fileSizeByte == 1048576) fileSizeMsg = "1MB";
        else if (fileSizeByte > 1048576 && fileSizeByte < 1073741824) fileSizeMsg = (fileSizeByte /       (1024 * 1024)).toFixed(2) + "MB";
        else if (fileSizeByte > 1048576 && fileSizeByte == 1073741824) fileSizeMsg = "1GB";
        else if (fileSizeByte > 1073741824 && fileSizeByte < 1099511627776) fileSizeMsg = (fileSizeByte       / (1024 * 1024 * 1024)).toFixed(2) + "GB";
        else fileSizeMsg = "文件超过1TB";
        return fileSizeMsg;
      },
       handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 ${this.updata.fileLength} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
       beforeAvatarUpload(file) {
         let isJPG = file.type === 'video/mp4';
         if(this.updata.status=='finished'){
           isJPG = file.type === 'image/jpeg';
         }
        const isLt2M = file.size / 1024 / 1024 < this.updata.maxSize;
        if (!isJPG) {
          if(file.type == 'video/mp4'){
            this.$message.error('上传头像图片只能是 JPG 格式!');
            
          }else{
            this.$message.error('上传文件只能是 MP4 格式!');
          }
        }
        if (!isLt2M) {
          this.$message.error(`上传头像图片大小不能超过 ${this.updata.maxSize}MB!`);
        }
        return isJPG && isLt2M;
      },
      successResave(response, file, fileList){
           if(response.errcode===0){
          for(var i =0; i<response.data.url.length;i++){
            file.url = response.data.url[i]
            file.comment_url = response.data.url[i]
            file.name = new Date().getTime();
            file.isStatus = this.updata.status
          }
           
          this.defaultList.push(file)
          this.uploadList = this.defaultList;
          return this.$emit('updataFile',this.uploadList)
        }else{
         return this.$message.warning(response.errmsg);
        }
      },
      handleRemove(file) {
        const fileList = this.uploadList;
        this.uploadList.splice(fileList.indexOf(file), 1);
        this.$emit('updataFile',this.uploadList||[])
        return (this.$emit('deleteFile',file))
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
