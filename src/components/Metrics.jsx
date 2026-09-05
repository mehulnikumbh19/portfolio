import MetricCard from "./MetricCard";
import SectionTitle from "./SectionTitle";
import { metrics } from "../data/portfolioData";

export default function Metrics() {
  return (
    <section className="site-shell py-10 sm:py-14">
      <SectionTitle
        kicker="Stats"
        title="Tallies from the work."
        description="Counts drawn directly from experience, certifications, and framework coverage."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} delay={index * 0.04} />
        ))}
      </div>
    </section>
  );
}
