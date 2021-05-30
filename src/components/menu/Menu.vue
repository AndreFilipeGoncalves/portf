<template>
    <nav class="menu-wrapper">
        <router-link
        v-for="entry in menuEntries"
        :to="entry.route"
        :key="entry.route">
            {{entry.label}}
        </router-link>
    </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { defineProps } from 'vue'

const { t } = useI18n()
const props = defineProps({
    menuEntries: Object
})

</script>

<style lang="scss"></style>
