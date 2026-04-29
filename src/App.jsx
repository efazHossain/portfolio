const projects = [
  {
    title: "Agentic DataOps Platform",
    type: "Data Engineering / Analytics Engineering",
    desc: "Local-first DataOps platform using Docker, PostgreSQL, MinIO, dbt, and Python services for event ingestion, warehouse loading, transformations, data quality checks, and freshness monitoring.",
    result: "Validated 1 incremental model, 1 staging view, and 8 dbt tests with 10/10 checks passing.",
    tech: "Python, SQL, Docker, PostgreSQL, MinIO, dbt",
    link: "https://github.com/efazHossain/agentic-dataops"
  },
  {
    title: "Multimodal Churn Risk Detection",
    type: "Data Science / Machine Learning",
    desc: "Explainable churn intelligence system combining structured customer data with synthetic support-note text using Sentence-BERT, Logistic Regression, XGBoost, SHAP, SQL, and Streamlit.",
    result: "Achieved 0.847 ROC-AUC, 0.654 PR-AUC, 0.807 recall, and 2.85 lift among the top 10% highest-risk customers.",
    tech: "Python, SQL, scikit-learn, XGBoost, Sentence-BERT, SHAP, Streamlit",
    link: "https://github.com/efazHossain/multimodal-risk-detection"
  },
  {
    title: "Clinical Survival Analysis",
    type: "Statistics / Healthcare Analytics",
    desc: "Breast cancer survival analysis using METABRIC data with Kaplan-Meier curves, log-rank tests, Cox proportional hazards modeling, and Random Survival Forests.",
    result: "Achieved 0.681 Random Survival Forest test C-index and identified survival differences by tumor stage and ER status.",
    tech: "Python, pandas, lifelines, scikit-survival, scikit-learn, Matplotlib",
    link: "https://github.com/efazHossain/clinical-survival-analysis"
  }
];

function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg">
      <p className="mb-2 text-sm font-semibold text-cyan-300">{project.type}</p>
      <h3 className="mb-3 text-2xl font-bold text-white">{project.title}</h3>
      <p className="mb-4 leading-7 text-slate-300">{project.desc}</p>
      <p className="mb-4 rounded-xl bg-cyan-950/40 p-3 text-sm text-cyan-100">
        <strong>Result:</strong> {project.result}
      </p>
      <p className="mb-5 text-sm text-slate-400">
        <strong>Tools:</strong> {project.tech}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-xl bg-cyan-400 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-300"
      >
        View Project
      </a>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#164e63,transparent_35%),#020617]">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <nav className="mb-20 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">Efaz Hossain</h1>
          <div className="flex gap-4 text-sm text-slate-300">
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#skills" className="hover:text-cyan-300">Skills</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </div>
        </nav>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Data Scientist & Analytics Engineer
        </p>

        <h2 className="mb-6 max-w-4xl text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          Building explainable ML systems and reliable data pipelines.
        </h2>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          I build end-to-end data projects across machine learning, healthcare analytics,
          customer churn modeling, and DataOps using Python, SQL, dbt, Docker, and Streamlit.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
            View Projects
          </a>
          <a href="https://github.com/efazHossain" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white hover:border-cyan-400">
            GitHub
          </a>
          <a href="/resume.pdf" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white hover:border-cyan-400">
            Resume
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
          Featured Work
        </p>
        <h2 className="mb-8 text-4xl font-bold text-white">Projects</h2>
        <div className="grid gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="mb-4 text-3xl font-bold text-white">Skills</h2>
          <p className="leading-8 text-slate-300">
            Python, SQL, pandas, NumPy, scikit-learn, XGBoost, SHAP, Streamlit, dbt,
            Docker, PostgreSQL, MinIO, lifelines, scikit-survival, machine learning,
            analytics engineering, survival analysis, and data engineering.
          </p>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-12 pb-20">
        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold text-white">Let’s connect</h2>
          <p className="mb-6 text-slate-300">
            I’m interested in data scientist, data analyst, analytics engineer, and data engineer roles.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:efazhossain7@gmail.com" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/efaz-hossain-70b788258" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-white hover:border-cyan-400">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
