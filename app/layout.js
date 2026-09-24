import "./globals.css";
export const metadata = {
  title: "PT. Mitra Utama Lansekap | Landscape Construction",
  description: "Landscape construction, hardscape, softscape, maintenance, and outdoor area development.",
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}