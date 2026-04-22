// Footer — minimal, dark
const Footer = () => (
    <footer style={{ background: "hsl(240 10% 3%)", borderTop: "1px solid hsla(0,0%,100%,.06)", padding: "56px 24px 32px", color: "hsl(240 5% 65%)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
            <div>
                <img src="../../assets/logo-white.png" alt="Milen.ia" style={{ height: 40, marginBottom: 14, display: "block" }} />
                <p style={{ fontSize: 13, lineHeight: 1.6, maxWidth: 320, margin: 0 }}>IA acessível para PMEs. Agentes treinados, integrados e prontos em dias.</p>
            </div>
            {[
                { title: "Produto", items: ["Mila", "Agentes", "Integrações", "Preços"] },
                { title: "Empresa", items: ["Sobre", "Casos", "Blog", "Carreiras"] },
                { title: "Legal", items: ["LGPD", "Privacidade", "Termos", "Segurança"] },
            ].map(col => (
                <div key={col.title}>
                    <div style={{ color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 12 }}>{col.title}</div>
                    {col.items.map(i => <div key={i} style={{ fontSize: 13, marginBottom: 7 }}>{i}</div>)}
                </div>
            ))}
        </div>
        <div style={{ maxWidth: 1160, margin: "32px auto 0", paddingTop: 20, borderTop: "1px solid hsla(0,0%,100%,.06)", display: "flex", justifyContent: "space-between", fontSize: 12 }}>
            <span>© 2026 Milen.ia</span>
            <span>Feito no Brasil 🇧🇷</span>
        </div>
    </footer>
);
window.Footer = Footer;
