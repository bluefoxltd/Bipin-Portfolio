export type AppId =
  | 'finder'
  | 'about'
  | 'resume'
  | 'smm'
  | 'projects'
  | 'skills'
  | 'experience'
  | 'tools'
  | 'photo-editor'
  | 'vector-editor'
  | 'spreadsheet'
  | 'document'
  | 'presentation'
  | 'vscode'
  | 'terminal'
  | 'spotify'
  | 'whatsapp'
  | 'notes'
  | 'photos'
  | 'settings'
  | 'contact';

export interface WindowState {
  id: AppId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  icon?: string;
}

export type WallpaperId =
  | 'bipin_desk'
  | 'coastal'
  | 'sonoma'
  | 'framer_showcase'
  | 'dark'
  | 'gradient';

export interface SystemSettings {
  wallpaper: WallpaperId;
  darkMode: boolean;
  soundEnabled: boolean;
  dockMagnification: boolean;
  timezone: string;
}
