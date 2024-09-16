<script setup lang="ts">
import MenuItem from './MenuItem.vue';
</script>

<template>
    <nav class="main-menu">
        <MenuItem label="File"></MenuItem>
        <MenuItem label="Edit"></MenuItem>
        <MenuItem label="View"></MenuItem>
        <MenuItem label="Help"></MenuItem>
    </nav>
</template>

<style>
.main-menu {
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 32px;
    left: 0;
    right: 0;
    top: 0;
    
    background-color: #191919;
    z-index: 99;
    border-bottom: 1px solid #323232;
}

.menu-item {
    font-size: 0.8em;
    padding: 2px 12px;
    border-radius: 8px;
}

.menu-item:hover {
    background-color: #282828;
}

.menu-item-name {
    color: #ababab;
    user-select: none;
}
</style>