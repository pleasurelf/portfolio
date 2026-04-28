export function renderBody(body: string) {
  return body.split("\n\n").flatMap((block, i) => {
    const lines = block.split("\n").map((l) => l.trim()).filter((l) => l.length > 0);
    if (lines.length === 0) return [];
    const isList = lines.every((l) => l.startsWith("- "));
    if (isList) {
      return (
        <ul key={i} className="list-disc list-outside pl-5 mb-3 last:mb-0 space-y-1">
          {lines.map((l, j) => (
            <li key={j} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {l.slice(2)}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3 last:mb-0">
        {block.trim()}
      </p>
    );
  });
}
