import "./globals.css";

export const metadata = {
  title: "Syed Abdul Mannan Hashmi",
  description: "Sales & Marketing Professional",
  icons: {
    icon: "/favicon.png",
  },
};
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}