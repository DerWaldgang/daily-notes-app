import { MomentInput } from "moment";

export interface INotes {
    id: string,
    title: string,
    description: string,
    createdAt: MomentInput ,
}