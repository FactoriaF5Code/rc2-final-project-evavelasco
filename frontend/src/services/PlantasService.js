import axios from "axios";

export class PlantasService {
  async showPlantas() {
    return axios
      .get("http://localhost:8080/api/plantas")
      .then((response) => response.data);
  }
}
