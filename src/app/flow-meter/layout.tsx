import ThemeProvider from '@/features/flow-meter/components/layout/ThemeProvider';
import Sidebar from '@/features/flow-meter/components/layout/Sidebar';
import TopNavbar from '@/features/flow-meter/components/layout/TopNavbar';

export const metadata = {
  title: 'Flow Meter Dashboard | EMS',
  description: 'Industrial water flow monitoring system',
};

export default function FlowMeterLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="flex h-screen overflow-hidden fm-bg">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">
          <TopNavbar />
          <main className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 pb-20 md:pb-6">
            {children}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
}
