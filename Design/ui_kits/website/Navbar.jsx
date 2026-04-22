// Navbar — dark, glass, pink "Falar com especialista" CTA
const Navbar = ({ active = "home" }) => {
    const items = [
        { id: "home", label: "Início" },
        { id: "solucoes", label: "Soluções" },
        { id: "agentes", label: "Agentes" },
        { id: "casos", label: "Casos" },
        { id: "precos", label: "Preços" },
    ];
    return (
        <nav style={{
            position: "sticky", top: 0, zIndex: 40,
            background: "hsla(240,10%,5%,.6)",
            backdropFilter: "blur(16px) saturate(140%)",
            borderBottom: "1px solid hsla(0,0%,100%,.06)",
        }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "14px 24px", display: "flex", alignItems: "center", gap: 32 }}>
                <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                    <img src="../../assets/logo-white.png" alt="Milen.ia" style={{ height: 34, display: "block" }} />
                </a>
                <div style={{ display: "flex", gap: 6, flex: 1 }}>
                    {items.map(it => (
                        <a key={it.id} href="#" style={{
                            padding: "8px 14px", borderRadius: 999,
                            fontSize: 14, fontWeight: 500,
                            color: active === it.id ? "#fff" : "hsl(240 5% 70%)",
                            background: active === it.id ? "hsla(0,0%,100%,.06)" : "transparent",
                            textDecoration: "none",
                        }}>{it.label}</a>
                    ))}
                </div>
                <button className="btn btn-ghost" style={{ color: "#fff" }}>Entrar</button>
                <button className="btn btn-default">Falar com Mila</button>
            </div>
        </nav>
    );
};
window.Navbar = Navbar;
