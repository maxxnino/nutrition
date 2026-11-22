"use strict";

/* ========== 1. FOOD DATABASE (edit freely) ==========
   Values are per 100 g and approximate. Keep each id unique and stable. */
const FOODS = [
    { id: "white-rice-cooked", name: "White rice, cooked", category: "Grains", nutritionPer100g: { calories: 130, protein: 2.7, fat: 0.3, carbs: 28.2, potassium: 35, magnesium: 12, calcium: 10, zinc: 0.5, iron: 0.2, copper: 0.1 } },
    { id: "bread-wholewheat", name: "Whole wheat bread", category: "Grains", nutritionPer100g: { calories: 252, protein: 12.5, fat: 3.5, carbs: 43, potassium: 250, magnesium: 80, calcium: 120, zinc: 1.8, iron: 2.5, copper: 0.3 } },
    { id: "pasta-cooked", name: "Pasta, cooked", category: "Grains", nutritionPer100g: { calories: 158, protein: 5.8, fat: 0.9, carbs: 30.9, potassium: 44, magnesium: 18, calcium: 7, zinc: 0.5, iron: 1.3, copper: 0.1 } },
    { id: "chicken-breast-cooked", name: "Chicken breast, cooked", category: "Meat", nutritionPer100g: { calories: 165, protein: 31, fat: 3.6, carbs: 0, potassium: 256, magnesium: 29, calcium: 15, zinc: 1, iron: 1, copper: 0.05 } },
    { id: "beef-lean-cooked", name: "Beef, lean, cooked", category: "Meat", nutritionPer100g: { calories: 217, protein: 26, fat: 12, carbs: 0, potassium: 318, magnesium: 21, calcium: 18, zinc: 5.9, iron: 2.6, copper: 0.07 } },
    { id: "pork-loin-cooked", name: "Pork loin, cooked", category: "Meat", nutritionPer100g: { calories: 242, protein: 27, fat: 14, carbs: 0, potassium: 423, magnesium: 28, calcium: 19, zinc: 2.4, iron: 0.9, copper: 0.07 } },
    { id: "salmon-cooked", name: "Salmon, cooked", category: "Fish", nutritionPer100g: { calories: 206, protein: 22, fat: 12.4, carbs: 0, potassium: 384, magnesium: 30, calcium: 15, zinc: 0.6, iron: 0.3, copper: 0.05 } },
    { id: "tuna-canned", name: "Tuna, canned in water", category: "Fish", nutritionPer100g: { calories: 116, protein: 25.5, fat: 0.8, carbs: 0, potassium: 237, magnesium: 27, calcium: 11, zinc: 0.8, iron: 1.4, copper: 0.04 } },
    { id: "egg-whole", name: "Egg, whole, cooked", category: "Eggs & dairy", nutritionPer100g: { calories: 155, protein: 12.6, fat: 10.6, carbs: 1.1, potassium: 126, magnesium: 10, calcium: 50, zinc: 1.3, iron: 1.2, copper: 0.07 } },
    { id: "milk-whole", name: "Milk, whole", category: "Eggs & dairy", nutritionPer100g: { calories: 61, protein: 3.2, fat: 3.3, carbs: 4.8, potassium: 132, magnesium: 10, calcium: 113, zinc: 0.4, iron: 0, copper: 0.01 } },
    { id: "yogurt-plain", name: "Plain yogurt", category: "Eggs & dairy", nutritionPer100g: { calories: 61, protein: 3.5, fat: 3.3, carbs: 4.7, potassium: 155, magnesium: 12, calcium: 121, zinc: 0.6, iron: 0.05, copper: 0.01 } },
    { id: "cheddar", name: "Cheddar cheese", category: "Eggs & dairy", nutritionPer100g: { calories: 403, protein: 25, fat: 33, carbs: 1.3, potassium: 98, magnesium: 28, calcium: 721, zinc: 3.1, iron: 0.7, copper: 0.03 } },
    { id: "tofu-firm", name: "Tofu, firm", category: "Plant protein", nutritionPer100g: { calories: 144, protein: 17, fat: 8.7, carbs: 2.8, potassium: 237, magnesium: 58, calcium: 350, zinc: 1.6, iron: 2.7, copper: 0.4 } },
    { id: "pumpkin-seeds", name: "Pumpkin seeds", category: "Nuts & seeds", nutritionPer100g: { calories: 559, protein: 30.2, fat: 49, carbs: 10.7, potassium: 809, magnesium: 592, calcium: 46, zinc: 7.8, iron: 8.8, copper: 1.3 } },
    { id: "banana", name: "Banana", category: "Fruit", nutritionPer100g: { calories: 89, protein: 1.1, fat: 0.3, carbs: 22.8, potassium: 358, magnesium: 27, calcium: 5, zinc: 0.15, iron: 0.26, copper: 0.08 } },
    { id: "apple", name: "Apple, with skin", category: "Fruit", nutritionPer100g: { calories: 52, protein: 0.3, fat: 0.2, carbs: 13.8, potassium: 107, magnesium: 5, calcium: 6, zinc: 0.04, iron: 0.12, copper: 0.03 } },
    { id: "orange", name: "Orange", category: "Fruit", nutritionPer100g: { calories: 47, protein: 0.9, fat: 0.1, carbs: 11.8, potassium: 181, magnesium: 10, calcium: 40, zinc: 0.07, iron: 0.1, copper: 0.04 } },
    { id: "potato-boiled", name: "Potato, boiled", category: "Vegetables", nutritionPer100g: { calories: 87, protein: 1.9, fat: 0.1, carbs: 20.1, potassium: 379, magnesium: 22, calcium: 5, zinc: 0.3, iron: 0.3, copper: 0.1 } },
    { id: "spinach-raw", name: "Spinach, raw", category: "Vegetables", nutritionPer100g: { calories: 23, protein: 2.9, fat: 0.4, carbs: 3.6, potassium: 558, magnesium: 79, calcium: 99, zinc: 0.5, iron: 2.7, copper: 0.13 } },
    { id: "broccoli-cooked", name: "Broccoli, cooked", category: "Vegetables", nutritionPer100g: { calories: 35, protein: 2.4, fat: 0.4, carbs: 7.2, potassium: 293, magnesium: 21, calcium: 40, zinc: 0.4, iron: 0.7, copper: 0.05 } },
    { id: "avocado", name: "Avocado", category: "Vegetables", nutritionPer100g: { calories: 160, protein: 2, fat: 14.7, carbs: 8.5, potassium: 485, magnesium: 29, calcium: 12, zinc: 0.6, iron: 0.6, copper: 0.19 } },
    { id: "cashew", name: "Cashew", category: "Nuts & seeds", nutritionPer100g: { calories: 574, protein: 15, fat: 46, carbs: 33, potassium: 565, magnesium: 260, calcium: 45, zinc: 6, iron: 6, copper: 2 } },
    { id: "natto", name: "Natto", category: "Plant protein", nutritionPer100g: { calories: 212, protein: 18, fat: 11, carbs: 14, potassium: 729, magnesium: 115, calcium: 217, zinc: 3, iron: 9, copper: 1 } },
];

/* ========== 2. NUTRIENTS & DEFAULT TARGETS ========== */
const NUTRIENTS = [
    { key: "calories", label: "Calories", unit: "kcal", target: 2400, dec: 0 },
    { key: "protein", label: "Protein", unit: "g", target: 120, dec: 1 },
    { key: "fat", label: "Fat", unit: "g", target: 80, dec: 1 },
    { key: "carbs", label: "Carbohydrates", unit: "g", target: 300, dec: 1 },
    { key: "potassium", label: "Potassium", unit: "mg", target: 3500, dec: 0 },
    { key: "magnesium", label: "Magnesium", unit: "mg", target: 400, dec: 0 },
    { key: "calcium", label: "Calcium", unit: "mg", target: 1000, dec: 0 },
    { key: "zinc", label: "Zinc", unit: "mg", target: 11, dec: 1 },
    { key: "iron", label: "Iron", unit: "mg", target: 10, dec: 1 },
    { key: "copper", label: "Copper", unit: "mg", target: 0.9, dec: 2 }
];
const DEFAULT_TARGETS = Object.fromEntries(NUTRIENTS.map(n => [n.key, n.target]));

/* ========== 3. STATE & STORAGE ========== */
const LOG_KEY = "nutritionTracker.log.v1";
const TARGETS_KEY = "nutritionTracker.targets.v1";
const FOOD_BY_ID = new Map(FOODS.map(f => [f.id, f]));

let targets = { ...DEFAULT_TARGETS };
let log = { date: todayStr(), entries: [] }; // entries: { id, foodId, grams }

function todayStr() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function readJSON(key) {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
}
function writeJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable: keep working in memory */ }
}
function newId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
function isValidGrams(g) { return typeof g === "number" && isFinite(g) && g > 0; }

function loadState() {
    const t = readJSON(TARGETS_KEY);
    if (t && typeof t === "object") {
        for (const n of NUTRIENTS) {
            const v = Number(t[n.key]);
            if (isFinite(v) && v >= 0 && t[n.key] !== null && t[n.key] !== "") targets[n.key] = v;
        }
    }
    const saved = readJSON(LOG_KEY);
    if (saved && saved.date === todayStr() && Array.isArray(saved.entries)) {
        log.entries = saved.entries.filter(e => e && typeof e.id === "string" && FOOD_BY_ID.has(e.foodId) && isValidGrams(Number(e.grams)))
            .map(e => ({ id: e.id, foodId: e.foodId, grams: Number(e.grams) }));
    }
}
function saveLog() { writeJSON(LOG_KEY, log); }
function saveTargets() { writeJSON(TARGETS_KEY, targets); }

/* ========== 4. CALCULATIONS (single source of truth) ========== */
function calcNutrition(food, grams) {
    const out = {};
    for (const n of NUTRIENTS) out[n.key] = (Number(food.nutritionPer100g[n.key]) || 0) * grams / 100;
    return out;
}
function calcTotals(entries) {
    const totals = Object.fromEntries(NUTRIENTS.map(n => [n.key, 0]));
    for (const e of entries) {
        const food = FOOD_BY_ID.get(e.foodId);
        if (!food) continue;
        const v = calcNutrition(food, e.grams);
        for (const n of NUTRIENTS) totals[n.key] += v[n.key];
    }
    return totals;
}
const fmt = (v, dec) => v.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: dec });

/* ========== 5. DOM ========== */
const $ = id => document.getElementById(id);
const el = (tag, cls, text) => { const e = document.createElement(tag); if (cls) e.className = cls; if (text !== undefined) e.textContent = text; return e; };

/* ----- Dashboard ----- */
function renderDashboard() {
    const totals = calcTotals(log.entries);
    const root = $("dashboard");
    if (!root.children.length) {
        for (const n of NUTRIENTS) {
            const row = el("div", "nut"); row.id = "nut-" + n.key;
            row.innerHTML = '<div class="nut-top"><strong></strong><span class="nut-amt"></span></div>' +
                '<div class="bar"><span></span></div><div class="nut-sub"><span class="pct"></span><span class="rem"></span></div>';
            row.querySelector("strong").textContent = n.label;
            root.appendChild(row);
        }
    }
    for (const n of NUTRIENTS) {
        const row = $("nut-" + n.key), cur = totals[n.key], tgt = targets[n.key];
        const pct = tgt > 0 ? cur / tgt * 100 : 0;
        const over = tgt > 0 && cur > tgt;
        row.classList.toggle("over", over);
        row.querySelector(".nut-amt").textContent = fmt(cur, n.dec) + " / " + fmt(tgt, n.dec) + " " + n.unit;
        row.querySelector(".bar span").style.width = Math.min(pct, 100) + "%";
        row.querySelector(".pct").textContent = tgt > 0 ? Math.round(pct) + "%" : "No target";
        row.querySelector(".rem").textContent = over
            ? fmt(cur - tgt, n.dec) + " " + n.unit + " over"
            : fmt(Math.max(tgt - cur, 0), n.dec) + " " + n.unit + " left";
    }
}

/* ----- Food selector ----- */
function renderFoodOptions() {
    const q = $("food-search").value.trim().toLowerCase();
    const sel = $("food-select");
    const prev = sel.value;
    sel.innerHTML = "";
    const matches = FOODS.filter(f => f.name.toLowerCase().includes(q));
    for (const f of matches) {
        const o = el("option", "", f.name + (f.category ? " (" + f.category + ")" : ""));
        o.value = f.id; sel.appendChild(o);
    }
    $("no-match").hidden = matches.length > 0;
    if (matches.length) sel.value = matches.some(f => f.id === prev) ? prev : matches[0].id;
}
function addFood() {
    const err = $("add-error"), foodId = $("food-select").value;
    const raw = $("food-qty").value.trim(), grams = Number(raw);
    if (!foodId) { err.textContent = "Choose a food first."; err.hidden = false; return; }
    if (raw === "" || !isValidGrams(grams)) { err.textContent = "Enter a quantity greater than 0 g."; err.hidden = false; return; }
    err.hidden = true;
    log.entries.push({ id: newId(), foodId, grams });
    saveLog(); renderLog(); renderDashboard();
}

/* ----- Log ----- */
function updateEntryMacros(li, entry) {
    const v = calcNutrition(FOOD_BY_ID.get(entry.foodId), entry.grams);
    li.querySelector(".macros").textContent =
        fmt(v.calories, 0) + " kcal · P " + fmt(v.protein, 1) + " g · F " + fmt(v.fat, 1) + " g · C " + fmt(v.carbs, 1) + " g";
}
function renderLog() {
    const list = $("log");
    list.innerHTML = "";
    $("log-empty").hidden = log.entries.length > 0;
    $("clear-btn").disabled = log.entries.length === 0;
    for (const entry of log.entries) {
        const food = FOOD_BY_ID.get(entry.foodId);
        const li = el("li", "entry");
        li.appendChild(el("div", "entry-name", food.name));
        const row = el("div", "entry-row");
        const qty = el("label", "qty"); qty.style.margin = "0";
        qty.append("Grams");
        const input = el("input"); input.type = "number"; input.min = "0"; input.step = "any"; input.inputMode = "decimal";
        input.value = String(entry.grams);
        input.addEventListener("input", () => {
            const g = Number(input.value);
            if (input.value.trim() === "" || !isValidGrams(g)) { input.classList.add("invalid"); return; }
            input.classList.remove("invalid");
            entry.grams = g; saveLog(); updateEntryMacros(li, entry); renderDashboard();
        });
        input.addEventListener("blur", () => { input.value = String(entry.grams); input.classList.remove("invalid"); });
        qty.appendChild(input);
        const macros = el("span", "macros");
        const rm = el("button", "", "Remove"); rm.type = "button";
        rm.setAttribute("aria-label", "Remove " + food.name);
        rm.addEventListener("click", () => {
            log.entries = log.entries.filter(e => e.id !== entry.id);
            saveLog(); renderLog(); renderDashboard();
        });
        row.append(qty, macros, rm);
        li.appendChild(row);
        list.appendChild(li);
        updateEntryMacros(li, entry);
    }
}

/* ----- Targets ----- */
function renderTargets() {
    const root = $("targets");
    root.innerHTML = "";
    for (const n of NUTRIENTS) {
        const wrap = el("div");
        const label = el("label", "", n.label); label.htmlFor = "t-" + n.key;
        const box = el("div", "t-wrap");
        const input = el("input"); input.id = "t-" + n.key; input.type = "number"; input.min = "0"; input.step = "any"; input.inputMode = "decimal";
        input.value = String(targets[n.key]);
        input.addEventListener("input", () => {
            const v = Number(input.value);
            if (input.value.trim() === "" || !isFinite(v) || v < 0) { input.classList.add("invalid"); return; }
            input.classList.remove("invalid");
            targets[n.key] = v; saveTargets(); renderDashboard();
        });
        input.addEventListener("blur", () => { input.value = String(targets[n.key]); input.classList.remove("invalid"); });
        box.append(input, el("span", "", n.unit));
        wrap.append(label, box);
        root.appendChild(wrap);
    }
}

/* ========== 6. INIT ========== */
function rolloverIfNewDay() {
    if (log.date !== todayStr()) { log = { date: todayStr(), entries: [] }; saveLog(); renderLog(); renderDashboard(); showDate(); }
}
function showDate() {
    $("today-label").textContent = new Date().toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}
function init() {
    loadState();
    showDate();
    renderFoodOptions(); renderTargets(); renderLog(); renderDashboard();

    $("food-search").addEventListener("input", renderFoodOptions);
    $("food-search").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); addFood(); } });
    $("food-qty").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); addFood(); } });
    $("add-btn").addEventListener("click", addFood);
    $("clear-btn").addEventListener("click", () => {
        if (log.entries.length && confirm("Clear all foods logged today? This cannot be undone.")) {
            log.entries = []; saveLog(); renderLog(); renderDashboard();
        }
    });
    $("reset-btn").addEventListener("click", () => {
        if (confirm("Restore all daily targets to their defaults?")) {
            targets = { ...DEFAULT_TARGETS }; saveTargets(); renderTargets(); renderDashboard();
        }
    });
    document.addEventListener("visibilitychange", () => { if (!document.hidden) rolloverIfNewDay(); });
}
init();
