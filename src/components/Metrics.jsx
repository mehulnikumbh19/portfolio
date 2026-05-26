import MetricCard from "./MetricCard";
import SectionTitle from "./SectionTitle";
import { metrics } from "../data/portfolioData";

export default function Metrics() {
  return (
    <section className="site-shell py-14 sm:py-20">
      <SectionTitle
        kicker="Stats"
        title="Tallies from the work."
        description="Counts from simulated GRC project work, not production deployments."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} delay={index * 0.04} />
        ))}
      </div>
    </section>
  );
}
