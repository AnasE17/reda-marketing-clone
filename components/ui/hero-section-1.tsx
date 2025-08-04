import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(239,68,68,0.1)_0,rgba(220,38,38,0.05)_50%,transparent_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(239,68,68,0.08)_0,rgba(220,38,38,0.03)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(239,68,68,0.06)_0,rgba(220,38,38,0.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="absolute inset-0 -z-20">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3276&q=80"
                                alt="background"
                                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>
                        <div aria-hidden className="absolute inset-0 -z-10 size-full bg-gradient-to-b from-transparent via-transparent to-white" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <Link
                                        href="#link"
                                        className="bg-gradient-to-r from-red-500 to-red-600 text-white group mx-auto flex w-fit items-center gap-4 rounded-full border border-red-200 p-1 pl-4 shadow-lg shadow-red-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30">
                                        <span className="text-sm font-medium">Specialized in Law Firm Marketing</span>
                                        <span className="block h-4 w-0.5 border-l border-white/30"></span>

                                        <div className="bg-white/20 group-hover:bg-white/30 size-6 overflow-hidden rounded-full duration-500">
                                            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-white" />
                                                </span>
                                                <span className="flex size-6">
                                                    <ArrowRight className="m-auto size-3 text-white" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                        
                                                                         <h1
                                         className="mt-8 max-w-4xl mx-auto text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-bold text-gray-900">
                                         Your Next <span className="text-red-500">Big Case</span><br />Is Looking for <span className="text-red-600">You</span>
                                     </h1>
                                     <p
                                         className="mx-auto mt-8 max-w-2xl text-balance text-xl text-gray-600">
                                         <span className="text-red-500 font-semibold">Personal injury</span> marketing that attracts the <span className="text-red-600 font-semibold">cases you want</span>.
                                     </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-gradient-to-r from-red-500 to-red-600 rounded-full p-0.5 shadow-lg shadow-red-500/30">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="bg-white text-red-600 hover:bg-gray-50 rounded-full px-8 py-3 text-lg font-semibold">
                                            <Link href="#link">
                                                <span className="text-nowrap">Get Started Today</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="outline"
                                        className="h-12 rounded-full px-8 text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-red-500 hover:text-red-600">
                                        <Link href="#link">
                                            <span className="text-nowrap">Free Consultation</span>
                                        </Link>
                                    </Button>
                                                                 </AnimatedGroup>
                             </div>
                         </div>
                         
                         {/* Trusted by Leading Platforms Section */}
                         <div className="mt-16 text-center">
                             <AnimatedGroup
                                 variants={{
                                     container: {
                                         visible: {
                                             transition: {
                                                 staggerChildren: 0.1,
                                                 delayChildren: 1.5,
                                             },
                                         },
                                     },
                                     ...transitionVariants,
                                 }}
                                 className="space-y-6">
                                                                   <div>
                                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                          Trusted by Leading Platforms
                                      </h3>
                                  </div>
                                                                   <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                                      <motion.div
                                          variants={{
                                              hidden: { opacity: 0, y: 20 },
                                              visible: { opacity: 1, y: 0 },
                                          }}
                                          className="flex flex-col items-center">
                                          <img
                                              src="https://www.pngmart.com/files/23/Google-Ads-Logo-PNG-HD.png"
                                              alt="Google Ads Partner"
                                              className="h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
                                          />
                                          <span className="text-sm text-gray-600 mt-2">Google Ads Partner</span>
                                      </motion.div>
                                      
                                      <motion.div
                                          variants={{
                                              hidden: { opacity: 0, y: 20 },
                                              visible: { opacity: 1, y: 0 },
                                          }}
                                          className="flex flex-col items-center">
                                          <img
                                              src="https://seeklogo.com/images/M/meta-business-partner-logo-8CED76C499-seeklogo.com.png"
                                              alt="Meta Business Partner"
                                              className="h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
                                          />
                                          <span className="text-sm text-gray-600 mt-2">Meta Business Partner</span>
                                      </motion.div>
                                      
                                      <motion.div
                                          variants={{
                                              hidden: { opacity: 0, y: 20 },
                                              visible: { opacity: 1, y: 0 },
                                          }}
                                          className="flex flex-col items-center">
                                          <img
                                              src="https://netzoll.com/wp-content/uploads/2024/05/microsoft_advertising_partner_logo_black_v2.png"
                                              alt="Microsoft Ads Partner"
                                              className="h-16 md:h-20 opacity-70 hover:opacity-100 transition-opacity"
                                          />
                                          <span className="text-sm text-gray-600 mt-2">Microsoft Ads Partner</span>
                                      </motion.div>
                                  </div>
                             </AnimatedGroup>
                         </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b from-transparent to-white absolute inset-0 z-10 from-35%"
                                />
                                <div className="bg-white relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-gray-200 p-4 shadow-xl shadow-gray-900/10">
                                    <img
                                        className="bg-white aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80"
                                        alt="Law office marketing dashboard"
                                        width="2700"
                                        height="1440"
                                    />
                                    <img
                                        className="aspect-15/8 relative rounded-2xl border border-gray-200 dark:hidden"
                                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80"
                                        alt="Law office marketing dashboard"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-white pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm font-medium text-gray-600 duration-150 hover:text-red-500">
                                <span>Meet Our Clients</span>
                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit opacity-60"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit opacity-60"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit opacity-60"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit opacity-60"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit opacity-60"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit opacity-60"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

 