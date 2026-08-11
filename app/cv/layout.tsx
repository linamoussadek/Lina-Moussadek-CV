import type React from "react"
import type { Metadata } from "next"
import CVClient from "./CVClient"

export const metadata: Metadata = {
  title: "Lina Moussadek - CV",
  description: "Frontend Software Engineer with React, TypeScript, and enterprise software experience",
}

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CVClient>{children}</CVClient>
}
