import Header from "./header";
import Footer from "./footer";
import CustomCursor from "./CustomCursor";

const PageLayout = ({ children, isDark = false }) => {
  return (
    <div
      className={isDark ? "bg-black min-h-screen" : "bg-gray-50 min-h-screen"}
    >
      <Header isDark={isDark} />
      <main className={isDark ? "text-white" : "text-gray-900"}>
        {children}
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
};

export default PageLayout;
