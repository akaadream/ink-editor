import { defineNode, setType, TextInputInterface } from "baklavajs";
import { stringType } from "./nodes-types";

export default defineNode({
    type: "StringNode",
    title: "String",
    outputs: {
        name: () => new TextInputInterface("Name", "").use(setType, stringType),
    },
})