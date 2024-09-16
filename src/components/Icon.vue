<script setup lang="ts">
const props = defineProps({
    name: String
});
</script>

<template>
    <span class="material-icons">{{ props.name }}</span>
</template>