import Link from "next/link";
import styles from './styles.module.css';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section>
        <ul>
          <li>
            <Link href="">Sitemap</Link>
          </li>
          <li>
            {" "}
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Post</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li>
            <Link href="">Conectate con Nosotros</Link>
          </li>
          <li>
            {" "}
            <Link href="">Facebook</Link>
          </li>
          <li>
            <Link href="">twitter</Link>
          </li>
          <li>
            <Link href="">Tiktok</Link>
          </li>
        </ul>
      </section>
      <section>
        <img src="./next.svg" alt="" width="100px" height="auto"/>
      </section>
      <section>
        <img src="./vercel.svg" alt="" width="100px" height="auto"/>
      </section>
      <section>
        <img src="./imgs/photo.jpg" alt="" width="50px" height="auto"/>
      </section>
    </footer>
  );
};

export default Footer;
