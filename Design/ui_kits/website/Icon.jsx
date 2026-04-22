// Tiny icon set (inline SVG) — stroke-based, 1.5 weight, matches agente-theme aesthetic.
// Copied/derived from Lucide (CDN fallback documented in ICONOGRAPHY).
const Icon = ({ name, size = 20, className = "", style }) => {
    const s = { width: size, height: size, ...style };
    const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", className };
    switch (name) {
        case "sparkles": return <svg {...common}><path d="M12 3l1.8 4.6L18 9.4l-4.2 1.8L12 16l-1.8-4.8L6 9.4l4.2-1.8L12 3z"/><path d="M19 15l.9 2.3L22 18l-2.1.8L19 21l-.9-2.2L16 18l2.1-.7L19 15z"/></svg>;
        case "arrowRight": return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7"/></svg>;
        case "check": return <svg {...common}><path d="M4 12l5 5L20 6"/></svg>;
        case "bot": return <svg {...common}><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 4v3M8 13h.01M16 13h.01M9 17h6"/></svg>;
        case "zap": return <svg {...common}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></svg>;
        case "shield": return <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z"/></svg>;
        case "chart": return <svg {...common}><path d="M4 19V5M4 19h16M8 15V9M12 15v-3M16 15V7"/></svg>;
        case "message": return <svg {...common}><path d="M21 12a8 8 0 0 1-11.5 7L4 20l1-5.5A8 8 0 1 1 21 12z"/></svg>;
        case "send": return <svg {...common}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>;
        case "menu": return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16"/></svg>;
        case "close": return <svg {...common}><path d="M6 6l12 12M18 6l-12 12"/></svg>;
        case "user": return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/></svg>;
        case "calendar": return <svg {...common}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>;
        case "phone": return <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"/></svg>;
        default: return null;
    }
};

window.Icon = Icon;
