import type React from "react"
import type { Metadata } from "next"
import CVClient from "./CVClient"

export const metadata: Metadata = {
  title: "Lina Moussadek - CV",
  description: "Computer Science Student & Full Stack Developer - Curriculum Vitae",
}

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CVClient>{children}</CVClient>
}
