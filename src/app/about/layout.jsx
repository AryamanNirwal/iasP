import Footer from "@/components/Footer";
import FooterBottom from "@/components/FooterBottom";
export default  async function RootLayout({ children }) {
 

    return (
        <section>
            {children}            
        </section>
    );
  }