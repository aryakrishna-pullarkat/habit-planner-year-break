import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div style={styles.container}>
      <Header />

      <main style={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  main: {
    flex: 1,
  },
};

export default Layout;