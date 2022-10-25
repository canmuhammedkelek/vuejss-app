<template>
<div class="wrapper">
<SideBar></SideBar>
<div id="content">
    <MainContentMenu></MainContentMenu>
    <h3>Kategori</h3>
    <hr>
    <categoryTree></categoryTree>
</div>
</div>            
</template>

<script>
import SideBar from '../sidebar/SideBar.vue'
import MainContentMenu from '../ContentArea/MainContentMenu.vue'
import categoryTree from './CategoryTree.vue'
export default {
    components: {
        categoryTree,
        SideBar,
        MainContentMenu
    },
}
</script>