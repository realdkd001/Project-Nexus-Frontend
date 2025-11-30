"use client";

import React, { useState } from "react";
import { CandidateCard, CandidateCardContent } from "./components";
import ConfirmationPage from "./components/ConfirmationPage";

// Flex-based grid that adapts to number of candidates
export const CandidateGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap gap-6 w-full justify-start">
    {React.Children.map(children, (child) => (
      <div className="flex-1 min-w-[200px]">{child}</div>
    ))}
  </div>
);

export default function VotePage() {
  const candidates = [
    {
      id: 1,
      name: "Jane Doe",
      party: "Liberty Party",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAv3zoUI5ETAIBBWDvfc1sW8qCtXHWKRqTte0Q8m2cZJ8rf-jdi99NAsKxLN_Bxz8QwtzCzjyEim_pRM0OD5D-h8cHs2-yV6bRdMPx7XVqQ-Z603A-Iq-dNdQYbmZShHk_tdEq_LM6M7C2OYj9oo217b8fgB6vaPnjPWsGg0Qo4gQBTGaTTzvpLAR_hQjD77G0QzRMa490ipuXwoxV8ah_MaBeUajQsB7RqE4l9R9Ix1682UyawWXPn_UpSAP_3aLbVd10oi-a8X1i-",
    },
    {
      id: 2,
      name: "John Smith",
      party: "Progress Party",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC9Izq8CqzThMTJeV2cMQzO18L-2cHipb4tCn9PxlZ1hV7-qeWNpaJYYkYKQ1oRUpVIzBWTZgzg9rUawhDC35eCbUB4rnTE0mYzBsN5_zB1Jkm1wKmAOZjoO2gWGV-MOt0H6Dl-MkqjMojhlIrzofNUxiHZWuAydUGi1ucSM-G8vbjb_yA52Z3v8WIKi2uCaZiF2T-Kno4ZZ5N0oCT7bS4IkVf_cg3iAbmh-DPappteaDFt7hRw_j0yCkVz5JSYDhkwFanY4CSzzVsN",
    },
    {
      id: 3,
      name: "Emily Jones",
      party: "Unity Party",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCWxyhidoD3xjw43UcTrKFrf3t0SZry2qA4eGaJz6H6D7C9aStUIYkl-wANNYSwnczUIMKqHuAlRgYgXNm2eu0QKVMiCINEDG9_G0twutP1Vgz15HiK4RURk4Nh8z_iL7nMXgN-SoIQJ8AaeYyeISWYxTY1apwNLX4nbGYzR6FKPxKkcAm-Q0oWN7TnPtctaef4bg34GmfAbbaZAQAJgTllJsNfOh3JLYGNf4Defcsn6vyQV7iPiYVsSnIEfL_DKvMeBzulAICuvF1g",
    },
    {
      id: 4,
      name: "Michael Brown",
      party: "Alliance Party",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC3kdeOs1JBztWllyj82Oz2_5cTAePJswpEfKvMJLHlVsZ_7awfCdvb8bMrdaddiagDf-FgSESuWYPaVwrB26TcXgJ0kq_4ce9o79KAy_-GpFRsBElWRs00WEhuniywgjmWaBbnOS4sRFf5WbqFVzZL9aeOptWsGdhVujLQraxDtj21IpWySIDkWIopgUc5bu_Ru2l5fw1x2mgx4RbNYsk8IG4NU6Jui8UqPU52QkQrJupOd-JsNiU4bVpd7zOwzqoMxFgQcI_t6eLv",
    },
  ];

  const [page, setPage] = useState(1);
  const [selectedCandidate, setSelectedCandidate] = useState<number>(0);

  // Store confirmation info in state
  const [confirmationId, setConfirmationId] = useState<string>("");
  const [timestamp, setTimestamp] = useState<string>("");

  const handleSubmitVote = () => {
    if (selectedCandidate === 0) return;
    setConfirmationId(`#${Math.random().toString(36).substr(2, 8).toUpperCase()}`);
    setTimestamp(new Date().toLocaleString());
    setPage(2);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex h-full grow flex-col">
        <main className="flex flex-1 justify-center py-8 px-4 sm:px-6 md:px-8 lg:py-16">
          {page === 1 && (
            <div className="flex w-full max-w-5xl flex-col gap-8 lg:gap-12">
              {/* Heading */}
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-primary-text text-4xl font-black tracking-tighter sm:text-5xl">
                  Presidential Election 2024
                </h1>
                <p className="text-secondary-text text-lg">
                  Please select one candidate for the office of President.
                </p>
              </div>

              {/* Candidate Grid */}
              <CandidateGrid>
                {candidates.map((c) => {
                  const isSelected = selectedCandidate === c.id;
                  return (
                    <CandidateCardContent
                      key={c.id}
                      isSelected={isSelected}
                      onClick={() => setSelectedCandidate(c.id)}
                    >
                      <CandidateCard {...c} />
                    </CandidateCardContent>
                  );
                })}
              </CandidateGrid>
            </div>
          )}

          {page === 2 && selectedCandidate !== 0 && (
            <ConfirmationPage
              candidate={candidates.find((c) => c.id === selectedCandidate)!}
              election="Presidential Election 2024"
              confirmationId={confirmationId}
              timestamp={timestamp}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      {page === 1 && (
        <footer className="sticky bottom-0 z-10 w-full border-t border-border-light bg-gray-200 dark:border-border-dark dark:bg-content-dark/80 dark:backdrop-blur-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 p-4 lg:px-8">
            <div className="flex flex-col">
              <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Your selection:
              </span>
              <span className="font-bold text-text-primary-light dark:text-text-primary-dark">
                {candidates.find((c) => c.id === selectedCandidate)?.name || "None"}
              </span>
            </div>

            <button
              onClick={handleSubmitVote}
              disabled={selectedCandidate === 0}
              className={`flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-bold text-white transition-colors ${
                selectedCandidate === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-action-blue hover:bg-primary"
              }`}
            >
              <span>Submit Vote</span>
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
