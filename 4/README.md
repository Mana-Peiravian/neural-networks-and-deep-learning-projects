# Molecular Graph–Sequence Learning and Generation

## Overview

Align molecular graph and SELFIES representations, then generate and screen molecular sequences.

## Assignment objectives

Clean Lipophilicity; implement a three-layer weighted GCN and specified causal Transformer; warm up language modeling, jointly align views, evaluate retrieval, and validate 300 generations at each of three temperatures.

## Implemented approach

RDKit canonicalization, deduplication, and a 100-symbol SELFIES limit precede fixed splits and a training-only vocabulary. Separate atom-field embeddings feed three residual GCNConv layers with approximate bond-order weights and global mean pooling. The causal Transformer has four layers, six heads, width 192, feedforward width 512, learned positions, and causal/padding masks. Normalized 128-dimensional projections align graph and EOS representations. After 15 warm-up epochs, up to 40 joint epochs optimize token cross-entropy, symmetric contrastive loss, and positive-pair cosine loss. Sampling uses top-k 20 and nucleus p=0.95. Staged screening covers parsing, sanitization, connectedness, elements, radicals, percentile ranges, and charge; canonical novelty and radius-two Morgan similarity use training structures.

## Repository structure and assignment materials

| File or directory | Purpose |
| --- | --- |
| [NNDL-Prj4-2026.pdf](NNDL-Prj4-2026.pdf) | Instructor assignment; credential review required |
| [report.pdf](report.pdf) | Submitted report; identifier review required |
| [code/molecular_gcn_transformer.ipynb](code/molecular_gcn_transformer.ipynb) | Implementation notebook |
| [code/results/](code/results/) | CSV/JSON statistics and experimental audits |
| [code/figures/](code/figures/) | Learning curves and generated molecular illustrations |
| [code/data/lipo/raw/Lipophilicity.csv](code/data/lipo/raw/Lipophilicity.csv) | Raw dataset; review redistribution rights |

Original academic materials are unchanged. Review [publication findings](../PUBLICATION_REVIEW.md) before sharing them.

## Requirements and input data

Observed tools: Python, PyTorch, PyTorch Geometric, RDKit, SELFIES, NumPy, pandas, scikit-learn, Matplotlib, tqdm. Use a Jupyter-capable Python environment. No complete pinned environment was supplied; versions are not guessed.

MoleculeNet Lipophilicity raw CSV and processed PyG tensors are present. Saved statistics record 4,200 originals, six sequence-length removals, 4,194 usable molecules, splits 3,355/419/420, and vocabulary size 52. The lipophilicity target is metadata, not a property-prediction training objective.

## Running the project

**Inferred and unverified**, from the repository root:

```sh
cd 4/code
jupyter notebook "molecular_gcn_transformer.ipynb"
```

Keep the data/lipo cache available. MoleculeNet may download/process missing data; the notebook tries Lipophilicity then the Lipo alias. It writes results, figures, checkpoints, and a generated report. Optional report compilation needs pdflatex; the learning pipeline does not.

Manual step: select the matching Python kernel and review configuration before executing cells in order. Commands open notebooks; they do not execute the experiment. Rerun in a separate copy because cells train models and may overwrite outputs, weights, or reports. No coursework notebook was executed during portfolio preparation.

## Saved results and evaluation

Saved CSV records graph-to-sequence test top-1/top-5 of 81.90%/99.05% and reverse retrieval of 79.05%/98.10% on 420 pairs. Mean matching/nonmatching cosine is 0.8922/0.0129. Acceptance is 273/300 at temperature 0.8 (91.00%), 250/300 at 1.0 (83.33%), and 183/300 at 1.2 (61.00%); all 900 pass RDKit parsing/sanitization. Per temperature, accepted structures are unique and novel versus training under the implemented definitions. Recorded runtime is 2,110.3 seconds on CPU, excluding installation and initial dataset loading.

Measurements are attributed to submitted artifacts, not independently reproduced benchmarks.

## Notes and limitations

The trained joint-model checkpoint is absent. Random splits do not test scaffold generalization; scalar bond weights omit richer chemistry. Validity, novelty, and QED do not establish stability, synthesis feasibility, safety, or biological utility. The approximate 30-minute Kaggle GPU target was not verified by this CPU execution.

## Academic context

Completed as part of a master's-level Artificial Intelligence course, for portfolio and educational purposes. Follow institutional academic-integrity rules and respect instructor ownership of assignment materials.
