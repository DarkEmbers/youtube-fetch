import Image from "next/image";
import { SearchBar } from "@/components/SearchBar";
import { ResultsPanel } from "@/components/ResultsPanel";

export default function Home()
{
	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 
						flex flex-col items-center justify-center p-8 pb-10 pt-10 gap-6 relative overflow-hidden">

			{/* Floating Bubbles */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-xl animate-pulse"></div>
				<div className="absolute top-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-pink-300/25 to-red-300/25 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }}></div>
				<div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-gradient-to-r from-green-300/20 to-blue-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
				<div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-yellow-300/15 to-orange-300/15 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
				<div className="absolute bottom-1/4 -right-16 w-56 h-56 bg-gradient-to-r from-purple-300/20 to-indigo-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
			</div>

			{/* YouTube Fetch Title */}
			<div className="text-center mb-8 relative z-10">
				<h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 via-purple-600 to-blue-600 
							   bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-lg">
					YouTube Fetch
				</h1>
				<p className="text-gray-700 text-lg font-medium drop-shadow-sm">
					Discover and explore content effortlessly
				</p>
			</div>

			<div className="relative z-10">
				<SearchBar />
			</div>
			<div className="relative z-10">
				<ResultsPanel />
			</div>
		</div>
	);
}