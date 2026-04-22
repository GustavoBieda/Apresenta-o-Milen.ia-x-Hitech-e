// Hero — mesh backdrop + badge + gradient headline + dual CTA
const Hero = () => (
    <section className="hero-backdrop animate-hero-bg" style={{ padding: "80px 24px 120px", textAlign: "center", overflow: "hidden", position: "relative" }}>
        <div style={{ maxWidth: 880, margin: "0 auto", position: "relative", zIndex: 2 }}>
            <div className="agente-badge animate-fade-up" style={{ marginBottom: 22 }}>
                <Icon name="sparkles" size={14} /> Novo · Agentes Milen.ia
            </div>
            <h1 className="animate-fade-up" style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.02,
                margin: 0, color: "#fff",
            }}>
                IA <span className="hero-gradient-text">acessível</span><br />
                para PMEs.
            </h1>
            <p className="animate-fade-up" style={{
                fontSize: 18, lineHeight: 1.55, color: "hsl(240 5% 75%)",
                maxWidth: 620, margin: "22px auto 0",
            }}>
                Agentes de IA treinados para atender, vender e automatizar o dia a dia do seu negócio —
                sem fricção, sem jargão, em poucos dias.
            </p>
            <div className="animate-fade-up" style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn-default btn-lg">
                    Começar com a Mila <Icon name="arrowRight" size={16} />
                </button>
                <button className="btn btn-outline btn-lg" style={{ color: "#fff", borderColor: "hsla(0,0%,100%,.15)", background: "hsla(0,0%,100%,.02)" }}>
                    <Icon name="calendar" size={16} /> Agendar demo
                </button>
            </div>
            <div style={{ marginTop: 38, display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap", color: "hsl(240 5% 60%)", fontSize: 13 }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="check" size={14} /> Setup em 3 dias</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="check" size={14} /> LGPD nativo</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icon name="check" size={14} /> Sem código</span>
            </div>
        </div>
    </section>
);
window.Hero = Hero;
