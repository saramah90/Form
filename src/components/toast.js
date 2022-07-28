import { toast } from "react-toastify";

export const notify = (text, type) => {
  if (type === "success") {
    toast.success("welcome");
  } else {
    toast.error("invlid ");
  }
};
