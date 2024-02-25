import React from 'react'
import Image from "next/image";


const Header = () => {
    return (
        <>
            <div class="fixed z-20 top-0 inset-x-0 flex justify-center pointer-events-none">
                <div class="w-[108rem] flex-none flex justify-end">
                    <Image
                        width={500}
                        height={500}
                        src="/docs_background.avif" alt="" class="w-[71.75rem]  flex-none max-w-none" decoding="async" />
                </div>
            </div>
            <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
                <div class="max-w-8xl mx-auto">
                    <div class="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
                        <div class="relative flex items-center">
                            <Image
                                width={100}
                                height={45}
                                alt="Picture of the author"
                                src="/anime_hub_png_logo.png" />
                            <a
                                class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
                                href="/"
                            >
                                <span class="sr-only">Tailwind CSS home page</span>
                            </a>
                            <div class="relative hidden lg:flex items-center ml-auto">

                                <nav class="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                                    <ul class="flex space-x-8">
                                        <li>
                                            <a
                                                class="hover:text-sky-500 dark:hover:text-sky-400"
                                                href="/docs/installation"
                                            >
                                                Trending
                                            </a>

                                        </li>
                                        <li>
                                            <a
                                                href="https://tailwindui.com/?ref=top"
                                                class="hover:text-sky-500 dark:hover:text-sky-400"
                                            >
                                                Movies
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <button
                                type="button"
                                class="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
                            >
                                <span class="sr-only">Search</span>
                                <svg
                                    width="24"
                                    height="24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    ariaHidden="true"
                                >
                                    <path d="m19 19-3.5-3.5"></path>
                                    <circle cx="11" cy="11" r="6"></circle>
                                </svg>
                            </button>
                            <div class="ml-2 -my-1 lg:hidden">
                                <button
                                    type="button"
                                    class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                                >
                                    <span class="sr-only">Navigation</span>
                                    <svg width="24" height="24" fill="none" aria-hidden="true">
                                        <path
                                            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header 