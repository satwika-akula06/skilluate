import ThemeProvider from "@/app/providers/ThemeProvider";
import AppRoutes from "@/app/routes";

export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}
