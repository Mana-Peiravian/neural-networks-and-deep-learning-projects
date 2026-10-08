# Tiny Shakespeare Memory Duel

## Overview

Compare hidden-state feedback and output-distribution feedback for next-character prediction.

## Assignment objectives

Train both recurrent architectures under shared settings; compare loss, accuracy, perplexity, convergence, and generation from the same seed at temperatures 0.4, 0.8, and 1.2.

## Implemented approach

The notebook uses all 1,115,394 characters, a sorted 65-character vocabulary, a contiguous 90/10 split, and nonoverlapping 100-character sequences with shifted targets. Elman uses nn.RNN with tanh; Jordan explicitly feeds back its predicted softmax distribution. Both use embeddings of width 128, hidden size 256, Adam at 0.004, batch size 128, 20 epochs, and gradient clipping at 1.0. Context resets per training batch; generation warms recurrence with the shared ROMEO seed.

## Repository structure and assignment materials

| File or directory | Purpose |
| --- | --- |
| [NNDL-Prj2-2026.pdf](NNDL-Prj2-2026.pdf) | Instructor assignment; credential review required |
| [HW#2-Report.pdf](HW%232-Report.pdf) | Submitted report; identifier review required |
| [NNDL_Tiny_Shakespeare_Memory_Duel.ipynb](NNDL_Tiny_Shakespeare_Memory_Duel.ipynb) | Implementation notebook |
| [tiny-shakespeare.txt](tiny-shakespeare.txt) | Input corpus |
| [tiny_shakespeare_memory_duel_results.json](tiny_shakespeare_memory_duel_results.json) | Saved settings, history, and metrics |

Original academic materials are unchanged. Review [publication findings](../PUBLICATION_REVIEW.md) before sharing them.

## Requirements and input data

Observed tools: Python, PyTorch, NumPy, pandas, Matplotlib. Use a Jupyter-capable Python environment. No complete pinned environment was supplied; versions are not guessed.

Local tiny-shakespeare.txt; saved summary records 10,038 training and 1,115 validation sequences. Local corpus provenance and redistribution terms are unspecified.

## Running the project

**Inferred and unverified**, from the repository root:

```sh
cd 2
jupyter notebook "NNDL_Tiny_Shakespeare_Memory_Duel.ipynb"
```

Keep tiny-shakespeare.txt beside the notebook.

Manual step: select the matching Python kernel and review configuration before executing cells in order. Commands open notebooks; they do not execute the experiment. Rerun in a separate copy because cells train models and may overwrite outputs, weights, or reports. No coursework notebook was executed during portfolio preparation.

## Saved results and evaluation

Saved JSON records epoch-20 validation accuracy 52.04% and perplexity 5.0626 for Elman, versus 40.46% and 7.3207 for Jordan. The report discusses better Elman coherence and noisier high-temperature text. These are submitted measurements, not a new execution.

Measurements are attributed to submitted artifacts, not independently reproduced benchmarks.

## Notes and limitations

The report table labels these final metrics as epoch 8, while JSON records epoch 20; documentation follows JSON. Vocabulary construction sees the full corpus before splitting. Equal hidden dimensions do not imply equal parameter counts. Only one seeded run is supplied.

## Academic context

Completed as part of a master's-level Artificial Intelligence course, for portfolio and educational purposes. Follow institutional academic-integrity rules and respect instructor ownership of assignment materials.
