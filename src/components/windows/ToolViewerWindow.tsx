import React, { useState, useRef, useEffect } from 'react';
import {
  ExternalLink,
  RotateCw,
  Globe,
  ArrowLeft,
  Maximize2,
  Download,
  Copy,
  Check,
  Play,
  Sliders,
  Image as ImageIcon,
  Square,
  Circle,
  Type,
  PenTool,
  Move,
  Trash2,
  Plus,
  Table,
  FileText,
  Presentation as PresentationIcon,
  Code2,
  FileCode,
  Terminal as TerminalIcon,
  Sparkles,
  Layers,
  ChevronRight,
  ChevronLeft,
  Printer,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Quote
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

interface ToolViewerWindowProps {
  toolId: string;
  name: string;
  url: string;
  description: string;
}

export const ToolViewerWindow: React.FC<ToolViewerWindowProps> = ({
  toolId,
  name,
  url,
  description,
}) => {
  const [activeTab, setActiveTab] = useState<'studio' | 'external'>('studio');

  return (
    <div className="flex flex-col h-full bg-neutral-950 text-slate-100 font-sans select-auto overflow-hidden">
      {/* Top Browser Chrome & Universal Launcher Bar */}
      <div className="h-11 px-3 bg-neutral-900 border-b border-white/10 flex items-center justify-between gap-3 text-xs shrink-0 select-none">
        
        {/* Left: App Identity & Switcher */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-600/20 border border-blue-500/30 text-blue-300 font-semibold text-[11px]">
            <Sparkles size={12} className="text-blue-400" />
            <span>{name} Studio</span>
          </div>

          <div className="flex items-center rounded-lg bg-white/5 p-0.5 border border-white/10 text-[11px]">
            <button
              onClick={() => setActiveTab('studio')}
              className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                activeTab === 'studio' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Native Studio
            </button>
            <button
              onClick={() => setActiveTab('external')}
              className={`px-2 py-0.5 rounded-md font-medium transition-colors ${
                activeTab === 'external' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              Web Link
            </button>
          </div>
        </div>

        {/* Center: URL display */}
        <div className="hidden sm:flex flex-1 max-w-sm mx-2 px-3 py-1 bg-black/40 rounded-lg border border-white/10 text-slate-300 items-center gap-2 font-mono text-[10px] truncate">
          <Globe size={11} className="text-emerald-400 shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        {/* Right: Direct 1-Click External Opener (Bypasses all iframe restrictions) */}
        <div className="flex items-center gap-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[11px] flex items-center gap-1.5 transition-colors shadow-md"
            title="Launch in a new browser tab for full native web app without iframe constraints"
          >
            <span>Open in New Tab</span>
            <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Main Studio Area */}
      <div className="flex-1 relative overflow-hidden bg-neutral-950">
        {activeTab === 'studio' ? (
          renderNativeStudio(toolId, name, url)
        ) : (
          renderExternalLauncher(name, url, description, () => setActiveTab('studio'))
        )}
      </div>
    </div>
  );
};

// Fallback / External Launcher Explainer View
function renderExternalLauncher(name: string, url: string, description: string, onBackToStudio: () => void) {
  return (
    <div className="h-full flex flex-col items-center justify-center p-6 text-center max-w-lg mx-auto space-y-4">
      <div className="w-16 h-16 rounded-3xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-xl">
        <Globe size={32} />
      </div>

      <h3 className="text-lg font-bold text-white">{name} Web Application</h3>
      <p className="text-xs text-slate-300 leading-relaxed">
        Modern cloud editors like <span className="text-blue-400 font-mono">{new URL(url).hostname}</span> configure strict <span className="font-mono text-amber-400">X-Frame-Options: SAMEORIGIN</span> security policies to prevent clickjacking in third-party iframes.
      </p>

      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left text-xs text-slate-300 space-y-2 w-full">
        <div className="font-semibold text-white flex items-center gap-2">
          <Check size={14} className="text-emerald-400" />
          <span>Recommended Solutions:</span>
        </div>
        <div>1. Click <strong className="text-emerald-400">"Launch in New Tab"</strong> to open the full standalone application in full native hardware acceleration.</div>
        <div>2. Or use our <strong className="text-blue-400">"Built-in Native Studio"</strong> right inside this macOS window with full interactive editing tools!</div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg transition-transform active:scale-95"
        >
          <span>Launch {name} in New Tab</span>
          <ExternalLink size={14} />
        </a>

        <button
          onClick={onBackToStudio}
          className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs transition-colors border border-white/10"
        >
          Use Built-in Studio
        </button>
      </div>
    </div>
  );
}

// Render Appropriate Native In-App Studio
function renderNativeStudio(toolId: string, name: string, url: string) {
  switch (toolId) {
    case 'photo-editor':
      return <NativePhotoEditor url={url} />;
    case 'vector-editor':
      return <NativeVectorEditor url={url} />;
    case 'spreadsheet':
      return <NativeSpreadsheet url={url} />;
    case 'document':
      return <NativeDocumentEditor url={url} />;
    case 'presentation':
      return <NativePresentationEditor url={url} />;
    case 'vscode':
      return <NativeVSCodeEditor url={url} />;
    default:
      return <NativePhotoEditor url={url} />;
  }
}

// 1. NATIVE PHOTO EDITOR
const NativePhotoEditor: React.FC<{ url: string }> = ({ url }) => {
  const [brightness, setBrightness] = useState<number>(100);
  const [contrast, setContrast] = useState<number>(100);
  const [saturation, setSaturation] = useState<number>(100);
  const [grayscale, setGrayscale] = useState<number>(0);
  const [sepia, setSepia] = useState<number>(0);
  const [blur, setBlur] = useState<number>(0);
  const [rotation, setRotation] = useState<number>(0);
  const [flipH, setFlipH] = useState<boolean>(false);
  const [flipV, setFlipV] = useState<boolean>(false);
  const [activeImage, setActiveImage] = useState<string>('/src/assets/images/bipin_desk_portrait_1791987295213.jpg');
  const [activeFilterName, setActiveFilterName] = useState<string>('Normal');

  const applyPreset = (preset: string) => {
    setActiveFilterName(preset);
    switch (preset) {
      case 'Normal':
        setBrightness(100); setContrast(100); setSaturation(100); setGrayscale(0); setSepia(0); setBlur(0);
        break;
      case 'Vivid':
        setBrightness(105); setContrast(125); setSaturation(140); setGrayscale(0); setSepia(0); setBlur(0);
        break;
      case 'Cinematic':
        setBrightness(95); setContrast(130); setSaturation(85); setGrayscale(0); setSepia(25); setBlur(0);
        break;
      case 'Noir B&W':
        setBrightness(100); setContrast(140); setSaturation(0); setGrayscale(100); setSepia(0); setBlur(0);
        break;
      case 'Warm Sunset':
        setBrightness(110); setContrast(110); setSaturation(120); setGrayscale(0); setSepia(40); setBlur(0);
        break;
      case 'Cool Teal':
        setBrightness(100); setContrast(115); setSaturation(110); setGrayscale(0); setSepia(15); setBlur(0);
        break;
    }
  };

  const handleReset = () => {
    applyPreset('Normal');
    setRotation(0);
    setFlipH(false);
    setFlipV(false);
  };

  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden bg-neutral-950">
      {/* Left Canvas Preview */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden bg-black/60">
        
        {/* Workspace Canvas Container */}
        <div className="max-w-xl max-h-[75vh] w-full flex items-center justify-center p-4 rounded-2xl bg-neutral-900/50 border border-white/10 shadow-2xl relative overflow-hidden">
          <img
            src={activeImage}
            alt="Workspace edit preview"
            className="max-h-[58vh] max-w-full rounded-xl object-contain transition-all duration-150 shadow-lg"
            style={{
              filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) grayscale(${grayscale}%) sepia(${sepia}%) blur(${blur}px)`,
              transform: `rotate(${rotation}deg) scaleX(${flipH ? -1 : 1}) scaleY(${flipV ? -1 : 1})`,
            }}
          />
        </div>

        {/* Floating Quick Transform Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-neutral-900/90 backdrop-blur-md border border-white/15 flex items-center gap-3 text-xs shadow-xl">
          <button
            onClick={() => setRotation(r => (r - 90) % 360)}
            className="px-2 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white"
            title="Rotate Left"
          >
            ↺ -90°
          </button>
          <button
            onClick={() => setRotation(r => (r + 90) % 360)}
            className="px-2 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white"
            title="Rotate Right"
          >
            ↻ +90°
          </button>
          <button
            onClick={() => setFlipH(f => !f)}
            className="px-2 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white"
            title="Flip Horizontal"
          >
            ⇄ Flip H
          </button>
          <button
            onClick={() => setFlipV(f => !f)}
            className="px-2 py-1 rounded hover:bg-white/10 text-slate-300 hover:text-white"
            title="Flip Vertical"
          >
            ⇅ Flip V
          </button>
          <button
            onClick={handleReset}
            className="px-2 py-1 rounded hover:bg-white/10 text-rose-400 font-semibold"
            title="Reset All Adjustments"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Right Tool & Adjustments Inspector */}
      <div className="w-full md:w-80 bg-neutral-900 border-l border-white/10 p-4 overflow-y-auto space-y-5 text-xs">
        
        {/* Sample Image Picker */}
        <div>
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 block">
            Select Asset
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Bipin Photo", src: "/src/assets/images/bipin_desk_portrait_1791987295213.jpg" },
              { label: "Coastal Wallpaper", src: "/src/assets/images/macos_coastal_wallpaper_1791984786042.jpg" },
              { label: "SMM Banner", src: "/src/assets/images/smm_growth_banner_1791984785897.jpg" },
            ].map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img.src)}
                className={`p-1 rounded-xl border text-[10px] text-center transition-all ${
                  activeImage === img.src ? 'border-blue-500 bg-blue-500/20 text-white' : 'border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <div className="h-10 rounded-lg overflow-hidden mb-1 bg-black">
                  <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                </div>
                <span className="truncate block">{img.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Preset Filters */}
        <div>
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2 block">
            Filter Presets
          </label>
          <div className="grid grid-cols-3 gap-1.5">
            {['Normal', 'Vivid', 'Cinematic', 'Noir B&W', 'Warm Sunset', 'Cool Teal'].map((p) => (
              <button
                key={p}
                onClick={() => applyPreset(p)}
                className={`py-1.5 px-2 rounded-lg text-[11px] font-medium border text-center transition-colors ${
                  activeFilterName === p ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-3.5">
          <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
            Color & Tone Adjustments
          </label>

          <div className="space-y-1">
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Brightness</span>
              <span className="font-mono text-blue-400">{brightness}%</span>
            </div>
            <input
              type="range"
              min="30"
              max="200"
              value={brightness}
              onChange={(e) => setBrightness(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Contrast</span>
              <span className="font-mono text-blue-400">{contrast}%</span>
            </div>
            <input
              type="range"
              min="30"
              max="200"
              value={contrast}
              onChange={(e) => setContrast(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Saturation</span>
              <span className="font-mono text-blue-400">{saturation}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="200"
              value={saturation}
              onChange={(e) => setSaturation(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Grayscale</span>
              <span className="font-mono text-blue-400">{grayscale}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={grayscale}
              onChange={(e) => setGrayscale(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Sepia</span>
              <span className="font-mono text-blue-400">{sepia}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sepia}
              onChange={(e) => setSepia(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-slate-300 text-[11px]">
              <span>Gaussian Blur</span>
              <span className="font-mono text-blue-400">{blur}px</span>
            </div>
            <input
              type="range"
              min="0"
              max="10"
              value={blur}
              onChange={(e) => setBlur(Number(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Export & Actions */}
        <div className="pt-2 border-t border-white/10 space-y-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 transition-colors shadow-md"
          >
            <span>Launch edititall.com ↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// 2. NATIVE VECTOR EDITOR (SVG STUDIO)
const NativeVectorEditor: React.FC<{ url: string }> = ({ url }) => {
  const [shapes, setShapes] = useState<Array<{ id: string; type: string; x: number; y: number; width: number; height: number; fill: string; stroke: string; strokeWidth: number }>>([
    { id: '1', type: 'rect', x: 60, y: 50, width: 140, height: 90, fill: '#3B82F6', stroke: '#60A5FA', strokeWidth: 2 },
    { id: '2', type: 'circle', x: 260, y: 95, width: 50, height: 50, fill: '#8B5CF6', stroke: '#A78BFA', strokeWidth: 2 },
    { id: '3', type: 'star', x: 420, y: 95, width: 45, height: 45, fill: '#F59E0B', stroke: '#FBBF24', strokeWidth: 2 },
  ]);
  const [selectedShapeId, setSelectedShapeId] = useState<string>('1');
  const [activeColor, setActiveColor] = useState<string>('#3B82F6');

  const addShape = (type: string) => {
    const id = Date.now().toString();
    const newShape = {
      id,
      type,
      x: 100 + Math.random() * 200,
      y: 80 + Math.random() * 120,
      width: type === 'circle' ? 45 : 120,
      height: type === 'circle' ? 45 : 80,
      fill: activeColor,
      stroke: '#FFFFFF',
      strokeWidth: 2
    };
    setShapes(prev => [...prev, newShape]);
    setSelectedShapeId(id);
  };

  const deleteSelected = () => {
    setShapes(prev => prev.filter(s => s.id !== selectedShapeId));
    setSelectedShapeId('');
  };

  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden bg-neutral-950">
      {/* Vector Canvas */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative bg-[#18181B] bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="w-full max-w-2xl h-[65vh] bg-neutral-900/90 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden p-4">
          <svg className="w-full h-full" viewBox="0 0 600 400">
            {shapes.map((s) => {
              const isSelected = s.id === selectedShapeId;
              if (s.type === 'rect') {
                return (
                  <rect
                    key={s.id}
                    x={s.x}
                    y={s.y}
                    width={s.width}
                    height={s.height}
                    rx="8"
                    fill={s.fill}
                    stroke={isSelected ? '#38BDF8' : s.stroke}
                    strokeWidth={isSelected ? 3 : s.strokeWidth}
                    strokeDasharray={isSelected ? '4' : 'none'}
                    className="cursor-pointer"
                    onClick={() => setSelectedShapeId(s.id)}
                  />
                );
              }
              if (s.type === 'circle') {
                return (
                  <circle
                    key={s.id}
                    cx={s.x}
                    cy={s.y}
                    r={s.width}
                    fill={s.fill}
                    stroke={isSelected ? '#38BDF8' : s.stroke}
                    strokeWidth={isSelected ? 3 : s.strokeWidth}
                    className="cursor-pointer"
                    onClick={() => setSelectedShapeId(s.id)}
                  />
                );
              }
              if (s.type === 'star') {
                return (
                  <polygon
                    key={s.id}
                    points={`${s.x},${s.y-35} ${s.x+10},${s.y-10} ${s.x+35},${s.y-10} ${s.x+15},${s.y+5} ${s.x+22},${s.y+30} ${s.x},${s.y+15} ${s.x-22},${s.y+30} ${s.x-15},${s.y+5} ${s.x-35},${s.y-10} ${s.x-10},${s.y-10}`}
                    fill={s.fill}
                    stroke={isSelected ? '#38BDF8' : s.stroke}
                    strokeWidth={isSelected ? 3 : s.strokeWidth}
                    className="cursor-pointer"
                    onClick={() => setSelectedShapeId(s.id)}
                  />
                );
              }
              return null;
            })}
          </svg>
        </div>

        {/* Quick Bottom Control */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-neutral-900/95 border border-white/15 flex items-center gap-2 text-xs shadow-xl">
          <button onClick={() => addShape('rect')} className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5">
            <Square size={13} /> <span>Add Rect</span>
          </button>
          <button onClick={() => addShape('circle')} className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5">
            <Circle size={13} /> <span>Add Circle</span>
          </button>
          <button onClick={() => addShape('star')} className="px-3 py-1 rounded bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5">
            <Sparkles size={13} /> <span>Add Star</span>
          </button>
          <button onClick={deleteSelected} className="px-3 py-1 rounded bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white flex items-center gap-1.5">
            <Trash2 size={13} /> <span>Delete</span>
          </button>
        </div>
      </div>

      {/* Vector Properties Inspector */}
      <div className="w-full md:w-72 bg-neutral-900 border-l border-white/10 p-4 space-y-4 text-xs">
        <label className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
          Shape Fill Palette
        </label>
        <div className="grid grid-cols-5 gap-2">
          {['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#EC4899', '#06B6D4', '#64748B', '#FFFFFF', '#000000'].map((c) => (
            <button
              key={c}
              onClick={() => {
                setActiveColor(c);
                setShapes(prev => prev.map(s => s.id === selectedShapeId ? { ...s, fill: c } : s));
              }}
              className="w-9 h-9 rounded-xl border border-white/20 shadow-md transition-transform hover:scale-105"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        <div className="pt-4 border-t border-white/10 space-y-2">
          <div className="text-slate-400 text-[11px] leading-relaxed">
            Directly designed for CNC pathing, laser cutting, vector logos, and SVG export.
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 transition-colors shadow-md mt-4"
          >
            <span>Launch edititall.com Vector ↗</span>
          </a>
        </div>
      </div>
    </div>
  );
};

// 3. NATIVE SPREADSHEET EDITOR
const NativeSpreadsheet: React.FC<{ url: string }> = ({ url }) => {
  const [data, setData] = useState<string[][]>([
    ['Service Package', 'Monthly Fee', 'Active Accounts', 'Gross Revenue (NPR)', 'Ad Spend (USD)', 'Status'],
    ['Starter Package', '8000', '12', '=8000*12 (96,000)', '$0', 'Active'],
    ['Basic Package', '15000', '18', '=15000*18 (270,000)', '$20', 'High Demand'],
    ['Standard Package', '28000', '9', '=28000*9 (252,000)', '$30', 'Scaling'],
    ['Premium Enterprise', '32000', '6', '=32000*6 (192,000)', '$50', 'VIP Lead'],
    ['Monthly Total (NPR)', '—', '45 Clients', '810,000 NPR', 'Included', 'Target Met'],
  ]);

  const updateCell = (rowIndex: number, colIndex: number, val: string) => {
    setData(prev => {
      const next = prev.map(r => [...r]);
      next[rowIndex][colIndex] = val;
      return next;
    });
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-neutral-950">
      {/* Top Spreadsheet Ribbon */}
      <div className="px-4 py-2 bg-neutral-900 border-b border-white/10 flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 font-semibold text-slate-200">
          <Table size={15} className="text-emerald-400" />
          <span>Blue Fox Agency — SMM & Design Budget 2026.xlsx</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px]">
            Autosaved
          </span>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm"
          >
            <span>Launch edititall.com Sheet ↗</span>
          </a>
        </div>
      </div>

      {/* Spreadsheet Grid Container */}
      <div className="flex-1 overflow-auto p-4 bg-neutral-950">
        <table className="w-full border-collapse text-xs text-slate-200">
          <thead>
            <tr className="bg-neutral-800 text-slate-400 select-none">
              <th className="w-10 p-2 border border-white/10 text-center font-mono">#</th>
              {['A', 'B', 'C', 'D', 'E', 'F'].map(col => (
                <th key={col} className="p-2 border border-white/10 text-center font-mono font-bold">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rIdx) => (
              <tr key={rIdx} className={rIdx === 0 ? 'bg-blue-950/40 font-bold text-blue-300' : rIdx === data.length - 1 ? 'bg-emerald-950/40 font-bold text-emerald-300' : 'hover:bg-white/5'}>
                <td className="p-2 border border-white/10 text-center font-mono text-slate-500 bg-neutral-900 select-none">
                  {rIdx + 1}
                </td>
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="p-0 border border-white/10">
                    <input
                      type="text"
                      value={cell}
                      onChange={(e) => updateCell(rIdx, cIdx, e.target.value)}
                      className="w-full h-full px-3 py-2 bg-transparent text-slate-200 focus:bg-blue-900/30 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 4. NATIVE DOCUMENT EDITOR (WORD / RICH TEXT)
const NativeDocumentEditor: React.FC<{ url: string }> = ({ url }) => {
  const [docTitle, setDocTitle] = useState('Blue Fox Creative Proposal & Design Brief 2026');
  const [content, setContent] = useState(`EXECUTIVE OVERVIEW:
Bipin Chapagain, Lead Designer & Vibe Coder at Blue Fox Pvt Ltd, specializes in end-to-end design operations covering UI/UX design systems in Figma & Framer, industrial packaging die-lines, DTF apparel printing, and high-retention Social Media Marketing (SMM) packages starting from Rs 8,000/month.

SCOPE OF WORK & DELIVERABLES:
1. Brand Architecture: Vector logo identity, color palettes, and typography rules engineered for both digital and print production.
2. Web & Product UI/UX: Interactive high-fidelity prototypes, user journeys, and component systems.
3. SMM Growth Engine: Monthly content calendar, graphical banners, viral Reels editing, and Meta Ads campaign optimization.
4. Physical Packaging: Food packaging labels, CNC laser cutting paths, and Pantone pre-press accuracy.

AGENCY CONTACT:
- Email: bipinxettry2019@gmail.com
- WhatsApp / Phone: +977-9742290123
- Location: Itahari, Sunsari, Nepal`);

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const charCount = content.length;

  return (
    <div className="flex flex-col h-full overflow-hidden bg-neutral-950">
      {/* Top Document Toolbar */}
      <div className="px-4 py-2 bg-neutral-900 border-b border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <FileText size={16} className="text-blue-400" />
          <input
            type="text"
            value={docTitle}
            onChange={(e) => setDocTitle(e.target.value)}
            className="bg-transparent font-bold text-white focus:outline-none focus:underline"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-[11px] text-slate-400 font-mono">
            {wordCount} words · {charCount} chars
          </span>
          <button
            onClick={() => window.print()}
            className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 flex items-center gap-1.5"
          >
            <Printer size={12} /> <span>Print</span>
          </button>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center gap-1.5 shadow-sm"
          >
            <span>Launch edititall.com Word ↗</span>
          </a>
        </div>
      </div>

      {/* Document Workspace Canvas */}
      <div className="flex-1 overflow-auto p-6 md:p-10 flex justify-center bg-neutral-900/40">
        <div className="w-full max-w-3xl bg-neutral-900 shadow-2xl rounded-2xl p-8 border border-white/15 flex flex-col min-h-[500px]">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full flex-1 bg-transparent text-slate-200 resize-none focus:outline-none font-sans text-xs md:text-sm leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
};

// 5. NATIVE PRESENTATION EDITOR (SLIDES)
const NativePresentationEditor: React.FC<{ url: string }> = ({ url }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const slides = [
    {
      title: "Bipin Chapagain",
      subtitle: "Creative UI/UX Designer, Vibe Coder & SMM Strategist",
      bullets: ["Lead Management at Blue Fox Pvt Ltd", "Bridging Aesthetic UI with Industrial Print Production", "Based in Itahari, Sunsari, Nepal"]
    },
    {
      title: "Blue Fox Enterprise Ecosystem",
      subtitle: "Integrated Technology & Design Leadership",
      bullets: ["Blue Fox Pvt Ltd: Digital Agency & Creative Direction", "Blue Fox Academy: Instructor & Lead Management", "Blue Fox Hoster: Technical Support & Web Infrastructure"]
    },
    {
      title: "Social Media Packages (SMM)",
      subtitle: "Structured Growth Tiers for Every Stage",
      bullets: ["Starter Tier: Rs 8,000/mo (5 Banners, Copywriting, Scheduling)", "Basic Tier: Rs 15,000/mo (10 Banners, 2 Reels, $20 Ad Budget)", "Standard & Premium: Up to 20 Bespoke Banners, 8 Viral Reels, $50 Ad Budget"]
    },
    {
      title: "Creative Software Toolchain",
      subtitle: "Mastery from Pixels to Print Vectors",
      bullets: ["Adobe Photoshop, Illustrator, Premiere & After Effects", "Figma Design Systems & Framer Interactive Web Experiences", "CNC Laser Vector Pathing & DTF Apparel Precision Engineering"]
    },
  ];

  const slide = slides[currentSlideIndex];

  return (
    <div className="flex flex-col md:flex-row h-full overflow-hidden bg-neutral-950">
      {/* Slide Thumbnails Column */}
      <div className="w-full md:w-56 bg-neutral-900 border-r border-white/10 p-3 overflow-y-auto space-y-2 text-xs">
        <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
          Slide Deck ({slides.length})
        </div>
        {slides.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlideIndex(idx)}
            className={`w-full p-2.5 rounded-xl border text-left transition-colors ${
              currentSlideIndex === idx ? 'bg-blue-600/30 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
            }`}
          >
            <div className="font-bold text-xs truncate">Slide {idx + 1}: {s.title}</div>
            <div className="text-[10px] text-slate-400 truncate mt-0.5">{s.subtitle}</div>
          </button>
        ))}
      </div>

      {/* Main Slide Canvas */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative bg-black/60">
        <div className="w-full max-w-2xl aspect-[16/9] bg-gradient-to-tr from-neutral-900 via-slate-900 to-indigo-950/50 rounded-3xl p-8 border border-white/15 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-semibold text-[11px] mb-3 border border-blue-500/30">
              Blue Fox Pitch Deck 2026
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {slide.title}
            </h2>
            <p className="text-sm font-semibold text-blue-400 mt-1">
              {slide.subtitle}
            </p>
          </div>

          <ul className="space-y-2">
            {slide.bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-2 text-xs md:text-sm text-slate-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/10">
            <span>Bipin Chapagain Portfolio OS</span>
            <span>Slide {currentSlideIndex + 1} of {slides.length}</span>
          </div>
        </div>

        {/* Slide Navigation Controls */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => setCurrentSlideIndex(i => Math.max(0, i - 1))}
            disabled={currentSlideIndex === 0}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white text-xs flex items-center gap-1"
          >
            <ChevronLeft size={14} /> Previous
          </button>
          <button
            onClick={() => setCurrentSlideIndex(i => Math.min(slides.length - 1, i + 1))}
            disabled={currentSlideIndex === slides.length - 1}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-30 text-white text-xs flex items-center gap-1 font-semibold"
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

// 6. NATIVE VS CODE ONLINE WORKSPACE
const NativeVSCodeEditor: React.FC<{ url: string }> = ({ url }) => {
  const [activeFile, setActiveFile] = useState<string>('App.tsx');
  const [terminalInput, setTerminalInput] = useState<string>('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'Bipin Chapagain macOS Dev Environment [Version 15.2]',
    'Ready: Blue Fox Core Engine loaded with React 19, TypeScript, and Tailwind CSS v4.',
    'Type "npm run dev", "git status", or "help" below:'
  ]);

  const files: Record<string, string> = {
    'App.tsx': `// Bipin Chapagain macOS Operating System Portfolio
import React, { useState } from 'react';
import { PORTFOLIO_DATA } from './data/portfolioData';

export default function App() {
  const [role] = useState('Creative UI/UX Designer & Vibe Coder');
  const [company] = useState('Blue Fox Pvt Ltd');
  const [location] = useState('Itahari, Sunsari, Nepal');

  return (
    <div className="macos-desktop">
      <h1>Bipin Chapagain</h1>
      <p>{role} at {company} · {location}</p>
      <span>WhatsApp: +977-9742290123</span>
    </div>
  );
}`,
    'portfolio.config.ts': `export const config = {
  name: "Bipin Chapagain",
  brand: "Blue Fox Pvt Ltd",
  smmTiers: ["Starter (Rs 8,000)", "Basic (Rs 15,000)", "Standard (Rs 28,000)", "Premium (Rs 32,000)"],
  tools: ["Photoshop", "Illustrator", "Figma", "CorelDraw", "Premiere", "After Effects", "Framer", "React"],
  contact: {
    phone: "+977-9742290123",
    email: "bipinxettry2019@gmail.com",
    city: "Itahari",
    country: "Nepal"
  }
};`,
    'globals.css': `@import "tailwindcss";

:root {
  --bluefox-primary: #2563EB;
  --bluefox-emerald: #10B981;
  --macos-glass: rgba(28, 28, 32, 0.85);
}`
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;
    const cmd = terminalInput.trim().toLowerCase();
    let res = '';
    if (cmd === 'npm run dev') {
      res = '⚡ Vite v8.3.0 dev server running at http://localhost:3000/ [Ready in 42ms]';
    } else if (cmd === 'git status') {
      res = 'On branch main\nYour branch is up to date with origin/main.\nnothing to commit, working tree clean';
    } else if (cmd === 'help') {
      res = 'Available commands: npm run dev, git status, clear, ls, whoami';
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'whoami') {
      res = 'bipin@bluefox-macbook-pro (Bipin Chapagain - Lead Management)';
    } else {
      res = `zsh: command not found: ${cmd}. Type "help" for commands.`;
    }
    setTerminalHistory(prev => [...prev, `bipin@macbook ~ % ${terminalInput}`, res]);
    setTerminalInput('');
  };

  return (
    <div className="flex flex-col h-full overflow-hidden bg-[#1E1E1E] text-slate-200 font-mono text-xs">
      <div className="flex-1 flex overflow-hidden">
        {/* VS Code Left File Tree */}
        <div className="w-48 bg-[#252526] border-r border-[#333333] p-2 select-none">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
            EXPLORER: BLUEFOX-OS
          </div>
          {Object.keys(files).map((f) => (
            <button
              key={f}
              onClick={() => setActiveFile(f)}
              className={`w-full text-left px-2 py-1 rounded flex items-center gap-1.5 transition-colors ${
                activeFile === f ? 'bg-[#37373D] text-white font-semibold' : 'text-slate-400 hover:text-white hover:bg-[#2A2D2E]'
              }`}
            >
              <FileCode size={13} className="text-blue-400" />
              <span className="truncate">{f}</span>
            </button>
          ))}
        </div>

        {/* VS Code Main Editor Tabs & Code View */}
        <div className="flex-1 flex flex-col bg-[#1E1E1E]">
          <div className="h-8 bg-[#2D2D2D] border-b border-[#333333] flex items-center px-2 gap-1">
            <div className="px-3 py-1 bg-[#1E1E1E] border-t-2 border-blue-500 text-white font-semibold flex items-center gap-2">
              <FileCode size={13} className="text-blue-400" />
              <span>{activeFile}</span>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-auto">
            <pre className="text-xs leading-relaxed text-[#D4D4D4] font-mono whitespace-pre-wrap">
              {files[activeFile]}
            </pre>
          </div>
        </div>
      </div>

      {/* VS Code Embedded Terminal */}
      <div className="h-44 bg-[#181818] border-t border-[#333333] flex flex-col p-2">
        <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 mb-1 border-b border-[#282828]">
          <div className="flex items-center gap-2 font-bold text-white">
            <TerminalIcon size={12} className="text-emerald-400" />
            <span>TERMINAL (zsh)</span>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline flex items-center gap-1 text-[10px]"
          >
            Launch vscode.dev ↗
          </a>
        </div>
        <div className="flex-1 overflow-y-auto space-y-1 text-[11px]">
          {terminalHistory.map((line, idx) => (
            <div key={idx} className="whitespace-pre-wrap text-slate-300">{line}</div>
          ))}
        </div>
        <form onSubmit={handleCommand} className="flex items-center gap-1 pt-1 border-t border-[#282828]">
          <span className="text-emerald-400">bipin@bluefox-mac %</span>
          <input
            type="text"
            value={terminalInput}
            onChange={(e) => setTerminalInput(e.target.value)}
            placeholder="Type npm run dev, git status..."
            className="flex-1 bg-transparent text-white focus:outline-none"
          />
        </form>
      </div>
    </div>
  );
};
