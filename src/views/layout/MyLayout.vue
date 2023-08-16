<template>
  <div class="layout">
    <!-- 左侧导航 -->
    <div class="menu">
      <Menu :isCollapse="isCollapse"></Menu>
    </div>
    <!-- 右侧内容 -->
     <div class="content" :class="{small:isCollapse}">
     <Content @changeShow="changeShow" :isCollapse="isCollapse"> </Content>
    </div>
  </div>
  
</template>

<script>
import Content from './content/MyContent.vue'
import Menu from './menu/MyMenu.vue'
export default {

  data(){
    return{
      isCollapse:false
    }
   },
    components:{
      Menu,
      Content,
    },
    methods:{
      changeShow()
      {
        this.isCollapse=!this.isCollapse
        // console.log(this.isCollapse);
      }
    }
}
</script>

<style lang="less" scoped>
.layout{
  // display: flex;
  .menu{
  // width: 200px;
  background: #112f50;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  }
  .content{
    padding-left: 200px;
  }
  .small{
    padding-left: 64px;
  }

}


</style>