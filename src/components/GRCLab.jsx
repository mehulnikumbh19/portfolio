import { CheckCircle2, TableProperties } from "lucide-react";
import Badge from "./Badge";
import GlassCard from "./GlassCard";
import SectionHeading from "./SectionHeading";
import {
  accessReviewTests,
  evidenceChecklist,
  remediationColumns,
  riskMatrix,
  riskStyles,
  sectionKickers
} from "../data/portfolioData";

const impactLabels = ["Very High", "High", "Medium", "Low", "Very Low"];
const likelihoodLabels = ["Very Low", "Low", "Medium", "High", "Very High"];

const remediationRows = [
  { finding: "Expired exception", risk: "High", owner: "IAM", due: "May 30", status: "In review" },
  { finding: "Missing evidence", risk: "Medium", owner: "App owner", due: "Jun 07", status: "Assigned" },
  { finding: "Overdue patch", risk: "High", owner: "Infra", due: "Jun 14", status: "Open" }
];

export default function GRCLab() {
  return (
    <section id="grc-lab" className="section-shell">
      <SectionHeading eyebrow="GRC Lab" title="Cyber control-room previews" description={sectionKickers.lab} />

      <div className="grid gap-5 xl:grid-cols-2">
        <GlassCard className="p-5">
          <p className="eyebrow mb-3">Lab 01</p>
          <h3 className="display-3">Risk Matrix Preview</h3>
          <div className="mt-5 grid grid-cols-5 gap-2">
            {riskMatrix.flatMap((row, rowIndex) =>
              row.map((level, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  role="img"
                  aria-label={`Impact ${impactLabels[rowIndex]}, Likelihood ${likelihoodLabels[colIndex]}: ${level}`}
                  className={`aspect-square rounded-xl border text-[10px] font-bold uppercase sm:text-xs ${riskStyles[level]}`}
                >
                  <span className="flex h-full items-center justify-center">{level}</span>
                </div>
              ))
            )}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <p className="eyebrow mb-3">Lab 02</p>
          <h3 className="display-3">Audit Evidence Checklist</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {evidenceChecklist.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/[0.24] px-3 py-2.5 text-sm text-slate-200">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <p className="eyebrow mb-3">Lab 03</p>
          <h3 className="display-3">Access Review Test Types</h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {accessReviewTests.map((test, index) => (
              <Badge key={test} tone={index % 2 === 0 ? "accent" : "default"}>
                {test}
              </Badge>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <div className="mb-4 flex items-center gap-3">
            <TableProperties className="h-5 w-5 text-cyan-200" aria-hidden="true" />
            <div>
              <p className="eyebrow">Lab 04</p>
              <h3 className="display-3 mt-1">Remediation Tracker Preview</h3>
            </div>
          </div>
          <div className="-mx-5 overflow-x-auto px-5">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr>
                  {remediationColumns.slice(0, 5).map((column) => (
                    <th key={column} className="border-y border-white/10 px-3 py-3 font-mono text-xs font-semibold uppercase tracking-label text-cyan-100">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {remediationRows.map((row) => (
                  <tr key={row.finding} className="border-b border-white/10 text-slate-300">
                    <td className="px-3 py-3">{row.finding}</td>
                    <td className="px-3 py-3 text-amber-100">{row.risk}</td>
                    <td className="px-3 py-3">{row.owner}</td>
                    <td className="px-3 py-3">{row.due}</td>
                    <td className="px-3 py-3 text-cyan-100">{row.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
