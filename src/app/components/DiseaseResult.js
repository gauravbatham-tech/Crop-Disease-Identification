export default function DiseaseResult({ data }) {
  if (!data) return null;
  if (data.message) return <p className="text-red-500">{data.message}</p>;

  // data is expected to have fields like disease, confidence, advice, imageUrl?
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-green-600 mb-2">
        Diagnosis
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        <strong>Disease:</strong> {data.disease}
      </p>
      {data.confidence !== undefined && (
        <p className="text-gray-700 dark:text-gray-300">
          <strong>Confidence:</strong> {(data.confidence * 100).toFixed(1)}%
        </p>
      )}
      {data.advice && (
        <div>
          <h4 className="font-semibold text-green-600">Suggested Action</h4>
          <p className="text-gray-700 dark:text-gray-300">{data.advice}</p>
        </div>
      )}
    </div>
  );
}
