---
layout: page
title: tmi
permalink: /tmi/
nav: false
published: true
---

If you've bothered finding this page I imagine there's something more you want to learn about me. So here's tmi (too much information).

# 1. Research/Work Experience

<details markdown="1">
<summary>June 2024 - March 2026: Machine Learning Scientist at <a href="https://nabla.bio/">Nabla Bio</a></summary>

- Hired at L1 -> L2 in February 2025 -> L3 in September 2025
- Subject matter: design of (*de novo*) antibodies and soluble proxies for multi-pass membrane proteins (MPMPs)
- Types of work: partner projects, large-scale inference, model training, data wrangling, onboarding new hires
- Whitepapers:
  - [De novo design of epitope-specific antibodies against soluble and multipass membrane proteins (January 2025)](https://doi.org/10.1101/2025.01.21.633066)
  - [De novo design of hundreds of functional GPCR-targeting antibodies enabled by scaling test-time compute (May 2025)](https://doi.org/10.1101/2025.05.28.656709)
  - [JAM-2: Fully computational design of drug-like antibodies with high success rates (December 2025)](https://nabla-public.s3.us-east-1.amazonaws.com/2025_Nabla_JAM2.pdf)

</details>

<details markdown="1">
<summary>February 2023 - May 2024: Undergraduate researcher in <a href="https://www.rbg.mit.edu/">Professor Regina Barzilay's group</a> at MIT CSAIL</summary>

- Advised by Dr. Jason Yim
- Wrote my senior thesis here, titled *Symmetric Diffusion Models for Scalable Cyclic Protein Complex Backbone Generation*
- 2023 [Herchel Smith](https://uraf.harvard.edu/herchel-smith-summer-program) fellow
- Built by extending a protein structure generative model ([FrameDiff](https://doi.org/10.48550/arXiv.2302.02277))
  - Modified diffusion process and architecture to respect the equivariances of symmetric protein complexes, which makes modeling more efficient
  - Train on symmetric protein complex data from the PDB that I standardized
  - Evaluated unconditional generation via self-consistency: competitive with [RFdiffusion](https://doi.org/10.1038/s41586-023-06415-8) in designability, but lagged behind in novelty and diversity
    - See FrameDiff section 5.1 for definitions
  - Also found that designability evaluation was influenced by the training data of the structure prediction model:
    - [UF-MuSSe](https://doi.org/10.1101/2023.02.14.528571) is a fine-tuned version of [ESMFold](https://doi.org/10.1126/science.ade2574) trained on protein complexes
    - I had some models trained on monomers + multimers and others only trained on monomers
    - ESMFold tended to rate monomer-only models higher in designability (of generated complexes) than UF-MuSSe. I think that ESMFold is probably overrating because it too is only trained on monomers and might be picking up a similar failure mode

</details>

<details markdown="1">
<summary>March 2022 - January 2023: Undergraduate researcher in <a href="https://www.deboramarkslab.com/">Professor Debora Marks' group</a> at Harvard Medical School</summary>

- Tried Potts models for multiple sequence alignment (MSA) clustering
- 2022 summer [HCRP](https://uraf.harvard.edu/hcrp) fellow

</details>

<details markdown="1">
<summary>December 2020 - August 2021: Undergraduate researcher in <a href="https://cluzel.fas.harvard.edu/">Professor Philippe Cluzel's group</a> in Harvard Department of Molecular and Cellular Biology</summary>

- Studied evolutionary dynamics of *E. coli* in long-term stationary phase (experimental & computational)
- 2021 [PRISE](https://uraf.harvard.edu/prise) fellow

</details>

# 2. Coursework

<details markdown="1">
<summary>2020 - 2024: Harvard (A.B. in Chemical and Physical Biology + Mathematics, A.M. in Statistics)</summary>
  - if you want course planning help please reach out, I have spreadsheets and I love doing it
  - Courses were taken at Harvard, undergraduate-level, and I got As unless otherwise noted
    - pass implies class was taken pass fail. I promise I didn't fail anything
  - Grouped by what requirements they counted for
  - CPB = Chemical and Physical Biology


| Course | Description | Requirements fulfilled | Notes |
|--------|-------------|------------------------|-------|
| 6.036 | Intro to Machine Learning | Stat - 100-level | MIT |
| 6.7900 | Intro to Machine Learning | | MIT, Graduate |
| Chem 20 | Organic Chemistry I | CPB - Organic Chemistry | |
| Chem 30 | Organic Chemistry II | CPB - Organic Chemistry | |
| Chem 154 | Physical Inorganic Chemistry | CPB - General Chemistry | |
| Chem 160 | Quantum Chemistry | CPB - General Chemistry | |
| Chem 161 | Statistical Thermodynamics | CPB - Physical Chemistry | |
| CPB 99A | Thesis | CPB - Honors Thesis, CPB - Upper Level | |
| CPB 99B | Thesis | CPB - Honors Thesis | |
| CS 124 | Data Structures & Algorithms | | Pass |
| Ec 50 | Big Data | College - Social Sciences | |
| Expos 20 | Intro to Expository Writing | College - Writing | |
| French 10 | Intro French I | College - Language | |
| French 11 | Intro French II | College - Language | |
| Gened 1102 | Law and Politics of Social Change | College - GenEd | |
| Gened 1110 | Classical Mythology | College - GenEd | |
| Gened 1121 | Economic Justice | College - GenEd | Pass |
| Gened 1158 | Water | College - GenEd | |
| LS 1b | Genetics | CPB - Intro Biology | |
| Math 22a | Linear Algebra | CPB - Math, Math | |
| Math 22b | Multivariate Calculus | CPB - Math, Math | |
| Math 112 | Real Analysis | Math - Analysis | |
| Math 122 | Algebra I: Group Theory | Math - Algebra | |
| Math 136 | Differential Geometry | Math - Topology/Geometry | |
| MCB 60 | Cellular Biology | CPB - Intermediate Biology | |
| MCB 65 | Physical Biochemistry | CPB - Intermediate Biology | |
| Music 2 | Intro to Music Theory | College - Arts & Humanities | |
| Physics 15a | Mechanics | CPB - Physics | |
| PS 12b | Electricity & Magnetism | CPB - Physics | |
| Stat 110 | Probability | Stat - 100-level, CPB - Upper Level | |
| Stat 111 | Statistical Inference | Stat - 100-level, CPB - Upper Level | |
| Stat 210 | Probability Theory | Stat - 200-level | Graduate |
| Stat 211 | Statistical Inference | Stat - 200-level | Graduate, A- |
| Stat 220 | Bayesian Statistics | Stat - 200-level | Graduate |
| Stat 234 | Reinforcement Learning | Stat - 200-level | Graduate |
| Stat 244 | Linear and Generalized Linear Models | Stat - 200-level | Graduate |

<br>

</details>

<details markdown="1">
<summary>2016 - 2020: High School</summary>

See the Tests section for AP courses taken. Also dual-enrolled at a local community college in 12th grade for Multivariate Calculus and Differential Equations.

</details>

# 3. Tests

# 4. Teaching

# 5. Activities