import { Movie } from "./movie";

export interface apiResponse {
    Search:       Movie[] ;
    totalResults: string;
    Response:     string;
}