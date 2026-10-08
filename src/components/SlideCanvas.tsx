import React, { useRef, useEffect, useState } from 'react';
import { DrawingTool, DrawPath } from '../types';
import { Trash2, Edit3, Highlighter, MousePointer, Undo, Circle } from 'lucide-react';

interface SlideCanvasProps {
  activeTool: DrawingTool;
  setActiveTool: (tool: DrawingTool) => void;
  slideId: number;
}

export const SlideCanvas: React.FC<SlideCanvasProps> = ({
  activeTool,
  setActiveTool,
  slideId,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [paths, setPaths] = useState<{ [slideId: number]: DrawPath[] }>({});
  const [currentPath, setCurrentPath] = useState<DrawPath | null>(null);
  const [laserPos, setLaserPos] = useState<{ x: number; y: number } | null>(null);
  const [color, setColor] = useState('#859159');
  const [penSize, setPenSize] = useState(3);

  // Redraw when paths or currentPath changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle canvas resolution
    const rect = canvas.getBoundingClientRect();
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const currentSlidePaths = paths[slideId] || [];
    const allPaths = currentPath ? [...currentSlidePaths, currentPath] : currentSlidePaths;

    allPaths.forEach((p) => {
      if (p.points.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = p.color;
      ctx.lineWidth = p.size;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      
      if (p.tool === 'highlighter') {
        ctx.globalAlpha = 0.35;
        ctx.lineWidth = p.size * 3;
      } else {
        ctx.globalAlpha = 1.0;
      }

      ctx.moveTo(p.points[0].x * canvas.width, p.points[0].y * canvas.height);
      for (let i = 1; i < p.points.length; i++) {
        ctx.lineTo(p.points[i].x * canvas.width, p.points[i].y * canvas.height);
      }
      ctx.stroke();
      ctx.globalAlpha = 1.0;
    });
  }, [paths, currentPath, slideId]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (activeTool === 'pointer') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setIsDrawing(true);
    setCurrentPath({
      tool: activeTool,
      color: activeTool === 'highlighter' ? '#FBBF24' : color,
      size: penSize,
      points: [{ x, y }],
    });
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    if (activeTool === 'pointer') {
      setLaserPos({ x: e.clientX, y: e.clientY });
      return;
    }

    if (!isDrawing || !currentPath) return;

    setCurrentPath((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        points: [...prev.points, { x, y }],
      };
    });
  };

  const handlePointerUp = () => {
    if (isDrawing && currentPath) {
      setPaths((prev) => ({
        ...prev,
        [slideId]: [...(prev[slideId] || []), currentPath],
      }));
    }
    setIsDrawing(false);
    setCurrentPath(null);
  };

  const handleClearSlide = () => {
    setPaths((prev) => ({
      ...prev,
      [slideId]: [],
    }));
  };

  const handleUndo = () => {
    setPaths((prev) => {
      const current = prev[slideId] || [];
      if (current.length === 0) return prev;
      return {
        ...prev,
        [slideId]: current.slice(0, -1),
      };
    });
  };

  if (activeTool === 'pointer') {
    return (
      <>
        {laserPos && (
          <div
            className="fixed pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: laserPos.x, top: laserPos.y }}
          >
            <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_12px_#EF4444] animate-ping opacity-75" />
            <div className="absolute inset-0 w-3 h-3 bg-red-600 rounded-full shadow-[0_0_8px_#EF4444]" />
          </div>
        )}
      </>
    );
  }

  return (
    <>
      {/* Canvas Drawing Overlay */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          setIsDrawing(false);
          setCurrentPath(null);
        }}
        className="absolute inset-0 w-full h-full z-30 touch-none cursor-crosshair"
      />

      {/* Floating Mini Annotation Toolbar */}
      <div className="absolute top-4 right-4 z-40 bg-[#1A1D16]/90 backdrop-blur-md px-3 py-1.5 rounded-2xl border border-[#859159]/40 shadow-xl flex items-center gap-2 text-white no-print">
        <button
          onClick={() => setActiveTool('pen')}
          className={`p-1.5 rounded-lg transition-colors ${
            activeTool === 'pen' ? 'bg-[#859159] text-white' : 'text-gray-400 hover:text-white'
          }`}
          title="Caneta"
        >
          <Edit3 className="w-4 h-4" />
        </button>

        <button
          onClick={() => setActiveTool('highlighter')}
          className={`p-1.5 rounded-lg transition-colors ${
            activeTool === 'highlighter' ? 'bg-[#FBBF24] text-black' : 'text-gray-400 hover:text-white'
          }`}
          title="Marca-texto"
        >
          <Highlighter className="w-4 h-4" />
        </button>

        {/* Color Palette */}
        {activeTool === 'pen' && (
          <div className="flex items-center gap-1 pl-1 border-l border-white/20">
            {['#859159', '#EF4444', '#3B82F6', '#F59E0B', '#10B981'].map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-3.5 h-3.5 rounded-full transition-transform ${
                  color === c ? 'scale-125 ring-2 ring-white' : 'opacity-70 hover:opacity-100'
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        )}

        <div className="h-4 w-px bg-white/20" />

        <button
          onClick={handleUndo}
          className="p-1.5 text-gray-400 hover:text-white rounded-lg transition-colors"
          title="Desfazer"
        >
          <Undo className="w-4 h-4" />
        </button>

        <button
          onClick={handleClearSlide}
          className="p-1.5 text-red-400 hover:text-red-300 rounded-lg transition-colors"
          title="Limpar anotações deste slide"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
