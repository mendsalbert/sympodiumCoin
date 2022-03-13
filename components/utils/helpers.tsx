export const showSnackBar = (
  status: "success" | "error" | "warning" | "default",
  snackBar,
  message?: string
) => {
  switch (status) {
    case "error":
      snackBar.add(message || "Error creating department", {
        appearance: "error",
        autoDismiss: true,
      });
      break;
    case "success":
      snackBar.add(message || "Successfully created department", {
        appearance: "success",
        autoDismiss: true,
      });
      break;
    case "warning":
      snackBar.add(message || "Warning", {
        appearance: "warning",
        autoDismiss: true,
      });
      break;
    case "default":
      snackBar.add(message || "Default", {
        appearance: "default",
        autoDismiss: true,
      });
      break;
    default:
      break;
  }
};
