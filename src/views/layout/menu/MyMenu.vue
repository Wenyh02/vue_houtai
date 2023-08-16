<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#112f50"
      text-color="#fff"
      active-text-color="#ffd04b" router :collapse="isCollapse">
       <el-menu-item>
        <span slot="title">文子海鲜采购管理系统</span>
      </el-menu-item>
          <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/product">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span>产品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/product/list"> 
          <i class="el-icon-tickets"></i>
          <span slot="title">产品列表</span></el-menu-item>
          <el-menu-item index="/product/category">
          <i class="el-icon-document"></i>
          <span slot="title">产品分类</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="/order">
        <template slot="title">
          <i class="el-icon-printer"></i>
          <span>订单详细</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/order/list"> 
          <i class="el-icon-tickets"></i>
          <span slot="title">订单列表</span></el-menu-item>
          <el-menu-item index="/order/collect">
          <i class="el-icon-document"></i>
          <span slot="title">订单收藏</span></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
         <el-submenu index="/advert">
        <template slot="title">
          <i class="el-icon-news"></i>
          <span>广告</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/advert/advertlist"> 
          <i class="el-icon-tickets"></i>
          <span slot="title">广告列表</span></el-menu-item>
        
        </el-menu-item-group>
      </el-submenu>
      
   
    </el-menu>
  </div>
</template>

<script>
export default {
  props:['isCollapse']
}
</script>

<style lang="less" scoped>
 .el-menu{
  border-right:0 ;
  .is-active{
    background:#1e78bf !important ;
    color:#fff !important;
  }
 }
   .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>