import Header from "./header";
import Footer from "./footer";

const MainLayout = ({ children }) => {
    return (
         <main className="relative w-full h-max bg-white pt-15">
            <Header />
            <div className="max-w-[1280px] mx-auto min-h-svh px-10 overflow-hidden">
                {children}
            </div>
            <Footer />
        </main>
    );
}
 
export default MainLayout;