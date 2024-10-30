import { Schema, model } from "mongoose";

export interface UserData {
	username: string;
	password: string;
	email: string;
    date: Date
}

const userSchema = new Schema<UserData>({
	username: { type: String, required: true, min: 3, max: 256 },
	email: { type: String, required: true, min: 3, max: 256 },
	password: { type: String, required: true, min: 3, max: 1024 },
    date:  {type: Date, default: Date.now}
});

const User = model<UserData>("users", userSchema);

export  {User};
