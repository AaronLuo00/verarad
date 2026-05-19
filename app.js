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

const metricBoard = document.querySelector("#metricBoard");

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

renderMetrics();
