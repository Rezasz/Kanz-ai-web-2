import React from 'react';
import { Database, ArrowRight, Cpu, LineChart } from 'lucide-react';

const DataFlowDiagram = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <Database className="h-12 w-12 text-blue-600" />
        <p className="mt-2 text-sm font-medium">Data Collection</p>
      </div>
      <ArrowRight className="h-6 w-6 text-gray-400" />
      <div className="flex flex-col items-center">
        <Cpu className="h-12 w-12 text-blue-600" />
        <p className="mt-2 text-sm font-medium">Processing</p>
      </div>
      <ArrowRight className="h-6 w-6 text-gray-400" />
      <div className="flex flex-col items-center">
        <LineChart className="h-12 w-12 text-blue-600" />
        <p className="mt-2 text-sm font-medium">Insights</p>
      </div>
    </div>
  );
};

export default DataFlowDiagram;