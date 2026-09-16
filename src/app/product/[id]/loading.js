export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900"></div>
        <p className="text-gray-600">Loading product...</p>
      </div>
    </div>
  );
}