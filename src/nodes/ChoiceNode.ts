import { defineNode, setType, TextInputInterface } from "baklavajs";
import { CycleNodeInterface } from "./interfaces/CycleNodeInterface";
import { stringType } from "./nodes-types";

export default defineNode({
    type: "ChoiceNode",
    title: "Choice",
    inputs: {
        inputNode: () => new CycleNodeInterface(),
        choice: () => new TextInputInterface("Choice", "").use(setType, stringType)
    },
    outputs: {
        outputNode: () => new CycleNodeInterface(),
    }
})