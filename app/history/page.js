import Headercopy from "@/components/Headercopy";
import Footer from "@/components/Footer";
import HistoryPage from "./HistoryPage";

export default function History() {
  return (
    <div className="pt-[23%] sm:pt-[23%] md:pt-[5%] overflow-x-hidden">
      <Headercopy />
      <HistoryPage />
      <Footer />
    </div>
  );
}
