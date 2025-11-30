import React from "react";



export const CandidateGrid = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex w-full px-4 sm:px-0 items-center justify-center">
            <div className="flex w-full flex-col max-w-lg gap-8 ">
                {children}
            </div>
        </div>
    );
};



export const CandidateCardContent = ({
    isSelected,
    onClick,
    children
}: {
    children: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
}) => {
    return (
        <div
            onClick={onClick}
            className={`
                group relative flex justify-center items-center cursor-pointer rounded-xl p-4 transition-all
                ${isSelected
                    ? "border-2 border-gray-500 shadow-xl scale-102 sm:scale-105 bg-white"
                    : "border-2 border-gray-200 shadow-xs hover:border-primary-text/30"
                }
            `}
        >
            {/* Check Badge */}
            {isSelected && (
                <div className="absolute -top-3 -right-3 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-white">
                    <svg
                        width="16"
                        height="16"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                    >
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                </div>
            )}

            {children}
        </div>
    );
};


export const CandidateCard = ({
    image,
    name,
    party
}: {
    image: string;
    name: string;
    party: string;
}) => {
    return (
        <div className="w-full sm:min-w-50 lg:min-w-70 flex flex-col items-center gap-4 text-center">
            <div className="h-32 w-32 overflow-hidden rounded-full">
                <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('${image}')` }}
                />
            </div>

            <div className="flex flex-col">
                <p className="text-lg font-bold text-primary-text dark:text-text-primary-dark">
                    {name}
                </p>
                <p className="text-sm text-secondary-text dark:text-text-secondary-dark">
                    {party}
                </p>
            </div>
        </div>
    );
};
