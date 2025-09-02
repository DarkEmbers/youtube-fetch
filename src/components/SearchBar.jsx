"use client"

import { useState } from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ onSearch, onClear, initialValue = '' }) =>
{
	const [searchTerm, setSearchTerm] = useState(initialValue);

	const handleInputChange = (e) =>
	{
		const value = e.target.value;
		setSearchTerm(value);
		onSearch?.(value);
	};

	const handleClear = () =>
	{
		setSearchTerm('');
		onClear?.();
	};

	return (
		<div className="relative w-full mx-auto">
			<div className="relative flex items-center bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/30 overflow-hidden">
				<div className="pl-4 pr-3 py-3">
					<Search className="h-5 w-5 text-gray-600" />
				</div>

				<input
					type="text"
					value={searchTerm}
					onChange={handleInputChange}
					placeholder="Search"
					className="flex-1 py-3 pr-4 text-gray-800 placeholder-gray-500 bg-transparent border-0 outline-none focus:ring-0 text-base font-medium"
				/>

				{searchTerm && (
					<button
						onClick={handleClear}
						className="pr-4 pl-2 py-3 text-gray-600 hover:text-gray-800 transition-colors"
					>
						<X className="h-5 w-5" />
					</button>
				)}
			</div>
		</div>
	);
};

export default SearchBar;