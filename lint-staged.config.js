/* eslint-disable prettier/prettier */
// module.exports = {
//   "*.{js,jsx,vue,ts,tsx}": "vue-cli-service lint",

// };

import micromatch from "micromatch";

export default {
  "*.{js,jsx,vue,ts,tsx}": (files) => {
    // from `files` filter those _NOT_ matching `*test.js`
    const match = micromatch.not(files, "*test.js");
    return `eslint ${match.join(" ")}`;
  },
};
