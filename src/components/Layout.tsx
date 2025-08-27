import NavigationMenu from "./NavigationMenu/NavigationMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      <NavigationMenu />
      {children}
    </div>
  );
}

