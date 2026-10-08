# Neural Logic Circuits and Hopfield Memory

## Overview

Explore linear separability in Boolean circuits and recurrent attractors in a one-bit memory.

## Assignment objectives

Enumerate three- and four-input truth tables in binary and bipolar form; implement Delta learning; compare accuracy and convergence; construct a biased Hopfield SR latch and test noisy states.

## Implemented approach

SingleNeuronDelta implements online sigmoid-gradient updates from scratch for three-input odd parity and a four-input threshold (at least three active inputs). Learning rates are 0.5 and 0.3, seed 0, and 10,000 epochs; separately plotted experiments use 3,000 epochs. SRHopfieldLatch uses two inhibitory neurons, symmetric off-diagonal weights -1, control bias magnitude 2, asynchronous order [0, 1], and at most 20 sweeps. Exhaustive initial-state tests and one/two-bit flips distinguish convergence, valid-state recovery, and matching a defined expected output.

## Repository structure and assignment materials

| File or directory | Purpose |
| --- | --- |
| [NNDL_Pr1_2026.pdf](NNDL_Pr1_2026.pdf) | Instructor assignment; credential review required |
| [HW#1 - Report.pdf](HW%231%20-%20Report.pdf) | Submitted report; identifier review required |
| [code/multi-input_logic_gates.ipynb](code/multi-input_logic_gates.ipynb) | Implementation notebook |
| [code/sr_latch.ipynb](code/sr_latch.ipynb) | Implementation notebook |
| [code/](code/) | Both implementations |

Original academic materials are unchanged. Review [publication findings](../PUBLICATION_REVIEW.md) before sharing them.

## Requirements and input data

Observed tools: Python, NumPy, pandas, Matplotlib. Use a Jupyter-capable Python environment. No complete pinned environment was supplied; versions are not guessed.

Synthetic exhaustive truth tables (8 and 16 rows); enumerated latch controls and initial states. No external dataset.

## Running the project

**Inferred and unverified**, from the repository root:

```sh
cd 1/code
jupyter notebook "multi-input_logic_gates.ipynb"
jupyter notebook "sr_latch.ipynb"
```

No external inputs are required.

Manual step: select the matching Python kernel and review configuration before executing cells in order. Commands open notebooks; they do not execute the experiment. Rerun in a separate copy because cells train models and may overwrite outputs, weights, or reports. No coursework notebook was executed during portfolio preparation.

## Saved results and evaluation

Report and saved notebook text show 50% parity accuracy in both encodings and 100% threshold accuracy. First perfect threshold classification occurs at epoch 11 (binary) and epoch 1 (bipolar). The latch report describes set/reset/hold stabilization in one or two sweeps. Invalid forcing intentionally yields [-1, -1], a stable but noncomplementary state.

Measurements are attributed to submitted artifacts, not independently reproduced benchmarks.

## Notes and limitations

Hold from an equal-output corrupted state has no unique expected memory. Convergence does not prove recovery of the original bit. These are small exhaustive examples; interpretation depends on the invalid-input convention and update order.

## Academic context

Completed as part of a master's-level Artificial Intelligence course, for portfolio and educational purposes. Follow institutional academic-integrity rules and respect instructor ownership of assignment materials.
