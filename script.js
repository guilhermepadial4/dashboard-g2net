// ════════════════════════════════════════════════════
// DADOS REAIS — JULHO (G2NET - 250 registros)
// ════════════════════════════════════════════════════
const JUL = [
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Manuntenção", fin: "SIM", h: 1, ana: "Hamilton/Leonardo" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Hamilton" },
  { cat: "Financeiro", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 0.25, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 2, ana: "Leonardo" },
  { cat: "Financeiro", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "Hardware", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Software", fin: "NÃO", h: 0.5, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "Datacenter", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "No-IP", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 1.5, ana: "Leonardo" },
  { cat: "Backup", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Datacenter", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Hamilton" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Sharepoint", fin: "SIM", h: 1, ana: "Guilherme Melo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Windows", fin: "SIM", h: 2, ana: "Guilherme Melo" },
  { cat: "Datacenter", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "UOL HOST", fin: "NÃO", h: 0.5, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 4, ana: "Leonardo" },
  { cat: "SMTP", fin: "SIM", h: 1.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Locaweb", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Câmera", fin: "SIM", h: 2, ana: "Leonardo/Luiz" },
  { cat: "Visita", fin: "SIM", h: 4, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Equipamento", fin: "SIM", h: 1.5, ana: "Guilherme Melo" },
  { cat: "Software", fin: "SIM", h: 1.5, ana: "Guilherme Melo" },
  { cat: "Equipamento", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Guilherme Padial" },
  { cat: "MS365", fin: "SIM", h: 1, ana: "Guilherme Padial" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Guilherme Padial" },
  { cat: "Periférico", fin: "SIM", h: 1, ana: "Guilherme Padial" },
  { cat: "Software", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "Infra", fin: "NÃO", h: 0.5, ana: "Leonardo" },
  { cat: "Software", fin: "NÃO", h: 0.5, ana: "Guilherme Padial" },
  { cat: "Visita", fin: "SIM", h: 1.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "No-IP", fin: "SIM", h: 0.5, ana: "Guilherme Padial" },
  { cat: "Equipamento", fin: "SIM", h: 1.5, ana: "Luiz" },
  { cat: "Equipamento", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "GI", fin: "SIM", h: 1, ana: "Hamilton" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 3, ana: "Guilherme Melo" },
  { cat: "Visita", fin: "SIM", h: 4, ana: "Leilton" },
  { cat: "Windows", fin: "SIM", h: 3, ana: "Luiz" },
  { cat: "Visita", fin: "SIM", h: 3, ana: "Leonardo" },
  { cat: "Financeiro", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Hamilton" },
  { cat: "Equipamento", fin: "SIM", h: 1, ana: "Guilherme Padial" },
  { cat: "Equipamento", fin: "SIM", h: 0.5, ana: "Guilherme Padial" },
  { cat: "GI", fin: "SIM", h: 3, ana: "Leonardo" },
  { cat: "Equipamento", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "Equipamento", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Câmera", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "GI", fin: "SIM", h: 3, ana: "Hamilton" },
  { cat: "Periférico", fin: "SIM", h: 0.5, ana: "Luiz/Guilherme Padial" },
  { cat: "GI", fin: "SIM", h: 3, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 1.5, ana: "Leonardo" },
  { cat: "Reagendamento", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "Equipamento", fin: "SIM", h: 1, ana: "Guilherme Padial" },
  { cat: "Equipamento", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  {
    cat: "Hardware",
    fin: "SIM",
    h: 4.5,
    ana: "Leonardo/Luiz/Guilherme Padial",
  },
  { cat: "Windows", fin: "SIM", h: 4, ana: "Leonardo" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Backup", fin: "SIM", h: 2, ana: "Luiz" },
  { cat: "Locaweb", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "Infra", fin: "SIM", h: 5, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 1.5, ana: "Leonardo/Luiz" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Visita", fin: "SIM", h: 1.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Guilherme Padial" },
  { cat: "MS365", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "Hardware", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Migração", fin: "SIM", h: 2, ana: "Leilton" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Guilherme Padial" },
  { cat: "Software", fin: "SIM", h: 1, ana: "Hamilton" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "UOL HOST", fin: "SIM", h: 8, ana: "Leonardo" },
  { cat: "M365", fin: "SIM", h: 1, ana: "Leilton" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 4, ana: "Luiz/Guilherme Melo" },
  { cat: "Backup", fin: "SIM", h: 2, ana: "Luiz/Hamilton/Leonardo" },
  { cat: "UOL HOST", fin: "NÃO", h: 8, ana: "Leonardo" },
  { cat: "No-IP", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 1.5, ana: "Luiz" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "LocalWeb", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 4, ana: "Luiz/Guilherme melo" },
  { cat: "Infra", fin: "SIM", h: 1.5, ana: "Luiz/Leonardo" },
  { cat: "Infra", fin: "SIM", h: 2, ana: "Luiz" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "UOL HOST", fin: "SIM", h: 7, ana: "Leonardo/Hamilton" },
  { cat: "Calendario/localweb", fin: "SIM", h: 2.5, ana: "Guilherme Melo" },
  { cat: "Software", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "Visita", fin: "SIM", h: 3, ana: "Leonardo" },
  { cat: "SharePoint", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Netcontabil", fin: "SIM", h: 1.5, ana: "Leonardo/Hamilton" },
  { cat: "Periférico", SIM: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Hamilton" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Hardware", fin: "SIM", h: 2, ana: "Luiz/Guilherme Melo/Leonardo" },
  { cat: "LocalWeb", fin: "SIM", h: 3, ana: "Hamilton" },
  { cat: "Exchange", fin: "SIM", h: 1, ana: "Guilherme Melo" },
  { cat: "Infra", fin: "SIM", h: 3, ana: "Luiz/Leonardo" },
  { cat: "GI", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Hardware", fin: "SIM", h: 1.5, ana: "Luiz" },
  { cat: "Visita", fin: "SIM", h: 3.5, ana: "Leonardo" },
  { cat: "Periférico", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Migração", fin: "SIM", h: 6, ana: "Equipe G2" },
  { cat: "Migração", fin: "SIM", h: 3, ana: "Equipe G2" },
  { cat: "Migração", fin: "SIM", h: 2, ana: "Equipe G2" },
  { cat: "No-IP", fin: "SIM", h: 0.5, ana: "Hamilton" },
  { cat: "No-IP", fin: "SIM", h: 0.5, ana: "Hamilton" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Migração", fin: "SIM", h: 8, ana: "Equipe G2" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "Windows", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 2, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.25, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "Câmera", fin: "SIM", h: 2, ana: "Luiz/Leonardo" },
  { cat: "Financeiro", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "Provisionamento de Usuário", fin: "NÃO", h: 1, ana: "Leonardo" },
  { cat: "Infra", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Guilherme Padial" },
  { cat: "Câmera", fin: "SIM", h: 1, ana: "Leonardo/Luiz" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Leonardo/Hamilton" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.25, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 3, ana: "Leonardo/Melo" },
  { cat: "MS365", fin: "SIM", h: 1, ana: "Luiz/Leonardo" },
  { cat: "No-IP", fin: "SIM", h: 0.5, ana: "Hamilton" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Checklist", fin: "SIM", h: 0.25, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Zoho", fin: "SIM", h: 1.5, ana: "Guilherme Padial" },
  { cat: "MS365", fin: "SIM", h: 2, ana: "Luiz" },
  { cat: "Antivirus", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 1, ana: "Guilherme Melo" },
  { cat: "Infra", fin: "SIM", h: 3, ana: "Guilherme Melo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 1.5, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "GI", fin: "SIM", h: 1, ana: "Leonardo/Luiz" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "Checklist", fin: "SIM", h: 0.25, ana: "Guilherme Melo" },
  { cat: "GI", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Periférico", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "Software", fin: "SIM", h: 2, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Infra", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Manuntenção", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "No-IP", fin: "SIM", h: 0.25, ana: "Hamilton" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Zoho", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "locaweb", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Backup", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "locaweb", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "MS365", fin: "SIM", h: 1.5, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 1.5, ana: "Guilherme Melo" },
  { cat: "Infra", fin: "SIM", h: 1, ana: "Leonardo/Luiz" },
  { cat: "No-IP", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Hardware", fin: "NÃO", h: 2, ana: "Leonardo/Luiz" },
  { cat: "MS365", fin: "SIM", h: 0.25, ana: "Luiz" },
  { cat: "Gi", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "GI", fin: "SIM", h: 0.25, ana: "Luiz" },
  { cat: "Infra", fin: "SIM", h: 0.75, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Guilherme Padial" },
  { cat: "Checklist", fin: "SIM", h: 0.25, ana: "Guilherme Melo" },
  { cat: "Financeiro", fin: "SIM", h: 0.25, ana: "Guilherme Padial" },
  { cat: "GI", fin: "SIM", h: 0.25, ana: "Guilherme Melo" },
  { cat: "GI", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Periférico", fin: "SIM", h: 0.25, ana: "Luiz" },
  { cat: "Periférico", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "MS365", fin: "NÃO", h: 0, ana: "Luiz" },
  { cat: "Locaweb", fin: "SIM", h: 0.25, ana: "Guilherme Melo" },
  { cat: "Checklist", fin: "SIM", h: 0.25, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Periférico", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "GI", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Backup", fin: "SIM", h: 1, ana: "Leonardo / Luiz" },
  { cat: "Backup", fin: "SIM", h: 2, ana: "Leonardo / Luiz" },
  { cat: "Sedex", fin: "SIM", h: 1.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.25, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Infra", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Impressora", fin: "SIM", h: 0.5, ana: "Guilherme Padial" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Guilherme Padial" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 0.25, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 0.25, ana: "Luiz" },
  { cat: "LocalWeb", fin: "SIM", h: 1.5, ana: "Leonardo" },
  { cat: "LocalWeb", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Windows", fin: "NÃO", h: 1, ana: "Guilherme Melo" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Guilherme Padial" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "MS365", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Hardware", fin: "SIM", h: 1.5, ana: "Luiz" },
  { cat: "Hardware", fin: "SIM", h: 1, ana: "Leonardo" },
  { cat: "Software", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Hardware", fin: "SIM", h: 0.5, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 0.25, ana: "Guilherme Melo" },
  { cat: "Windows", fin: "SIM", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Acesso remoto", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "GI", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Checklist", fin: "SIM", h: 1, ana: "Luiz" },
  { cat: "Financeiro", fin: "SIM", h: 0.5, ana: "Luiz" },
  { cat: "Equipamento", fin: "SIM", h: 1.5, ana: "Luiz" },
  { cat: "GI", fin: "SIM", h: 0.25, ana: "Leonardo" },
  { cat: "Zoho", fin: "NÃO", h: 0.5, ana: "Guilherme Melo" },
  { cat: "Backup", fin: "SIM", h: 1, ana: "Leonardo/Guilherme Melo" },
];

// ════════════════════════════════════════════════════
// FUNÇÕES AUXILIARES (Modificada para não quebrar nomes)
// ════════════════════════════════════════════════════
const sumH = (a) => +a.reduce((s, r) => s + (r.h || 0), 0).toFixed(1);
const countFin = (a, v) =>
  a.filter((r) => r.fin && r.fin.toUpperCase() === v.toUpperCase()).length;

function catMap(arr) {
  const m = {};
  arr.forEach((r) => {
    if (!r.cat) return;
    const category = r.cat.trim();
    m[category] = (m[category] || 0) + 1;
  });
  return m;
}

function anaMap(arr) {
  const m = {};
  arr.forEach((r) => {
    if (!r.ana) return;
    // Quebra nas barras (/), hifens (-) ou no " e " com espaços em volta
    const analysts = r.ana
      .split(/\s*[\/-]\s*|\s+e\s+/i)
      .map((name) => name.trim());
    analysts.forEach((analyst) => {
      if (analyst) m[analyst] = (m[analyst] || 0) + 1;
    });
  });
  return m;
}

function topN(obj, n) {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
}

function topKey(obj) {
  const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  return sorted.length > 0 ? sorted[0][0] : "N/A";
}

// ════════════════════════════════════════════════════
// CÁLCULOS (Apenas para Julho)
// ════════════════════════════════════════════════════
const total = JUL.length;
const julFin = countFin(JUL, "SIM");
const julNF = countFin(JUL, "NÃO");
const taxa = total > 0 ? Math.round((julFin / total) * 100) : 0;
const julH = sumH(JUL);

const allCM = catMap(JUL);
const allAM = anaMap(JUL);

const top10 = topN(allCM, 10);
const top6keys = topN(allCM, 6).map((e) => e[0]);

// ════════════════════════════════════════════════════
// PREENCHER KPIs
// ════════════════════════════════════════════════════
document.getElementById("kTotal").textContent = total;
document.getElementById("kTaxa").textContent = taxa + "%";
document.getElementById("kHoras").textContent = julH + "h";
document.getElementById("kMes").textContent = topKey(allAM);
document.getElementById("kMesSub").textContent =
  allAM[topKey(allAM)] + " chamados";
document.getElementById("kCat").textContent = top10[0] ? top10[0][0] : "—";
document.getElementById("kCatSub").textContent =
  (top10[0] ? top10[0][1] : 0) + " ocorrências";

// ════════════════════════════════════════════════════
// PREENCHER CARD MENSAL (Apenas Julho)
// ════════════════════════════════════════════════════
document.getElementById("jul1").textContent = total;
document.getElementById("jul2").textContent = julFin;
document.getElementById("jul3").textContent = julNF;
document.getElementById("jul4").textContent = julH + "h";
document.getElementById("jul5").textContent = topKey(allAM);
document.getElementById("jul6").textContent = topKey(allCM);
document.getElementById("jul7").textContent = "22 dias úteis"; // Mude caso seja outro valor

// ════════════════════════════════════════════════════
// CHART.JS — CONFIGURAÇÕES GLOBAIS
// ════════════════════════════════════════════════════
Chart.defaults.color = "#64748b";
Chart.defaults.font.family = "'Segoe UI', system-ui, sans-serif";
Chart.defaults.font.size = 12;

const grid = "rgba(0,0,0,0.05)";
const julC = "#00aeef"; // Cor de destaque do dashboard (Ciano da G2NET)

// ─── VOLUME POR MÊS ──────────────────────────────
new Chart(document.getElementById("cVolume"), {
  type: "bar",
  data: {
    labels: ["Julho"],
    datasets: [
      {
        label: "Chamados",
        data: [total],
        backgroundColor: [julC],
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: grid } },
      y: { grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── HORAS POR MÊS ───────────────────────────────
new Chart(document.getElementById("cHoras"), {
  type: "bar",
  data: {
    labels: ["Julho"],
    datasets: [
      {
        label: "Horas",
        data: [julH],
        backgroundColor: ["rgba(0,174,239,.85)"],
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: grid } },
      y: { grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── TOP 10 CATEGORIAS ───────────────────────────
new Chart(document.getElementById("cCats"), {
  type: "bar",
  data: {
    labels: top10.map((e) => e[0]),
    datasets: [
      {
        label: "Chamados",
        data: top10.map((e) => e[1]),
        backgroundColor: [
          "#0284c7",
          "#0ea5e9",
          "#38bdf8",
          "#7dd3fc",
          "#1e3a8a",
          "#2563eb",
          "#3b82f6",
          "#60a5fa",
          "#93c5fd",
          "#bfdbfe",
        ],
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
  options: {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: grid }, beginAtZero: true },
      y: { grid: { color: grid }, ticks: { font: { size: 11 } } },
    },
  },
});

// ─── ANALISTAS — BARRAS CUSTOMIZADAS ─────────────
const anaDiv = document.getElementById("anaDiv");
const anaMax = Math.max(...Object.values(allAM));
const anaColors = [
  "#0284c7",
  "#0ea5e9",
  "#38bdf8",
  "#00aeef",
  "#1e3a8a",
  "#2563eb",
];
let anaIdx = 0;

anaDiv.innerHTML = "";
Object.entries(allAM)
  .sort((a, b) => b[1] - a[1])
  .forEach(([nome, qtd]) => {
    const pct = Math.round((qtd / anaMax) * 100);
    const cor = anaColors[anaIdx % anaColors.length];
    anaIdx++;
    anaDiv.innerHTML += `
    <div class="ana-row">
      <div class="ana-name">${nome}</div>
      <div class="ana-track"><div class="ana-fill" style="width:${pct}%;background:${cor}">${qtd}</div></div>
      <div class="ana-count" style="color:${cor}">${qtd}</div>
    </div>`;
  });

// ─── STATUS POR MÊS ──────────────────────────────
new Chart(document.getElementById("cStatus"), {
  type: "bar",
  data: {
    labels: ["Julho"],
    datasets: [
      {
        label: "Finalizados",
        data: [julFin],
        backgroundColor: "#0ea5e9",
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: "Não Finalizados",
        data: [julNF],
        backgroundColor: "#ef4444",
        borderRadius: 6,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, labels: { color: "#64748b", boxWidth: 12 } },
    },
    scales: {
      x: { stacked: true, grid: { color: grid } },
      y: { stacked: true, grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── PIZZA — TOP 6 CATEGORIAS ────────────────────
const top6data = top6keys.map((k) => allCM[k] || 0);
const pizzaColors = [
  "#0284c7",
  "#0ea5e9",
  "#38bdf8",
  "#7dd3fc",
  "#1e3a8a",
  "#3b82f6",
];

new Chart(document.getElementById("cPizza"), {
  type: "doughnut",
  data: {
    labels: top6keys,
    datasets: [
      {
        data: top6data,
        backgroundColor: pizzaColors,
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: { color: "#64748b", boxWidth: 12, font: { size: 11 } },
      },
    },
    cutout: "60%",
  },
});

// ─── COMPARATIVO MENSAL TOP 6 ────────────────────
new Chart(document.getElementById("cCompare"), {
  type: "bar",
  data: {
    labels: top6keys,
    datasets: [
      {
        label: "Julho",
        data: top6keys.map((k) => allCM[k] || 0),
        backgroundColor: julC,
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, labels: { color: "#64748b", boxWidth: 12 } },
    },
    scales: {
      x: { grid: { color: grid }, ticks: { font: { size: 11 } } },
      y: { grid: { color: grid }, beginAtZero: true },
    },
  },
});

// ─── TOP 10 SOLICITANTES — BARRAS CUSTOMIZADAS ─────────────
const topUsersData = [
  ["Rogério (Pimentel)", 17],
  ["Juliana (Acreditando)", 9],
  ["Livia Ohata (Pimentel)", 7],
  ["Thamires (Acreditando)", 7],
  ["Leonardo Silva (Martinelli)", 7],
  ["Williams (Gforma)", 4],
  ["Kitlivre (Kitlivre)", 4],
  ["Renata (Gforma)", 4],
  ["Maria Claudia (Pimentel)", 4],
  ["Michele (OCP)", 4],
];

const topUsersDiv = document.getElementById("topUsersList");
if (topUsersDiv) {
  const userMax = topUsersData[0][1];
  const userColor = julC;

  topUsersDiv.innerHTML = "";
  topUsersData.forEach(([nome, qtd], index) => {
    const pct = Math.round((qtd / userMax) * 100);
    topUsersDiv.innerHTML += `
    <div class="ana-row">
      <div class="ana-name" style="width: 175px; font-weight: ${index < 3 ? "700" : "normal"}; color: ${index < 3 ? "var(--text)" : "var(--muted)"};">
        ${index + 1}º ${nome}
      </div>
      <div class="ana-track">
        <div class="ana-fill" style="width:${pct}%;background:${userColor}">${qtd}</div>
      </div>
      <div class="ana-count" style="color:${userColor}">${qtd}</div>
    </div>`;
  });
}

// ─── TABELA: RANKING DE CATEGORIAS ───────────────
(function buildTable() {
  const allCats = Object.keys(allCM);

  const rows = allCats
    .map((cat) => ({
      cat,
      jul: allCM[cat] || 0,
      tot: allCM[cat] || 0,
    }))
    .sort((a, b) => b.tot - a.tot); // Todas as categorias

  const maxTot = rows.length > 0 ? rows[0].tot : 1;
  const tbl = document.getElementById("catTbl");

  tbl.innerHTML = `
    <thead>
      <tr>
        <th>#</th>
        <th>Categoria</th>
        <th>Julho</th>
        <th>Total</th>
        <th>Distribuição</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map(
          (r, i) => `
        <tr>
          <td style="color:var(--muted);font-weight:800">${i + 1}</td>
          <td style="font-weight:600">${r.cat}</td>
          <td>${r.jul > 0 ? `<span class="pill jul">${r.jul}</span>` : "—"}</td>
          <td style="font-weight:800;color:var(--text)">${r.tot}</td>
          <td>
            <div style="background:var(--card2);border-radius:4px;height:6px;width:120px;overflow:hidden;display:inline-block;vertical-align:middle">
              <div style="height:100%;width:${Math.round((r.tot / maxTot) * 100)}%;background:var(--accent);border-radius:4px"></div>
            </div>
          </td>
        </tr>`,
        )
        .join("")}
    </tbody>`;
})();
