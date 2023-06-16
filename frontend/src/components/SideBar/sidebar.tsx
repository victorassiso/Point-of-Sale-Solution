import styles from "./styles.module.css";
import profile from "../../assets/profile.png";
import logo from "../../assets/stockwise-1.svg";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo_content}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo StockWise" />
        </div>
        {/* <i className="bx bx-menu" id="btn"></i> */}
      </div>
      <ul className={styles.nav_list}>
        <li>
          <a href="">
            <i className="bx bx-grid-alt"></i>
            <span className={styles.links_name}>Dashboard</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="">
            <i className="bx bx-user"></i>
            <span className={styles.links_name}>Usuário</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className={styles.links_name}>Análises</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="">
            <i className="bx bx-purchase-tag"></i>
            <span className={styles.links_name}>Produtos</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="">
            <i className="bx bx-package"></i>
            <span className={styles.links_name}>Inventário</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="">
            <i className="bx bx-store-alt"></i>
            <span className={styles.links_name}>Lojas</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="">
            <i className="bx bxs-barcode"></i>
            <span className={styles.links_name}>Caixa</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
        <li>
          <a href="">
            <i className="bx bx-cog"></i>
            <span className={styles.links_name}>Configurações</span>
          </a>
          {/* <span className="tooltip">Dashboard</span> */}
        </li>
      </ul>
      <div className={styles.profile_content}>
        <div className={styles.profile}>
          <div className={styles.profile_details}>
            <img src={profile} alt="User profile picture" />
            <div className={styles.name_job}>
              <div className={styles.name}>Victor Assis</div>
              <div className={styles.role}>Admin</div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </div>
        </div>
      </div>
    </aside>
  );
}
