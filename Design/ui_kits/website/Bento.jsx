// Bento — 6-cell glass grid showcasing agent capabilities
const BentoCell = ({ span = 1, rowSpan = 1, accent = "pink", children, style }) => {
    const glow = {
        pink: "0 0 60px -10px hsla(330,100%,55%,.35)",
        teal: "0 0 60px -10px hsla(168,100%,50%,.35)",
        purple: "0 0 60px -10px hsla(262,83%,60%,.35)",
        cyan: "0 0 60px -10px hsla(188,100%,55%,.3)",
    }[accent];
    return (
        <div style={{
            gridColumn: `span ${span}`,
            gridRow: `span ${rowSpan}`,
            position: "relative",
            padding: 28,
            borderRadius: 20,
            background: "hsla(240,10%,8%,.55)",
            backdropFilter: "blur(14px)",
            border: "1px solid hsla(0,0%,100%,.07)",
            boxShadow: glow,
            color: "#fff",
            overflow: "hidden",
            ...style,
        }}>{children}</div>
    );
};

const Bento = () => (
    <section style={{ padding: "80px 24px", background: "hsl(240 10% 4%)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
                <div className="agente-badge" style={{ marginBottom: 14 }}>Plataforma</div>
                <h2 style={{ fontSize: 48, fontWeight: 800, letterSpacing: "-0.02em", margin: 0, color: "#fff" }}>
                    Um agente para cada <span className="hero-gradient-text">frente</span>.
                </h2>
                <p style={{ fontSize: 17, color: "hsl(240 5% 70%)", maxWidth: 600, margin: "14px auto 0" }}>
                    Atendimento, vendas, suporte, operação. Conecte suas ferramentas e comece hoje.
                </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, minHeight: 520 }}>
                <BentoCell span={2} rowSpan={2} accent="pink">
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, color: "#FF66B3" }}>
                        <Icon name="message" size={18} /> <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>Atendimento</span>
                    </div>
                    <h3 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.01em", margin: 0 }}>Mila atende 24/7</h3>
                    <p style={{ color: "hsl(240 5% 72%)", fontSize: 14, marginTop: 10 }}>WhatsApp, site e e-mail integrados. Responde em segundos, escala pra humano quando precisa.</p>
                    <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 8, maxWidth: 320 }}>
                        <div style={{ alignSelf: "flex-start", background: "hsl(240 6% 14%)", padding: "8px 12px", borderRadius: "14px 14px 14px 3px", fontSize: 12 }}>Oi! Como posso ajudar hoje? 💜</div>
                        <div style={{ alignSelf: "flex-end", background: "hsl(330 100% 55%)", padding: "8px 12px", borderRadius: "14px 14px 3px 14px", fontSize: 12, boxShadow: "0 6px 16px -6px rgba(255,0,128,.6)" }}>Preciso de um orçamento.</div>
                    </div>
                </BentoCell>
                <BentoCell span={2} accent="teal">
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, color: "#00E6B8" }}>
                        <Icon name="zap" size={18} /> <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase" }}>Automação</span>
                    </div>
                    <h3 style={{ fontSize: 22, fontWeight: 700, margin: 0 }}>Fluxos em minutos</h3>
                    <p style={{ color: "hsl(240 5% 72%)", fontSize: 13, marginTop: 8 }}>Conecte CRM, planilha, WhatsApp. Sem código.</p>
                </BentoCell>
                <BentoCell span={1} accent="purple">
                    <div style={{ color: "#A855F7", marginBottom: 10 }}><Icon name="chart" size={20} /></div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>Analytics</h3>
                    <p style={{ color: "hsl(240 5% 72%)", fontSize: 13, marginTop: 6 }}>Conversões e tempo de resposta em tempo real.</p>
                </BentoCell>
                <BentoCell span={1} accent="cyan">
                    <div style={{ color: "#00E0FF", marginBottom: 10 }}><Icon name="shield" size={20} /></div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>LGPD</h3>
                    <p style={{ color: "hsl(240 5% 72%)", fontSize: 13, marginTop: 6 }}>Dados criptografados e hospedados no Brasil.</p>
                </BentoCell>
            </div>
        </div>
    </section>
);
window.Bento = Bento;
