'use client'

import React, { useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'

import { cn } from '@/lib/utils'

import {Simulator} from '../Simulator'
 
export function Work1 () {
  const [isOpen, setIsOpen] = useState(false)
 
  const onClickHandler = () => setIsOpen(!isOpen)
 
  return (
    <Simulator>
      <div className={cn('background', 'absolute inset-0 -z-10 bg-white')}></div>
      
      <MotionConfig 
        transition={{
          type: 'spring',
          duration: 0.5,
          bounce: 0
          }}
        >
        <div className="px-4 pt-4 text-black">
          <h2 className={cn('category', 'text-2xl font-semibold tracking-tight')}>
            전자도서
          </h2>
 
          <motion.div 
            layoutId="wrapper"
            className={cn('card', 'bg-white')}
          >
            <motion.div
              className="relative mt-4 cursor-pointer overflow-hidden rounded-xl bg-white shadow-2xl"
              whileTap={{ scale: 0.97 }}
              style={{ borderRadius: 12 }}
              onClick={onClickHandler}
            >
              <motion.img
                layoutId="bg-image"
                src="appThumbnail.png"
                className="aspect-[4/4.7] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full isolate">
                <motion.div
                  layoutId="gradient-bg"
                  className="absolute inset-0 -z-10 bg-gradient-to-t from-[#e6b143] to-transparent"
                />
 
                <div className="-translate-y-4 translate-x-4">
                  <motion.small
                    layoutId="top-small-layout"
                    className="relative flex items-center justify-start uppercase text-white/80"
                  >
                    프뢰벨
                  </motion.small>
 
                  <motion.h2
                    layoutId="top-title-layout"
                    className="text-2xl font-bold text-white"
                  >
                    맥스와 루비의 생일 케이크
                  </motion.h2>
                </div>
 
                <motion.div
                  className="relative isolate flex h-[70px] w-full items-center gap-2 px-4"
                  style={{
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                  }}
                >
                  <motion.div
                    layoutId="bottom-background"
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-[#e6b143] to-[#be8f3c]"
                  />
 
                  <motion.img
                    layoutId="bottom-image-layout"
                    src="appIcon.png"
                    className="aspect-square w-11 rounded-xl object-cover"
                  />
                  <motion.div layoutId="bottom-text-layout">
                    <h3 className="text-sm font-medium leading-4 text-white">
                      프뢰벨 테마동화 1차
                    </h3>
                    <p className="text-xs text-white opacity-55">
                      맥스와 루비의 생일 케이크
                    </p>
                  </motion.div>
                  {/* <motion.div
                    layoutId="bottom-button-layout"
                    className="ml-auto flex flex-col items-center justify-center gap-1 self-end pb-2"
                    style={{ flex: "0 0 auto" }}
                  >
                    <button className="border-none h-7 w-14 rounded-full bg-white/30 text-white">
                      받기
                    </button>
                    <small className="text-[7px] text-white/55">
                      앱 내 구입
                    </small>
                  </motion.div> */}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
 
          <AnimatePresence>
            {isOpen && (
              <motion.div
                layoutId="wrapper"
                className="absolute inset-0 bg-white"
              >
                <motion.div
                  className="relative isolate z-20 cursor-pointer shadow-2xl"
                  whileTap={{ scale: 0.97 }}
                  style={{ borderRadius: 0 }}
                  onClick={onClickHandler}
                >
                  <motion.img
                    layoutId="bg-image"
                    src="appThumbnail.png"
                    className="aspect-[4/4.7] w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full isolate">
                    <motion.div
                      layoutId="gradient-bg"
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-[#dda93e] to-transparent"
                    />
 
                    <motion.div className="flex flex-col px-4 pb-8">
                      <motion.small
                        layoutId="top-small-layout"
                        className="relative flex items-center justify-start uppercase text-white/80"
                      >
                        프뢰벨
                      </motion.small>
 
                      <motion.h2
                        layoutId="top-title-layout"
                        className="text-2xl font-bold text-white"
                      >
                        맥스와 루비의 생일 케이크
                      </motion.h2>
                    </motion.div>
                    
                    <motion.div
                      className="relative isolate flex h-[70px] w-full items-center gap-2 px-4"
                      style={{
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    >
                      <motion.div
                        layoutId="bottom-background"
                        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#e6b143] to-[#be8f3c]"
                      />
                      <motion.img
                        layoutId="bottom-image-layout"
                        src="appIcon.png"
                        className="aspect-square w-11 rounded-xl object-cover"
                      />
                      <motion.div layoutId="bottom-text-layout">
                        <h3 className="text-sm font-medium leading-4 text-white">
                          프뢰벨 테마동화 1차
                        </h3>
                        <p className="text-xs text-white opacity-55">
                          맥스와 루비의 생일 케이크
                        </p>
                      </motion.div>
                      {/* <motion.div
                        layoutId="bottom-button-layout"
                        className="ml-auto flex flex-col items-center justify-center gap-1 self-end pb-2"
                        style={{ flex: "0 0 auto" }}
                      >
                        <button className="border-none h-7 w-14 rounded-full bg-white/30 text-white">
                          받기
                        </button>
                        <small className="text-[7px] text-white/55">
                          앱 내 구입
                        </small>
                      </motion.div>*/}
                    </motion.div> 
                  </div>
                </motion.div>
 
                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.2 } }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="overflow-auto p-4"
                >
                  <p className="text-[1.025rem] leading-6 text-[#959597]">
                    맥스는 늘 엉뚱한 소동을 벌이고 침착한 루비 누나가 수습하는 남매의 알콩달콩 일상이 매력적이죠.
                    이 책에는 <b className="text-black">할머니 생신케이크</b>를 만드는 에피소드가 나와요.{" "}
                    케이크 만들기에 도움을 주고 싶은 맥스의 마음과는 달리 자꾸 재료를 쏟고 망쳐놓아서 가게에 다시 사러가는 심부름을 하게 됩니다.
                  </p>
 
                  <p className="mt-4 text-[1.025rem] leading-6 text-[#959597]">
                    페이지 한쪽에 맥스가 사올 재료가 메모지에 적혀있어서 케이크 만들기 재료들을 알아볼 수 있지요.{" "}
                    그 와중에 자신이 먹고 싶은 <b className="text-black">마쉬멜로우</b>를 
                    사기 위한 맥스의 노력이 재미를 더해주지요.
                  </p>
                </motion.div> */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </MotionConfig>
    </Simulator>
  );
}

export default Work1