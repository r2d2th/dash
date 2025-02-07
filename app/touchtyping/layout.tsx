import SideNavTouchTyping from '@/app/ui/TouchTyping/side-nav-touch-typing';
import styles from './touchtyping.module.css'; 
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles['kb-container']}>
    <div className="kb-container flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNavTouchTyping />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
    
    </div>
  );
}
