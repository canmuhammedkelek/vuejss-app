
<template>
<div class="wrapper">
<SideBar></SideBar>
<div id="content">
    <Content></Content>
</div>
</div>            
</template>

<script>
import SideBar from './sidebar/SideBar.vue';
import Content from './ContentArea/MainContent.vue';
export default {
  components : {
    SideBar,
    Content
  }
};
</script>