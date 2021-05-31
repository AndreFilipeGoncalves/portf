<template>
    <div class="menu-container">
        <Menu :menuEntries="menuEntries"/>
    </div>
    <router-view/>
</template>

<script setup>
import Menu from '@/components/menu/Menu'
import { useI18n } from 'vue-i18n'
import { ROUTES } from '@/assets/constants/routes'

const { t } = useI18n()

const menuEntries = [{
    route: ROUTES.HOME,
    label: t('menuEntries.home')
}, {
    route: ROUTES.ABOUT,
    label: t('menuEntries.about')
}, {
    route: ROUTES.PROJECTS,
    label: t('menuEntries.projects')
}]
</script>

<style lang="scss">
html, body, #app {
    width:100%;
    height:100%;
    overflow:hidden;
    background: linear-gradient(to right, #afafaf, #c8c8c7);
    font-family: 'Alegreya', serif;
}
.menu-container {
    width:100%;
    display:flex;
    box-sizing:border-box;
    padding:24px 32px;
}
</style>
