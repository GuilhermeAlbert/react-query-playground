import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import tailwindConfig from "./src/resources/assets/css/tailwind.config.js";

export default {
  plugins: [tailwind(tailwindConfig), autoprefixer],
};
