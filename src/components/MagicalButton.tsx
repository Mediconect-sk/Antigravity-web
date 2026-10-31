"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface MagicalButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function MagicalButton({ children, onClick, className = "" }: MagicalButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`group relative inline-flex items-center justify-center px-10 py-5 font-bold text-lg text-[#041D2C] transition-transform duration-300 active:scale-95 isolation-auto ${className}`}
        >
            {/* 1. The BACKLIGHT GLOW (Soft, centered, scaled) - PREMIUM UPDATE */}
            {/* Reduced opacity to 20-40%, increased blur to xl/2xl for soft fade, removed white from gradient for less harshness */}
            <div
                className="hidden"
                style={{ zIndex: -2 }}
            />

            {/* 2. The ROTATING BORDER FRAME */}
            {/* Acts as a container clipping the spinner. Inset -1px to create a 1px border visible outside inner bg. */}
            <div
                className="absolute inset-[0px] rounded-2xl overflow-hidden transform-gpu"
                style={{ zIndex: -1 }}
            >
                {/* The Spinner: large enough to cover corners during rotation */}
                <div className="absolute inset-0 bg-[#4CADB6] transition-colors duration-300 group-hover:bg-[#88D5DB]" />
            </div>

            {/* 3. The INNER BACKGROUND */}
            {/* Covers the center, leaving only the border and glow visible */}
            {/* Inset 1px means 1px of the border frame is visible around this */}
            <div
                className="absolute inset-[1px] rounded-[15px] bg-[#4CADB6] shadow-[0_14px_30px_-12px_rgba(60,151,163,0.7)] transition-all duration-300 group-hover:bg-[#88D5DB] group-hover:shadow-[0_18px_36px_-12px_rgba(60,151,163,0.85)]"
                style={{ zIndex: 0 }}
            />

            {/* 4. The CONTENT */}
            <div className="relative z-10 flex items-center gap-3">
                {/* Svetlý redizajn: biely text na navy, bez textového gradientu */}
                <span className="flex items-center gap-2 text-[#041D2C] transition-all">
                    {children}
                </span>
                <ArrowRight className="text-[#041D2C] transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </div>
        </button>
    );
}
