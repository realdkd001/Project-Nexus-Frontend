"use client";
import React from 'react'
import { setPolls } from '@/store/slice/features/polls';
import axios from "axios";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";

function ChartWrapper({ children }: { children: React.ReactNode }) {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await axios.get("http://localhost:4000/polls");
                dispatch(setPolls(res.data));
            } catch (err) {
                console.error("fetch polls failed", err);
            }
        };
        fetch();
    }, [dispatch]);
    return (
        <>
            {children}
        </>
    )
}

export default ChartWrapper