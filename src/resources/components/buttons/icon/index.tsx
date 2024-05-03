export function IconButton({ icon, title, ...props }): JSX.Element {
  return (
    <>
      <button
        className="text-slate-400 hover:text-slate-500 dark:text-slate-500 dark:hover:text-slate-400 rounded-full"
        {...props}
      >
        <span className="sr-only">{title}</span>

        {icon}
      </button>
    </>
  );
}

export function EditIcon(): JSX.Element {
  return (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
      <path d="M19.7 8.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM12.6 22H10v-2.6l6-6 2.6 2.6-6 6zm7.4-7.4L17.4 12l1.6-1.6 2.6 2.6-1.6 1.6z" />
    </svg>
  );
}

export function DownloadIcon(): JSX.Element {
  return (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
      <path d="M16 20c.3 0 .5-.1.7-.3l5.7-5.7-1.4-1.4-4 4V8h-2v8.6l-4-4L9.6 14l5.7 5.7c.2.2.4.3.7.3zM9 22h14v2H9z" />
    </svg>
  );
}

export function DeleteIcon(): JSX.Element {
  return (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
      <path d="M13 15h2v6h-2zM17 15h2v6h-2z" />
      <path d="M20 9c0-.6-.4-1-1-1h-6c-.6 0-1 .4-1 1v2H8v2h1v10c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V13h1v-2h-4V9zm-6 1h4v1h-4v-1zm7 3v9H11v-9h10z" />
    </svg>
  );
}
