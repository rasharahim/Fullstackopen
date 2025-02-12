const Notification = ({ notification }) => {
  if (!notification) return null;

  const notificationStyle = notification.type === "success" ? "success" : "error";

  return (
    <div className={notificationStyle}>
      {notification.text}
    </div>
  );
};

export default Notification;
