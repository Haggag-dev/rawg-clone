import APIClient from "./apiClient";
import { Genre } from "../entities/Genre";

export default new APIClient<Genre>("/genres");
