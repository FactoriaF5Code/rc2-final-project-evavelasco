import axios from "axios";

export class RemediosService {
  async showRemedios() {
    return axios
      .get("http://localhost:8080/api/remedios")
      .then((response) => response.data);
  }
}
