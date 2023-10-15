import CustomersIcon from "../assets/icons/customers"
import DashboardIcon from "../assets/icons/dashboard"
import HelpIcon from "../assets/icons/help"
import LogoutIcon from "../assets/icons/logout"
import ProductIcon from "../assets/icons/products"
import ReportIcon from "../assets/icons/report"
import SettingsIcon from "../assets/icons/settings"

const iconType = (title) => {
  switch (title?.toLowerCase()) {
    case "dashboard":
      return <DashboardIcon />
    case "settings":
      return <SettingsIcon />
    case "help":
      return <HelpIcon />
    case "logout":
      return <LogoutIcon />
    case "report":
      return <ReportIcon />
    case "products":
      return <ProductIcon />
    case "customers":
      return <CustomersIcon />
    default:
      return <DashboardIcon />
  }
}

export default iconType