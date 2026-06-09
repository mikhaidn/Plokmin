# Daniel Mikhail

## Software Engineer
------------------------------------------------------  -  ---------------------------------------------------------------- - ----------------------------------------------------------------- - ---------------
[dan.mikhail@gmail.com](mailto:dan.mikhail@gmail.com)   |  [mikhaidn.github.io/Plokmin](https://mikhaidn.github.io/Plokmin) | [linkedin.com/in/danmikhail](https://linkedin.com/in/danmikhail/) | +1 217 722 5067
------------------------------------------------------  -  ---------------------------------------------------------------- - ---------------

Software engineer with 6+ years across platform services, data pipelines, and full-stack systems. I build internal tooling and Go service patterns that make platform work tractable — most recently on healthcare platform infrastructure at Verily.

Experience
---------

---------------------------------------------------------------------                          -------------------
**Verily Life Sciences (Alphabet)**, Software Engineer | (Boston, MA)                          July 2022 - Present
---------------------------------------------------------------------                          -------------------

* **Cross-System Technical Leadership**
  - **Lead engineer for Disenrollment** — gathered and reconciled requirements from clinical experts, upstream UX/PM, and 4+ senior/staff engineers across adjacent teams, translating them into the core implementation and the data contracts between them
  - **Made the call on CloseAccount's implementation pattern** — single backend request triggering distributed side effects rather than frontend fanout; scaffolded for 3-engineer parallel development with a code path reusable for backfills
  - **Co-Lead of the team's mentorship program**, coordinating ~20 active mentor/mentee pairings, designing lesson plans and program length

* **Platform Tooling & Developer Experience**
  - Designed a reusable backfill framework with injection points for provenance, scoped rate limiting (only on cascading non-provenance writes), and pagination/logging — reduces dev time and error surface; runs 2–3 backfills/month, ~1,000 patients per run, **emergency rollouts in under 3 days**
  - Built a multithreaded FHIR wrapper handling rate limiting, safe pagination, and core resource extraction from bundles — enables **high-confidence backfills** against queries with unpredictable size and rate constraints
  - Authored comprehensive developer guides and contract tests establishing best practices for service integration

* **Participant System**
  - Designed the **"participant attribute" pattern** after surfacing that downstream teams kept needing data shapes the core model couldn't serve — a foreign-key layer (FHIR Basic resources) that lets each consumer request what they need without core-model changes; decoupled cross-team velocity from data-model decisions
  - Led refactoring of a core data model and system, improving maintainability through service modularization and third-party integration abstraction
  - Reduced testing cycle time by **75%** through decoupling frontend/backend test suites in Consent System

* **Provider Console**
  - Established frontend architecture patterns by implementing core React/TypeScript components, creating a flagship MFE that became **standard reference across 4+ teams**
  - Broke down card implementation into modular Backend-for-Frontend (BFF) architecture enabling parallel development across junior engineers, reducing MVP delivery time by **50%**


--------------------------------------------------------------------------------                                       ------------------------
**Verizon Media Group (Yahoo!)**, Software Production Engineer | (Champaign, IL)                                       August 2018 - March 2021
--------------------------------------------------------------------------------                                       ------------------------

Production point of contact for data pipelines and tools on the on-prem Hadoop ecosystem (Pig, Oozie, Spark) on AWS and RedHat clusters.

- Developed a full-stack monitoring tool for multiple Lambda-architecture streaming pipelines, providing real-time pipeline health visibility
- Escalated urgent feature requests across the pipeline, like new security requirements (COPPA, GDPR, etc.), deployed ahead of schedule; coordinated Spectre/Meltdown patching across on-prem RedHat clusters
- Formed a high-level intuition of the pipeline to catch potential SLA misses early, and pass on tribal knowledge to newer Production Engineers
- Hands-on with key and group management, replication, load balancing, networking, CI/CD, and Linux Bash scripting


Skills
---------
- **Languages & infra**: Go, Python, TypeScript/React, Java · Docker/Kubernetes, GCP, AWS, CI/CD
- **Development**: API Design, Distributed Systems, Developer Tooling, Dependency Injection · **Domains**: Platform/Infra, FHIR

Education
---------
- **Masters of Computer Science**, University of Illinois at Urbana-Champaign — December 2024 (finished while at Verily)
- **BSc, Computer Science**, Rose-Hulman Institute of Technology (Terre Haute, IN) — May 2018