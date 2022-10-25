<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="btn">
                        <i class="fas fa-align-left"></i>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li v-for="menu in contentMenus" v-bind:key="menu" class="nav-item active">
                                <a class="nav-link">{{menu.title}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </div>
</template>

<script>
export default {
    data : () =>{
        return {
            contentMenus : [
            {id : 0, title : "Modül Menü 1"},
            {id : 1, title : "Modül Menü 2"},
            {id : 3, title : "Modül Menü 3"},
            {id : 4, title : "Modül Menü 4"},
        ]
        }
    }
}
</script>