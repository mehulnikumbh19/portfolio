import RetroCard from "./RetroCard";
import SectionTitle from "./SectionTitle";
import {
  accessReviewTests,
  evidenceChecklist,
  remediationColumns,
  riskMatrix
} from "../data/portfolioData";

const impactLabels = ["Very High", "High", "Medium", "Low", "Very Low"];
const likelihoodLabels = ["Very Low", "Low", "Medium", "High", "Very High"];

const levelStyles = {
  low: "bg-success text-ink",
  medium: "bg-warn text-ink",
  high: "bg-orange text-ink",
  critical: "bg-risk text-paper"
};

const remediationRows = [
  { finding: "Expired exception", risk: "High", owner: "IAM Team", due: "May 30", status: "In review" },
  { finding: "Missing evidence", risk: "Med", owner: "App owner", due: "Jun 07", status: "Assigned" },
  { finding: "Overdue patch", risk: "High", owner: "Infra", due: "Jun 14", status: "Open" },
  { finding: "Orphan account", risk: "Med", owner: "IAM Team", due: "Jun 21", status: "Open" }
];

export default function GRCLab() {
  return (
    <section id="grc-lab" className="site-shell py-14 sm:py-20">
      <SectionTitle
        kicker="Control room"
        title="GRC Lab"
        description="Previews of the tools and thinking behind the work."
      />

      <div className="grid gap-5 xl:grid-cols-2">
        <RetroCard tone="paper" className="p-0">
          <div className="titlebar">
            <span>risk.matrix</span>
            <span className="pixel-label">5 x 5</span>
          </div>
          <div className="p-5 sm:p-6">
            <p className="pixel-label text-rust">Risk Matrix Preview</p>
            <h3 className="pixel-heading mt-2 text-[1.5rem] text-ink">Impact . Likelihood</h3>
            <div className="mt-4 grid grid-cols-5 gap-1.5">
              {riskMatrix.flatMap((row, rowIdx) =>
                row.map((level, colIdx) => (
                  <div
                    key={`${rowIdx}-${colIdx}`}
                    role="img"
                    aria-label={`Impact ${impactLabels[rowIdx]}, Likelihood ${likelihoodLabels[colIdx]}: ${level}`}
                    className={`pixel-label aspect-square border-2 border-ink ${levelStyles[level]} flex items-center justify-center`}
                  >
                    {level}
                  </div>
                ))
              )}
            </div>
          </div>
        </RetroCard>

        <RetroCard tone="cream" className="p-0">
          <div className="titlebar">
            <span>evidence.checklist</span>
            <span className="pixel-label">{evidenceChecklist.length} items</span>
          </div>
          <div className="p-5 sm:p-6">
            <p className="pixel-label text-rust">Audit Evidence Checklist</p>
            <h3 className="pixel-heading mt-2 text-[1.5rem] text-ink">Required Columns</h3>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              {evidenceChecklist.map((item, idx) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 border-2 border-ink bg-paper px-3 py-2"
                >
                  <span className="pixel-label bg-orange px-1.5 py-0.5 text-ink">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.93rem] text-brown">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </RetroCard>

        <RetroCard tone="dark" className="p-0">
          <div className="titlebar bg-orange text-ink">
            <span>access.tests</span>
            <span className="pixel-label">6 types</span>
          </div>
          <div className="p-5 sm:p-6">
            <p className="pixel-label text-orange">Access Review Test Types</p>
            <h3 className="pixel-heading mt-2 text-[1.5rem] text-paper">
              Catches recurring exceptions
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {accessReviewTests.map((test) => (
                <li
                  key={test}
                  className="pill-retro border-orange bg-coal text-orange"
                >
                  {test}
                </li>
              ))}
            </ul>
          </div>
        </RetroCard>

        <RetroCard tone="paper" className="p-0">
          <div className="titlebar">
            <span>remediation.tracker</span>
            <span className="pixel-label">{remediationRows.length} rows</span>
          </div>
          <div className="overflow-x-auto p-5 sm:p-6">
            <p className="pixel-label text-rust">Remediation Tracker Preview</p>
            <h3 className="pixel-heading mt-2 text-[1.5rem] text-ink">Finding to Closure</h3>
            <table className="mt-4 w-full min-w-[480px] border-collapse text-left">
              <thead>
                <tr>
                  {remediationColumns.slice(0, 5).map((column) => (
                    <th
                      key={column}
                      className="pixel-label border-2 border-ink bg-cream px-2.5 py-2 text-ink"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {remediationRows.map((row) => (
                  <tr key={row.finding}>
                    <td className="border-2 border-ink bg-paper px-2.5 py-2 text-[0.9rem] text-ink">
                      {row.finding}
                    </td>
                    <td className="border-2 border-ink bg-paper px-2.5 py-2 text-[0.9rem] font-semibold text-risk">
                      {row.risk}
                    </td>
                    <td className="border-2 border-ink bg-paper px-2.5 py-2 text-[0.9rem] text-brown">
                      {row.owner}
                    </td>
                    <td className="border-2 border-ink bg-paper px-2.5 py-2 text-[0.9rem] text-brown">
                      {row.due}
                    </td>
                    <td className="border-2 border-ink bg-paper px-2.5 py-2 text-[0.9rem] text-brown">
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </RetroCard>
      </div>
    </section>
  );
}
