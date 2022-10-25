<template>
    <router-link
    :to="menuData.url"
    tag="li"
    >
    <a>{{ menuData.title }}</a>
    </router-link>
</template>

<script>
export default {
    props : ["menuData"]
}
</script>