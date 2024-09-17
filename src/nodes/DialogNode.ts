import { defineNode, setType, TextareaInputInterface } from "baklavajs";
import { CycleNodeInterface } from "./interfaces/CycleNodeInterface";
import { stringType } from "./nodes-types";

export default defineNode({
    type: "DialogNode",
    title: "Dialog",
    inputs: {
        entryNode: () => new CycleNodeInterface(),
        dialog: () => new TextareaInputInterface("Text", "").use(setType, stringType),
    },
    outputs: {
        outputNode: () => new CycleNodeInterface(),
    }
})