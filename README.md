# VeraRad

Company homepage MVP for VeraRad: the evaluation layer for medical AI agents, starting with radiology.

## Local preview

Open `index.html` directly, or run:

```bash
python3 -m http.server 4173
```

Then visit:

```text
http://localhost:4173
```

## Positioning

VeraRad helps medical multimodal model teams evaluate whether their medical AI agents can perform clinical workflow tasks safely, use context appropriately, avoid critical misses, and turn failures into post-training data. The initial wedge is radiology workflow evaluation.

## Core sections

- Problem: static image benchmarks do not capture workflow readiness.
- Platform: workflow cases, evaluation harness, clinical scorecards, training data exports.
- Metrics: indication use, prior comparison, critical miss rate, EHR hallucination, urgency detection, report acceptability.
- Initial suite: ICU portable chest X-ray agent evaluation.
- CTA: pilot program for medical VLM and radiology AI teams.
