'use client'

import React, { type Dispatch, type SetStateAction, useState } from 'react'
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from 'framer-motion'
import { CircleCheck } from 'lucide-react'
import useMeasure from 'react-use-measure'
import { cn } from '@/lib/utils'

type sportsTypes = Record<string, boolean>
 
const sportsObject: sportsTypes = {
  Soccer: false,
  Basketball: false,
  Baseball: false,
  Tennis: false,
  Golf: false,
  Cricket: false,
  Rugby: false,
  Hockey: false,
  Badminton: false,
  Volleyball: false,
  Boxing: false,
  MMA: false,
  Wrestling: false,
  Swimming: false,
  Athletics: false,
  Cycling: false,
  Gymnastics: false,
  Skiing: false,
  Snowboarding: false,
  Skateboarding: false,
  Surfing: false,
  Rowing: false,
  Sailing: false,
  Fencing: false,
  Judo: false,
  Karate: false,
  Taekwondo: false,
  Archery: false,
  Equestrian: false,
  Lacrosse: false,
  Handball: false,
  Softball: false,
  Squash: false,
  Racquetball: false,
  Bobsleigh: false,
  Curling: false,
  Diving: false,
}

export function Work2 ({
  children
}: React.PropsWithChildren<React.ReactNode>) {
  const [filter, setFilter] = useState(false);
 
  const [values, setValues] = useState(sportsObject);
 
  const onClickHandler = () => setFilter(!filter);
 
  const [ref, { height }] = useMeasure();
 
  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-xl font-bold tracking-tight text-white">
        What are your favorite language?
      </h1>
 
      <MotionConfig
        transition={{
          duration: 0.7,
          type: "spring",
          bounce: filter ? 0 : undefined,
        }}
      >
        <motion.div
          initial={{ height: "auto" }}
          animate={{ height: height > 0 ? height : undefined }}
        >
          <motion.ul ref={ref} className="mt-4 flex w-full flex-wrap gap-2">
            <LayoutGroup>
              <AnimatePresence initial={false} mode="popLayout">
                {/* {Object.entries(values)
                  .filter(([key, value]) => !filter || value)
                  .map(([key, value]) => (
                    <EachSport
                      key={key}
                      sport={key}
                      isSelected={value}
                      setValues={setValues}
                    />
                  ))} */}
              </AnimatePresence>
            </LayoutGroup>
          </motion.ul>
        </motion.div>
      </MotionConfig>
 
      <div className="flex justify-center py-8">
        <button
          className="h-8 rounded border border-[#452C28] bg-[#1C1210] px-4 text-[#EA885A] duration-200 active:scale-95"
          onClick={onClickHandler}
        >
          Submit
        </button>
      </div>
    </div>
  )
}
 
function EachSport({
  sport,
  setValues,
  isSelected,
}: {
  sport: string;
  setValues: Dispatch<SetStateAction<{}>>
  isSelected: boolean;
}) {
  const onClickHandler = () => {
    setValues((prev) => ({ ...prev, [sport]: !isSelected }))
  }
 
  return (
    <motion.li
      layout="position"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      <motion.button
        layout
        className={cn(
          "flex h-10 items-center gap-2 border border-[#373538] bg-[#161417] px-4 text-[#A3A1A3]",
          isSelected && "border-[#452C28] bg-[#1C1210] text-[#EA885A]"
        )}
        style={{ borderRadius: 9999 }}
        onClick={onClickHandler}
      >
        <motion.span layout className="inline-block">
          {sport}
        </motion.span>
 
        {isSelected && (
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }}>
            <CircleCheck />
          </motion.span>
        )}
      </motion.button>
    </motion.li>
  )
}