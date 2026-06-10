import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

function NotificationCard({
  notification,
}) {
  const viewed =
    JSON.parse(
      localStorage.getItem(
        "viewedNotifications"
      ) || "[]"
    );

  const isViewed = viewed.includes(
    notification.ID
  );

  const handleClick = () => {
    const viewed =
      JSON.parse(
        localStorage.getItem(
          "viewedNotifications"
        ) || "[]"
      );

    if (
      !viewed.includes(notification.ID)
    ) {
      viewed.push(notification.ID);

      localStorage.setItem(
        "viewedNotifications",
        JSON.stringify(viewed)
      );

      window.location.reload();
    }
  };

  return (
    <Card
      sx={{
        marginBottom: 2,
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <CardContent>
        <Chip
          label={
            isViewed
              ? "VIEWED"
              : "NEW"
          }
          color={
            isViewed
              ? "success"
              : "error"
          }
          sx={{ mb: 1 }}
        />

        <Typography variant="h6">
          {notification.Type}
        </Typography>

        <Typography>
          {notification.Message}
        </Typography>

        <Typography variant="caption">
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;