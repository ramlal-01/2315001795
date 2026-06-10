const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const calculatePriority = (
  notifications
) => {
  return [...notifications]
    .sort((a, b) => {
      const weightDiff =
        (weights[b.Type] || 0) -
        (weights[a.Type] || 0);

      if (weightDiff !== 0)
        return weightDiff;

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      );
    })
    .slice(0, 10);
};