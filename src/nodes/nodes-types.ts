import { NodeInterfaceType } from "baklavajs";
import { Cycle } from "./types/Cycle";
import { Choice } from "./types/Choice";

export const stringType = new NodeInterfaceType<string>("string");
export const numberType = new NodeInterfaceType<number>("number");
export const booleanType = new NodeInterfaceType<boolean>("boolean");
export const cycleType = new NodeInterfaceType<Cycle>("cycle");
export const choiceType = new NodeInterfaceType<Choice>("choice");