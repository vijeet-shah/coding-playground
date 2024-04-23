import ResizableComponent from "./resizableComponent";

interface PreviewProps {
  html: string;
}

const OutputBrowser: React.FC<PreviewProps> = ({ html }) => {
  return (
    <ResizableComponent resizeHandles={["left"]}>
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">Preview</h2>
        <iframe
          srcDoc={html}
          className="w-full h-full border-2 border-gray-300"
          sandbox="allow-scripts"
        ></iframe>
      </div>
    </ResizableComponent>
  );
};

export default OutputBrowser;
