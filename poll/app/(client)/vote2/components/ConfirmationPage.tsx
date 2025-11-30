import React from "react";
import Image from "next/image";
import SuccessSeal from "./successSeal";

type Candidate = {
    id: number;
    name: string;
    party: string;
    image: string;
};

type ConfirmationPageProps = {
    candidate: Candidate;
    election: string;
    confirmationId?: string;
    timestamp?: string;
};

export default function ConfirmationPage({
    candidate,
    election,
    confirmationId = "#A8C-3E7-B1F",
    timestamp = new Date().toLocaleString(),
}: ConfirmationPageProps) {
    return (

     
            <div className="flex flex-col w-full max-w-lg drop-shadow-2xl bg-white rounded-2xl  p-4 sm:p-10 text-center">

                {/* Seal & Animated Checkmark */}
                <SuccessSeal />

                {/* Heading */}
                <h1 className="text-3xl font-bold text-primary-text mb-2">Vote Confirmed</h1>
                <p className="text-secondary-text mb-8">
                    Your vote has been securely recorded.
                </p>

                {/* Candidate Info */}
                <div className="flex justify-center items-center gap-4 mb-8">
                    <Image
                        src={candidate.image}
                        alt={candidate.name}
                        width={50}
                        height={50}
                        className="rounded-full object-cover border-2 border-gray-200 shadow-sm"
                    />
                    <div>
                        <p className="text-sm font-bold text-primary-text">{candidate.name}</p>
                        <p className="text-xs text-secondary-text">{candidate.party}</p>
                    </div>
                </div>

                {/* Vote Summary */}
                <div className="bg-slate-50 rounded-xl p-4 sm:p-6 mb-8 border-2 border-dotted border-gray-200 text-left">
                    <h3 className="text-lg font-semibold text-primary-text mb-4">Vote Summary</h3>
                    <div className="space-y-3 text-xs sm:text-sm">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Election:</span>
                            <span className="font-medium text-gray-800">{election}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Confirmation ID:</span>
                            <span className="font-mono text-gray-600">{confirmationId}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500">Timestamp:</span>
                            <span className="font-medium text-gray-800">{timestamp}</span>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <button className=" flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-action-blue text-white font-semibold  transition-colors">
                        View Results
                    </button>
                    <button className=" flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-gray-100 text-primary-text font-semibold border border-gray-200 hover:bg-gray-200 transition-colors">
                        Return to Dashboard
                    </button>
                </div>
            </div>
  

    );
}
