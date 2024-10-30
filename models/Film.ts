import { Schema, model } from "mongoose";

export interface FilmData {
    film_name: string;
    film_type: string;
    film_year: string;
    film_link: string;
}

const filmSchema = new Schema<FilmData>({
    film_name: { type: String, required: true },
    film_type: { type: String, required: true },
    film_year: { type: String, required: true },
    film_link: { type: String, required: true },
});

const Film = model<FilmData>("films", filmSchema);

export {Film};
