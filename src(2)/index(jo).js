import { createRoot } from "react-dom/client";
import Menu from "./MenuKota/Menu";

const abc = document.getElementById("menukota");
const menukota = createRoot(abc);

menukota.render(<Menu />);
