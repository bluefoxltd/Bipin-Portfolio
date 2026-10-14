import React, { useRef, useState, useEffect } from 'react';
import { Minus, Square, X, RotateCcw } from 'lucide-react';
import { sounds } from '../utils/soundEffects';

interface WindowFrameProps {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  initialPosition?: { x: number; y: number };
  initialSize?: { width: number; height: number };
  minWidth?: number;
  minHeight?: number;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  toolbarRight?: React.ReactNode;
}

export const WindowFrame: React.FC<WindowFrameProps> = ({
  title,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  initialPosition = { x: 80, y: 60 },
  initialSize = { width: 800, height: 560 },
  minWidth = 360,
  minHeight = 260,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  children,
  icon,
  toolbarRight,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; startX: number; startY: number }>({ mouseX: 0, mouseY: 0, startX: 0, startY: 0 });
  const resizeStartRef = useRef<{ mouseX: number; mouseY: number; startW: number; startH: number }>({ mouseX: 0, mouseY: 0, startW: 0, startH: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  // Center window on mobile or clamp position to viewport
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setPosition({ x: 8, y: 36 });
        setSize({ width: window.innerWidth - 16, height: window.innerHeight - 100 });
      }
    }
  }, []);

  // Handle Dragging
  const handleMouseDownHeader = (e: React.MouseEvent) => {
    if (isMaximized) return;
    onFocus();
    setIsDragging(true);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      startX: position.x,
      startY: position.y,
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const dx = e.clientX - dragStartRef.current.mouseX;
        const dy = e.clientY - dragStartRef.current.mouseY;
        const newX = Math.max(0, Math.min(window.innerWidth - 100, dragStartRef.current.startX + dx));
        const newY = Math.max(28, Math.min(window.innerHeight - 80, dragStartRef.current.startY + dy));
        setPosition({ x: newX, y: newY });
      } else if (isResizing) {
        const dx = e.clientX - resizeStartRef.current.mouseX;
        const dy = e.clientY - resizeStartRef.current.mouseY;
        const newW = Math.max(minWidth, resizeStartRef.current.startW + dx);
        const newH = Math.max(minHeight, resizeStartRef.current.startH + dy);
        setSize({ width: newW, height: newH });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, minWidth, minHeight]);

  const handleMouseDownResize = (e: React.MouseEvent) => {
    e.stopPropagation();
    onFocus();
    setIsResizing(true);
    resizeStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      startW: size.width,
      startH: size.height,
    };
  };

  if (!isOpen || isMinimized) return null;

  const style: React.CSSProperties = isMaximized
    ? {
        position: 'fixed',
        top: '30px',
        left: '0',
        width: '100vw',
        height: 'calc(100vh - 30px - 72px)',
        zIndex,
      }
    : {
        position: 'fixed',
        top: `${position.y}px`,
        left: `${position.x}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        maxWidth: '96vw',
        maxHeight: 'calc(100vh - 80px)',
        zIndex,
      };

  return (
    <div
      ref={windowRef}
      style={style}
      onMouseDown={onFocus}
      className="flex flex-col rounded-xl overflow-hidden shadow-2xl transition-shadow select-none border border-slate-300/40 dark:border-white/15 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl"
    >
      {/* Title Bar / Header */}
      <div
        onMouseDown={handleMouseDownHeader}
        onDoubleClick={onMaximize}
        className="h-10 px-3.5 flex items-center justify-between bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200/80 dark:border-white/10 cursor-move select-none shrink-0"
      >
        {/* macOS Traffic Light Buttons */}
        <div className="flex items-center gap-2 group w-24">
          {/* Close (Red) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              sounds.playClose();
              onClose();
            }}
            className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 flex items-center justify-center transition-colors shadow-inner"
            title="Close"
          >
            <X size={8} className="text-rose-950 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Minimize (Yellow) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              sounds.playClick();
              onMinimize();
            }}
            className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 flex items-center justify-center transition-colors shadow-inner"
            title="Minimize"
          >
            <Minus size={8} className="text-amber-950 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          {/* Maximize (Green) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              sounds.playClick();
              onMaximize();
            }}
            className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center transition-colors shadow-inner"
            title={isMaximized ? "Restore" : "Maximize"}
          >
            <Square size={6} className="text-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Center Title */}
        <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 truncate">
          {icon && <span className="opacity-80">{icon}</span>}
          <span>{title}</span>
        </div>

        {/* Right Toolbar Actions */}
        <div className="flex items-center justify-end w-24 gap-1.5 text-slate-500 dark:text-slate-400">
          {toolbarRight}
        </div>
      </div>

      {/* Window Body Content */}
      <div className="flex-1 overflow-auto bg-slate-50/60 dark:bg-slate-900/60 relative">
        {children}
      </div>

      {/* Resize Handle (Bottom Right) */}
      {!isMaximized && (
        <div
          onMouseDown={handleMouseDownResize}
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nwse-resize z-20 flex items-end justify-end p-0.5 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="opacity-40">
            <path d="M7 1L1 7M7 4L4 7M7 7H7.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </div>
  );
};
