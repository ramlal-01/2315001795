import { useEffect, useState } from "react";
import NotificationCard from "../components/NotificationCard";
import { getNotifications } from "../services/notificationService";
import { Log } from "../utils/logger";

function AllNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        await Log(
          "frontend",
          "info",
          "page",
          "All notifications page loaded"
        );

        const data = await getNotifications(
          page,
          10,
          type
        );

        setNotifications(data.notifications);
      } catch (err) {
        setError(
          "Failed to load notifications"
        );

        await Log(
          "frontend",
          "error",
          "api",
          "Failed to fetch notifications"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, type]);

  if (loading)
    return <h2>Loading...</h2>;

  if (error)
    return <h2>{error}</h2>;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <h1>All Notifications</h1>

      <select
        value={type}
        onChange={(e) => {
          setPage(1);
          setType(e.target.value);
        }}
      >
        <option value="">All</option>
        <option value="Placement">
          Placement
        </option>
        <option value="Result">
          Result
        </option>
        <option value="Event">
          Event
        </option>
      </select>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          notification={item}
        />
      ))}

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <button
          disabled={page === 1}
          onClick={() =>
            setPage((prev) => prev - 1)
          }
        >
          Previous
        </button>

        <span>Page {page}</span>

        <button
          onClick={() =>
            setPage((prev) => prev + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllNotifications;