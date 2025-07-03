// app/(chat)/components/SuggestedPrompts.tsx

interface SuggestedPromptsProps {
  prompts: string[];
  onSelectPrompt: (prompt: string) => void;
}

export default function SuggestedPrompts({
  prompts,
  onSelectPrompt,
}: SuggestedPromptsProps) {
  return (
    <div className="mb-4 space-y-2">
      {prompts.map((prompt, index) => (
        <button
          key={index}
          onClick={() => onSelectPrompt(prompt)}
          className="w-full text-left p-3 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        >
          {prompt}
        </button>
      ))}
    </div>
  );
}
