import { CheckboxInterface, defineNode, setType, TextInputInterface } from "baklavajs";
import { CycleNodeInterface } from "./interfaces/CycleNodeInterface";
import { booleanType, stringType } from "./nodes-types";

export default defineNode({
    type: "IfNode",
    title: "If",
    inputs: {
        inputNode: () => new CycleNodeInterface(),
        not: () => new CheckboxInterface("Not", false).use(setType, booleanType),
        knot: () => new TextInputInterface("Knot", "").use(setType, stringType),
    },
    outputs: {
        trueNode: () => new CycleNodeInterface("True"),
        falseNode: () => new CycleNodeInterface("False"),
    },
})