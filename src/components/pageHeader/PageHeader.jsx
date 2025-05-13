import styles from "./PageHeader.module.css";

// ✅ Import images
import homeHeaderImage from "/headerImages/image_00.jpg";
import stayHeaderImage from "/headerImages/image_01.jpg";
import infostayHeaderImage from "/headerImages/image_02.jpg";
import logoHomePage from "/headerImages/logo.png";
import contactHeaderImage from "/headerImages/image_03.jpg";
import gitteHeaderImage from "/headerImages/image_03.jpg";
import activityHeaderImage from "/headerImages/image_04.jpg";
import myListHeaderImage from "/headerImages/image_05.jpg";
// import stayHeaderImage from "../headerImages/stay-header.jpg";
// import singleStayHeaderImage from "../headerImages/single-stay-header.jpg";
// etc.

const PageHeader = ({ logo, title, subTitle, button, headerType }) => {
  const headerClassMap = {
    home: styles.homePageHeader,
    stay: styles.stayPageHeader,
    singleStay: styles.singleStayPageHeader,
    contact: styles.contactPageHeader,
    activity: styles.activityPageHeader,
    myList: styles.myListPageHeader,
  };

  const containerClassMap = {
    home: styles.homeMainContainer,
    stay: styles.stayMainContainer,
    singleStay: styles.singleStayMainContainer,
    contact: styles.contactMainContainer,
    activity: styles.activityMainContainer,
    myList: styles.myListMainContainer,
  };

  const backgroundImages = {
    home: homeHeaderImage,
    stay: stayHeaderImage,
    infostay: infostayHeaderImage,
    /*  // stay: stayHeaderImage, */
    // singleStay: singleStayHeaderImage,
    contact: contactHeaderImage,
    contact: gitteHeaderImage,
    activity: activityHeaderImage,
    myList: myListHeaderImage,
    // myList: myListHeaderImage,
  };

  const headerClass = headerClassMap[headerType] || "";
  const containerClass = containerClassMap[headerType] || "";
  const backgroundImage = backgroundImages[headerType] || "";

  return (
    <header
      className={headerClass}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`${styles.mainHeaderContainer} ${containerClass}`}>
        {headerType === "home" && (
          <div className={styles.homeMainContainer}>
            <div className={styles.homeContent}>
              <img src={logoHomePage} alt="Logo" className={styles.logo} />
              <h3 className={styles.subTitle}>{subTitle}</h3>
              <h1 className={styles.title}>{title}</h1>
              {button && <button className={styles.button}>{button}</button>}
            </div>
          </div>
        )}

        {headerType === "stay" && (
          <div className={styles.homeMainContainer}>
            <div className={styles.homeContent}>
              {/*  <img src={logoHomePage} alt="Logo" className={styles.logo} /> */}
              {/* <h3 className={styles.subTitle}>{subTitle}</h3> */}
              <h1 className={styles.title}>{title}</h1>
              {/*  {button && <button className={styles.button}>{button}</button>} */}
            </div>
          </div>
        )}
        {headerType === "infostay" && (
          <div className={styles.homeMainContainer}>
            <div className={styles.homeContent}>
              {/*  <img src={logoHomePage} alt="Logo" className={styles.logo} /> */}
              {/* <h3 className={styles.subTitle}>{subTitle}</h3> */}
              <h1 className={styles.title}>{title}</h1>
              {/*  {button && <button className={styles.button}>{button}</button>} */}
            </div>
          </div>
        )}
        {headerType === "contact" && (
          <div className={styles.homeMainContainer}>
            <div className={styles.homeContent}>
              {/*  <img src={logoHomePage} alt="Logo" className={styles.logo} /> */}
              {/* <h3 className={styles.subTitle}>{subTitle}</h3> */}
              <h1 className={styles.title}>{title}</h1>
              {/*  {button && <button className={styles.button}>{button}</button>} */}
            </div>
          </div>
        )}
        {headerType === "activity" && (
          <div className={styles.homeMainContainer}>
            <div className={styles.homeContent}>
              {/*  <img src={logoHomePage} alt="Logo" className={styles.logo} /> */}
              {/* <h3 className={styles.subTitle}>{subTitle}</h3> */}
              <h1 className={styles.title}>{title}</h1>
              {/*  {button && <button className={styles.button}>{button}</button>} */}
            </div>
          </div>
        )}
        {headerType === "myList" && (
          <div className={styles.homeMainContainer}>
            <div className={styles.homeContent}>
              {/*  <img src={logoHomePage} alt="Logo" className={styles.logo} /> */}
              {/* <h3 className={styles.subTitle}>{subTitle}</h3> */}
              <h1 className={styles.title}>{title}</h1>
              {/*  {button && <button className={styles.button}>{button}</button>} */}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
