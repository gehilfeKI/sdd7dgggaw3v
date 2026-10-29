(async () => {
"use strict";
const TOOL_B64 = "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";
const ID = "fz-abs-overlay";
let helper = null;
if (document.getElementById(ID)) return;
const css = "#" + ID + "{position:fixed;inset:0;z-index:2147483647;background:rgba(20,26,36,.45);display:flex;align-items:center;justify-content:center;font:14px/1.45 'Segoe UI',Arial,sans-serif;color:#18202c}" +
"#" + ID + " .box{background:#fff;border-radius:10px;padding:20px 22px;width:min(420px,92vw);box-shadow:0 12px 40px rgba(0,0,0,.25);display:grid;gap:14px}" +
"#" + ID + " h2{margin:0;font-size:17px}" +
"#" + ID + " label{display:grid;gap:4px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#5f6b7c}" +
"#" + ID + " select,#" + ID + " input{font:inherit;font-size:14px;padding:6px 8px;border:1px solid #8d98a8;border-radius:5px;text-transform:none;letter-spacing:0;color:#18202c;font-weight:400}" +
"#" + ID + " .row{display:flex;gap:10px;justify-content:flex-end}" +
"#" + ID + " button{font:inherit;font-weight:700;padding:8px 16px;border-radius:5px;border:1px solid #1f4f9e;background:#1f4f9e;color:#fff;cursor:pointer}" +
"#" + ID + " button.sec{background:#fff;color:#1f4f9e}" +
"#" + ID + " .msg{font-size:13px;color:#5f6b7c;margin:0}" +
"#" + ID + " .err{color:#b3261e;font-weight:700}";
const ov = document.createElement("div");
ov.id = ID;
ov.innerHTML = "<style>" + css + "</style><div class='box'><h2>Fehlzeitenübersicht <span style=\"font-size:12px;font-weight:400;color:#5f6b7c\">v1.6</span></h2><p class='msg' id='fz-msg'>Verbinde mit dem Klassenbuch …</p></div>";
document.body.appendChild(ov);
const box = ov.querySelector(".box");
const close = () => { ov.remove(); if (helper) helper.remove(); };
const fail = (text) => {
box.innerHTML = "<h2>Fehlzeitenübersicht <span style=\"font-size:12px;font-weight:400;color:#5f6b7c\">v1.6</span></h2><p class='msg err'></p><div class='row'><button type='button' class='sec'>Schließen</button></div>";
box.querySelector(".err").textContent = text;
box.querySelector("button").onclick = close;
};
ov.addEventListener("click", e => { if (e.target === ov) close(); });
if (!/(^|\.)webuntis\.com$/i.test(location.hostname)) {
fail("Bitte das Lesezeichen in einem Tab anklicken, in dem WebUntis geöffnet und angemeldet ist.");
return;
}
const readForm = (d, form, mkFd) => {
const kl = d.getElementById("classregReportForm.idklasseId");
const classes = kl ? [...kl.options].filter(o => o.value && o.value !== "-1").map(o => ({ id: o.value, name: o.text.trim() })) : [];
let ranges = [];
try {
const props = [...d.querySelectorAll("[data-dojo-props]")].map(e => e.getAttribute("data-dojo-props")).find(v => v && v.includes("dateRangeOptions"));
ranges = JSON.parse(props.match(/"dateRangeOptions"\s*:\s*(\[[^\[\]]*\])/)[1]);
} catch (e) { ranges = []; }
return {
classes, mkFd,
pick: ranges.filter(r => r.type === "SCHOOLYEAR" || r.type === "CURRENT_SCHOOLYEAR"),
cur: ranges.find(r => r.type === "CURRENT_SCHOOLYEAR"),
date: (ranges.find(r => r.type === "CURRENT_DATE") || {}).startDate,
csrf: (form.querySelector("input[name=_csrf]") || {}).value,
sel: kl && kl.value !== "-1" ? kl.value : ""
};
};
const fetchForm = async () => {
const html = await (await fetch(location.origin + "/WebUntis/classregreportsform.do", { credentials: "include" })).text();
const d = new DOMParser().parseFromString(html, "text/html");
const c = d.querySelector("input[name=_csrf]");
if (!c || !c.form || !d.getElementById("classregReportForm.idklasseId")) return null;
return readForm(d, c.form, () => new FormData(c.form));
};
const sleep = ms => new Promise(r => setTimeout(r, ms));
let home = null;
try { home = await fetchForm(); } catch (e) { home = null; }
if (!home) {
const findForm = (win) => {
try {
const d = win.document;
const csrf = d.querySelector("input[name=_csrf]");
const kl = d.getElementById("classregReportForm.idklasseId");
if (csrf && kl && csrf.form) return { win, d, form: csrf.form, kl };
} catch (e) {  }
for (let i = 0; i < win.frames.length; i++) { const r = findForm(win.frames[i]); if (r) return r; }
return null;
};
let ctx = findForm(window);
if (!ctx) {
helper = document.createElement("iframe");
helper.style.cssText = "position:fixed;width:1200px;height:800px;left:-3000px;top:0;border:0;visibility:hidden";
helper.src = location.origin + "/class-register-reports";
document.body.appendChild(helper);
for (let i = 0; i < 60 && !ctx; i++) { await sleep(500); ctx = helper.contentWindow && findForm(helper.contentWindow); }
} else {
for (let i = 0; i < 20 && ctx.d.readyState !== "complete"; i++) await sleep(250);
}
if (!ctx) { fail("Die Berichte-Seite des Klassenbuchs ließ sich nicht laden. Bist du in WebUntis angemeldet? Alternativ: Klassenbuch → Berichte öffnen und das Lesezeichen erneut anklicken."); return; }
home = readForm(ctx.d, ctx.form, () => new ctx.win.FormData(ctx.form));
}
if (!home.classes.length || !home.pick.length || !home.cur) { fail("Klassen oder Zeiträume wurden im Berichtsformular nicht gefunden. Bist du in WebUntis angemeldet? Möglicherweise hat sich WebUntis geändert."); return; }
let years = [];
try {
const tok = await (await fetch(location.origin + "/WebUntis/api/token/new", { credentials: "include" })).text();
const ys = await (await fetch(location.origin + "/WebUntis/api/rest/view/v1/schoolyears", { credentials: "include", headers: { Authorization: "Bearer " + tok } })).json();
years = ys.map(y => ({ id: y.id, name: String(y.name), start: +String(y.dateRange.start).replace(/-/g, ""), end: +String(y.dateRange.end).replace(/-/g, "") }))
.filter(y => y.id && y.start && /^\d{4}/.test(y.name)).sort((a, b) => b.start - a.start);
} catch (e) { years = []; }
let homeYear = years.find(y => y.start <= home.cur.startDate && home.cur.startDate <= y.end);
if (!homeYear) {
const s0 = Math.floor(home.cur.startDate / 10000);
homeYear = { id: 0, name: s0 + "/" + (s0 + 1), start: home.cur.startDate, end: home.cur.endDate };
years = [homeYear];
}
const short = y => { const m = y.name.match(/^(\d{4})\D+(\d{2,4})/); return m ? m[1] + "/" + m[2].slice(-2) : y.name; };
const yearOf = y => +y.name.slice(0, 4);
const parseYear = v => {
v = String(v).trim().replace(/\s+/g, "");
let m = v.match(/^(\d{4})(?:[\/\-](\d{2}|\d{4}))?$/);
if (m) return m[2] && +m[2].slice(-2) !== (+m[1] + 1) % 100 ? NaN : +m[1];
m = v.match(/^(\d{2})[\/\-](\d{2})$/);
if (m) return +m[2] !== (+m[1] + 1) % 100 ? NaN : 2000 + +m[1];
return NaN;
};
const cal = async (method, params) => {
const r = await fetch(location.origin + "/WebUntis/jsonrpc_web/jsonCalendarService", {
method: "POST", credentials: "include",
headers: { "Content-Type": "application/json", "X-CSRF-TOKEN": home.csrf, "X-Requested-With": "XMLHttpRequest" },
body: JSON.stringify({ id: 1, method, params, jsonrpc: "2.0" })
});
const j = await r.json();
if (!r.ok || j.error) throw new Error("WebUntis hat den Wechsel des Schuljahres abgelehnt.");
};
const switchTo = async y => { await cal("setSchoolyear", [y.id]); await cal("setDate", [y.start]); };
const restore = async () => { try { await cal("setSchoolyear", [homeYear.id]); await cal("setDate", [home.date || homeYear.start]); } catch (e) {  } };
const cache = {};
const loadYear = async y => {
if (y === homeYear) return home;
if (cache[y.id]) return cache[y.id];
await switchTo(y);
try {
const data = await fetchForm();
if (!data) throw new Error("Das Berichtsformular für " + short(y) + " ließ sich nicht laden.");
if (!data.cur || data.cur.startDate < y.start || data.cur.startDate > y.end) throw new Error("WebUntis hat nicht auf das Schuljahr " + short(y) + " umgestellt.");
if (!data.classes.length) throw new Error("Im Schuljahr " + short(y) + " gibt es in WebUntis keine Klassen.");
return (cache[y.id] = data);
} finally { await restore(); }
};
const today = +new Date().toISOString().slice(0, 10).replace(/-/g, "");
const label = r => r.type === "CURRENT_SCHOOLYEAR" ? "Ganzes Schuljahr" : r.name.trim();
const fmt = n => String(n).replace(/^(\d{4})(\d{2})(\d{2})$/, "$3.$2.$1");
let lastCls = "", lastName = "";
try { lastCls = localStorage.getItem("fz-abs-klasse") || ""; lastName = localStorage.getItem("fz-abs-klasse-name") || ""; } catch (e) {}
box.innerHTML = "<h2>Fehlzeitenübersicht <span style=\"font-size:12px;font-weight:400;color:#5f6b7c\">v1.6</span></h2>" +
"<label>Schuljahr<input id='fz-sy' list='fz-sy-list' autocomplete='off' placeholder='z. B. 2024/25' value='" + short(homeYear) + "'></label>" +
"<datalist id='fz-sy-list'>" + years.map(y => "<option value='" + short(y) + "'>").join("") + "</datalist>" +
"<label>Klasse<select id='fz-cls'></select></label>" +
"<label>Zeitraum<select id='fz-rng'></select></label>" +
"<p class='msg' id='fz-msg'></p>" +
"<div class='row'><button type='button' class='sec' id='fz-cancel'>Abbrechen</button><button type='button' id='fz-go'>Übersicht erstellen</button></div>";
const syIn = box.querySelector("#fz-sy"), clsSel = box.querySelector("#fz-cls"), rngSel = box.querySelector("#fz-rng");
const goBtn = box.querySelector("#fz-go"), msg0 = box.querySelector("#fz-msg");
const INFO = "Die Übersicht öffnet sich in einem neuen Tab. Die Daten bleiben in deinem Browser.";
const say = (t, err) => { msg0.className = err ? "msg err" : "msg"; msg0.textContent = t; };
const lock = on => { clsSel.disabled = rngSel.disabled = goBtn.disabled = on; goBtn.style.opacity = on ? ".5" : ""; };
let data = home, year = homeYear;
const fill = () => {
const isHome = year === homeYear;
const byName = data.classes.find(c => c.name === lastName);
const def = (data.classes.find(c => c.id === lastCls) || byName || data.classes.find(c => isHome && c.id === data.sel) || {}).id || "";
clsSel.innerHTML = (def ? "" : "<option value=''>– bitte wählen –</option>") +
data.classes.map(c => "<option value='" + c.id + "'" + (c.id === def ? " selected" : "") + ">" + c.name + "</option>").join("");
let defR = isHome ? data.pick.findIndex(r => r.type === "SCHOOLYEAR" && r.startDate <= today && today <= r.endDate) : -1;
if (defR < 0) defR = data.pick.findIndex(r => r.type === "CURRENT_SCHOOLYEAR");
rngSel.innerHTML = data.pick.map((r, i) => "<option value='" + i + "'" + (i === defR ? " selected" : "") + ">" + label(r) + " (" + fmt(r.startDate) + " – " + fmt(r.endDate) + ")</option>").join("");
};
fill(); say(INFO);
let ticket = 0, pending = null;
const onYear = async () => {
const t = ++ticket;
const n = parseYear(syIn.value);
if (isNaN(n)) { lock(true); say("Bitte das Schuljahr so angeben: 2024/25.", true); return; }
const y = years.find(x => yearOf(x) === n);
if (!y) {
lock(true);
const lo = years[years.length - 1], hi = years[0];
say("Das Schuljahr " + n + "/" + String(n + 1).slice(-2) + " ist in WebUntis nicht vorhanden. " +
(years.length > 1 ? "Verfügbar sind die Schuljahre " + short(lo) + " bis " + short(hi) + "." : "Die Liste der Schuljahre ließ sich nicht lesen; möglich ist nur " + short(homeYear) + "."), true);
return;
}
syIn.value = short(y);
if ((y === year && !goBtn.disabled) || y === pending) { if (y === pending) ticket--; return; }
pending = y;
lock(true); say("Schuljahr " + short(y) + " wird geladen …");
try {
const d = await loadYear(y);
if (t !== ticket) return;
data = d; year = y; fill(); lock(false); say(INFO);
} catch (e) { if (t === ticket) say(e.message, true); }
finally { if (pending === y) pending = null; }
};
let prev = syIn.value;
syIn.addEventListener("focus", () => { prev = syIn.value; syIn.placeholder = prev; syIn.value = ""; });
syIn.addEventListener("blur", () => { if (!syIn.value.trim()) syIn.value = prev; syIn.placeholder = "z. B. 2024/25"; onYear(); });
syIn.addEventListener("change", onYear);
syIn.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); syIn.blur(); } });
box.querySelector("#fz-cancel").onclick = close;
clsSel.focus();
goBtn.onclick = async () => {
const msg = msg0;
const clsId = clsSel.value;
if (!clsId) { say("Bitte eine Klasse wählen.", true); return; }
const rng = data.pick[+rngSel.value];
const ctxData = data, ctxYear = year;
try { localStorage.setItem("fz-abs-klasse", clsId); localStorage.setItem("fz-abs-klasse-name", (data.classes.find(c => c.id === clsId) || {}).name || ""); } catch (e) {}
const out = window.open("", "_blank");
if (!out) { say("Der Browser hat den neuen Tab blockiert. Bitte Pop-ups für WebUntis erlauben und erneut versuchen.", true); return; }
out.document.write("<title>Fehlzeiten werden geladen</title><p style='font:16px Segoe UI,Arial,sans-serif;padding:24px'>Fehlzeiten werden aus WebUntis geladen …</p>");
say("Bericht wird abgerufen …");
lock(true); syIn.disabled = true;
const other = ctxYear !== homeYear;
try {
if (other) await switchTo(ctxYear);
const base = location.origin + "/WebUntis/reports.do?";
const getReport = async (name, r) => {
const p = new URLSearchParams(ctxData.mkFd());
const set = {
name, format: "csv",
klasseOrStudentgroupId: clsId, studentId: "-1",
selectedDateRange: JSON.stringify(r),
withAbsences: "true", withLateness: "true",
allStudents: "true", absStudGroup: "1", studExcuseStatusId: "-1",
rpt_sd: r.startDate, rpt_ed: r.endDate, rpt_syid: r.id, rpt_drdtype: r.type
};
for (const k in set) p.set(k, set[k]);
p.delete("excludeNotCountingAbsences");
let job = null;
for (let i = 0; i < 60 && !job; i++) {
const r2 = await fetch(base + p.toString(), { credentials: "include" });
let j = {};
try { j = await r2.json(); } catch (e) { j = {}; }
if (j.data) { job = j.data; break; }
const busy = (j.errors || []).some(x => String(x.code) === "4");
if (!busy) throw new Error("WebUntis hat den Bericht nicht erzeugt" + (j.errors && j.errors[0] && j.errors[0].title ? ": " + j.errors[0].title : "."));
msg.textContent = "WebUntis erstellt noch einen anderen Bericht, bitte warten …";
await sleep(1500);
}
if (!job || job.error) throw new Error("WebUntis hat den Bericht nicht erzeugt.");
let url = job.finished && job.reportParams ? base + job.reportParams : "";
const t0 = Date.now();
for (let i = 0; i < 160 && !url; i++) {
await sleep(1500);
msg.textContent = "WebUntis erstellt den Bericht … " + Math.round((Date.now() - t0) / 1000) + " s";
let pd = {};
try { pd = (await (await fetch(location.origin + "/WebUntis/api/polling/REPORT", { credentials: "include" })).json()).data || {}; } catch (e) { pd = {}; }
const mine = (pd.pollingJobs || []).find(x => x.data && x.data.reportName === job.reportName);
if (mine && mine.hasJobError) throw new Error("WebUntis konnte den Bericht nicht erstellen.");
if (mine && mine.isJobFinished && mine.data.reportParams) url = base + "msgId=" + mine.data.messageId + "&" + mine.data.reportParams;
else if (!mine && pd.hasRunningJobs === false && i >= 3) throw new Error("WebUntis hat den Bericht nicht fertiggestellt. Bitte noch einmal versuchen.");
}
if (!url) throw new Error("WebUntis braucht für den Bericht zu lange. Bitte einen kürzeren Zeitraum wählen (z. B. ein Halbjahr).");
const fr = await fetch(url, { credentials: "include" });
const buf = await fr.arrayBuffer();
let text;
try { text = new TextDecoder("utf-8", { fatal: true }).decode(buf); } catch (e) { text = new TextDecoder("windows-1252").decode(buf); }
return { text, fr };
};
const { text, fr } = await getReport("AbsencePerStudent", rng);
if (!/^\uFEFF?Sch/.test(text)) throw new Error("Die Antwort von WebUntis war kein Fehlzeitenbericht.");
let lessons = null;
try {
msg.textContent = "Unterrichtsstunden werden abgerufen …";
const d0 = new Date(), today = d0.getFullYear() * 10000 + (d0.getMonth() + 1) * 100 + d0.getDate();
const endP = Math.min(rng.endDate, today);
if (endP >= rng.startDate) {
const rP = { name: "", id: -1, type: "CUSTOM", restrictToSchoolyear: true, startDate: rng.startDate, endDate: endP };
let wt;
try { wt = (await getReport("AbsenceWeekOverview", rP)).text; } catch (e) { await sleep(1500); wt = (await getReport("AbsenceWeekOverview", rP)).text; }
const rows = wt.split(/\r?\n/).map(l => l.split("\t"));
const head = rows.find(f => f.includes("Unterrichtsminuten"));
if (head) {
const iL = head.indexOf("Unterrichtsstunden"), iM = head.indexOf("Unterrichtsminuten");
const hm = v => { const m = String(v || "").match(/^(\d+):(\d{2})$/); return m ? +m[1] * 60 + +m[2] : NaN; };
const byId = {}, byName = {};
let cur = null;
for (const f of rows) {
if (f === head || /^\d{8}$/.test(f[0] || "")) continue;
if (f[0] && f[1] && !f[iL]) { cur = { name: f[0].trim(), id: f[1].trim() }; continue; }
if (cur && /^\d+$/.test((f[iL] || "").trim()) && !isNaN(hm(f[iM]))) {
const v = { lessons: +f[iL], minutes: hm(f[iM]) };
byId[cur.id] = v; byName[cur.name] = v; cur = null;
}
}
const fmt8 = n => String(n).replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
if (Object.keys(byId).length) lessons = { from: fmt8(rng.startDate), to: fmt8(endP), byId, byName };
try {
msg.textContent = "Stundenplan wird abgerufen …";
const elId = String(clsId).replace(/\D/g, "");
const hmT = x => Math.floor(x / 100) * 60 + x % 100;
const weeks = [];
const d1 = new Date(Date.UTC(Math.floor(rng.startDate / 10000), Math.floor(rng.startDate / 100) % 100 - 1, rng.startDate % 100, 12));
for (const d = new Date(d1); d.toISOString().slice(0, 10).replace(/-/g, "") <= String(endP); d.setUTCDate(d.getUTCDate() + 7)) weeks.push(d.toISOString().slice(0, 10));
const bySubject = {}, seen = new Set();
for (let i = 0; i < weeks.length; i += 4) {
const part = await Promise.all(weeks.slice(i, i + 4).map(w => fetch(location.origin + "/WebUntis/api/public/timetable/weekly/data?elementType=1&elementId=" + elId + "&date=" + w + "&formatId=1", { credentials: "include" }).then(r => r.json())));
for (const j of part) {
const res = j && j.data && j.data.result && j.data.result.data;
if (!res) throw new Error("Stundenplan nicht lesbar");
const els = {}; (res.elements || []).forEach(e => { els[e.type + ":" + e.id] = e; });
for (const per of (res.elementPeriods[elId] || [])) {
if (per.date < rng.startDate || per.date > endP || per.cellState === "CANCEL" || seen.has(per.id)) continue;
seen.add(per.id);
const sub = (per.elements || []).filter(e => e.type === 3).map(e => (els["3:" + e.id] || {}).name).filter(Boolean).join("/");
if (sub) bySubject[sub] = (bySubject[sub] || 0) + hmT(per.endTime) - hmT(per.startTime);
}
}
}
if (lessons && Object.keys(bySubject).length) lessons.bySubject = bySubject;
} catch (e) {  }
}
}
} catch (e) { lessons = null; }
const disp = fr.headers.get("content-disposition") || "";
const fname = (disp.match(/filename="?([^";]+)"?/) || [])[1] || "AbsencePerStudent.csv";
const raw = Uint8Array.from(atob(TOOL_B64), c => c.charCodeAt(0));
const html = await new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
out.document.open(); out.document.write(html); out.document.close();
for (let i = 0; i < 100 && typeof out.fzLoadText !== "function"; i++) await sleep(100);
if (typeof out.fzLoadText !== "function") throw new Error("Die Übersicht ließ sich nicht aufbauen.");
out.fzLoadText(text, fname, lessons);
close();
} catch (e) {
try { out.document.body.innerHTML = "<p style='font:16px Segoe UI,Arial,sans-serif;padding:24px;color:#b3261e'>" + String(e.message).replace(/</g, "&lt;") + "</p>"; } catch (x) {}
msg.className = "msg err"; msg.textContent = e.message;
} finally {
if (other) await restore();
lock(false); syIn.disabled = false;
}
};
})();