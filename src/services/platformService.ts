import APIClient from "./apiClient";

export interface PlatformDetails {
  id: number;
  name: string;
  slug?: string;
}

export default new APIClient<PlatformDetails>("/platforms/lists/parents");
