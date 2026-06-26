---
layout: page
title: tmi
permalink: /tmi/
nav: false
search: true
published: true
---

If you've bothered finding this page I imagine there's something more you want to find out about me. So here's too much information (tmi). The existence of this page is motivated by the fact that I can never seem to get the full scope of what people do, so I hope that, with me, everything is as meets the eye. This is not a resume.

# 1. Research/Work Experience

<details markdown="1">
<summary>March 2026 - Present: Member of Technical Staff at <a href="https://axiommath.ai/">Axiom Math</a></summary>

- Machine learning for math

</details>

<details markdown="1">
<summary>June 2024 - March 2026: Machine Learning Scientist at <a href="https://nabla.bio/">Nabla Bio</a></summary>

- Hired at L1 -> L2 in February 2025 -> L3 in September 2025
- Subject matter: design of (_de novo_) antibodies and soluble proxies for multi-pass membrane proteins (MPMPs)
- Types of work: partner projects, large-scale inference, model training, data wrangling, onboarding new hires
- Whitepapers:
  - [De novo design of epitope-specific antibodies against soluble and multipass membrane proteins (January 2025)](https://doi.org/10.1101/2025.01.21.633066)
  - [De novo design of hundreds of functional GPCR-targeting antibodies enabled by scaling test-time compute (May 2025)](https://doi.org/10.1101/2025.05.28.656709)
  - [JAM-2: Fully computational design of drug-like antibodies with high success rates (December 2025)](https://nabla-public.s3.us-east-1.amazonaws.com/2025_Nabla_JAM2.pdf)

</details>

<details markdown="1">
<summary>February 2023 - May 2024: Undergraduate researcher in <a href="https://www.rbg.mit.edu/">Professor Regina Barzilay's group</a> at MIT CSAIL</summary>

- Advised by Dr. Jason Yim
- Wrote my senior thesis here, titled _Symmetric Diffusion Models for Scalable Cyclic Protein Complex Backbone Generation_
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

- Studied evolutionary dynamics of _E. coli_ in long-term stationary phase (experimental & computational)
- 2021 [PRISE](https://uraf.harvard.edu/prise) fellow

</details>

<br>

# 2. Coursework & Test Scores

<details markdown="1">
<summary>2020 - 2024: Harvard (A.B. in Chemical and Physical Biology + Mathematics, A.M. in Statistics)</summary>
  - if you want course planning help please reach out, I have spreadsheets and I love doing it
  - Courses were taken at Harvard, undergraduate-level, and I got As unless otherwise noted
    - pass implies class was taken pass fail. I promise I didn't fail anything
  - Grouped by what requirements they counted for
  - CPB = Chemical and Physical Biology

Awards: summa cum laude, 3x John Harvard Scholar, Detur Book Prize, Sophia Freund Prize

| Course      | Description                          | Requirements      | Notes         |
| ----------- | ------------------------------------ | ----------------- | ------------- |
| 6.036       | Intro to Machine Learning            | Stat              | MIT           |
| 6.7900      | Intro to Machine Learning            |                   | MIT, Graduate |
| Chem 20     | Organic Chemistry I                  | CPB               |               |
| Chem 30     | Organic Chemistry II                 | CPB               |               |
| Chem 154    | Physical Inorganic Chemistry         | CPB               |               |
| Chem 160    | Quantum Chemistry                    | CPB               |               |
| Chem 161    | Statistical Thermodynamics           | CPB               |               |
| CPB 99A     | Thesis                               | CPB               |               |
| CPB 99B     | Thesis                               | CPB               |               |
| CS 124      | Data Structures & Algorithms         |                   | Pass          |
| Ec 50       | Big Data                             | Social Sciences   |               |
| Expos 20    | Intro to Expository Writing          | Writing           |               |
| French 10   | Intro French I                       | Language          |               |
| French 11   | Intro French II                      | Language          |               |
| Gened 1102  | Law and Politics of Social Change    | GenEd             |               |
| Gened 1110  | Classical Mythology                  | GenEd             |               |
| Gened 1121  | Economic Justice                     | GenEd             | Pass          |
| Gened 1158  | Water                                | GenEd             |               |
| LS 1b       | Genetics                             | CPB               |               |
| Math 22a    | Linear Algebra                       | CPB, Math         |               |
| Math 22b    | Multivariate Calculus                | CPB, Math         |               |
| Math 112    | Real Analysis                        | Math              |               |
| Math 122    | Algebra I: Group Theory              | Math              |               |
| Math 136    | Differential Geometry                | Math              |               |
| MCB 60      | Cellular Biology                     | CPB               |               |
| MCB 65      | Physical Biochemistry                | CPB               |               |
| Music 2     | Intro to Music Theory                | Arts & Humanities |               |
| Physics 15a | Mechanics                            | CPB               |               |
| PS 12b      | Electricity & Magnetism              | CPB               |               |
| Stat 110    | Probability                          | Stat              |               |
| Stat 111    | Statistical Inference                | Stat              |               |
| Stat 210    | Probability                          | Stat              | Graduate      |
| Stat 211    | Statistical Inference                | Stat              | Graduate, A-  |
| Stat 220    | Bayesian Statistics                  | Stat              | Graduate      |
| Stat 234    | Reinforcement Learning               | Stat              | Graduate      |
| Stat 244    | Linear and Generalized Linear Models | Stat              | Graduate      |

<br>

</details>

<details markdown="1">
<summary>2016 - 2020: High School</summary>

- Took & got 5s on 13 APs:
  - 9th: Chemistry
  - 10th: Calculus AB, Physics C: Mechanics, Statistics (self-study)
  - 11th: Biology, Calculus BC, Computer Science A, English Language and Composition, Physics C: Electricity & Magnetism
  - 12th (online due to COVID): English Literature and Composition, Macroeconomics, Microeconomics, Psychology
- Dual-enrolled at a local community college in 12th grade for Multivariate Calculus and Differential Equations.
- Standardized Tests
  - SAT: 1600 (once per school year for 8th - 11th grade, 1520 -> 1520 -> 1570 -> 1600)
  - ACT: 36 (once per school year from 7th - 10th grade, 32 -> 35 -> 36 -> 36)
  - Subject tests: 800 on Math Level 2, Biology, Chemistry, Physics, 780 on Math Level 1
  - PSAT: 1470 (10th) -> 1490 (11th)

</details>

<br>

# 3. Teaching

<details markdown="1">
<summary>Harvard course assistant</summary>

- TF = teaching fellow: teach section, grade, hold office hours
- CA = course assistant: mainly office hours

| Course                           | Role | Terms                           |
| -------------------------------- | ---- | ------------------------------- |
| Stat 110 - Probability           | TF   | Fall 2021, Fall 2022, Fall 2023 |
| Stat 111 - Statistical Inference | TF   | Spring 2024                     |
| CS 181 - Machine Learning        | TF   | Spring 2023                     |
| Chem 20 - Organic Chemistry I    | CA   | Spring 2022                     |
| Chem 30 - Organic Chemistry II   | CA   | Fall 2022                       |

</details>

Also volunteer (grade school) math tutoring 2016 - 2023, volunteer AP chemistry tutoring 2017 - 2020

<br>

# 4. Activities

Currently, just sports.

<details markdown="1">
<summary>Recreational sports</summary>

<details markdown="1">
<summary>Running (since 2022) · <a href="https://marathonview.net/marathon-results-of-Srihari-Ganesh">marathon results on MarathonView</a></summary>

| Date            | Race                                     | Distance                          | Surface | Time    | Results                                                                                             |
| --------------- | ---------------------------------------- | --------------------------------- | ------- | ------- | --------------------------------------------------------------------------------------------------- |
| Apr 19, 2025    | Newport Rhode Races Marathon             | Marathon                          | Road    | 4:07:07 | [link](https://runsignup.com/Race/Results/34170/IndividualResult/BfYN?resultSetId=541743#U83366933) |
| Feb 2, 2025     | The Great Stew Chase                     | 15K                               | Road    | 1:23:19 | [link](https://results.raceroster.com/v2/en-US/results/kcr4axw63nrc9dhn/detail/x9457ttegfeg62ag)    |
| Dec 8, 2024     | Cambridge Winter Classic 5K Road Race    | 5K                                | Road    | 24:46   | [link](https://rtrt.me/ulink/TLMRA/TLMR-WINTER-CLASSIC-2024/tracker/R8BPJ74U/focus)                 |
| Nov 3, 2024     | Cambridge Half Marathon at CambridgeSide | Half Marathon                     | Road    | 1:49:49 | [link](https://rtrt.me/ulink/TLMRA/TLMR-CAMBRIDGE-HALF-2024/tracker/RTRA4953/focus)                 |
| Oct 6, 2024     | Cambridge Fall Classic 5K Road Race      | 5K                                | Road    | 24:29   | [link](https://rtrt.me/ulink/TLMRA/TLMR-FALL-CLASSIC-2024/tracker/RR4KL5NT/focus)                   |
| Sep 13–14, 2024 | Ragnar Reach the Beach                   | ~20 mi (4 legs of 204.8 mi relay) | Road    | —       | [link](https://results.laurelt.com/rtb/results?pk=7906506)                                          |
| Nov 5, 2023     | Cambridge Half Marathon at CambridgeSide | Half Marathon                     | Road    | 1:56:39 | [link](https://rtrt.me/ulink/_RT/TLMR-CAMBRIDGE-HALF-2023/tracker/R5SXMRZG/focus)                   |
| Sep 9, 2023     | Trail Animals Running Club Fall Classic  | 10K (trail)                       | Trail   | 1:08:36 | —                                                                                                   |
| Apr 23, 2023    | Cambridge Spring Classic 5K Road Race    | 5K                                | Road    | 26:56   | [link](https://rtrt.me/ulink/_RT/TLMR-SPRING-CLASSIC-2023/tracker/RAP9FY6T/focus)                   |

</details>

<details markdown="1">
<summary>Weightlifting (since 2024; olympic since 2026) · <a href="https://www.openweightlifting.org/lifter?name=Srihari%20Ganesh&federation=US">Olympic weightlifting meet results on OpenWeightlifting</a></summary>

| Date         | Meet                                                                                         | Sn 1 | Sn 2 | Sn 3 | CJ 1 | CJ 2 | CJ 3 | Total   | BW (kg) |
| ------------ | -------------------------------------------------------------------------------------------- | ---- | ---- | ---- | ---- | ---- | ---- | ------- | ------- |
| May 17, 2026 | [Hassle Free Last Chance](https://usaweightlifting.sport80.com/public/rankings/results/7382) | 60   | 63   | -66  | 70   | 74   | 78   | **141** | 90      |

</details>

- Played a lot of intramurals in Quincy House at Harvard my last two years
  - especially ultimate frisbee (Spring 2024 intramural champions!)
  - Also was a practice player for Harvard Bredline for a bit
  - Was an IM house rep my senior year and received a Quincy Scroll and David A. Aloian-Robert L. Beal Award "for significant contributions to the quality of life of the Quincy House Community"
- 2017 high school JV tennis benchwarmer

</details>

<details markdown="1">
<summary>Percussion</summary>

- College
  - Percussionist in the Harvard-Radcliffe Orchestra
  - For fun:
    - The Offering by Michael Burritt ([video](https://youtu.be/H0kKIURddmE))
    - Violin Partita No. 2 in D minor by J. S. Bach, Allemande ([video](https://youtu.be/OpL15XLC4NQ))
- High school
  - Marching band (marimba), concert band (percussion), orchestra (timpani)
  - Also played in Detroit Symphony Youth Orchestra & Wind Ensemble senior year
  <details markdown="1">
  <summary>Awards</summary>

  - 3x MSBOA All-State, 1st chair orchestra in 2023
  - North Oakland concerto competition winner (Prism Rhapsody, marimba)

  In school:
  - Front ensemble section leader
  - 1st chair in concert band
  - Department award

  </details>
  <details markdown="1">
  <summary>Most of my solo/duet rep</summary>
  - Solos:
    - Rain Dance by Alice Gomez
    - Preludio No. 1 by Ney Rosauro
    - Dream of the Cherry Blossoms by Keiko Abe
  - Concertos/concertinos:
    - Concertino for Xylophone and Orchestra by Toshiro Mayuzumi (mvts. 1 & 2)
    - Concerto No. 2 for Marimba and Orchestra by Ney Rosauro, mvt. 2 ([video](https://youtu.be/NIVhcjJIpFI))
    - Prism Rhapsody by Keiko Abe ([partial audio](https://youtu.be/naT_KD7RufA))
  - NEC audition rep (I did not get in):
    - Marimba: Violin Partita No. 2 in D minor by J. S. Bach, Gigue ([video](https://youtu.be/L8fcA0dRcLI))
    - Snare: Etude No. 1 from Douze Etudes pour Caisse-Claire by Jacques Delecluse ([video](https://youtu.be/2VpnPVWWWSE))
    - Timpani: Exercise No. 57 from Modern Method for Timpani by Saul Goodman ([video](https://youtu.be/UdndWyuaNIM))
  - Duets:
    - 2+1 (2 players on 1 marimba)
    - Verve (marimba + bass clarinet)

  </details>

</details>

<details markdown="1">
<summary>Math</summary>

Grew up doing math contests, learned at [ICAE](https://www.icae.org/scripts_sql/icae/code/index.htm)

Highlights:

- 2023 Putnam: 42/120
- 2x USAJMO qualifier (2017, 2018): 11/42 -> 12
- 6x AIME qualifier (2015 - 2020): 5/15 -> 5 -> 10 -> 10 -> 6 -> 9
- Math department award in high school
- 2016 MathCounts State Champion

</details>

<details markdown="1">
<summary>Chemistry</summary>

- 2x USNCO Honors (2019, 2020)

</details>

<details markdown="1">
<summary>School clubs/activities</summary>
College:
- [GUSH](https://gushclub.org/) (2020-2023), president 2022-2023
- Harvard-Radcliffe Orchestra (2020-2024), percussionist sometimes
- Cambridge Afterschool Program (2021-2023), volunteer tutor
- Quincy House (2024-2025, post-college), non-resident tutor
  - reliving undergraduate glory days: intramural sports & course planning
  - I love Harvard undergraduate course planning so please reach out if you want to talk about it

High school:

- HOSA (2016-2020), medical math competitor, president 2019-2020
- Math club (2016-2020), math competitor, president 2018-2020
- National Honor Society (2018-2020), president 2019-2020
- DECA (2019-2020), business finance series
- ACEing Autism tennis clinic volunteer

</details>

<br>

I also ~~occasionally~~ often get hooked on little speedy brain games:

- WordHunt (on [GamePigeon](https://gamepigeonapp.com)): 4x4 high score 87.3k
  - for context, the best players I'm aware of have reached 130k+
- [Zetamac](https://arithmetic.zetamac.com): high score 149
  - On default settings: 120 seconds, addition/subtraction 2-100, multiplication/division 2-12 x 2-100
- [24](<https://en.wikipedia.org/wiki/24_(puzzle)>)
  - Used to play with friends in college and built the [solver](https://srihari-ganesh.github.io/24solver/) that I wish we had
- [Texnique](https://texnique.xyz/): high score 112
