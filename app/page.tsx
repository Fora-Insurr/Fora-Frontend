import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import TabNav from "@/components/TabNav";
import StatCards from "@/components/StatCards";
import ActivePolicies from "@/components/ActivePolicies";
import PremiumChart from "@/components/PremiumChart";
import InsuranceProducts from "@/components/InsuranceProducts";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d1117" }}>
      <Sidebar />
      <Topbar />
      <main style={{ marginLeft: "200px", paddingTop: "56px", minHeight: "100vh" }}>
        <div className="px-6 py-5">
          <TabNav />
          <StatCards />
          <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 280px" }}>
            <ActivePolicies />
            <PremiumChart />
          </div>
          <InsuranceProducts />
        </div>
      </main>
    </div>
  );
}
