import axios from "../axios";

export const getOptionsApi = id => axios.get(`/options/${id}`);

export const getProfilesApi = axios.get("/profiles");
