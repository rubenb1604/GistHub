import Image from "next/image";
import Header from "@/app/Components/WebAssets/Header";
import Sidebar from "@/app/Components/WebAssets/Sidebar";

export default function Home() {
  return (
    <div >
        <Header />
        <div>
            <Sidebar />
            <main>

            </main>
        </div>
    </div>
  );
}
