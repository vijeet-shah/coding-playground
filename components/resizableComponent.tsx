"use client";
import React, { useState, useEffect, useRef } from "react";

interface ResizableComponentProps {
  children: React.ReactNode;
  initialWidth?: number;
  initialHeight?: number;
  resizeHandles?: (
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
  )[];
}

const ResizableComponent: React.FC<ResizableComponentProps> = ({
  children,
  initialWidth = 300,
  initialHeight = 200,
  resizeHandles = "bottomRight",
}) => {
  const [width, setWidth] = useState(initialWidth);
  const [height, setHeight] = useState(initialHeight);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [startWidth, setStartWidth] = useState(width);
  const [startHeight, setStartHeight] = useState(height);
  const [resizeDirection, setResizeDirection] = useState<string | null>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        let newWidth = startWidth;
        let newHeight = startHeight;

        if (resizeDirection?.includes("left")) {
          newWidth = startWidth - (e.clientX - startX);
        } else if (resizeDirection?.includes("right")) {
          newWidth = startWidth + (e.clientX - startX);
        }

        if (resizeDirection?.includes("top")) {
          newHeight = startHeight - (e.clientY - startY);
        } else if (resizeDirection?.includes("bottom")) {
          newHeight = startHeight + (e.clientY - startY);
        }

        setWidth(Math.max(newWidth, 100));
        setHeight(Math.max(newHeight, 50));
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setResizeDirection(null);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, startX, startY, startWidth, startHeight, resizeDirection]);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    direction: string
  ) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
    setStartWidth(width);
    setStartHeight(height);
    setResizeDirection(direction);
  };

  const renderResizeHandles = () => {
    const handles: React.ReactNode[] = [];

    if (resizeHandles.includes("top")) {
      handles.push(
        <div
          key="top"
          className="absolute top-0 left-0 right-0 h-4  cursor-ns-resize"
          onMouseDown={(e) => handleMouseDown(e, "top")}
        />
      );
    }

    if (resizeHandles.includes("bottom")) {
      handles.push(
        <div
          key="bottom"
          className="absolute bottom-0 left-0 right-0 h-4  cursor-ns-resize"
          onMouseDown={(e) => handleMouseDown(e, "bottom")}
        />
      );
    }

    if (resizeHandles.includes("left")) {
      handles.push(
        <div
          key="left"
          className="absolute top-0 bottom-0 left-0 w-4  cursor-ew-resize"
          onMouseDown={(e) => handleMouseDown(e, "left")}
        />
      );
    }

    if (resizeHandles.includes("right")) {
      handles.push(
        <div
          key="right"
          className="absolute top-0 bottom-0 right-0 w-4  cursor-ew-resize"
          onMouseDown={(e) => handleMouseDown(e, "right")}
        />
      );
    }

    if (resizeHandles.includes("topLeft")) {
      handles.push(
        <div
          key="topLeft"
          className="absolute top-0 left-0 w-4 h-4  cursor-nwse-resize"
          onMouseDown={(e) => handleMouseDown(e, "topLeft")}
        />
      );
    }

    if (resizeHandles.includes("topRight")) {
      handles.push(
        <div
          key="topRight"
          className="absolute top-0 right-0 w-4 h-4  cursor-nesw-resize"
          onMouseDown={(e) => handleMouseDown(e, "topRight")}
        />
      );
    }

    if (resizeHandles.includes("bottomLeft")) {
      handles.push(
        <div
          key="bottomLeft"
          className="absolute bottom-0 left-0 w-4 h-4  cursor-nesw-resize"
          onMouseDown={(e) => handleMouseDown(e, "bottomLeft")}
        />
      );
    }

    if (resizeHandles.includes("bottomRight")) {
      handles.push(
        <div
          key="bottomRight"
          className="absolute bottom-0 right-0 w-4 h-4  cursor-nwse-resize"
          onMouseDown={(e) => handleMouseDown(e, "bottomRight")}
        />
      );
    }

    return handles;
  };

  return (
    <div
      ref={componentRef}
      style={{ width: `${width}px`, height: `${height}px` }}
      className="relative border-2 border-gray-800 overflow-hidden"
    >
      {children}
      {renderResizeHandles()}
    </div>
  );
};

export default ResizableComponent;
