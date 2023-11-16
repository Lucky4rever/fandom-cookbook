import { marked } from 'marked';

function useMarkdownRenderer(content: string) {
  const result = marked.parse(content);
  return (
    <section>{result}</section>
  );
}

export default useMarkdownRenderer;
