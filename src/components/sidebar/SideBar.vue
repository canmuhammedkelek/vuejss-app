<template>
    <nav id="sidebar">
            <div class="sidebar-header">
                <h3>VueJS APP</h3>
            </div>

            <ul class="list-unstyled components">
                <SideBarItem v-for="menu in menus" v-bind:key="menu" :menuData="menu"></SideBarItem>
            </ul>
        </nav>
</template>

<script>
import SideBarItem from './SideBarItem.vue'
export default {
    name : 'SideBar',
    components : {
        SideBarItem
    },
    data : function(){
        return {
            menus : [
                {id: 0, title : "Anasayfa", url : "/home"},
                {id: 1, title : "Ürünler", url : "/urunler"},
                {id: 2, title : "Kategoriler", url : "/kategoriler"},
            ]
        }
    },
    methods : {
    }
}
</script>