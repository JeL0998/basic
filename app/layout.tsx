import "./globals.css"; import { ReactNode } from "react"; import { NextSeo } from "next-seo";
export const metadata={ title:"Azure Cove — Basic", description:"Beach resort advert — Basic package" };
export default function RootLayout({ children }: { children: ReactNode }){
  return (<html lang="en" className="theme-sky"><body><NextSeo title="Azure Cove — Basic" description="Beach resort advert — Basic package" openGraph={{ title:"Azure Cove — Basic" }}/>{children}</body></html>);
}
