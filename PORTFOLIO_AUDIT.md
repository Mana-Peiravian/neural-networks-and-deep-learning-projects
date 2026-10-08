# Portfolio audit

Prepared 2026-10-08. Course: Neural Networks and Deep Learning (2026), verified by assignment titles. Four projects; Python/Jupyter implementations spanning logic, associative memory, recurrent language modeling, generative vision, and molecular graph–sequence learning. Author name is stated in reports; degree context was provided by the user. University, department, instructor, and semester remain unverified.

## Original file inventory

61 pre-existing non-Git files were hashed, including .gitattributes. Initial Git status: four untracked folders (1/ through 4/); origin is the configured Mana-Peiravian course repository. No pre-existing README, AGENTS.md, docs site, dependency manifest, or license was found. Approximate original project sizes in bytes: {'1': 1416382, '2': 2112586, '3': 19842408, '4': 26224328}.

| Folder | Description | Report | Main implementation | New documentation |
| --- | --- | --- | --- | --- |
| 1/ | [NNDL_Pr1_2026.pdf](1/NNDL_Pr1_2026.pdf) | [HW#1 - Report.pdf](1/HW%231%20-%20Report.pdf) | code/multi-input_logic_gates.ipynb, code/sr_latch.ipynb | [1/README.md](1/README.md) |
| 2/ | [NNDL-Prj2-2026.pdf](2/NNDL-Prj2-2026.pdf) | [HW#2-Report.pdf](2/HW%232-Report.pdf) | NNDL_Tiny_Shakespeare_Memory_Duel.ipynb | [2/README.md](2/README.md) |
| 3/ | [NNDL-Prj3-2026.pdf](3/NNDL-Prj3-2026.pdf) | [report.pdf](3/report.pdf) | code/task1_cgan_fashion_mnist.ipynb, code/task2_colorization_autoencoder.ipynb | [3/README.md](3/README.md) |
| 4/ | [NNDL-Prj4-2026.pdf](4/NNDL-Prj4-2026.pdf) | [report.pdf](4/report.pdf) | code/molecular_gcn_transformer.ipynb | [4/README.md](4/README.md) |

All eight PDFs were text-extracted read-only with the installed pdftotext tool. Extraction artifacts stayed in the system temporary directory. All six notebook source structures, markdown, and saved text/results were examined statically; no cells were run. Mathematical notation and raster tables may not survive PDF text extraction, so no unsupported result was inferred from unreadable content. Student-generated figure files were inventoried; two plots were copied byte-for-byte into the site.

## Requirements versus evidence

- Project 1: code implements both Boolean expressions, binary/bipolar Delta updates, and biased asynchronous latch tests. Report and saved text support the stated truth-table accuracies. Corrupted hold states have undefined expected output; convergence and valid-state recovery remain distinct.
- Project 2: source implements Elman hidden feedback and custom Jordan softmax feedback with common hyperparameters. Saved JSON labels final values epoch 20; the report summary table says epoch 8 for those same values. Documentation uses JSON and reports the mismatch. Text vocabulary is built before the contiguous split.
- Project 3: source contains label-conditioned MLP GAN, skip-connected grayscale-to-RGB model, and optional RGB AAE. Report test means and supplied curves are cited as submitted evidence. Source input datasets are absent. The earlier bottleneck baseline is discussed in the report but not supplied separately. Notebook and report differ in the strength of their mode-collapse wording; both acknowledge limited diversity.
- Project 4: source includes prescribed architecture, warm-up/joint objectives, retrieval, generation, and validation. CSVs support reported statistics and retrieval/generation values. Joint weights are missing. Recorded CPU runtime is about 35.2 minutes and does not verify the assignment's approximate Kaggle GPU budget. Formal molecular validity is not chemical usefulness.

## Publication and reproducibility

See [publication review](PUBLICATION_REVIEW.md) for credential-bearing assignments, identifiers in all reports, paths in outputs, dataset/scene ownership, and large binaries. No original was altered to address these findings. No standard license, global requirements file, deployment workflow, or issue templates were created: ownership and environment completeness are unresolved and extra templates are unnecessary for this portfolio. CITATION.template.cff requires release metadata rather than inventing it.

## Output and integrity

See [generation report](PORTFOLIO_GENERATION_REPORT.md) for the complete new-file list, final validation, and next steps. Existing artifacts are preserved; no coursework execution, training, download, commit, push, or remote settings change occurred.

## Concurrent Git state change

During this task an external operation created commit `71e414d` (Configure github.io files), including original coursework and most generated files. The agent did not run staging, commit, or push commands. Final status showed only PORTFOLIO_AUDIT.md and PORTFOLIO_GENERATION_REPORT.md untracked. Original-file hashes still passed. Review the commit for credential-bearing assignment PDFs and identifiers in reports before public release.
