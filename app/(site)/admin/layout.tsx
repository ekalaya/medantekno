export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // This layout removes Navbar/Footer by not including them
    // The root layout still wraps this, but we override the body content
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            backgroundColor: '#fff'
        }}>
            {children}
        </div>
    );
}
