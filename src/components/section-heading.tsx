import React from "react";

export interface SectionHeadingProps {
    children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h2 className="text-3xl font-medium capitalize mb-8 text-center">
            {children}
        </h2>
    )
}