export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold font-heading mb-4">Medantekno</h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-sm">
                            Konten tentang pemrograman web, mobile, teknologi AI & IOT
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-900 dark:text-gray-100">Keahlian</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400">Web Development</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400">Mobile Apps</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400">IOT</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400">AI</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-gray-900 dark:text-gray-100">Tentang Kami</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400">Tentang Medantekno</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400">Blog</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-violet-500 dark:text-gray-400 dark:hover:text-violet-400">Kontak</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Medantekno. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* Add social icons here if needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
