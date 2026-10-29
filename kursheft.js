(async () => {
"use strict";
const TOOL_B64 = "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";
const ID = "kh-abs-overlay", TITLE = "Kursheft BG <span style=\"font-size:12px;font-weight:400;color:#5f6b7c\">v1.0</span>";
if (document.getElementById(ID)) return;
const css = "#" + ID + "{position:fixed;inset:0;z-index:2147483647;background:rgba(20,26,36,.45);display:flex;align-items:center;justify-content:center;font:14px/1.45 'Segoe UI',Arial,sans-serif;color:#18202c}" +
"#" + ID + " .box{background:#fff;border-radius:10px;padding:20px 22px;width:min(520px,94vw);max-height:92vh;overflow:auto;box-shadow:0 12px 40px rgba(0,0,0,.25);display:grid;gap:14px}" +
"#" + ID + " h2{margin:0;font-size:17px}" +
"#" + ID + " .lb{display:grid;gap:4px;font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#5f6b7c}" +
"#" + ID + " select{font:inherit;font-size:14px;padding:6px 8px;border:1px solid #8d98a8;border-radius:5px;color:#18202c;font-weight:400;text-transform:none;letter-spacing:0}" +
"#" + ID + " .list{max-height:42vh;overflow:auto;border:1px solid #d3d9e2;border-radius:6px;padding:2px 10px;text-transform:none;letter-spacing:0;font-weight:400;font-size:14px;color:#18202c}" +
"#" + ID + " .list label,#" + ID + " .opt{display:flex;gap:8px;align-items:flex-start;padding:5px 0;font-size:14px;cursor:pointer}" +
"#" + ID + " .list label+label{border-top:1px solid #eef1f5}" +
"#" + ID + " .list small{display:block;color:#5f6b7c;font-size:12px}" +
"#" + ID + " input[type=checkbox]{margin-top:3px}" +
"#" + ID + " .row{display:flex;gap:10px;justify-content:flex-end}" +
"#" + ID + " button{font:inherit;font-weight:700;padding:8px 16px;border-radius:5px;border:1px solid #1f4f9e;background:#1f4f9e;color:#fff;cursor:pointer}" +
"#" + ID + " button.sec{background:#fff;color:#1f4f9e}" +
"#" + ID + " button[disabled]{opacity:.45;cursor:default}" +
"#" + ID + " .msg{font-size:13px;color:#5f6b7c;margin:0}" +
"#" + ID + " .err{color:#b3261e;font-weight:700}";
const ov = document.createElement("div");
ov.id = ID;
ov.innerHTML = "<style>" + css + "</style><div class='box'><h2>" + TITLE + "</h2><p class='msg'>Verbinde mit „Mein Unterricht“ …</p></div>";
document.body.appendChild(ov);
const box = ov.querySelector(".box");
const O = location.origin + "/WebUntis/";
const sleep = ms => new Promise(r => setTimeout(r, ms));
const parse = html => new DOMParser().parseFromString(html, "text/html");
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
let csrf = "", weekRange = null, filterChanged = false;
const restore = () => {
if (!filterChanged || !weekRange || !csrf) return;
filterChanged = false;
fetch(O + "lessonlist.do?my=true", { method: "POST", credentials: "include", body: new URLSearchParams({ activityTypeId: "-1", _csrf: csrf, selectedDateRange: JSON.stringify(weekRange) }) }).catch(() => {});
};
const close = () => { restore(); ov.remove(); };
const fail = text => {
box.innerHTML = "<h2>" + TITLE + "</h2><p class='msg err'></p><div class='row'><button type='button' class='sec'>Schließen</button></div>";
box.querySelector(".err").textContent = text;
box.querySelector("button").onclick = close;
};
ov.addEventListener("click", e => { if (e.target === ov) close(); });
if (!/(^|\.)webuntis\.com$/i.test(location.hostname)) { fail("Bitte das Lesezeichen in einem Tab anklicken, in dem WebUntis geöffnet und angemeldet ist."); return; }
let ranges = [];
try {
const d0 = parse(await (await fetch(O + "lessonlist.do?my=true", { credentials: "include" })).text());
csrf = (d0.querySelector("input[name=_csrf]") || {}).value || "";
const props = [...d0.querySelectorAll("[data-dojo-props]")].map(e => e.getAttribute("data-dojo-props")).find(v => v && v.includes("dateRangeOptions"));
ranges = JSON.parse(props.match(/"dateRangeOptions"\s*:\s*(\[[^\[\]]*\])/)[1]);
} catch (e) { ranges = []; }
const hjs = ranges.filter(r => r.type === "SCHOOLYEAR");
weekRange = ranges.find(r => r.type === "CURRENT_WEEK") || null;
if (!csrf || !hjs.length) { fail("„Mein Unterricht“ ließ sich nicht lesen. Bist du in WebUntis angemeldet? Möglicherweise hat sich WebUntis geändert."); return; }
const now = new Date(), today = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
const fmt = n => String(n).replace(/^(\d{4})(\d{2})(\d{2})$/, "$3.$2.$1");
const toDate = n => new Date(Date.UTC(Math.floor(n / 10000), Math.floor(n / 100) % 100 - 1, n % 100, 12));
let defHj = hjs.findIndex(r => r.startDate <= today && today <= r.endDate);
if (defHj > 0 && (toDate(today) - toDate(hjs[defHj].startDate)) / 864e5 < 42) defHj--;
if (defHj < 0) defHj = hjs.reduce((b, r, i) => r.endDate < today ? i : b, 0);
const sy = ranges.find(r => r.type === "CURRENT_SCHOOLYEAR");
const schoolyear = sy ? Math.floor(sy.startDate / 10000) + "/" + Math.floor(sy.endDate / 10000) : "";
const isQ = k => /^1[A-Z]\d\d$/.test(k);
const isBG = c => /^[^_\d]+1[23]_[GL]/i.test(c.group) || (c.classes.length > 0 && c.classes.every(isQ));
const toks = s => [...new Set(s.split(/[\s,]+/).filter(t => t && !/^\.+$/.test(t)))];
const readRows = (d, re, f) => {
const list = [];
for (const tr of d.querySelectorAll("tr")) {
const m = tr.innerHTML.match(re);
if (!m) continue;
const ths = [...tr.closest("table").querySelectorAll("th")].map(x => x.textContent.trim());
const row = tr.cloneNode(true);
row.querySelectorAll("script").forEach(s => s.remove());
const cell = name => { const i = ths.indexOf(name), c = i >= 0 ? row.children[i] : null; return c ? c.textContent.replace(/\s+/g, " ").trim() : ""; };
const group = cell("Schülergruppe"), fach = cell("Fach").split(" ");
const short = fach.length > 1 ? fach.pop() : fach[0];
if (!group) continue;
list.push(f(m, { group, subjectShort: short, subject: fach.join(" ") || short, classes: toks(cell("Klasse")), teachers: toks(cell("Lehrkraft")), wst: cell("Wst") || cell("Std.") }));
}
return list;
};
let classCsrf = "", qClasses = [];
try {
const dc = parse(await (await fetch(O + "lessonweeklist.do", { credentials: "include" })).text());
classCsrf = (dc.querySelector("input[name=_csrf]") || {}).value || "";
qClasses = [...dc.querySelectorAll("#klasseId option")].map(o => ({ id: o.value, name: o.text.trim() })).filter(k => isQ(k.name));
} catch (e) { qClasses = []; }
let teacherList = null;
const teacherIds = async () => {
if (teacherList) return teacherList;
try {
const tok = await (await fetch(O + "api/token/new", { credentials: "include" })).text();
const day = new Date().toISOString().slice(0, 10);
teacherList = ((await (await fetch(O + "api/rest/view/v1/timetable/filter?resourceType=TEACHER&timetableType=STANDARD&start=" + day + "&end=" + day,
{ credentials: "include", headers: { Authorization: "Bearer " + tok } })).json()).teachers || []).map(t => t.teacher || t);
} catch (e) { teacherList = []; }
return teacherList;
};
const loadCourses = async (rng, src) => {
filterChanged = true;
if (src === "my") {
const d = parse(await (await fetch(O + "lessonlist.do?my=true", { method: "POST", credentials: "include",
body: new URLSearchParams({ activityTypeId: "-1", _csrf: csrf, selectedDateRange: JSON.stringify(rng) }) })).text());
return readRows(d, /lessonreports\?lsId=(\d+)&(?:amp;)?reportTeacherId=(\d+)/, (m, c) => Object.assign(c, { lsid: m[1], tid: m[2] }));
}
const d = parse(await (await fetch(O + "lessonweeklist.do", { method: "POST", credentials: "include",
body: new URLSearchParams({ klasseId: src, _csrf: classCsrf, selectedDateRange: JSON.stringify(rng) }) })).text());
const T = await teacherIds();
return readRows(d, /lessonreports\?lsId=(\d+)/, (m, c) => {
const kz = c.group.split("_").pop(), t = T.find(x => x.shortName === kz) || T.find(x => x.shortName === c.teachers[0]);
return Object.assign(c, { lsid: m[1], tid: t ? String(t.id) : "", kid: src, other: true });
});
};
let saved = [], src = "my";
try { saved = JSON.parse(localStorage.getItem("kh-abs-kurse") || "[]"); } catch (e) { saved = []; }
try { const s0 = localStorage.getItem("kh-abs-quelle") || ""; if (qClasses.some(k => k.id === s0)) src = s0; } catch (e) {}
box.innerHTML = "<h2>" + TITLE + "</h2>" +
"<label class='lb'>Halbjahr<select id='kh-hj'>" + hjs.map((r, i) => "<option value='" + i + "'" + (i === defHj ? " selected" : "") + ">" + esc(r.name) + " (" + fmt(r.startDate) + " – " + fmt(r.endDate) + ")</option>").join("") + "</select></label>" +
"<label class='lb'>Kurse<select id='kh-src'><option value='my'>Meine Kurse</option>" + (qClasses.length ? "<optgroup label='Alle Kurse einer Klasse (Q-Phase)'>" +
qClasses.map(k => "<option value='" + esc(k.id) + "'" + (k.id === src ? " selected" : "") + ">Klasse " + esc(k.name) + "</option>").join("") + "</optgroup>" : "") + "</select></label>" +
"<div class='lb'><span id='kh-lh'>Deine Kurse in der Q-Phase</span><div class='list' id='kh-list'><p class='msg'>Kurse werden geladen …</p></div></div>" +
"<label class='opt'><input type='checkbox' id='kh-all'> <span>Auch andere Kurse zeigen (nicht Q-Phase des BG)</span></label>" +
"<p class='msg' id='kh-msg'>Das Kursheft öffnet sich in einem neuen Tab: je Kurs Deckblatt, Fehlstundenmatrix und Arbeitsbericht. Die Daten bleiben in deinem Browser.</p>" +
"<div class='row'><button type='button' class='sec' id='kh-cancel'>Abbrechen</button><button type='button' id='kh-go' disabled>Kursheft erstellen</button></div>";
box.querySelector("#kh-cancel").onclick = close;
const msg = box.querySelector("#kh-msg"), listEl = box.querySelector("#kh-list"), go = box.querySelector("#kh-go");
let courses = [];
const showList = () => {
const all = box.querySelector("#kh-all").checked, mine = src === "my";
const shown = courses.filter(c => all || (isBG(c) && !/^0$/.test(c.wst)));
listEl.innerHTML = shown.length ? shown.map(c => "<label><input type='checkbox' value='" + c.lsid + "'" + ((saved.length ? saved.includes(c.group) : mine && isBG(c)) ? " checked" : "") + "><span><strong>" + esc(c.group) + "</strong><small>" +
esc(c.subject) + (mine ? "" : " · " + esc(c.group.split("_").pop())) + " · " + esc(c.classes.join(", ")) + (c.wst ? " · " + esc(c.wst) + " Wochenstunden" : "") + "</small></span></label>").join("")
: "<p class='msg'>" + (courses.length ? "Keine Kurse der Q-Phase (BG) in diesem Halbjahr." + (mine && qClasses.length ? " Oben unter „Kurse“ kannst du eine Klasse der Q-Phase wählen." : "") : "Keine Kurse in diesem Halbjahr gefunden.") + "</p>";
const upd = () => { go.disabled = !listEl.querySelector("input:checked"); };
listEl.querySelectorAll("input").forEach(i => i.onchange = upd);
upd();
};
const reload = async () => {
src = box.querySelector("#kh-src").value;
try { localStorage.setItem("kh-abs-quelle", src === "my" ? "" : src); } catch (e) {}
box.querySelector("#kh-lh").textContent = src === "my" ? "Deine Kurse in der Q-Phase" : "Kurse der " + box.querySelector("#kh-src").selectedOptions[0].text;
listEl.innerHTML = "<p class='msg'>Kurse werden geladen …</p>"; go.disabled = true;
try { courses = await loadCourses(hjs[+box.querySelector("#kh-hj").value], src); showList(); }
catch (e) { listEl.innerHTML = "<p class='msg err'>Die Kursliste ließ sich nicht laden.</p>"; }
};
box.querySelector("#kh-hj").onchange = reload;
box.querySelector("#kh-src").onchange = reload;
box.querySelector("#kh-all").onchange = showList;
await reload();
go.onclick = async () => {
const hj = hjs[+box.querySelector("#kh-hj").value];
const pick = courses.filter(c => listEl.querySelector("input[value='" + c.lsid + "']:checked"));
if (!pick.length) return;
try { localStorage.setItem("kh-abs-kurse", JSON.stringify(pick.map(c => c.group))); } catch (e) {}
const out = window.open("", "_blank");
if (!out) { msg.className = "msg err"; msg.textContent = "Der Browser hat den neuen Tab blockiert. Bitte Pop-ups für WebUntis erlauben und erneut versuchen."; return; }
out.document.write("<title>Kursheft wird erstellt</title><p style='font:16px Segoe UI,Arial,sans-serif;padding:24px'>Berichte werden aus WebUntis geladen …</p>");
go.disabled = true; msg.className = "msg";
try {
const base = O + "reports.do?";
const getReport = async (form, lsid, name, extra) => {
const p = new URLSearchParams(new FormData(form));
const set = Object.assign({ name, format: "csv", lsid, lessonId: lsid, selectedDateRange: JSON.stringify(hj),
rpt_sd: hj.startDate, rpt_ed: hj.endDate, rpt_syid: hj.id, rpt_drdtype: hj.type }, extra);
for (const k in set) p.set(k, set[k]);
const poll = async () => ((await (await fetch(O + "api/polling/REPORT", { credentials: "include" })).json()).data) || {};
let job = null;
for (let i = 0; i < 4 && !job; i++) {
const r = await (await fetch(base + p.toString(), { credentials: "include" })).json();
if (r && r.data) { job = r.data; break; }
for (let k = 0; k < 40; k++) { await sleep(1500); if (!(await poll()).hasRunningJobs) break; }
}
if (!job || job.error) throw new Error("WebUntis hat den Bericht „" + name + "“ nicht erzeugt.");
let params = job.finished ? job.reportParams : "", msgId = null;
for (let i = 0; i < 80 && !params; i++) {
await sleep(1500);
const q = await poll();
const pj = (q.pollingJobs || []).find(x => x.data && x.data.reportName === job.reportName) || (q.pollingJobs || []).find(x => x.data && String(x.data.reportName || "").indexOf(name) === 0);
if (pj && pj.hasJobError) break;
if (pj && pj.isJobFinished) { params = pj.data.reportParams; msgId = pj.data.messageId; }
}
if (!params) throw new Error("WebUntis hat den Bericht „" + name + "“ nicht rechtzeitig erzeugt. Bitte noch einmal versuchen.");
const buf = await (await fetch(base + (msgId != null ? "msgId=" + msgId + "&" : "") + params, { credentials: "include" })).arrayBuffer();
try { return new TextDecoder("utf-8", { fatal: true }).decode(buf); } catch (e) { return new TextDecoder("windows-1252").decode(buf); }
};
const names = {}, rooms = {};
try {
msg.textContent = "Lehrkraft und Räume werden abgerufen …";
const tok = await (await fetch(O + "api/token/new", { credentials: "include" })).text();
const H = { credentials: "include", headers: { Authorization: "Bearer " + tok } };
let persons = [], teachers = [];
try { persons = (await (await fetch(O + "api/user/persons", H)).json()).data.persons || []; } catch (e) {}
try {
const day = new Date().toISOString().slice(0, 10);
teachers = ((await (await fetch(O + "api/rest/view/v1/timetable/filter?resourceType=TEACHER&timetableType=STANDARD&start=" + day + "&end=" + day, H)).json()).teachers || []).map(t => t.teacher || t);
} catch (e) {}
const tids = [...new Set(pick.map(c => +c.tid).filter(Boolean))];
for (const id of tids) {
const t = teachers.find(x => x.id === id), p = persons.find(x => x.type === 2 && x.id === id);
const last = (t && t.longName) || "", full = (p && p.fullName) || "";
const first = last && full.indexOf(last) === 0 ? full.slice(last.length).trim() : "";
if (last) names[id] = (first ? first + " " : "") + last;
}
const end = toDate(Math.min(today, hj.endDate)), weeks = [0, 7, 14, 21, 28, 35].map(k => new Date(end - k * 864e5).toISOString().slice(0, 10));
for (const id of tids) {
const js = await Promise.all(weeks.map(w => fetch(O + "api/public/timetable/weekly/data?elementType=2&elementId=" + id + "&date=" + w + "&formatId=1", { credentials: "include" }).then(r => r.json()).catch(() => null)));
for (const j of js) {
const res = j && j.data && j.data.result && j.data.result.data;
if (!res) continue;
const els = {}; (res.elements || []).forEach(e => { els[e.type + ":" + e.id] = e.name; });
for (const per of (res.elementPeriods[String(id)] || [])) {
if (per.cellState === "CANCEL") continue;
const r = rooms[per.lessonId] || (rooms[per.lessonId] = {});
(per.elements || []).filter(e => e.type === 4).forEach(e => { const n = els["4:" + e.id]; if (n) r[n] = (r[n] || 0) + 1; });
}
}
}
} catch (e) {  }
const list = [];
for (let i = 0; i < pick.length; i++) {
const c = pick[i];
msg.textContent = "Kurs " + (i + 1) + " von " + pick.length + " (" + c.group + "): Berichte werden abgerufen …";
const fd = parse(await (await fetch(O + "lessonreports.do?lsId=" + c.lsid + (c.tid ? "&reportTeacherId=" + c.tid + "&reportElementType=2" : "&reportElementType=1&reportKlasseId=" + c.kid), { credentials: "include" })).text());
const form = fd.querySelector("#repCommand") || (fd.querySelector("input[name=_csrf]") || {}).form;
if (!form) throw new Error("Die Berichte zum Kurs " + c.group + " ließen sich nicht öffnen.");
const work = await getReport(form, c.lsid, "WorkReportLesson", { withStudentAbsences: "true", withTeachingMethods: "false" });
const matrix = await getReport(form, c.lsid, "AbsenceMatrix", {});
const r = rooms[c.lsid] || {};
list.push({ group: c.group, subject: c.subject, subjectShort: c.subjectShort, classes: c.classes, teacher: c.teachers[0] || "", teacherName: names[+c.tid] || "",
wst: c.wst, rooms: Object.keys(r).filter(k => r[k] >= .3 * Math.max(...Object.values(r))).sort((a, b) => r[b] - r[a]), work, matrix });
}
restore();
const raw = Uint8Array.from(atob(TOOL_B64), ch => ch.charCodeAt(0));
const html = await new Response(new Blob([raw]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).text();
out.document.open(); out.document.write(html); out.document.close();
for (let i = 0; i < 100 && typeof out.khLoad !== "function"; i++) await sleep(100);
if (typeof out.khLoad !== "function") throw new Error("Das Kursheft ließ sich nicht aufbauen.");
out.khLoad({ schoolyear, hj: { name: hj.name, start: hj.startDate, end: hj.endDate }, today, courses: list });
close();
} catch (e) {
try { out.document.body.innerHTML = "<p style='font:16px Segoe UI,Arial,sans-serif;padding:24px;color:#b3261e'>" + String(e.message).replace(/</g, "&lt;") + "</p>"; } catch (x) {}
msg.className = "msg err"; msg.textContent = e.message; go.disabled = false;
}
};
})();
