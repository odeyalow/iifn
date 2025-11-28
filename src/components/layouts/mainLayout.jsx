import Header from "./header";
// import Footer from "./footer";

const MainLayout = ({ children }) => {
    return (
         <main className="relative w-full h-max bg-white pt-15">
            <Header />
            <div className="max-w-[1230px] mx-auto h-svh px-10">
                {children}
            </div>
            {/* <Footer /> */}
        </main>
    );
}
 
export default MainLayout;