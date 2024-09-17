import { defineNode, setType, TextInputInterface } from "baklavajs";
import { CycleNodeInterface } from "./interfaces/CycleNodeInterface";
import { stringType } from "./nodes-types";

export default defineNode({
    type: "KnotNode",
    title: "Section",
    inputs: {
        sectionName: () => new TextInputInterface("Name", "").use(setType, stringType),
    },
    outputs: {
        outputNode: () => new CycleNodeInterface(),
    },
})