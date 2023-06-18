import "./Sidebar.css";
import profile from "../../assets/profile.png";
import logo from "../../assets/logo-no-background.svg";

export function Sidebar() {
  return (
    <aside>
      <div className="logo.content">
        <div className="logo">
          <img src={logo} alt="Logo StockWise" />
        </div>
        {/* <i className="bx bx-menu" id="btn"></i>
        <span>Menu</span> */}
      </div>
      <ul className="nav_list">
        <li>
          <a href="">
            <i className="bx bx-grid-alt"></i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bx-user"></i>
            <span className="links_name">Usuário</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span className="links_name">Análises</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bx-purchase-tag"></i>
            <span className="links_name">Produtos</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bx-package"></i>
            <span className="links_name">Inventário</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bx-store-alt"></i>
            <span className="links_name">Lojas</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bxs-barcode"></i>
            <span className="links_name">Caixa</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bx-cog"></i>
            <span className="links_name">Configurações</span>
          </a>
        </li>
      </ul>
      <div className="profile_content">
        <img src={profile} alt="User profile picture" />
        <div className="name_job">
          <div className="name">Victor Assis</div>
          <div className="job">Admin</div>
        </div>
        <i className="bx bx-log-out" id="log_out"></i>
      </div>
    </aside>
  );
}
