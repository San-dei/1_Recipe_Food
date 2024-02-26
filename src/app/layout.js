import './globals.css';
import {Outfit} from 'next/font/google';

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

const outfit = Outfit({
  weigt:'400',
  style:'normal',
  display:'swap',
  subsets:['latin']
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={outfit.className}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
