import { create } from "apisauce";

// define the api
const api = create({
  baseURL: "https://newsapi.org/v2",
});
//https://newsapi.org/v2/top-headlines?country=us&apiKey=3905a5e21ac9495a9880015ed9d72572
const apikey = "?country=us&apiKey=3905a5e21ac9495a9880015ed9d72572";
const getTopHeadLinde = api.get("/top-headlines" + apikey);
const getByCategory = (category) =>
  api.get(
    "/everything?q=" + category + "&apiKey=3905a5e21ac9495a9880015ed9d72572"
  );

export default {
  getTopHeadLinde,
  getByCategory,
};
