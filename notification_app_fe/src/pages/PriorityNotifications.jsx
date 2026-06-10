import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../services/notificationService";
import { calculatePriority } from "../utils/priorityCalculator";

function PriorityNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data =
          await getNotifications(
            1,
            10
          );

        const sorted =
          calculatePriority(
            data.notifications
          );

        setNotifications(sorted);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h1>
        Priority Notifications
      </h1>

      {notifications.map(
        (item) => (
          <NotificationCard
            key={item.ID}
            notification={item}
          />
        )
      )}
    </div>
  );
}

export default PriorityNotifications;