import APIClient from "./apiClient";
import PlatformDetails from "../entities/PlatformDetails";

export default new APIClient<PlatformDetails>("/platforms/lists/parents");
