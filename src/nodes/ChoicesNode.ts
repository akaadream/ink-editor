import { AbstractNode, ButtonInterface, CalculateFunction, CalculationContext, IEngine, NodeInterface } from "baklavajs";
import { CycleNodeInterface } from "./interfaces/CycleNodeInterface";
import { ChoiceNodeInterface } from "./interfaces/ChoiceNodeInterface";

export default class ChoicesNode extends AbstractNode {
    public type = "choices";

    private counter: number = 0;

    public inputs: Record<string, NodeInterface<any>> = {
        inputNode: new CycleNodeInterface(),
    }
    public outputs: Record<string, NodeInterface<any>> = {};

    constructor() {
        super();

        this.initializeIo();
        this.title = "Choices";
    }

    public addChoice(value?: string): void {
        console.log("bonjour");
        const name = `choice${++this.counter}`;
        this.addOutput(
            name,
            new CycleNodeInterface(value)
        );
    }

    public onPlaced(): void {
        this.addInput("addChoice", new ButtonInterface(`Add ${this.title}`, () => {
            this.addChoice("title");
        }))
    }

    calculate?: CalculateFunction<any, any, CalculationContext<any, IEngine<any>>> | undefined;
}