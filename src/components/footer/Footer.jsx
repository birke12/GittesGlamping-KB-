import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.some}>
				<FaSquareFacebook />
				<FaInstagram />
			</div>
			<div className={styles.logo}>
				<img src="/headerImages/logo.png" alt="" />
				<p>Gittes Glamping</p>
			</div>
		</footer>
	);
};
export default Footer;
