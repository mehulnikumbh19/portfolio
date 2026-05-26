import MetricCard from "./MetricCard";
import SectionHeading from "./SectionHeading";
import { metrics } from "../data/portfolioData";

export default function Metrics() {
  return (
    <section className="section-shell">
      <SectionHeading
        eyebrow="Portfolio Metrics"
        title="Quantified project evidence"
        description="Counts from simulated GRC portfolio projects, presented without claiming production deployment."
        align="center"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={metric.label} metric={metric} delay={index * 0.04} />
        ))}
      </div>
    </section>
  );
}
