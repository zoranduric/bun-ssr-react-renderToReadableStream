export function Index({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head></head>
      <body id="root">{children}</body>
    </html>
  );
}
