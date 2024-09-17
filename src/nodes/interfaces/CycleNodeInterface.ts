import { NodeInterface, setType } from "baklavajs";
import { cycleType } from "../nodes-types";

export class CycleNodeInterface extends NodeInterface {
    constructor(name: string = "") {
        super(name, "cycle");
        this.use(setType, cycleType);
    }
}