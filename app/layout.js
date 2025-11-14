import './globals.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import WhatsAppButton from './Components/WhatsAppButton';

export const metadata = {
  title: 'Dr. Charles Birungi | Health Economist & UNAIDS Global Lead',
  description: 'Global Lead for Macroeconomics and Fiscal Policy at UNAIDS. PhD in Health Economics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}