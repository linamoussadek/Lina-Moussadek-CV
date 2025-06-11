"use client"

import type React from "react"

import "../globals.css"

export default function CVClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style jsx global>{`
          @media print {
            @page {
              size: A4;
              margin: 0.5in;
            }
            
            body {
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
            }
            
            .print\\:hidden {
              display: none !important;
            }
            
            .print\\:block {
              display: block !important;
            }
            
            .print\\:text-xs {
              font-size: 0.75rem !important;
            }
            
            .print\\:text-sm {
              font-size: 0.875rem !important;
            }
            
            .print\\:text-base {
              font-size: 1rem !important;
            }
            
            .print\\:text-lg {
              font-size: 1.125rem !important;
            }
            
            .print\\:text-xl {
              font-size: 1.25rem !important;
            }
            
            .print\\:text-3xl {
              font-size: 1.875rem !important;
            }
            
            .print\\:mb-1 {
              margin-bottom: 0.25rem !important;
            }
            
            .print\\:mb-2 {
              margin-bottom: 0.5rem !important;
            }
            
            .print\\:mb-4 {
              margin-bottom: 1rem !important;
            }
            
            .print\\:mb-6 {
              margin-bottom: 1.5rem !important;
            }
            
            .print\\:pt-2 {
              padding-top: 0.5rem !important;
            }
            
            .print\\:p-6 {
              padding: 1.5rem !important;
            }
            
            .print\\:space-y-2 > * + * {
              margin-top: 0.5rem !important;
            }
            
            .print\\:space-y-3 > * + * {
              margin-top: 0.75rem !important;
            }
            
            .print\\:space-y-4 > * + * {
              margin-top: 1rem !important;
            }
            
            .print\\:gap-2 {
              gap: 0.5rem !important;
            }
            
            .print\\:gap-3 {
              gap: 0.75rem !important;
            }
            
            .print\\:max-w-none {
              max-width: none !important;
            }
            
            .print\\:shadow-none {
              box-shadow: none !important;
            }
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
