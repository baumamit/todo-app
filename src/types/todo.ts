export enum Priority {
    HIGH = "High",
    MEDIUM = "Medium",
    LOW = "Low"
}

export interface TodoType {
    title: string;
    creationDate: Date;
    expiryDate: Date;
    isDone: boolean;
    priority: Priority;
}

