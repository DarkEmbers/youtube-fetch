import { ChevronRight } from 'lucide-react';

export const ResultsPanel = ({ results = [], onItemClick }) =>
{
	if (results.length === 0)
	{
		return null;
	}

	return (
		<div className="w-full max-w-lg mx-auto mt-4">
			<div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
				{/* Results count header */}
				<div className="px-6 py-4 text-sm text-gray-500 border-b border-gray-100">
					{results.length} results found
				</div>

				{/* Results list */}
				<div className="divide-y divide-gray-100">
					{results.map((result, index) => (
						<div
							key={index}
							onClick={() => onItemClick?.(result)}
							className="flex items-center p-6 hover:bg-gray-50 cursor-pointer transition-colors group"
						>
							{/* Plant image */}
							<div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gray-100 mr-4">
								<img
									src={result.image}
									alt={result.name}
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Plant info */}
							<div className="flex-1 min-w-0">
								<h3 className="text-base font-medium text-gray-900 mb-1">
									{result.name}
								</h3>
								<p className="text-sm text-gray-500 leading-relaxed">
									{result.description}
								</p>
							</div>

							{/* Arrow icon */}
							<div className="flex-shrink-0 ml-4">
								<ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};