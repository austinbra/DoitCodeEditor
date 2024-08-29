import axios from "axios";
import {LANGUAGES} from "./constants";

const API = axios.create(
  {baseURL: "https://emkc.org/api/v2/piston",});
// just anexample using piston api for now btw

export const runCode = async (language, sourceCode) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGES[language],
    files: [
      {
        content: sourceCode,
      },
    ],
  });
  //where to pass in the language and the source code assuming the api ur using takes these arguments
  return response.data;
};
