// ChatWidget — floating Mila bubble, opens into a conversation panel
const ChatWidget = () => {
    const [open, setOpen] = React.useState(true);
    const [msgs, setMsgs] = React.useState([
        { from: "bot", text: "Oi! Sou a Mila. Como posso ajudar? 💜" },
    ]);
    const [draft, setDraft] = React.useState("");
    const send = () => {
        if (!draft.trim()) return;
        setMsgs(m => [...m, { from: "me", text: draft }]);
        setDraft("");
        setTimeout(() => setMsgs(m => [...m, { from: "bot", text: "Ótimo! Vou te conectar com um especialista agora." }]), 900);
    };
    return (
        <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 100 }}>
            {open && (
                <div style={{
                    width: 340, height: 460, marginBottom: 12,
                    background: "hsla(240,10%,6%,.85)", backdropFilter: "blur(20px)",
                    border: "1px solid hsla(0,0%,100%,.08)", borderRadius: 20,
                    boxShadow: "0 20px 60px -10px rgba(255,0,128,.35), 0 0 0 1px hsla(0,0%,100%,.04)",
                    display: "flex", flexDirection: "column", overflow: "hidden",
                }}>
                    <div style={{ padding: "14px 16px", borderBottom: "1px solid hsla(0,0%,100%,.06)", display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 34, height: 34, borderRadius: 999, background: "linear-gradient(135deg,#FF0099,#6B46C1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, boxShadow: "0 0 20px rgba(255,0,153,.5)" }}>M</div>
                        <div style={{ flex: 1 }}>
                            <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>Mila</div>
                            <div style={{ fontSize: 11, color: "#4ADE80", display: "flex", alignItems: "center", gap: 5 }}>
                                <span style={{ width: 6, height: 6, background: "#4ADE80", borderRadius: 999, boxShadow: "0 0 8px #4ADE80" }}></span>
                                online agora
                            </div>
                        </div>
                        <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#9aa", cursor: "pointer" }}><Icon name="close" size={18} /></button>
                    </div>
                    <div style={{ flex: 1, padding: 14, overflowY: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
                        {msgs.map((m, i) => (
                            <div key={i} style={{
                                alignSelf: m.from === "me" ? "flex-end" : "flex-start",
                                maxWidth: "80%",
                                background: m.from === "me" ? "hsl(330 100% 55%)" : "hsl(240 6% 13%)",
                                color: "#fff",
                                padding: "9px 13px",
                                borderRadius: m.from === "me" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                                fontSize: 13,
                                boxShadow: m.from === "me" ? "0 6px 16px -6px rgba(255,0,128,.5)" : "none",
                            }}>{m.text}</div>
                        ))}
                    </div>
                    <div style={{ padding: 10, borderTop: "1px solid hsla(0,0%,100%,.06)", display: "flex", gap: 8 }}>
                        <input
                            className="field"
                            value={draft}
                            onChange={e => setDraft(e.target.value)}
                            onKeyDown={e => e.key === "Enter" && send()}
                            placeholder="Escreva uma mensagem..."
                            style={{ background: "hsl(240 6% 12%)", borderColor: "hsla(0,0%,100%,.08)", color: "#fff", height: 38 }}
                        />
                        <button className="btn btn-default" onClick={send} style={{ height: 38, width: 38, padding: 0 }}>
                            <Icon name="send" size={16} />
                        </button>
                    </div>
                </div>
            )}
            <button
                onClick={() => setOpen(o => !o)}
                className="agente-glow-pink"
                style={{
                    width: 60, height: 60, borderRadius: 999,
                    background: "linear-gradient(135deg,#FF0099,#6B46C1)",
                    border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff",
                }}>
                {open ? <Icon name="close" size={22} /> : <Icon name="message" size={22} />}
            </button>
        </div>
    );
};
window.ChatWidget = ChatWidget;
