<script setup lang="ts">
    const props = defineProps({
        label: String
    });
</script>

<template>
    <div class="menu-item">
        <div class="menu-item-name">{{ props.label }}</div>

        <div class="menu-sub-menu">
            <slot></slot>
        </div>
    </div>
</template>