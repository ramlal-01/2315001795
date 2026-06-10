const Log = require("./logger");

(async () => {
  const res = await Log(
    "frontend",
    "info",
    "component",
    "Navbar component rendered"
  );

  console.log(res);
})();