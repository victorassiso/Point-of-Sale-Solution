import logo from "../../assets/stockwise-no-background.svg";
import profile from "../../assets/profile.png";
import "./SideBar";

export function SideBar() {
  return (
    <aside>
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="">
            <i className="bx bx-grid-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bx-user"></i>
            <span>Usuário</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bx-pie-chart-alt-2"></i>
            <span>Análises</span>
          </a>
        </li>
        <li>
          <a href="http://localhost:5173/products">
            <i className="bx bx-purchase-tag"></i>
            <span>Produtos</span>
          </a>
        </li>
        <li>
          <a href="http://localhost:5173/inventories">
            <i className="bx bx-package"></i>
            <span>Inventário</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bx-store-alt"></i>
            <span>Lojas</span>
          </a>
        </li>
        <li>
          <a href="http://localhost:5173/checkout">
            <i className="bx bxs-barcode"></i>
            <span>Caixa</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="bx bx-cog"></i>
            <span>Configurações</span>
          </a>
        </li>
      </ul>
      <div>
        <div>
          <div>
            {/* <img src={profile} alt="User profile picture" /> */}
            <div>
              <div>Victor Assis</div>
              <div>Admin</div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </div>
        </div>
      </div>
    </aside>
  );
}
