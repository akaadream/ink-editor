<script setup lang="ts">
import Icon from './components/Icon.vue';
import Menu from './navigation/Menu.vue';

const showContextMenu = () => {

}
</script>

<template>
    <Menu />
    <div id="editor" @contextmenu.prevent="showContextMenu">
        <div class="editor-background"></div>
    </div>

    <div class="context-menu">
        <div class="context-menu-item">
            <Icon name="add_circle" /> Create a node
        </div>

        <div class="context-menu-separator"></div>

        <div class="context-menu-item">
            <Icon name="content_cut" /> Cut
        </div>

        <div class="context-menu-item">
            <Icon name="content_copy" /> Copy
        </div>

        <div class="context-menu-item">
            <Icon name="content_paste" /> Paste
        </div>
    </div>
</template>

<style scoped>
#editor {
    position: absolute;
    inset: 0;
    
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-image: radial-gradient(#424242 1px, transparent 1px);
    background-size: 32px 32px;
}

.context-menu {
    display: flex;
    position: absolute;
    flex-direction: column;
    align-items: flex-start;

    z-index: 1000;
    user-select: none;

    min-width: 280px;
    padding: 8px;

    background-color: #191919;
    border-radius: 8px;
}

.context-menu-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px;

    text-align: left;
    cursor: pointer;
    color: #ababab;

    font-size: 0.9em;
    border-radius: 8px;
    margin-bottom: 4px;
}

.context-menu-item:last-of-type {
    margin-bottom: 0;
}

.context-menu-item > span {
    margin-right: 12px;
}

.context-menu-item:hover {
    background-color: #292929;
    color: white;
}

.context-menu-separator {
    display: block;
    width: 100%;
    height: 1px;
    margin: 4px 0 8px 0;

    background-color: #242424;
}
</style>
