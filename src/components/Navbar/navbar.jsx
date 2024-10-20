import Link from "next/link";
import './navbar.css';

export default function Navbar() {
    return (
        <nav
            className="navbar w-full lg:visible fixed z-50 h-16 border-b backdrop-blur-md border-transparent shadow-xl scroll-smooth">
            <div className="container-fluid text-gray-100 h-full">
                <div className="flex flex-row justify-between items-center h-full px-5">

                    <div className="flex flex-row items-center space-x-4 h-full">
                        <Link href="/#">
                            <span className="test p-4 cursor-pointer">
                              <span className="navbar-option font-semibold scroll-smooth">
                                Home
                              </span>
                            </span>
                        </Link>

                        <Link href="/#about">
                            <span className="test p-4 cursor-pointer">
                              <span className="navbar-option font-semibold scroll-smooth">
                                About
                              </span>
                            </span>
                        </Link>

                        <Link href="/#skills">
                            <span className="test p-4 cursor-pointer">
                              <span className="navbar-option font-semibold scroll-smooth">
                                Skills
                              </span>
                            </span>
                        </Link>

                        <Link href="/#projects">
                            <span className="test p-4 cursor-pointer">
                              <span className="navbar-option font-semibold scroll-smooth">
                                Projects
                              </span>
                            </span>
                        </Link>

                        <Link href="/#timeline">
                            <span className="test p-4 cursor-pointer">
                              <span className="navbar-option font-semibold scroll-smooth">
                                Timeline
                              </span>
                            </span>
                        </Link>

                        <Link href="/#contact">
                            <span className="test p-4 cursor-pointer">
                              <span className="navbar-option font-semibold scroll-smooth">
                                Contact
                              </span>
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <span className="test p-4"></span>
                        <button
                            className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span
                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                <span className="font-semibold mx-4">
                                    <Link href="/">Resume</Link>
                                </span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
