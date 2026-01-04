import { cn } from '@/lib/utils';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva } from 'class-variance-authority';
import { X } from 'lucide-react';
import React from 'react';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      // top on mobile, bottom-right on desktop
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  cn(
    // layout
    'group pointer-events-auto relative flex w-full items-start justify-between gap-4 overflow-hidden rounded-xl border p-4 pr-9',
    // GLASS
    'bg-white/10 backdrop-blur-xl',
    'border-white/15',
    // depth + premium glow
    'shadow-lg shadow-black/25',
    'ring-1 ring-white/10',
    // subtle sheen layer
    'before:absolute before:inset-0 before:pointer-events-none before:bg-gradient-to-br before:from-white/12 before:to-transparent',
    // motion
    'transition-all',
    'data-[swipe=move]:transition-none data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
    'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
    'data-[state=open]:animate-in data-[state=closed]:animate-out',
    'data-[swipe=end]:animate-out',
    'data-[state=closed]:fade-out-80',
    // slide in from top on mobile, from bottom on sm+
    'data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    'data-[state=closed]:slide-out-to-right-full'
  ),
  {
    variants: {
      variant: {
        default: '',
        destructive: cn(
          'border-red-400/25 bg-red-500/10 text-red-50 ring-red-400/15 shadow-red-500/10',
          'before:from-red-400/10'
        )
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      // glass button
      'inline-flex h-8 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-3 text-sm font-medium text-white',
      'backdrop-blur-md',
      'transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:ring-offset-0',
      'disabled:pointer-events-none disabled:opacity-50',
      'group-[.destructive]:border-red-400/25 group-[.destructive]:hover:bg-red-500/15 group-[.destructive]:focus:ring-red-400/60',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-lg p-1',
      'text-white/70 opacity-0 transition-opacity',
      'hover:bg-white/10 hover:text-white',
      'focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500/60',
      'group-hover:opacity-100',
      'group-[.destructive]:text-red-100/80 group-[.destructive]:hover:bg-red-500/15 group-[.destructive]:focus:ring-red-400/60',
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('relative z-[1] text-sm font-semibold text-white', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('relative z-[1] text-sm text-white/80', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
};
