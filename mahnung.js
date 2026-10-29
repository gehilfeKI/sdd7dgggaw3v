(async () => {
"use strict";
const TOOL_B64 = "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";
const ID = "ms-abs-overlay", TITLE = "Schulbesuchsmahnung <span style=\"font-size:12px;font-weight:400;color:#5f6b7c\">v1.2</span>";
let helper = null;
if (document.getElementById(ID)) return;
const css = "#" + ID + "{position:fixed;inset:0;z-index:2147483647;background:rgba(20,26,36,.45);display:flex;align-items:center;justify-content:center;font:14px/1.45 'Segoe UI',Arial,sans-serif;color:#18202c}" +
"#" + ID + " .box{background:#fff;border-radius:10px;padding:20px 22px;width:min(420px,92vw);box-shadow:0 12px 40px rgba(0,0,0,.25);display:grid;gap:14px}" +
"#" + ID + " h2{margin:0;font-size:17px}" +
"#" + ID + " label{display:grid;gap:4px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#5f6b7c}" +
"#" + ID + " select{font:inherit;font-size:14px;padding:6px 8px;border:1px solid #8d98a8;border-radius:5px;text-transform:none;letter-spacing:0;color:#18202c;font-weight:400}" +
"#" + ID + " .row{display:flex;gap:10px;justify-content:flex-end}" +
"#" + ID + " button{font:inherit;font-weight:700;padding:8px 16px;border-radius:5px;border:1px solid #1f4f9e;background:#1f4f9e;color:#fff;cursor:pointer}" +
"#" + ID + " button.sec{background:#fff;color:#1f4f9e}" +
"#" + ID + " .msg{font-size:13px;color:#5f6b7c;margin:0}" +
"#" + ID + " .err{color:#b3261e;font-weight:700}";
const ov = document.createElement("div");
ov.id = ID;
ov.innerHTML = "<style>" + css + "</style><div class='box'><h2>" + TITLE + "</h2><p class='msg' id='ms-msg'>Verbinde mit dem Klassenbuch …</p></div>";
document.body.appendChild(ov);
const box = ov.querySelector(".box");
const close = () => { ov.remove(); if (helper) helper.remove(); };
const fail = (text) => {
box.innerHTML = "<h2>" + TITLE + "</h2><p class='msg err'></p><div class='row'><button type='button' class='sec'>Schließen</button></div>";
box.querySelector(".err").textContent = text;
box.querySelector("button").onclick = close;
};
ov.addEventListener("click", e => { if (e.target === ov) close(); });
if (!/(^|\.)webuntis\.com$/i.test(location.hostname)) {
fail("Bitte das Lesezeichen in einem Tab anklicken, in dem WebUntis geöffnet und angemeldet ist.");
return;
}
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
const sleep = ms => new Promise(r => setTimeout(r, ms));
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
const classes = [...ctx.kl.options].filter(o => o.value && o.value !== "-1").map(o => ({ id: o.value, name: o.text.trim() }));
let ranges = [];
try {
const props = [...ctx.d.querySelectorAll("[data-dojo-props]")].map(e => e.getAttribute("data-dojo-props")).find(v => v && v.includes("dateRangeOptions"));
ranges = JSON.parse(props.match(/"dateRangeOptions"\s*:\s*(\[[^\[\]]*\])/)[1]);
} catch (e) { ranges = []; }
const pick = ranges.filter(r => r.type === "SCHOOLYEAR" || r.type === "CURRENT_SCHOOLYEAR");
if (!classes.length || !pick.length) { fail("Klassen oder Zeiträume wurden im Berichtsformular nicht gefunden. Möglicherweise hat sich WebUntis geändert."); return; }
const today = +new Date().toISOString().slice(0, 10).replace(/-/g, "");
const label = r => r.type === "CURRENT_SCHOOLYEAR" ? "Aktuelles Schuljahr" : r.name;
const fmt = n => String(n).replace(/^(\d{4})(\d{2})(\d{2})$/, "$3.$2.$1");
let defRange = pick.findIndex(r => r.type === "SCHOOLYEAR" && r.startDate <= today && today <= r.endDate);
if (defRange < 0) defRange = pick.findIndex(r => r.type === "CURRENT_SCHOOLYEAR");
let lastCls = "";
try { lastCls = localStorage.getItem("fz-abs-klasse") || ""; } catch (e) {}
const curCls = ctx.kl.value !== "-1" ? ctx.kl.value : "";
const defCls = classes.some(c => c.id === lastCls) ? lastCls : curCls;
box.innerHTML = "<h2>" + TITLE + "</h2>" +
"<label>Klasse<select id='ms-cls'>" + (defCls ? "" : "<option value=''>– bitte wählen –</option>") +
classes.map(c => "<option value='" + c.id + "'" + (c.id === defCls ? " selected" : "") + ">" + c.name + "</option>").join("") + "</select></label>" +
"<label>Zeitraum<select id='ms-rng'>" + pick.map((r, i) => "<option value='" + i + "'" + (i === defRange ? " selected" : "") + ">" + label(r) + " (" + fmt(r.startDate) + " – " + fmt(r.endDate) + ")</option>").join("") + "</select></label>" +
"<p class='msg' id='ms-msg'>Die Mahnungen öffnen sich in einem neuen Tab. Die Daten bleiben in deinem Browser.</p>" +
"<div class='row'><button type='button' class='sec' id='ms-cancel'>Abbrechen</button><button type='button' id='ms-go'>Weiter</button></div>";
box.querySelector("#ms-cancel").onclick = close;
box.querySelector("#ms-cls").focus();
box.querySelector("#ms-go").onclick = async () => {
const msg = box.querySelector("#ms-msg");
const clsId = box.querySelector("#ms-cls").value;
if (!clsId) { msg.className = "msg err"; msg.textContent = "Bitte eine Klasse wählen."; return; }
const rng = pick[+box.querySelector("#ms-rng").value];
try { localStorage.setItem("fz-abs-klasse", clsId); } catch (e) {}
const out = window.open("", "_blank");
if (!out) { msg.className = "msg err"; msg.textContent = "Der Browser hat den neuen Tab blockiert. Bitte Pop-ups für WebUntis erlauben und erneut versuchen."; return; }
out.document.write("<title>Fehlzeiten werden geladen</title><p style='font:16px Segoe UI,Arial,sans-serif;padding:24px'>Fehlzeiten werden aus WebUntis geladen …</p>");
msg.className = "msg"; msg.textContent = "Bericht wird abgerufen …";
try {
const base = location.origin + "/WebUntis/reports.do?";
const p = new URLSearchParams(new ctx.win.FormData(ctx.form));
const set = {
name: "AbsencePerStudent", format: "csv",
klasseOrStudentgroupId: clsId, studentId: "-1",
selectedDateRange: JSON.stringify(rng),
withAbsences: "true", withLateness: "true",
allStudents: "true", absStudGroup: "1", studExcuseStatusId: "-1",
rpt_sd: rng.startDate, rpt_ed: rng.endDate, rpt_syid: rng.id, rpt_drdtype: rng.type
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
if (!/^﻿?Sch/.test(text)) throw new Error("Die Antwort von WebUntis war kein Fehlzeitenbericht.");
const disp = fr.headers.get("content-disposition") || "";
const fname = (disp.match(/filename="?([^";]+)"?/) || [])[1] || "AbsencePerStudent.csv";
const extra = { students: {}, classTeachers: {} };
try {
msg.textContent = "Klassenleitung und Stammdaten werden abgerufen …";
const O = location.origin + "/WebUntis/";
const clsName = (classes.find(c => c.id === clsId) || {}).name || "";
const elId = +String(clsId).replace(/\D/g, "");
const norm = s => String(s || "").normalize("NFC").replace(/\s+/g, " ").trim().toLowerCase();
const iso8 = n => /^\d{8}$/.test(String(n)) ? String(n).replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3") : "";
const tok = await (await fetch(O + "api/token/new", { credentials: "include" })).text();
const H = { credentials: "include", headers: { Authorization: "Bearer " + tok } };
let persons = [];
try { persons = (await (await fetch(O + "api/user/persons", H)).json()).data.persons || []; } catch (e) {}
try {
const day = new Date().toISOString().slice(0, 10);
const f = await (await fetch(O + "api/rest/view/v1/timetable/filter?resourceType=CLASS&timetableType=STANDARD&start=" + day + "&end=" + day, H)).json();
const c = (f.classes || []).find(x => x.class && x.class.id === elId);
const nm = t => {
if (!t) return "";
const p = persons.find(q => q.type === 2 && q.id === t.id), full = (p && p.fullName) || "", last = t.longName || "";
const first = last && full.indexOf(last) === 0 ? full.slice(last.length).trim() : "";
return (first ? first + " " : "") + (last || full);
};
if (c) extra.classTeachers[clsName] = [nm(c.classTeacher1), nm(c.classTeacher2)].filter(Boolean).join(" / ");
} catch (e) {}
const S = [];
try {
const ld = new DOMParser().parseFromString(await (await fetch(O + "studentlist.do", { credentials: "include" })).text(), "text/html");
const fd = new URLSearchParams(new FormData(ld.querySelector("form")));
fd.set("klasseId", String(elId));
const d = new DOMParser().parseFromString(await (await fetch(O + "studentlist.do", { method: "POST", credentials: "include", body: fd })).text(), "text/html");
const tbl = [...d.querySelectorAll("table")].find(x => x.querySelector("th") && /Familienname/.test(x.textContent));
const th = [...tbl.querySelectorAll("th")].map(x => x.textContent.trim()), ix = k => th.indexOf(k);
for (const r of tbl.querySelectorAll("tr")) {
const cb = r.querySelector("input[name=selId]");
if (!cb) continue;
const td = k => { const c = r.children[ix(k)]; return c ? c.textContent.trim() : ""; };
const gc = r.children[ix("Geschlecht")], g = gc && gc.querySelector("[title]") ? gc.querySelector("[title]").title : "";
const b = td("Geburtsdatum").match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/);
S.push({ id: +cb.value, last: td("Familienname"), first: td("Vorname"), ext: td("Externe Id"), gender: /weib/i.test(g) ? "w" : /männ/i.test(g) ? "m" : "",
birth: b ? b[3] + "-" + b[2].padStart(2, "0") + "-" + b[1].padStart(2, "0") : "" });
}
} catch (e) {}
if (!S.length) {
const names = [...new Set(text.split(/\r?\n/).slice(1).map(l => (l.split("\t")[0] || "").trim()).filter(Boolean))];
for (const n of names) {
const hit = persons.filter(p => p.type === 5 && norm(p.fullName) === norm(n));
if (hit.length === 1) S.push({ id: hit[0].id, csv: n });
}
}
const csrf = (ctx.form.querySelector("input[name=_csrf]") || {}).value || "";
for (let i = 0; i < S.length; i += 6) {
await Promise.all(S.slice(i, i + 6).map(async s => {
try {
const j = await (await fetch(O + "jsonrpc_web/jsonAddressService", { method: "POST", credentials: "include",
headers: { "Content-Type": "application/json", "X-CSRF-TOKEN": csrf, "X-Requested-With": "XMLHttpRequest" },
body: JSON.stringify({ id: 1, method: "readFor", params: [{ type: 5, id: s.id }], jsonrpc: "2.0" }) })).json();
const a = j.result && j.result.self;
if (a) { s.street = a.street || ""; s.plz = a.postCode || ""; s.city = a.city || ""; }
} catch (e) {}
if (!s.birth) try { s.birth = iso8((await (await fetch(O + "api/user/addresses?personType=5&personId=" + s.id, H)).json()).data.personBirthDate); } catch (e) {}
}));
}
for (const s of S) {
const v = { birth: s.birth || "", gender: s.gender || "", street: s.street || "", plz: s.plz || "", city: s.city || "" };
if (s.first) v.display = s.first + " " + s.last;
if (s.ext) extra.students[s.ext] = v;
if (s.last) { extra.students[norm(s.last + " " + s.first)] = v; extra.students[norm(s.first + " " + s.last)] = v; }
if (s.csv) extra.students[norm(s.csv)] = v;
}
} catch (e) {  }
const raw = Uint8Array.from(atob(TOOL_B64), c => c.charCodeAt(0));
const html = await new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
out.document.open(); out.document.write(html); out.document.close();
for (let i = 0; i < 100 && typeof out.fzLoadText !== "function"; i++) await sleep(100);
if (typeof out.fzLoadText !== "function") throw new Error("Das Mahnungswerkzeug ließ sich nicht aufbauen.");
out.fzLoadText(text, fname, extra);
close();
} catch (e) {
try { out.document.body.innerHTML = "<p style='font:16px Segoe UI,Arial,sans-serif;padding:24px;color:#b3261e'>" + String(e.message).replace(/</g, "&lt;") + "</p>"; } catch (x) {}
msg.className = "msg err"; msg.textContent = e.message;
}
};
})();
