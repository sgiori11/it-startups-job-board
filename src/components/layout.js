import styles from './layout.module.css';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
    <div>
     <NavBar />
     <div className={styles.container}>
      {children}
     </div>
     <Footer />
    </div>
  )};

