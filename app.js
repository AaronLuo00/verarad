const metrics = [
  {
    tag: "Context",
    title: "Indication use",
    body: "Measures whether the model uses the clinical question to guide the report instead of producing a generic image description.",
  },
  {
    tag: "Workflow",
    title: "Prior comparison",
    body: "Evaluates whether the model correctly identifies new, stable, improved, or worsened findings when prior context is available.",
  },
  {
    tag: "Safety",
    title: "Critical miss rate",
    body: "Tracks high-risk misses such as pneumothorax, misplaced tubes or lines, pulmonary edema, and other urgent findings.",
  },
  {
    tag: "Grounding",
    title: "EHR hallucination",
    body: "Detects unsupported clinical claims, invented history, and cases where contextual information misleads model reasoning.",
  },
  {
    tag: "Clinical",
    title: "Urgency detection",
    body: "Assesses whether findings that require escalation are flagged without causing unnecessary over-alerting.",
  },
  {
    tag: "Report quality",
    title: "Radiologist acceptability",
    body: "Scores whether findings, impression, uncertainty, and follow-up language are clinically usable in a radiology workflow.",
  },
  {
    tag: "Behavior",
    title: "Tool-use discipline",
    body: "Captures whether an agent retrieves necessary context, avoids irrelevant calls, and does not submit prematurely.",
  },
  {
    tag: "Learning loop",
    title: "Training value",
    body: "Labels which failures can be converted into SFT examples, preference pairs, expert critiques, reward signals, or regression tests.",
  },
];

const scorecards = {
  baseline: {
    name: "Baseline VLM",
    risk: "High risk",
    overall: 61,
    scores: {
      "Finding accuracy": 68,
      "Critical safety": 45,
      "Prior usage": 38,
      "Report quality": 70,
      Grounding: 56,
    },
  },
  agent: {
    name: "Agentic VLM",
    risk: "Medium risk",
    overall: 74,
    scores: {
      "Finding accuracy": 76,
      "Critical safety": 66,
      "Prior usage": 72,
      "Report quality": 78,
      Grounding: 70,
    },
  },
  after: {
    name: "After Fine-tuning",
    risk: "Lower risk",
    overall: 84,
    scores: {
      "Finding accuracy": 86,
      "Critical safety": 81,
      "Prior usage": 88,
      "Report quality": 84,
      Grounding: 82,
    },
  },
};

const metricBoard = document.querySelector("#metricBoard");
const scoreBars = document.querySelector("#scoreBars");
const modelName = document.querySelector("#modelName");
const riskBadge = document.querySelector("#riskBadge");
const radarCore = document.querySelector("#radarCore");

function renderMetrics() {
  metricBoard.innerHTML = metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <strong>${metric.tag}</strong>
          <h3>${metric.title}</h3>
          <p>${metric.body}</p>
        </article>
      `,
    )
    .join("");
}

function renderScorecard(key) {
  const card = scorecards[key];
  modelName.textContent = card.name;
  riskBadge.textContent = card.risk;
  radarCore.textContent = card.overall;
  riskBadge.style.background = key === "baseline" ? "#d86f59" : key === "agent" ? "#d8b15e" : "#0b7470";

  scoreBars.innerHTML = Object.entries(card.scores)
    .map(
      ([label, score]) => `
        <div class="score-row">
          <span>${label}</span>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${score}%"></div>
          </div>
          <strong>${score}</strong>
        </div>
      `,
    )
    .join("");
}

document.querySelectorAll(".model-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".model-tab").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-pressed", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-pressed", "true");
    renderScorecard(tab.dataset.model);
  });
});

renderMetrics();
renderScorecard("baseline");
