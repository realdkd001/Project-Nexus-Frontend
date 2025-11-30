"use client";
import { ChartBar } from "./bar-graph";
import GraphTitle from "./graph-title";
import ChartWrapper from "./chart-wrapper";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { PollProps } from "@/interface";

export function ChartComponent({ election_id }: { election_id: string }) {
    const [poll, setPoll] = useState<PollProps | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPoll = async () => {
            try {
                const res = await axios.get(`http://localhost:4000/polls/${election_id}`);
                setPoll(res.data);
            } catch (err) {
                console.error("Failed to fetch poll:", err);
                setPoll(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPoll();
    }, [election_id]);

    if (loading) {
        return <div className="text-gray-500">Loading...</div>;
    }

    if (!poll || (Array.isArray(poll) && poll.length === 0)) {
        return <div className="text-gray-500">Election not found...</div>;
    }

    return (
        <ChartWrapper>
            <GraphTitle data={poll} />
            <ChartBar data={poll?.votes || {}} />
        </ChartWrapper>
    );

}