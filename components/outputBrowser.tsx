import ResizableComponent from "./resizableComponent";

interface PreviewProps {
  html: string;
}

const OutputBrowser: React.FC<PreviewProps> = ({ html }) => {
  return (
    <ResizableComponent
      resizeHandles={["left"]}
      initialHeight={900}
      initialWidth={500}
    >
      <div className="h-full p-4 ml-10 border-2 border-gray-800">
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
