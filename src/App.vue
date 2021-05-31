<template>
    <div class="menu-container">
        <Menu :menuEntries="menuSetup"/>
    </div>
    <router-view/>
</template>

<script setup>
import Menu from '@/components/menu/Menu'
import { menuSetup } from '@/assets/setups/menuSetup'
</script>

<style lang="scss">
html, body, #app {
    width:100%;
    height:100%;
    overflow:hidden;
    background: linear-gradient(to right, #000000, #434343);
    font-family: 'Alegreya', serif;
}
.menu-container {
    width:100%;
    display:flex;
    box-sizing:border-box;
    padding:24px 32px;
}
</style>
