import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Dashboard",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Adicionar Produto",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Conta",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Perfil",
        path: "/profile",
      },
      {
        title: "Editar Perfil",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Reportar Erro",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;
