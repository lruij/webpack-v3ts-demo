<template>
    <div>{{ name }}</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import '@/assets/index.less'

const name = ref<string>('webpack demo')
</script>

<style lang="scss" scoped>

</style>
