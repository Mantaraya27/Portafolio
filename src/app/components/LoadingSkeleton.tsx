"use client"

import { motion } from "framer-motion"

interface SkeletonProps {
  className?: string
  lines?: number
  height?: string
}

export default function LoadingSkeleton({ 
  className = "", 
  lines = 1, 
  height = "h-4" 
}: SkeletonProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className={`${height} bg-muted rounded animate-pulse`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        />
      ))}
    </div>
  )
}

export function CardSkeleton() {
  return (
    <div className="bg-background border border-border/20 rounded-xl p-6 shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-muted rounded-full animate-pulse" />
        <div className="flex-1">
          <div className="h-4 bg-muted rounded w-3/4 mb-2 animate-pulse" />
          <div className="h-3 bg-muted rounded w-1/2 animate-pulse" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded animate-pulse" />
        <div className="h-4 bg-muted rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-muted rounded w-4/6 animate-pulse" />
      </div>
    </div>
  )
}

export function TimelineSkeleton() {
  return (
    <div className="space-y-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-muted rounded-full animate-pulse" />
          <div className="flex-1">
            <div className="h-5 bg-muted rounded w-1/3 mb-2 animate-pulse" />
            <div className="h-4 bg-muted rounded w-2/3 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  )
}
