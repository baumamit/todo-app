export enum Priority {
    LOW = "Low",
    MEDIUM = "Medium",
    HIGH = "High"
}

export interface TodoType {
    title: string;
    creationDate: Date;
    expiryDate: Date;
    isDone: boolean;
    priority: Priority;
}

