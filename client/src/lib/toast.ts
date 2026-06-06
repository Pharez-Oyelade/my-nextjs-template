import toast from "react-hot-toast";

export const notify = {
  success: (message: string) =>
    toast.success(message, {
      duration: 3000,
      position: "top-right",
    }),

  error: (message: string) =>
    toast.error(message, {
      duration: 3000,
      position: "top-right",
    }),

  loading: (message: string) =>
    toast.loading(message, {
      position: "top-right",
    }),

  dismiss: (id?: string) => toast.dismiss(id),

  promise: <T>(
    promise: Promise<T>,
    messages: { loading: string; success: string; error: string },
  ) => toast.promise(promise, messages),
};
