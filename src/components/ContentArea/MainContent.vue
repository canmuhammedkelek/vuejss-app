<template>
    <div id="content">
        <MainContentMenus></MainContentMenus>
        <h1 style="text-align:center">VueJS Case App</h1>
    </div>
</template>

<script>
import MainContentMenus from './MainContentMenu.vue'
import {eventBus} from '../../main'

export default {
    data : function(){
        return{
            activeMenu : {},
        }
    },
    created(){
        eventBus.$on("pageData", (name) =>{
            this.activeMenu = name;
        })
    },
    components : {
        MainContentMenus,
    }
}
</script>