<script setup lang="ts">
import { BaklavaEditor, BaklavaInterfaceTypes, Commands, Components, useBaklava } from 'baklavajs';
import "@baklavajs/themes/dist/syrup-dark.css";
import "./editor-theme.css";
import Menu from './navigation/Menu.vue';
import EndNode from './nodes/EndNode';
import DialogNode from './nodes/DialogNode';
import ChoiceNode from './nodes/ChoiceNode';
import DivertNode from './nodes/DivertNode';
import IfNode from './nodes/IfNode';
import KnotNode from './nodes/KnotNode';
import { booleanType, cycleType, numberType, stringType } from './nodes/nodes-types';
import StringNode from './nodes/StringNode';
import BooleanNode from './nodes/BooleanNode';
import ChoicesNode from './nodes/ChoicesNode';

const baklava = useBaklava();

const nodeInterfaceTypes = new BaklavaInterfaceTypes(baklava.editor, {
    viewPlugin: baklava
});
nodeInterfaceTypes.addTypes(stringType, numberType, booleanType, cycleType);

// baklava.settings.contextMenu.additionalItems = [
//     { label: "Edit", submenu: [
//         { label: "Copy", command: Commands.COPY_COMMAND },
//         { label: "Cut", command: Commands.COPY_COMMAND },
//         { label: "Paste", command: Commands.COPY_COMMAND },
//     ] },
//     { isDivider: true },
//     { label: "Create a sub graph", command: Commands.CREATE_SUBGRAPH_COMMAND },
// ];

baklava.editor.registerNodeType(StringNode, { category: "Variables" });
baklava.editor.registerNodeType(BooleanNode, { category: "Variables" });

baklava.editor.registerNodeType(DivertNode, { category: "Flow" });
baklava.editor.registerNodeType(KnotNode, { category: "Flow" });
baklava.editor.registerNodeType(ChoiceNode, { category: "Flow" });
baklava.editor.registerNodeType(ChoicesNode, { category: "Flow" });
baklava.editor.registerNodeType(EndNode, { category: "Flow" });
baklava.editor.registerNodeType(IfNode, { category: "Conditionnal" });
baklava.editor.registerNodeType(DialogNode);

baklava.settings.displayValueOnHover = true;
baklava.settings.nodes.resizable = true;
baklava.settings.toolbar.enabled = true;
baklava.settings.background.gridSize = 64;
baklava.settings.palette.enabled = false;
</script>

<template>
    <Menu />
    <BaklavaEditor :view-model="baklava" />
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

    top: 200px;
    left: 100px;

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
