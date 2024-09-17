import { CheckboxInterface, defineNode, setType } from "baklavajs";
import { booleanType } from "./nodes-types";

export default defineNode({
    type: "BooleanNode",
    title: "Boolean",
    outputs: {
        checked: () => new CheckboxInterface("checked", false).use(setType, booleanType),
    },
})