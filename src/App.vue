<template>
    <Menu :menuEntries="menuEntries"/>
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
</style>
