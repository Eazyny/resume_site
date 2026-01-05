import { useToast } from "@/components/ui/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, icon, ...props }) => (
        <Toast key={id} {...props}>
          <div className="flex w-full items-start gap-3">
            {icon ? (
              <div className="mt-0.5 shrink-0 text-white/90">{icon}</div>
            ) : null}

            <div className="grid gap-1">
              {title ? <ToastTitle>{title}</ToastTitle> : null}
              {description ? <ToastDescription>{description}</ToastDescription> : null}
            </div>
          </div>

          {action}
          <ToastClose />
        </Toast>
      ))}

      <ToastViewport />
    </ToastProvider>
  );
}
