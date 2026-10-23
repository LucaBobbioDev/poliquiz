const AX = [
    ["Economia", "Estado forte", "Livre mercado"],
    ["Autoridade", "Libertário", "Autoritário"],
    ["Cultura", "Progressista", "Conservador"],
    ["Nação", "Globalista", "Nacionalista"],
];

// [eixo, direção (+1 concordar empurra para o 2º polo), texto]
const Q = [
    [0, 1, "O livre mercado distribui recursos melhor do que o governo."],
    [
        0,
        -1,
        "O Estado deve garantir saúde e educação públicas, gratuitas e universais.",
    ],
    [0, 1, "Os impostos devem cair, mesmo que isso reduza serviços públicos."],
    [
        0,
        -1,
        "Grandes fortunas devem ser mais tributadas para reduzir a desigualdade.",
    ],
    [0, 1, "Empresas estatais devem ser privatizadas."],
    [
        0,
        -1,
        "Setores estratégicos, como energia e petróleo, devem ficar sob controle do Estado.",
    ],
    [0, 1, "As regras trabalhistas devem ser flexibilizadas."],
    [0, -1, "O salário mínimo deve subir mesmo que isso encareça a produção."],
    [0, 1, "Programas de transferência de renda tendem a gerar dependência."],
    [0, -1, "Os trabalhadores precisam de sindicatos fortes."],
    [1, 1, "Penas de prisão mais duras reduzem a criminalidade."],
    [
        1,
        -1,
        "O uso de drogas deve ser tratado como questão de saúde, não de polícia.",
    ],
    [
        1,
        1,
        "A polícia deve ter mais poder de ação, mesmo com menos garantias a suspeitos.",
    ],
    [
        1,
        -1,
        "O governo não deve monitorar comunicações dos cidadãos, nem por segurança.",
    ],
    [
        1,
        1,
        "Em tempos de crise, ordem e disciplina valem mais que liberdades individuais.",
    ],
    [1, -1, "Protestos devem ser livres, mesmo quando bloqueiam vias públicas."],
    [1, 1, "Um líder forte resolve mais do que debates longos."],
    [1, -1, "A liberdade de expressão deve proteger até ideias ofensivas."],
    [1, 1, "O serviço militar deve ser obrigatório."],
    [1, -1, "A pena de morte nunca deve ser adotada."],
    [2, 1, "A família tradicional deve ser a base da sociedade."],
    [2, -1, "O casamento entre pessoas do mesmo sexo deve ter plenos direitos."],
    [2, 1, "A religião deve ter mais espaço na vida pública."],
    [2, -1, "A decisão sobre aborto deve caber à mulher."],
    [2, 1, "As escolas devem reforçar valores morais tradicionais."],
    [
        2,
        -1,
        "Cotas raciais são necessárias para corrigir desigualdades históricas.",
    ],
    [2, 1, "Mudanças sociais muito rápidas ameaçam a estabilidade."],
    [
        2,
        -1,
        "A proteção ambiental deve ter prioridade sobre o crescimento econômico.",
    ],
    [2, 1, "Pautas identitárias recebem atenção excessiva."],
    [2, -1, "A educação sexual deve ser ensinada nas escolas."],
    [
        3,
        1,
        "O país deve priorizar seus interesses, mesmo contra organismos internacionais.",
    ],
    [3, -1, "A cooperação internacional é essencial para clima e pandemias."],
    [3, 1, "A imigração deve ser reduzida."],
    [3, -1, "O país deve acolher refugiados."],
    [
        3,
        1,
        "Produtos nacionais devem ser protegidos com tarifas sobre importados.",
    ],
    [
        3,
        -1,
        "Blocos regionais, como o Mercosul, devem ter mais poder de decisão.",
    ],
    [3, 1, "A escola deve cultivar o orgulho nacional e os símbolos pátrios."],
    [3, -1, "Fronteiras mais abertas trazem mais benefícios do que riscos."],
    [3, 1, "Recursos naturais devem ser explorados só por empresas nacionais."],
    [3, -1, "Vale mais pertencer a um bloco de países do que agir sozinho."],
];

const OPT = [
    "Discordo totalmente",
    "Discordo",
    "Neutro",
    "Concordo",
    "Concordo totalmente",
];

// [nome, descrição, [econ, aut, cult, nac]]
const IDE = [
    [
        "Social-democracia",
        "Defende mercado regulado com Estado de bem-estar amplo e democracia liberal.",
        [-40, -10, -40, -30],
    ],
    [
        "Socialismo democrático",
        "Busca maior controle público da economia por vias democráticas.",
        [-70, -20, -50, -40],
    ],
    [
        "Marxismo",
        "Prioriza a superação do capitalismo e forte planejamento estatal.",
        [-90, 40, -40, -50],
    ],
    [
        "Anarquismo social",
        "Rejeita o Estado e o capital em favor da cooperação voluntária.",
        [-60, -90, -60, -60],
    ],
    [
        "Liberalismo social",
        "Une liberdades individuais e de costumes com algum amparo social.",
        [20, -30, -50, -30],
    ],
    [
        "Liberalismo clássico",
        "Defende mercado aberto, direitos individuais e Estado limitado.",
        [45, -40, -25, -30],
    ],
    [
        "Libertarianismo",
        "Propõe Estado mínimo e máxima liberdade econômica e pessoal.",
        [90, -80, 0, -20],
    ],
    [
        "Liberal-conservadorismo",
        "Combina livre mercado com valores tradicionais.",
        [50, 15, 40, 10],
    ],
    [
        "Conservadorismo tradicional",
        "Valoriza instituições, religião e mudança gradual.",
        [10, 40, 70, 30],
    ],
    [
        "Nacional-conservadorismo",
        "Enfatiza soberania, identidade nacional e valores tradicionais.",
        [0, 50, 70, 70],
    ],
    [
        "Direita autoritária",
        "Alia ordem forte, nacionalismo e economia pró-mercado.",
        [60, 80, 60, 60],
    ],
    [
        "Nacional-desenvolvimentismo",
        "Defende Estado indutor da indústria e soberania nacional.",
        [-50, 20, 10, 60],
    ],
    [
        "Centrismo",
        "Evita extremos e busca equilíbrio entre os campos.",
        [0, 0, 0, 0],
    ],
];

const PAR = [
    ["Frente Socialista", "FS", "#C0392B", [-85, 0, -60, -40]],
    ["Partido Trabalhista Democrático", "PTD", "#E8743B", [-50, -10, -30, -20]],
    ["Movimento Verde", "MV", "#2E9E5B", [-30, -40, -80, -60]],
    ["Centro Democrático", "PCD", "#8E6BBF", [5, 0, 0, 0]],
    ["Aliança Liberal", "AL", "#E2B93B", [45, -40, -30, -30]],
    ["Liberdade Já", "LJ", "#3AA6B9", [90, -70, 10, -10]],
    ["União Conservadora", "UC", "#2F5FA8", [45, 30, 60, 10]],
    ["Nova Ordem Nacional", "NON", "#4A4F63", [10, 70, 70, 70]],
];

const app = document.getElementById("app");
let ans = Array(Q.length).fill(null),
    idx = 0;
const dist = (a, b) => Math.hypot(...a.map((v, i) => v - b[i]));

function intro() {
    app.innerHTML = `
        <span class="tag">40 perguntas · 4 eixos · 100 cadeiras</span>
        <h1>Que parlamento você elegeria?</h1>
        <p>Responda 40 afirmações. Você recebe seu quadro político, sua ideologia mais próxima e um parlamento de 100 cadeiras montado a partir das suas posições.</p>
        <p class="mut">Leva cerca de 8 minutos. Nada é enviado a servidores.</p>
        <p><button class="primary" id="go">Começar o quiz</button></p>
        <small>Projeto de entretenimento e reflexão. Não é uma medida científica das suas ideias.</small>
    `;

    document.getElementById("go").onclick = () => {
        ans.fill(null);
        idx = 0;
        quiz();
    };
}

function quiz() {
    const q = Q[idx];
    app.innerHTML = `
        <div class="bar"><i style="width:${(idx / Q.length) * 100}%"></i></div>
        <div class="mut sans">Pergunta ${idx + 1} de ${Q.length}</div>
        <p class="q">${q[2]}</p>
        <div class="opts">${OPT.map((o, i) => `<button data-v="${i}" class="${ans[idx] === i ? "sel" : ""}">${o}</button>`).join("")}</div>
        <div class="row"><button id="back" ${idx ? "" : "disabled"}>Voltar</button><span class="mut sans">${AX[q[0]][0]}</span></div>
    `;

    app.querySelectorAll(".opts button").forEach(
        (b) =>
        (b.onclick = () => {
            ans[idx] = +b.dataset.v;
            idx++;
            idx < Q.length ? quiz() : result();
        }),
    );

    document.getElementById("back").onclick = () => {
        idx--;
        quiz();
    };
}

function scores() {
    const s = [0, 0, 0, 0];
    Q.forEach((q, i) => {
        s[q[0]] += q[1] * (ans[i] - 2);
    });
    return s.map((v) => Math.round((v / 20) * 100));
}

function quadrant(e, a) {
    const x = e < -15 ? "Esquerda" : e > 15 ? "Direita" : "Centro",
        y = a < -15 ? "libertária" : a > 15 ? "autoritária" : "moderada";
    return x === "Centro" && y === "moderada" ? "Centro" : x + " " + y;
}

function allocate(u) {
    let list = PAR.map((p, i) => ({
        i,
        p,
        w: Math.exp(-Math.pow(dist(u, p[3]), 2) / (2 * 55 * 55)),
    }));
    for (let k = 0; k < 4; k++) {
        const T = list.reduce((s, x) => s + x.w, 0);
        list.forEach((x) => {
            const r = (x.w / T) * 100;
            x.s = Math.floor(r);
            x.r = r - x.s;
        });
        let left = 100 - list.reduce((s, x) => s + x.s, 0);
        [...list]
            .sort((a, b) => b.r - a.r)
            .slice(0, left)
            .forEach((x) => x.s++);
        const keep = list.filter((x) => x.s >= 2);
        if (keep.length === list.length) break;
        list = keep;
    }
    return list;
}

function hemicycle(list) {
    const order = [...list].sort((a, b) => a.p[3][0] - b.p[3][0]);
    const radii = [60, 86, 112, 138, 164],
        sum = 560,
        pts = [];
    let n = radii.map((r) => Math.round((100 * r) / sum));
    n[4] += 100 - n.reduce((a, b) => a + b, 0);
    radii.forEach((r, k) => {
        for (let j = 0; j < n[k]; j++) {
            const t = Math.PI - (j * Math.PI) / (n[k] - 1);
            pts.push({ t, r, x: 200 + r * Math.cos(t), y: 190 - r * Math.sin(t) });
        }
    });
    pts.sort((a, b) => b.t - a.t || a.r - b.r);
    let c = [];
    order.forEach((x) => {
        for (let j = 0; j < x.s; j++) c.push(x.p[2]);
    });
    return `<svg viewBox="0 0 400 205" width="100%" role="img" aria-label="Parlamento de 100 cadeiras">${pts.map((p, i) => `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="5.6" fill="${c[i]}"/>`).join("")}<text x="200" y="186" text-anchor="middle" font-size="26" style="fill:var(--ink)" font-weight="800">100</text><text x="200" y="200" text-anchor="middle" font-size="9">cadeiras</text></svg>`;
}

function chart(u) {
    const X = (e) => 30 + ((e + 100) / 200) * 260,
        Y = (a) => 30 + ((100 - a) / 200) * 260;
    return `<svg viewBox="0 0 320 320" width="100%" style="max-width:420px" role="img" aria-label="Quadro político">
            <rect x="30" y="30" width="260" height="260" fill="none" stroke="var(--line)"/>
            <line x1="160" y1="30" x2="160" y2="290" stroke="var(--line)"/><line x1="30" y1="160" x2="290" y2="160" stroke="var(--line)"/>
        <text x="160" y="18" text-anchor="middle" font-size="11">Autoritário</text><text x="160" y="308" text-anchor="middle" font-size="11">Libertário</text>
        <text x="4" y="164" font-size="11">Estado</text><text x="316" y="164" text-anchor="end" font-size="11">Mercado</text>
        ${PAR.map((p) => `<circle cx="${X(p[3][0])}" cy="${Y(p[3][1])}" r="5" fill="${p[2]}" opacity=".85"><title>${p[0]}</title></circle><text x="${X(p[3][0]) + 7}" y="${Y(p[3][1]) + 3}" font-size="9">${p[1]}</text>`).join("")}
        <circle cx="${X(u[0])}" cy="${Y(u[1])}" r="9" fill="none" stroke="var(--acc)" stroke-width="3"/><circle cx="${X(u[0])}" cy="${Y(u[1])}" r="3" fill="var(--acc)"/>
        <text x="${X(u[0])}" y="${Y(u[1]) - 14}" text-anchor="middle" font-size="11" font-weight="700" style="fill:var(--acc)">Você</text></svg>`;
}

function result() {
    const u = scores(),
        r = IDE.map((i) => ({ i, d: dist(u, i[2]) })).sort((a, b) => a.d - b.d),
        top = r[0].i,
        second = r[1].i;
    const list = allocate(u),
        sorted = [...list].sort((a, b) => b.s - a.s);
    const byDist = [...list].sort((a, b) => dist(u, a.p[3]) - dist(u, b.p[3]));
    let tot = 0,
        coal = [];
    for (const x of byDist) {
        coal.push(x);
        tot += x.s;
        if (tot >= 51) break;
    }
    const gov =
        sorted[0].s >= 51
            ? `${sorted[0].p[0]} tem maioria absoluta (${sorted[0].s} cadeiras).`
            : `Nenhum partido tem maioria. A coalizão mais próxima de você soma ${tot} cadeiras: ${coal.map((x) => x.p[1]).join(" + ")}.`;
    app.innerHTML = `<span class="tag">${quadrant(u[0], u[1])}</span>
 <h1>${top[0]}</h1><p>${top[1]}</p><p class="mut">Segunda mais próxima: ${second[0]}.</p>
 <h2>Seu quadro político</h2>
 <div class="card"><div class="chart">${chart(u)}</div>
 ${AX.map((a, k) => `<div class="ax"><div class="l"><span>${a[1]}</span><b class="sans">${a[0]}: ${u[k] > 0 ? "+" : ""}${u[k]}</b><span>${a[2]}</span></div><div class="t"><b style="left:${(u[k] + 100) / 2}%"></b></div></div>`).join("")}</div>
 <h2>Seu parlamento</h2>
 <p class="mut">As cadeiras são distribuídas conforme a proximidade ideológica de cada partido com você: quanto mais perto, maior a bancada. Partidos abaixo de 2% ficam de fora.</p>
 <div class="card">${hemicycle(list)}<div class="leg">${sorted.map((x) => `<div><span class="d" style="background:${x.p[2]}"></span><b class="sans">${x.s}</b> ${x.p[0]} (${x.p[1]})</div>`).join("")}</div>
 <p style="margin-top:14px">${gov}</p></div>
 <p><button class="primary" id="again">Refazer o quiz</button></p>
 <small>Projeto de entretenimento. Partidos fictícios; posições e ideologias são simplificações.</small>`;
    document.getElementById("again").onclick = intro;
    window.scrollTo(0, 0);
}


intro();