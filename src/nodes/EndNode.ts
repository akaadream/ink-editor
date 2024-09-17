import { defineNode } from "baklavajs";
import { CycleNodeInterface } from "./interfaces/CycleNodeInterface";

export default defineNode({
    type: "EndNode",
    title: "End",
    inputs: {
        inputNode: () => new CycleNodeInterface(),
    },
})