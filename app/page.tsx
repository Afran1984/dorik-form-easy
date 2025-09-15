import BuilderCanvas from "@/components/BuilderCanvas";
import FieldPalette from "@/components/FieldPalette";
import Topbar from "@/components/Topbar";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation Bar */}
      <Topbar />

      <div className="p-6">
        {/* Left Sidebar / Field Palette */}
        <FieldPalette/>
      </div>
      <div>
        <BuilderCanvas/>
      </div>
    </div>
  );
}
