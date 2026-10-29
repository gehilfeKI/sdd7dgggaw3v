(async () => {
"use strict";
const TOOL_B64 = "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";
const ID = "ms-abs-overlay", TITLE = "Schulbesuchsmahnung <span style=\"font-size:12px;font-weight:400;color:#5f6b7c\">v1.1</span>";
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
for (let i = 0; i < 30; i++) {
const r2 = await fetch(base + p.toString(), { credentials: "include" });
job = (await r2.json()).data;
if (job && (job.finished || job.error)) break;
await sleep(1000);
}
if (!job || job.error || !job.reportParams) throw new Error("WebUntis hat den Bericht nicht erzeugt.");
const fr = await fetch(base + job.reportParams, { credentials: "include" });
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
