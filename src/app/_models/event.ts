import { User } from "./user";

export interface Event {
    id?: number;
    name: string;
    start_date?: Date;
    end_date?: Date;
    description?: string;
    address: string;
    city: string;
    type: string;
    img?: string;
    max?: number;
    participantsCount?: number;
    owner?: User;
    joined?: boolean;
}