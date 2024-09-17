import { NodeInterface, setType } from "baklavajs";
import { cycleType } from "../nodes-types";

export class ChoiceNodeInterface extends NodeInterface {
    public callback: CallableFunction;

    constructor(name: string = "", value: string | undefined, callback: CallableFunction) {
        super(name, value ?? "");

        this.callback = callback;
        this.use(setType, cycleType);
    }
}