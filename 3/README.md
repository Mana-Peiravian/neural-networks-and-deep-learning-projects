# Conditional Image Generation and Colorization

## Overview

Generate class-conditioned clothing images, reconstruct color from grayscale scenes, and explore latent regularization.

## Assignment objectives

Implement Fashion-MNIST cGAN training and class grids; colorize ten held-out images with MSE, PSNR, and SSIM evaluation; optionally regularize an RGB autoencoder against a Gaussian latent prior.

## Implemented approach

The cGAN reads IDX files directly, concatenates learned 50-dimensional label embeddings with 100-dimensional noise or flattened images, and trains fully connected networks with BCEWithLogitsLoss for 30 epochs on 60,000 images. The colorizer resizes to 64 by 64, derives luminance inputs, uses matching-resolution encoder/decoder skips and a full-resolution grayscale skip, and minimizes MSE. The stated split is 441/49/10; validation selects the checkpoint. The bonus AAE uses RGB reconstruction, a 64-dimensional code, and a Gaussian-prior latent discriminator for 50 epochs.

## Repository structure and assignment materials

| File or directory | Purpose |
| --- | --- |
| [NNDL-Prj3-2026.pdf](NNDL-Prj3-2026.pdf) | Instructor assignment; credential review required |
| [report.pdf](report.pdf) | Submitted report; identifier review required |
| [code/task1_cgan_fashion_mnist.ipynb](code/task1_cgan_fashion_mnist.ipynb) | Implementation notebook |
| [code/task2_colorization_autoencoder.ipynb](code/task2_colorization_autoencoder.ipynb) | Implementation notebook |
| [code/figures/](code/figures/) | Saved cGAN, colorization, and AAE figures |
| [code/checkpoints/colorization_autoencoder_best.pt](code/checkpoints/colorization_autoencoder_best.pt) | Colorization checkpoint; not deserialized in this audit |

Original academic materials are unchanged. Review [publication findings](../PUBLICATION_REVIEW.md) before sharing them.

## Requirements and input data

Observed tools: Python, PyTorch, NumPy, pandas, Pillow, scikit-image, scikit-learn, Matplotlib. Use a Jupyter-capable Python environment. No complete pinned environment was supplied; versions are not guessed.

Fashion-MNIST training IDX data and the assignment-provided 500-image natural-scene dataset are absent. Saved figures and a colorization checkpoint are present.

## Running the project

**Inferred and unverified**, from the repository root:

```sh
cd 3/code
jupyter notebook "task1_cgan_fashion_mnist.ipynb"
jupyter notebook "task2_colorization_autoencoder.ipynb"
```

In a separate working copy, supply training IDX images and labels (plain or gzip) under data/FashionMNIST/raw/. Supply original JPG scenes under data/AE Data/train/ and data/AE Data/test/. The notebooks also resolve spelling/case variants; retain the original test split.

Manual step: select the matching Python kernel and review configuration before executing cells in order. Commands open notebooks; they do not execute the experiment. Rerun in a separate copy because cells train models and may overwrite outputs, weights, or reports. No coursework notebook was executed during portfolio preparation.

## Saved results and evaluation

The report states mean test MSE 0.00324, mean per-image PSNR 25.57 dB, and mean SSIM 0.9276 over ten images using the epoch-42 checkpoint. Reported final cGAN generator/discriminator losses are 0.8292/0.6624. Notebook notes and report acknowledge repeated class prototypes. The AAE report describes partial prior overlap and blurry random samples.

Measurements are attributed to submitted artifacts, not independently reproduced benchmarks.

## Notes and limitations

Missing datasets prevent a complete checkout-only rerun. An earlier bottleneck baseline discussed in the report has no separate supplied implementation. The notebook describes stronger class-wise collapse than the report; both acknowledge limited diversity. PCA overlap does not establish full latent distribution matching. Scene images embedded in figures/reports require rights and privacy review.

## Academic context

Completed as part of a master's-level Artificial Intelligence course, for portfolio and educational purposes. Follow institutional academic-integrity rules and respect instructor ownership of assignment materials.
