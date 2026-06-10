export const Log = async (
  stack,
  level,
  pkg,
  message
) => {
  try {
    await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          Authorization:
            import.meta.env.VITE_ACCESS_TOKEN,
          "Content-Type":
            "application/json",
        },
        body: JSON.stringify({
          stack,
          level,
          package: pkg,
          message,
        }),
      }
    );
  } catch (err) {
    console.log(err);
  }
};