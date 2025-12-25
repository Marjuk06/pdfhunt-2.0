import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
    Search, Moon, Sun, Download, FileText, User, MoreHorizontal, 
    BookOpen, Layers, Info, GraduationCap, PenTool, Calculator, 
    FlaskConical, Atom, Globe, Laptop, Ruler, Brain, Lightbulb, 
    Microscope, Music, Palette, Folder, ChevronRight, ArrowLeft, X,
    ExternalLink, Facebook, Instagram, MessageCircle, Plus, Trash2, Edit3, Save, LogOut, Shield,
    Home, Link as LinkIcon, Check, Image as ImageIcon, Github, Linkedin, Twitter, Youtube, HelpCircle, Lock, Key,
    Smartphone, Monitor, ChevronLeft, ArrowUp, ArrowDown, Move, Settings, Type, PaintBucket
} from 'lucide-react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// --- FIREBASE SETUP FOR ENVIRONMENT ---
const firebaseConfig = {
  apiKey: "AIzaSyDOBlN-tRCQuJmEasvUBXZPfwpqHzHdK2I",
  authDomain: "acs-engineering-25.firebaseapp.com",
  projectId: "acs-engineering-25",
  storageBucket: "acs-engineering-25.firebasestorage.app",
  messagingSenderId: "971558879324",
  appId: "1:971558879324:web:eff570fbb4c38e48536699",
  measurementId: "G-Z00S2KQ54W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
// Use global app ID if available, otherwise fallback
const appId = typeof __app_id !== 'undefined' ? __app_id : 'pdfhunt-v2-production';

// --- Haptic Feedback Utility ---
const hapticFeedback = {
    light: () => { if ('vibrate' in navigator) navigator.vibrate(10); },
    medium: () => { if ('vibrate' in navigator) navigator.vibrate(20); },
    heavy: () => { if ('vibrate' in navigator) navigator.vibrate([10, 50, 20]); },
    success: () => { if ('vibrate' in navigator) navigator.vibrate([10, 50, 10, 50, 10]); },
    error: () => { if ('vibrate' in navigator) navigator.vibrate([100, 50, 100]); }
};

// --- Global Styles & Animations ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
    :root { font-family: 'Montserrat', sans-serif; }
    body { font-family: 'Montserrat', sans-serif; }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
    @keyframes fall { 0% { top: -10%; } 100% { top: 110%; } }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-fall { animation-name: fall; animation-timing-function: linear; animation-iteration-count: infinite; }
    @keyframes stagger-enter { 0% { opacity: 0; transform: translateY(20px) scale(0.95); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
    .animate-stagger-enter { animation: stagger-enter 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
    @keyframes page-enter { 0% { opacity: 0; transform: scale(0.98); } 100% { opacity: 1; transform: scale(1); } }
    .animate-page-enter { animation: page-enter 0.3s ease-out forwards; }
    @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); } 20%, 40%, 60%, 80% { transform: translateX(4px); } }
    .animate-shake { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
    .glass-panel { backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.15); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); }
    .dark .glass-panel { border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3); }
    .glass-input { background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(4px); border: 1px solid rgba(255, 255, 255, 0.2); color: inherit; }
    .dark .glass-input { background: rgba(0, 0, 0, 0.2); border: 1px solid rgba(255, 255, 255, 0.1); }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    .pdf-viewer-frame { width: 100%; height: 100%; border: none; }
  `}</style>
);

// --- CONFIGURATION ---
const ICON_MAP = {
    'BookOpen': BookOpen, 'Globe': Globe, 'Laptop': Laptop, 'Atom': Atom,
    'FlaskConical': FlaskConical, 'Calculator': Calculator, 'Microscope': Microscope,
    'Layers': Layers, 'Folder': Folder, 'FileText': FileText, 'PenTool': PenTool,
    'Ruler': Ruler, 'Brain': Brain, 'Lightbulb': Lightbulb, 'Music': Music,
    'Palette': Palette, 'Facebook': Facebook, 'Instagram': Instagram,
    'MessageCircle': MessageCircle, 'Github': Github, 'Linkedin': Linkedin,
    'Twitter': Twitter, 'Youtube': Youtube, 'LinkIcon': LinkIcon
};

const extractDriveId = (url) => {
    if (!url) return '';
    const pathMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (pathMatch) return pathMatch[1];
    const queryMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (queryMatch) return queryMatch[1];
    if (/^[a-zA-Z0-9_-]{25,}$/.test(url)) return url;
    return url;
};

const initialData = {
    Udvash: [],
    ACS: [],
    Others: [],
    settings: {
        appName: "PDF Hunt",
        appDesc: "Find your resources",
        tab1: "Udvash",
        tab2: "ACS",
        tab3: "Others",
        theme: {
            gradientStart: "#10b981", 
            gradientEnd: "#047857",
            navColor: "#3b82f6"
        }
    },
    About: {
        name: "Admin User",
        title: "Full Stack Web & App Developer",
        bio: "I am a passionate Full Stack Developer creating modern, responsive, and user-friendly web and mobile applications.",
        avatarUrl: null, 
        links: [
            { id: 1, platform: 'Facebook', handle: '@admin.user', url: '#', color: 'bg-blue-600', iconName: 'Facebook' },
            { id: 2, platform: 'Instagram', handle: '@admin_dev', url: '#', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500', iconName: 'Instagram' },
            { id: 3, platform: 'WhatsApp', handle: '+880 1XXX', url: '#', color: 'bg-green-500', iconName: 'MessageCircle' },
        ]
    }
};

const ADMIN_PASSWORD = '140075';

// --- COMPONENTS ---
const LoadingScreen = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-[#f0f2f5] dark:bg-[#0b141a] z-[9999] transition-colors duration-300">
        <div className="flex flex-col items-center animate-page-enter">
            <div className="w-16 h-16 relative">
                <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
            </div>
            <h2 className="mt-4 text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-pulse">Loading Resources...</h2>
        </div>
    </div>
);

const DoodleBackground = () => {
    const icons = [GraduationCap, PenTool, Calculator, FlaskConical, Atom, Globe, Laptop, Ruler, Brain, Lightbulb, Microscope, Music, Palette, BookOpen, Layers, FileText];
    const colors = ['#94a3b8', '#a78bfa', '#f472b6', '#34d399', '#60a5fa', '#fbbf24', '#2dd4bf', '#f87171'];
    const [doodles] = useState(() => Array.from({ length: 50 }).map((_, i) => ({
        Icon: icons[i % icons.length],
        key: i,
        style: {
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${10 + Math.random() * 15}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
            color: colors[i % colors.length],
        }
    })));
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
            <div className="absolute inset-0 bg-[#f0f2f5] dark:bg-[#0b141a] transition-colors duration-300" />
            {doodles.map(({ Icon, key, style }) => <div key={key} className="absolute top-[-10%] animate-fall opacity-20 dark:opacity-15" style={style}><Icon size={24} style={{ color: style.color }} /></div>)}
        </div>
    );
};

const NavIcon = ({ name, active, onClick, icon: Icon, activeColor }) => (
    <button onClick={() => { hapticFeedback.light(); onClick(); }} className={`relative flex flex-col items-center justify-end w-full h-full pb-2 transition-all duration-300 ${active ? '' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'} active:scale-95`} style={active ? { color: activeColor } : {}}>
        <div className={`p-2 rounded-2xl transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${active ? '-translate-y-4 shadow-lg backdrop-blur-md mb-1' : 'mb-0'}`} style={active ? { backgroundColor: `${activeColor}20`, boxShadow: `0 10px 15px -3px ${activeColor}30` } : {}}><Icon size={24} strokeWidth={active ? 2.5 : 2} /></div>
        <span className={`text-[10px] font-bold transition-all duration-300 ${active ? 'opacity-100 translate-y-0' : 'opacity-70'} truncate max-w-[64px]`}>{name}</span>
    </button>
);

const SearchBar = ({ value, onChange }) => (
    <div className="relative w-full max-w-md mx-auto group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 group-focus-within:text-blue-500 transition-colors z-10"><Search size={18} /></div>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => hapticFeedback.light()} placeholder="Search folders or files..." className="w-full pl-10 pr-4 py-3 glass-panel bg-white/10 dark:bg-black/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all shadow-sm text-sm font-medium text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400" />
    </div>
);

const ItemCard = ({ item, colorTheme, onClick, index, isAdmin, onDelete, onEdit, onMoveUp, onMoveDown, onMove, canMoveUp, canMoveDown, onDragStart, onDragOver, onDragEnd, onDrop, onPointerDragStart, onPointerDragEnter, onPointerDragEnd, isDragging, dragOver, isAnyDragging }) => {
    const isFolder = item.type === 'folder';
    const DisplayIcon = ICON_MAP[item.iconName] || (isFolder ? Folder : FileText);
    const getColorClasses = (color) => {
        const map = {
            emerald: { border: 'hover:border-emerald-500/50', bg: 'bg-emerald-100/50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400' },
            blue: { border: 'hover:border-blue-500/50', bg: 'bg-blue-100/50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400' },
            purple: { border: 'hover:border-purple-500/50', bg: 'bg-purple-100/50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400' },
            red: { border: 'hover:border-red-500/50', bg: 'bg-red-100/50 dark:bg-red-900/40 text-red-700 dark:text-red-400' },
            orange: { border: 'hover:border-orange-500/50', bg: 'bg-orange-100/50 dark:bg-orange-900/40 text-orange-700 dark:text-orange-400' },
        };
        const c = color || (colorTheme === 'Udvash' ? 'emerald' : colorTheme === 'ACS' ? 'blue' : 'purple');
        return map[c] || map.blue;
    };
    const styles = getColorClasses(item.customColor);
    const getThemeColors = () => isFolder ? `bg-white/10 dark:bg-black/20 border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/30 ${styles.border}` : styles.border;

    return (
        <div draggable={isAdmin} onDragStart={(e) => isAdmin && onDragStart && (e.dataTransfer.effectAllowed = 'move', e.dataTransfer.setData('text/html', item.id), onDragStart(e, index))} onDragOver={(e) => isAdmin && onDragOver && (e.preventDefault(), e.dataTransfer.dropEffect = 'move', onDragOver(e, index))} onDragEnd={(e) => isAdmin && onDragEnd && onDragEnd(e)} onDrop={(e) => isAdmin && onDrop && (e.preventDefault(), onDrop(e, index))} onPointerDown={(e) => isAdmin && onPointerDragStart && onPointerDragStart(e, index)} onPointerEnter={(e) => isAdmin && onPointerDragEnter && onPointerDragEnter(e, index)} onPointerUp={(e) => isAdmin && onPointerDragEnd && onPointerDragEnd(e, index)} onClick={(e) => !isAnyDragging && (hapticFeedback.medium(), onClick(item))} className={`group relative flex items-center gap-4 p-4 rounded-2xl glass-panel ${getThemeColors()} transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm animate-stagger-enter opacity-0 ${isAdmin ? 'cursor-move' : 'cursor-pointer'} ${isDragging ? 'opacity-50 scale-95 shadow-lg' : ''} ${dragOver ? 'border-2 border-blue-500 scale-[1.05] bg-blue-500/10 shadow-lg' : ''}`} style={{ animationDelay: `${index * 0.05}s` }}>
            <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${styles.bg}`}><DisplayIcon size={24} /></div>
            <div className="flex-1 min-w-0"><h3 className="font-bold text-gray-900 dark:text-gray-100 truncate">{item.title}</h3><p className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-semibold">{isFolder ? `${item.items?.length || 0} items` : `${item.author} • ${item.date}`}</p></div>
            <div className="flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                 {isAdmin ? (
                     <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            {canMoveUp && <button onClick={(e) => { e.stopPropagation(); hapticFeedback.light(); onMoveUp(); }} className="p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-green-500 hover:text-white transition-colors active:scale-95"><ArrowUp size={16} /></button>}
                            {canMoveDown && <button onClick={(e) => { e.stopPropagation(); hapticFeedback.light(); onMoveDown(); }} className="p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-green-500 hover:text-white transition-colors active:scale-95"><ArrowDown size={16} /></button>}
                        </div>
                        <div className="flex gap-2">
                            <button onClick={(e) => { e.stopPropagation(); hapticFeedback.light(); onMove(item); }} className="p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-purple-500 hover:text-white transition-colors active:scale-95"><Move size={16} /></button>
                            <button onClick={(e) => { e.stopPropagation(); hapticFeedback.light(); onEdit(item); }} className="p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-blue-500 hover:text-white transition-colors active:scale-95"><Edit3 size={16} /></button>
                            <button onClick={(e) => { e.stopPropagation(); hapticFeedback.error(); onDelete(item.id); }} className="p-2 bg-white/20 dark:bg-black/20 rounded-lg hover:bg-red-500 hover:text-white transition-colors active:scale-95"><Trash2 size={16} /></button>
                        </div>
                     </div>
                 ) : (isFolder ? <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 dark:bg-black/20 group-hover:bg-blue-500/20 transition-colors"><ChevronRight className="text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={18} /></div> : <div className="flex flex-col items-end gap-2"><span className="text-[10px] font-mono font-bold px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300">{item.size}</span></div>)}
            </div>
        </div>
    );
};

const PdfViewer = ({ file, onClose }) => {
    const embedUrl = `https://drive.google.com/file/d/${file.link}/preview`;
    return (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white dark:bg-gray-900 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
                <div className="flex items-center gap-3"><button onClick={() => { hapticFeedback.light(); onClose(); }} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:scale-95"><ArrowLeft size={20} className="text-gray-700 dark:text-gray-200" /></button><div><h3 className="font-bold text-sm md:text-base text-gray-900 dark:text-gray-100 max-w-[200px] md:max-w-md truncate">{file.title}</h3><p className="text-xs text-gray-500 dark:text-gray-400 font-medium">{file.size}</p></div></div>
                <div className="flex gap-2"><a href={`https://drive.google.com/u/0/uc?id=${file.link}&export=download`} target="_blank" rel="noreferrer" onClick={() => hapticFeedback.success()} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-colors active:scale-95"><Download size={16} /><span className="hidden sm:inline">Download</span></a></div>
            </div>
            <div className="flex-1 bg-gray-100 dark:bg-gray-950 relative"><div className="absolute inset-0 flex items-center justify-center text-gray-400"><p className="font-medium">Loading Preview...</p></div><iframe src={embedUrl} className="pdf-viewer-frame relative z-10" allow="autoplay" title="PDF Viewer"></iframe></div>
        </div>
    );
};

const LoginModal = ({ onClose, onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const handleSubmit = (e) => { e.preventDefault(); if (password === ADMIN_PASSWORD) { onLogin(); onClose(); } else { setError(true); setTimeout(() => setError(false), 500); } };
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-page-enter">
            <div className={`glass-panel bg-white/20 dark:bg-black/40 p-8 rounded-3xl w-full max-w-sm flex flex-col items-center shadow-2xl ${error ? 'animate-shake border-red-500/50' : ''}`}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg"><Lock size={32} className="text-white" /></div>
                <h3 className="text-xl font-bold text-white mb-2">Admin Access</h3>
                <p className="text-gray-200 text-xs mb-6 text-center">Enter your security PIN to access the control panel.</p>
                <form onSubmit={handleSubmit} className="w-full">
                    <div className="relative mb-6"><Key size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" /><input type="password" autoFocus value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-4 pl-12 rounded-xl bg-black/20 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-center tracking-widest font-bold text-lg" placeholder="••••" /></div>
                    <div className="flex gap-3"><button type="button" onClick={() => { hapticFeedback.light(); onClose(); }} className="flex-1 py-3 rounded-xl bg-white/10 text-white font-bold hover:bg-white/20 transition-colors active:scale-95">Cancel</button><button type="submit" onClick={() => hapticFeedback.medium()} className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30 active:scale-95">Login</button></div>
                </form>
            </div>
        </div>
    );
};

const IOSInstallModal = ({ onClose }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-page-enter">
        <div className="glass-panel bg-white/20 dark:bg-black/40 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20">
            <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg"><Smartphone size={40} className="text-white" /></div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-4">Install PDF Hunt</h2>
                <div className="w-full space-y-4 mb-6 text-left">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 dark:bg-black/20"><div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">1</div><p className="text-sm text-gray-700 dark:text-gray-300 font-medium pt-1">Tap the <strong>Share button</strong> at the bottom</p></div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 dark:bg-black/20"><div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">2</div><p className="text-sm text-gray-700 dark:text-gray-300 font-medium pt-1">Scroll down and tap <strong>"Add to Home Screen"</strong></p></div>
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 dark:bg-black/20"><div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">3</div><p className="text-sm text-gray-700 dark:text-gray-300 font-medium pt-1">Tap <strong>"Add"</strong> to finish</p></div>
                </div>
                <button onClick={() => { hapticFeedback.light(); onClose(); }} className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-colors active:scale-95">Got It!</button>
            </div>
        </div>
    </div>
);

const UpdateNotification = ({ onUpdate, onDismiss }) => (
    // FIX: Replaced 'left-1/2 -translate-x-1/2' with 'left-0 right-0 flex justify-center'
    // This fixes the conflict with the animation that was pushing it to the right
    <div className="fixed top-24 md:top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
        <div className="animate-page-enter w-full max-w-md pointer-events-auto">
            <div className="glass-panel bg-gradient-to-r from-blue-500 to-purple-600 p-3 md:p-4 rounded-2xl shadow-2xl border border-white/20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Download size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-white mb-1 text-sm md:text-base">New Update Available!</h3>
                        <p className="text-[10px] md:text-xs text-white/90">Get latest features</p>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={onUpdate} className="px-3 py-1.5 md:px-4 md:py-2 bg-white text-blue-600 rounded-xl text-xs md:text-sm font-bold transition-colors hover:bg-white/90 active:scale-95">Update</button>
                        <button onClick={onDismiss} className="p-2 text-white/80 hover:text-white transition-colors active:scale-95"><X size={18} /></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const InstallPrompt = ({ deferredPrompt, onInstall, onDismiss }) => {
    if (!deferredPrompt) return null;
    return (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 animate-page-enter max-w-md w-full px-4">
            <div className="glass-panel bg-white/20 dark:bg-black/40 p-4 rounded-2xl shadow-2xl border border-blue-500/30">
                <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0"><Download size={24} className="text-white" /></div>
                    <div className="flex-1"><h3 className="font-bold text-gray-900 dark:text-white mb-1">Install PDF Hunt</h3><p className="text-xs text-gray-600 dark:text-gray-300 mb-3">Install for offline access!</p><div className="flex gap-2"><button onClick={() => { hapticFeedback.medium(); onInstall(); }} className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold transition-colors active:scale-95">Install Now</button><button onClick={() => { hapticFeedback.light(); onDismiss(); }} className="py-2 px-4 glass-input hover:bg-white/20 rounded-xl text-sm font-bold transition-colors active:scale-95">Later</button></div></div>
                    <button onClick={() => { hapticFeedback.light(); onDismiss(); }} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 active:scale-95"><X size={18} /></button>
                </div>
            </div>
        </div>
    );
};
const FirstVisitTour = ({ onStart, onSkip }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // FIX: Removed the 4th "Install App" slide. Now only 3 slides.
    const slides = [
        { title: "Welcome to PDF Hunt!", description: "Your one-stop solution for managing study materials", icon: BookOpen, color: "from-blue-500 to-cyan-500" },
        { title: "Browse & Search", description: "Easily navigate through folders and search for files", icon: Search, color: "from-emerald-500 to-green-500" },
        { title: "PDF Preview", description: "View PDFs directly in your browser without downloading", icon: FileText, color: "from-purple-500 to-pink-500" }
    ];

    const handleNext = () => { if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1); else onStart(); };
    const SlideIcon = slides[currentSlide].icon;

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-page-enter">
            <div className="glass-panel bg-white/20 dark:bg-black/40 rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/20">
                <div className="flex flex-col items-center text-center mb-6">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${slides[currentSlide].color} flex items-center justify-center mb-4 shadow-lg`}>
                        <SlideIcon size={40} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">{slides[currentSlide].title}</h2>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{slides[currentSlide].description}</p>
                </div>
                <div className="flex justify-center gap-2 mb-6">
                    {slides.map((_, idx) => (
                        <div key={idx} className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-blue-500' : 'w-2 bg-gray-400'}`} />
                    ))}
                </div>
                <div className="flex gap-3">
                    {currentSlide > 0 && (
                        <button onClick={() => { hapticFeedback.light(); setCurrentSlide(currentSlide - 1); }} className="flex-1 py-3 px-4 glass-input hover:bg-white/20 rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 active:scale-95">
                            <ChevronLeft size={18} /> Previous
                        </button>
                    )}
                    <button onClick={() => { hapticFeedback.medium(); handleNext(); }} className={`${currentSlide === 0 ? 'flex-1' : 'flex-1'} py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-colors flex items-center justify-center gap-2 active:scale-95`}>
                        {/* FIX: Changed text to 'Get Started' for the final slide */}
                        {currentSlide === slides.length - 1 ? "Get Started" : <>Next <ChevronRight size={18} /></>}
                    </button>
                    <button onClick={() => { hapticFeedback.light(); onSkip(); }} className="py-3 px-4 glass-input hover:bg-white/20 rounded-xl font-bold text-sm transition-colors active:scale-95">Skip</button>
                </div>
            </div>
        </div>
    );
};
// --- FIX: UPDATED ABOUT ME COMPONENT ---
// Added default props and safe checks to prevent crashes if 'data' is missing
const AboutMe = ({ data = {}, onAdminLogin, isAdmin }) => {
    // Ensure links is an array to prevent .map() crash
    const safeLinks = Array.isArray(data.links) ? data.links : [];
    
    const SocialLink = ({ icon: Icon, title, handle, colorClass, link }) => (
        <a href={link || "#"} target="_blank" rel="noopener noreferrer" onClick={() => hapticFeedback.medium()} className="group flex items-center justify-between p-4 w-full rounded-2xl glass-panel bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-white/5 transition-all duration-300 mb-3 animate-stagger-enter opacity-0 active:scale-[0.98] cursor-pointer" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-4"><div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${colorClass}`}><Icon size={22} strokeWidth={2} /></div><div className="text-left"><h3 className="font-bold text-gray-900 dark:text-gray-100">{title}</h3><p className="text-xs font-semibold text-gray-500 dark:text-gray-400">{handle}</p></div></div><ExternalLink size={18} className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors" />
        </a>
    );

    return (
        <div className="animate-page-enter flex flex-col items-center pt-8 px-6 pb-32 max-w-md mx-auto">
            <div className="relative mb-6 group animate-stagger-enter opacity-0" style={{ animationDelay: '0s' }}>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-32 h-32 rounded-full p-[4px] bg-white dark:bg-gray-800 shadow-2xl"><div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">{data.avatarUrl ? <img src={data.avatarUrl} alt="Profile" className="w-full h-full object-cover" /> : <User size={64} className="text-gray-400" />}</div></div>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight animate-stagger-enter opacity-0" style={{ animationDelay: '0.05s' }}>{data.name || 'Admin User'}</h2>
            <p className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-8 uppercase tracking-widest animate-stagger-enter opacity-0" style={{ animationDelay: '0.1s' }}>{data.title || 'App Admin'}</p>
            <div className="w-full">
                {safeLinks.map((link, idx) => { 
                    const IconComp = ICON_MAP[link.iconName] || LinkIcon; 
                    return <div key={link.id || idx} className="animate-stagger-enter opacity-0" style={{ animationDelay: `${0.2 + (idx * 0.1)}s` }}><SocialLink icon={IconComp} title={link.platform} handle={link.handle} colorClass={link.color} link={link.url} /></div> 
                })}
            </div>
            <div className="mt-6 p-6 rounded-3xl glass-panel bg-white/10 dark:bg-black/10 w-full text-center shadow-sm animate-stagger-enter opacity-0" style={{ animationDelay: '0.5s' }}>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed mb-4">{data.bio || 'Welcome to PDF Hunt!'}</p>
                <button onClick={() => { hapticFeedback.medium(); onAdminLogin(); }} className="flex items-center justify-center gap-2 mx-auto px-5 py-2.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-black font-bold text-xs uppercase tracking-wider hover:opacity-80 transition-all active:scale-95"><Shield size={14} /> {isAdmin ? 'Go to Admin Console' : 'Login to Admin Console'}</button>
            </div>
        </div>
    );
};

// 7. ADMIN DASHBOARD COMPONENT
const AdminDashboard = ({ data, setData, onLogout, isDarkMode, setDarkMode }) => {
    const [adminTab, setAdminTab] = useState('Content');
    const [selectedTab, setSelectedTab] = useState('Udvash');
    const [adminPath, setAdminPath] = useState([]); 
    const [editorMode, setEditorMode] = useState(null); 
    const [editItem, setEditItem] = useState(null); 
    const [showHelp, setShowHelp] = useState(false);
    const [showMoveModal, setShowMoveModal] = useState(false);
    const [itemToMove, setItemToMove] = useState(null);
    const [draggedIndex, setDraggedIndex] = useState(null);
    const [dragOverIndex, setDragOverIndex] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const [bulkItems, setBulkItems] = useState([]);
    
    // SAFEGUARDS FOR MISSING DATA
    const safeAbout = data.About || initialData.About;
    const safeLinks = safeAbout.links || [];

    // Form States
    const [formTitle, setFormTitle] = useState('');
    const [formType, setFormType] = useState('file');
    const [formLink, setFormLink] = useState('');
    const [formSize, setFormSize] = useState('');
    const [formColor, setFormColor] = useState('emerald');
    const [formIcon, setFormIcon] = useState('Folder');

    // Profile States (Initialized with safe data)
    const [profileName, setProfileName] = useState(safeAbout.name);
    const [profileTitle, setProfileTitle] = useState(safeAbout.title);
    const [profileBio, setProfileBio] = useState(safeAbout.bio);
    const [profileAvatar, setProfileAvatar] = useState(safeAbout.avatarUrl || '');
    const [socialLinks, setSocialLinks] = useState(safeLinks);
    const [newSocial, setNewSocial] = useState({ platform: '', handle: '', url: '', color: 'bg-blue-600', iconName: 'LinkIcon' });

    const defaultSettings = { appName: "PDF Hunt", appDesc: "Find your resources", tab1: "Udvash", tab2: "ACS", tab3: "Others", theme: { gradientStart: "#10b981", gradientEnd: "#047857", navColor: "#3b82f6" } };
    const [settings, setSettings] = useState(() => { const s = data.settings || {}; return { ...defaultSettings, ...s, theme: { ...defaultSettings.theme, ...(s.theme || {}) } }; });

    const getCurrentItems = () => {
        let items = data[selectedTab] || [];
        for (const pathItem of adminPath) {
            const folder = items.find(i => i.id === pathItem.id);
            if (folder && folder.items) items = folder.items;
            else return [];
        }
        return items;
    };

    const updateItemsAtCurrentPath = async (newItems) => {
        if (adminPath.length === 0) { await setData({ ...data, [selectedTab]: newItems }); return; }
        const newData = { ...data };
        let currentLevel = newData[selectedTab];
        for (let i = 0; i < adminPath.length - 1; i++) { currentLevel = currentLevel.find(item => item.id === adminPath[i].id).items; }
        const folderIndex = currentLevel.findIndex(item => item.id === adminPath[adminPath.length - 1].id);
        if (folderIndex !== -1) { currentLevel[folderIndex].items = newItems; await setData(newData); }
    };

    const handleDelete = (id) => { if(window.confirm("Delete this item?")) { const currentItems = getCurrentItems(); updateItemsAtCurrentPath(currentItems.filter(item => item.id !== id)); } };
    const handleMoveUp = (index) => { if (index === 0) return; const currentItems = getCurrentItems(); const newItems = [...currentItems]; [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]]; updateItemsAtCurrentPath(newItems); hapticFeedback.success(); };
    const handleMoveDown = (index) => { const currentItems = getCurrentItems(); if (index === currentItems.length - 1) return; const newItems = [...currentItems]; [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]]; updateItemsAtCurrentPath(newItems); hapticFeedback.success(); };
    const handleDragStart = (e, index) => { setDraggedIndex(index); setIsDragging(true); hapticFeedback.light(); };
    const handleDragOver = (e, index) => { e.preventDefault(); e.stopPropagation(); if (draggedIndex !== null && draggedIndex !== index) { setDragOverIndex(index); } };
    const handleDragEnd = () => { setDraggedIndex(null); setDragOverIndex(null); setIsDragging(false); };
    const handleDrop = (e, dropIndex) => { e.preventDefault(); if (draggedIndex === null || draggedIndex === dropIndex) { setDraggedIndex(null); setDragOverIndex(null); return; } hapticFeedback.success(); const currentItems = getCurrentItems(); const newItems = [...currentItems]; const draggedItem = newItems[draggedIndex]; newItems.splice(draggedIndex, 1); const adjustedDropIndex = draggedIndex < dropIndex ? dropIndex - 1 : dropIndex; newItems.splice(adjustedDropIndex, 0, draggedItem); updateItemsAtCurrentPath(newItems); setDraggedIndex(null); setDragOverIndex(null); };
    const handlePointerDragStart = (e, index) => handleDragStart(e, index);
    const handlePointerDragEnter = (e, index) => { if (draggedIndex !== null && draggedIndex !== index) setDragOverIndex(index); };
    const handlePointerDragEnd = (e, index) => { if (draggedIndex !== null && dragOverIndex !== null) handleDrop(e, dragOverIndex); else handleDragEnd(); };
    const handleMove = (item) => { setItemToMove(item); setShowMoveModal(true); };

    const getAllFolders = (items, currentPath = [], excludeId = null) => {
        let folders = [];
        if (!items) return folders;
        items.forEach(item => {
            if (item.type === 'folder' && item.id !== excludeId) {
                const folderPath = [...currentPath, item];
                folders.push({ id: item.id, title: item.title, path: folderPath, pathIds: folderPath.map(f => f.id) });
                if (item.items && item.items.length > 0) { const nestedFolders = getAllFolders(item.items, folderPath, excludeId); folders = [...folders, ...nestedFolders]; }
            }
        });
        return folders;
    };

    const handleMoveToFolder = async (destinationPathIds) => {
        if (!itemToMove) return;
        hapticFeedback.success();
        const currentItems = getCurrentItems();
        const itemIndex = currentItems.findIndex(i => i.id === itemToMove.id);
        if (itemIndex === -1) return;
        const item = currentItems[itemIndex];
        const newData = JSON.parse(JSON.stringify(data)); 
        if (adminPath.length === 0) { newData[selectedTab] = newData[selectedTab].filter(i => i.id !== itemToMove.id); } else { let currentLevel = newData[selectedTab]; for (let i = 0; i < adminPath.length - 1; i++) { currentLevel = currentLevel.find(item => item.id === adminPath[i].id)?.items; if (!currentLevel) return; } const folderIndex = currentLevel.findIndex(item => item.id === adminPath[adminPath.length - 1].id); if (folderIndex !== -1 && currentLevel[folderIndex].items) { currentLevel[folderIndex].items = currentLevel[folderIndex].items.filter(i => i.id !== itemToMove.id); } }
        if (destinationPathIds === 'root') { if (!newData[selectedTab]) newData[selectedTab] = []; newData[selectedTab].push(item); } else { let targetLevel = newData[selectedTab]; const pathIds = Array.isArray(destinationPathIds) ? destinationPathIds : [destinationPathIds]; for (let i = 0; i < pathIds.length; i++) { const folder = targetLevel.find(f => f.id === pathIds[i]); if (!folder) { console.error('Destination folder not found'); return; } if (i === pathIds.length - 1) { if (!folder.items) folder.items = []; folder.items.push(item); break; } else { if (!folder.items) folder.items = []; targetLevel = folder.items; } } }
        await setData(newData); setShowMoveModal(false); setItemToMove(null);
    };

    const initAdd = () => { hapticFeedback.medium(); setEditItem(null); setFormTitle(''); setFormType('file'); setFormLink(''); setFormSize(''); setFormColor('emerald'); setFormIcon('Folder'); setEditorMode('add'); };
    const initBulk = () => { hapticFeedback.medium(); setEditItem(null); setBulkItems([{ id: Date.now().toString(), title: '', type: 'file', link: '', size: '1 MB', customColor: 'emerald', iconName: 'Folder' }]); setEditorMode('bulk'); };
    const initEdit = (item) => { hapticFeedback.light(); setEditItem(item); setFormTitle(item.title); setFormType(item.type); setFormLink(item.link || ''); setFormSize(item.size || ''); setFormColor(item.customColor || 'emerald'); setFormIcon(item.iconName || 'Folder'); setEditorMode('edit'); };

    const handleSaveItem = async () => {
        if (!formTitle) { hapticFeedback.error(); return; }
        hapticFeedback.success();
        const newItem = { id: editItem ? editItem.id : Date.now().toString(), type: formType, title: formTitle, author: 'Admin', date: editItem ? editItem.date : new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }), size: formSize || (formType === 'folder' ? '-' : '1 MB'), link: extractDriveId(formLink) || '#', iconName: formIcon };
        if (formType === 'folder') { newItem.items = editItem ? (editItem.items || []) : []; newItem.customColor = formColor; }
        const currentItems = getCurrentItems();
        let updatedItems;
        if (editorMode === 'edit') { updatedItems = currentItems.map(i => i.id === editItem.id ? newItem : i); } else { updatedItems = [...currentItems, newItem]; }
        await updateItemsAtCurrentPath(updatedItems); setEditorMode(null);
    };

    const handleBulkAdd = async () => {
        const newItems = [];
        bulkItems.forEach((row) => { const title = (row.title || '').trim(); if (!title) return; const type = row.type === 'folder' ? 'folder' : 'file'; const newItem = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, type, title, author: 'Admin', date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }), size: row.size || (type === 'folder' ? '-' : '1 MB'), link: extractDriveId(row.link) || '#', iconName: row.iconName || (type === 'folder' ? 'Folder' : 'FileText') }; if (type === 'folder') { newItem.items = []; newItem.customColor = row.customColor || 'emerald'; } newItems.push(newItem); });
        if (newItems.length === 0) { hapticFeedback.error(); alert('Add at least one item with a title.'); return; }
        hapticFeedback.success(); const currentItems = getCurrentItems(); await updateItemsAtCurrentPath([...currentItems, ...newItems]); setBulkItems([]); setEditorMode(null); alert(`Added ${newItems.length} item(s).`);
    };

    const handleProfileUpdate = async () => { hapticFeedback.success(); await setData({ ...data, About: { name: profileName, title: profileTitle, bio: profileBio, avatarUrl: profileAvatar, links: socialLinks } }); alert("Profile Updated!"); };
    const handleSettingsUpdate = async () => { hapticFeedback.success(); await setData({ ...data, settings: settings }); alert("Settings Updated!"); };
    const addSocial = () => { hapticFeedback.medium(); setSocialLinks([...socialLinks, { ...newSocial, id: Date.now() }]); setNewSocial({ platform: '', handle: '', url: '', color: 'bg-blue-600', iconName: 'LinkIcon' }); };
    const removeSocial = (id) => { hapticFeedback.error(); setSocialLinks(socialLinks.filter(l => l.id !== id)); };
    
    const IconPicker = ({ selected, onSelect }) => (
        <div className="grid grid-cols-6 gap-2 mt-2 h-32 overflow-y-auto pr-2 custom-scrollbar">
            {Object.keys(ICON_MAP).map(iconName => { const Icon = ICON_MAP[iconName]; return <button key={iconName} onClick={() => { hapticFeedback.light(); onSelect(iconName); }} className={`p-2 rounded-lg flex items-center justify-center transition-colors ${selected === iconName ? 'bg-blue-500 text-white' : 'glass-input hover:bg-white/20'} active:scale-95`}><Icon size={18} /></button> })}
        </div>
    );

    const MiniAppPreview = ({ previewSettings }) => {
        const theme = previewSettings.theme || {};
        return (
            <div className="w-full aspect-[9/16] max-h-[400px] bg-gray-100 dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl relative flex flex-col mx-auto">
                <div className="p-4 pt-6"><h3 className="text-lg font-bold italic text-transparent bg-clip-text truncate" style={{ backgroundImage: `linear-gradient(to right, ${theme.gradientStart}, ${theme.gradientEnd})` }}>{previewSettings.appName}</h3><div className="h-1 w-8 rounded-full mt-1" style={{ backgroundImage: `linear-gradient(to right, ${theme.gradientStart}, ${theme.gradientEnd})` }}></div><p className="text-[10px] text-gray-500 font-bold mt-1">{previewSettings.appDesc}</p></div>
                <div className="flex-1 px-4 space-y-2 overflow-hidden"><div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg w-full"></div><div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"><div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-500"><Folder size={16} /></div><div className="flex-1"><div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-1"></div><div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div></div></div></div>
                <div className="p-2 pb-4"><div className="bg-white/80 dark:bg-black/40 backdrop-blur-md rounded-2xl p-2 flex justify-between items-center shadow-lg"><div className="flex flex-col items-center p-2"><div className="-mt-3 p-1.5 rounded-xl shadow-sm" style={{ backgroundColor: `${theme.navColor}20`, color: theme.navColor }}><Layers size={14} /></div><div className="h-1 w-6 bg-gray-300 dark:bg-gray-600 rounded mt-1"></div></div><div className="p-2 opacity-50"><BookOpen size={14} /></div><div className="p-2 opacity-50"><User size={14} /></div></div></div>
            </div>
        );
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? 'dark text-white' : 'text-gray-900'} pb-24 transition-colors relative`}>
            <div className="p-6 pb-2">
                <div className="flex justify-between items-center mb-6">
                    <div><h1 className="text-2xl font-extrabold italic bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Admin Console</h1><p className="text-xs text-gray-500 font-bold mt-1">Manage Your App</p></div>
                    <div className="flex gap-2"><button onClick={() => { hapticFeedback.light(); setShowHelp(!showHelp); }} className="p-2 rounded-xl glass-panel bg-white/10 dark:bg-black/10 text-blue-500 active:scale-95"><HelpCircle size={20}/></button><button onClick={() => { hapticFeedback.light(); setDarkMode(!isDarkMode); }} className="p-2 rounded-xl glass-panel bg-white/10 dark:bg-black/10 active:scale-95"><Sun size={20}/></button><button onClick={() => { hapticFeedback.error(); onLogout(); }} className="p-2 rounded-xl bg-red-500/20 text-red-600 border border-red-500/30 active:scale-95"><LogOut size={20}/></button></div>
                </div>
                {showHelp && ( <div className="mb-6 p-4 rounded-2xl glass-panel bg-blue-500/10 border border-blue-500/20 animate-stagger-enter"><h4 className="font-bold text-sm mb-2 flex items-center gap-2"><Info size={16}/> How to Use</h4><ul className="text-xs space-y-1 opacity-80 list-disc pl-4"><li><strong>Adding Files:</strong> Paste full Google Drive link.</li><li><strong>Folders:</strong> Create folders to organize content.</li><li><strong>Settings:</strong> Rename Tabs and App Title.</li></ul></div> )}
            </div>
            <div className="px-6">
                {adminTab === 'Content' && (
                    <>
                        <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">{['Udvash', 'ACS', 'Others'].map((key, idx) => (<button key={key} onClick={() => { hapticFeedback.light(); setSelectedTab(key); setAdminPath([]); setEditorMode(null); }} className={`px-5 py-2 rounded-full font-bold text-xs whitespace-nowrap transition-all ${selectedTab === key ? 'bg-blue-600 text-white shadow-lg' : 'glass-panel bg-white/10 dark:bg-black/10'} active:scale-95`}>{settings[`tab${idx + 1}`] || key}</button>))}</div>
                        {editorMode ? (
                            editorMode === 'bulk' ? (
                                <div className="glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl mb-8 animate-stagger-enter">
                                    <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg">Bulk Add Items</h3><button onClick={() => { hapticFeedback.light(); setEditorMode(null); }} className="active:scale-95"><X size={20} className="text-gray-500" /></button></div>
                                    <div className="space-y-3">{bulkItems.map((row, idx) => (<div key={row.id} className="p-3 rounded-xl glass-input"><div className="flex justify-between items-center mb-2"><span className="text-xs font-bold text-gray-500 uppercase">Item {idx + 1}</span>{bulkItems.length > 1 && (<button onClick={() => { hapticFeedback.error(); setBulkItems(bulkItems.filter((_, rIdx) => rIdx !== idx)); }} className="text-red-400 text-xs font-bold active:scale-95">Remove</button>)}</div><div className="grid grid-cols-1 sm:grid-cols-2 gap-2"><input value={row.title} onChange={(e) => { const next = [...bulkItems]; next[idx] = { ...next[idx], title: e.target.value }; setBulkItems(next); }} className="p-3 rounded-xl glass-input text-sm" placeholder="Title" /><select value={row.type} onChange={(e) => { const next = [...bulkItems]; next[idx] = { ...next[idx], type: e.target.value }; setBulkItems(next); }} className="p-3 rounded-xl glass-input text-sm dark:bg-gray-900"><option value="file">File</option><option value="folder">Folder</option></select><input value={row.link} onChange={(e) => { const next = [...bulkItems]; next[idx] = { ...next[idx], link: e.target.value }; setBulkItems(next); }} className="p-3 rounded-xl glass-input text-sm sm:col-span-2" placeholder="Drive link or ID" /><input value={row.size} onChange={(e) => { const next = [...bulkItems]; next[idx] = { ...next[idx], size: e.target.value }; setBulkItems(next); }} className="p-3 rounded-xl glass-input text-sm" placeholder={row.type === 'folder' ? '-' : 'Size (e.g., 2 MB)'} /></div></div>))}</div>
                                    <button onClick={() => { hapticFeedback.medium(); setBulkItems([...bulkItems, { id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, title: '', type: 'file', link: '', size: '1 MB', customColor: 'emerald', iconName: 'Folder' }]); }} className="w-full mt-4 py-3 rounded-xl border-2 border-dashed border-purple-400 text-purple-200 font-bold flex items-center justify-center gap-2 hover:border-purple-300 hover:text-white transition-all active:scale-95"><Plus size={18} /> Add +</button>
                                    <div className="flex gap-3 mt-6"><button onClick={() => { hapticFeedback.light(); setEditorMode(null); }} className="flex-1 py-3 rounded-xl font-bold glass-input hover:bg-white/10 active:scale-95">Cancel</button><button onClick={handleBulkAdd} className="flex-1 py-3 rounded-xl font-bold bg-purple-600 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-700 active:scale-95">Add All</button></div>
                                </div>
                            ) : (
                            <div className="glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl mb-8 animate-stagger-enter">
                                <div className="flex justify-between items-center mb-6"><h3 className="font-bold text-lg">{editorMode === 'edit' ? 'Edit Item' : 'Add New Item'}</h3><button onClick={() => { hapticFeedback.light(); setEditorMode(null); }} className="active:scale-95"><X size={20} className="text-gray-500" /></button></div>
                                <div className="space-y-4"><div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Title</label><input value={formTitle} onChange={e => setFormTitle(e.target.value)} className="w-full p-3 rounded-xl glass-input mt-1" /></div>{editorMode === 'add' && (<div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Type</label><div className="flex gap-2 mt-1"><button onClick={() => { hapticFeedback.light(); setFormType('folder'); }} className={`flex-1 py-2 rounded-lg font-bold text-sm transition-colors ${formType === 'folder' ? 'bg-blue-500 text-white' : 'glass-input'} active:scale-95`}>Folder</button><button onClick={() => { hapticFeedback.light(); setFormType('file'); }} className={`flex-1 py-2 rounded-lg font-bold text-sm transition-colors ${formType === 'file' ? 'bg-blue-500 text-white' : 'glass-input'} active:scale-95`}>File</button></div></div>)}{formType === 'folder' && (<><div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Color</label><div className="flex gap-2 mt-1">{['emerald', 'blue', 'purple', 'orange', 'red'].map(c => <button key={c} onClick={() => { hapticFeedback.light(); setFormColor(c); }} className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 active:scale-95 ${formColor === c ? 'border-white scale-110' : 'border-transparent'}`} style={{ backgroundColor: c === 'emerald' ? '#10b981' : c === 'blue' ? '#3b82f6' : c === 'purple' ? '#a855f7' : c === 'orange' ? '#f97316' : '#ef4444' }} />)}</div></div><div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Icon</label><IconPicker selected={formIcon} onSelect={setFormIcon} /></div></>)}{formType === 'file' && (<><div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Drive Link</label><input value={formLink} onChange={e => setFormLink(e.target.value)} placeholder="Paste full link or ID" className="w-full p-3 rounded-xl glass-input mt-1" /></div><div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Size</label><input value={formSize} onChange={e => setFormSize(e.target.value)} className="w-full p-3 rounded-xl glass-input mt-1" /></div></>)}</div>
                                <div className="flex gap-3 mt-8"><button onClick={() => { hapticFeedback.light(); setEditorMode(null); }} className="flex-1 py-3 rounded-xl font-bold glass-input hover:bg-white/10 active:scale-95">Cancel</button><button onClick={handleSaveItem} className="flex-1 py-3 rounded-xl font-bold bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 active:scale-95">Save Item</button></div>
                            </div>)
                        ) : (
                            <>
                                <div className="flex items-center gap-2 mb-4 text-sm font-bold text-gray-500"><button onClick={() => { hapticFeedback.light(); setAdminPath([]); }} className="hover:text-blue-500 flex items-center gap-1 active:scale-95"><Home size={14} /> Root</button>{adminPath.map((crumb, idx) => (<span key={crumb.id} className="flex items-center gap-2"><ChevronRight size={14} /><button onClick={() => { hapticFeedback.light(); setAdminPath(adminPath.slice(0, idx + 1)); }} className="hover:text-blue-500 active:scale-95">{crumb.title}</button></span>))}</div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4"><button onClick={initAdd} className="w-full py-3 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 text-gray-400 font-bold flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-500 transition-all active:scale-95"><Plus size={20} /> Add New Item</button><button onClick={initBulk} className="w-full py-3 rounded-xl border-2 border-dashed border-purple-300 dark:border-purple-700 text-purple-500 font-bold flex items-center justify-center gap-2 hover:border-purple-500/80 hover:text-purple-300 transition-all active:scale-95"><Layers size={20} /> Bulk Add</button></div>
                                <div className="space-y-3">{getCurrentItems().length === 0 && <p className="text-center text-gray-400 py-4 font-medium italic">This folder is empty.</p>}{getCurrentItems().map((item, idx) => (<ItemCard key={item.id} item={item} index={idx} colorTheme={selectedTab} isAdmin={true} onClick={(itm) => itm.type === 'folder' ? setAdminPath([...adminPath, {id: itm.id, title: itm.title}]) : null} onEdit={initEdit} onDelete={handleDelete} onMoveUp={() => handleMoveUp(idx)} onMoveDown={() => handleMoveDown(idx)} onMove={handleMove} canMoveUp={idx > 0} canMoveDown={idx < getCurrentItems().length - 1} onDragStart={handleDragStart} onDragOver={handleDragOver} onDragEnd={handleDragEnd} onDrop={handleDrop} onPointerDragStart={handlePointerDragStart} onPointerDragEnter={handlePointerDragEnter} onPointerDragEnd={handlePointerDragEnd} isDragging={draggedIndex === idx} dragOver={dragOverIndex === idx} isAnyDragging={isDragging} />))}</div>
                            </>
                        )}
                    </>
                )}
                {adminTab === 'Settings' && (
                    <div className="space-y-6 animate-page-enter max-w-4xl mx-auto pb-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl"><h3 className="font-bold mb-4 flex items-center gap-2"><Settings size={18}/> App Info</h3><div className="space-y-4"><div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">App Name</label><input value={settings.appName} onChange={e => setSettings({...settings, appName: e.target.value})} className="w-full p-3 rounded-xl glass-input border-none outline-none text-sm" /></div><div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Subtitle</label><input value={settings.appDesc} onChange={e => setSettings({...settings, appDesc: e.target.value})} className="w-full p-3 rounded-xl glass-input border-none outline-none text-sm" /></div></div></div>
                                <div className="glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl"><h3 className="font-bold mb-4 flex items-center gap-2"><PaintBucket size={18}/> Theme Editor</h3><div className="space-y-4"><div className="flex items-center justify-between"><label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Header Gradient Start</label><input type="color" value={settings.theme?.gradientStart || '#10b981'} onChange={e => setSettings({...settings, theme: {...settings.theme, gradientStart: e.target.value}})} className="w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent" /></div><div className="flex items-center justify-between"><label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Header Gradient End</label><input type="color" value={settings.theme?.gradientEnd || '#047857'} onChange={e => setSettings({...settings, theme: {...settings.theme, gradientEnd: e.target.value}})} className="w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent" /></div><div className="flex items-center justify-between"><label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Bottom Nav Icons</label><input type="color" value={settings.theme?.navColor || '#3b82f6'} onChange={e => setSettings({...settings, theme: {...settings.theme, navColor: e.target.value}})} className="w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent" /></div></div></div>
                                <div className="glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl"><h3 className="font-bold mb-4 flex items-center gap-2"><Type size={18}/> Rename Tabs</h3><div className="space-y-4"><div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Tab 1</label><input value={settings.tab1} onChange={e => setSettings({...settings, tab1: e.target.value})} className="w-full p-3 rounded-xl glass-input border-none outline-none text-sm" /></div><div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Tab 2</label><input value={settings.tab2} onChange={e => setSettings({...settings, tab2: e.target.value})} className="w-full p-3 rounded-xl glass-input border-none outline-none text-sm" /></div><div><label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">Tab 3</label><input value={settings.tab3} onChange={e => setSettings({...settings, tab3: e.target.value})} className="w-full p-3 rounded-xl glass-input border-none outline-none text-sm" /></div></div></div>
                            </div>
                            <div className="space-y-6"><div className="sticky top-6"><h3 className="font-bold mb-4 flex items-center gap-2 text-gray-500 dark:text-gray-400 uppercase text-xs tracking-wider">Live Preview</h3><MiniAppPreview previewSettings={settings} /><div className="mt-6"><button onClick={handleSettingsUpdate} className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold shadow-lg shadow-green-500/30 active:scale-95 transition-all">Save All Changes</button><p className="text-center text-[10px] text-gray-400 mt-2">Changes will apply immediately.</p></div></div></div>
                        </div>
                    </div>
                )}
                {adminTab === 'Profile' && (
                    <div className="space-y-6 animate-page-enter max-w-2xl mx-auto">
                        <div className="glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl"><h3 className="font-bold mb-4 flex items-center gap-2"><User size={18}/> Personal Info</h3><div className="space-y-4"><input value={profileName} onChange={e => setProfileName(e.target.value)} className="w-full p-3 rounded-xl glass-input border-none outline-none text-sm" placeholder="Name" /><input value={profileTitle} onChange={e => setProfileTitle(e.target.value)} className="w-full p-3 rounded-xl glass-input border-none outline-none text-sm" placeholder="Title" /><textarea value={profileBio} onChange={e => setProfileBio(e.target.value)} rows="3" className="w-full p-3 rounded-xl glass-input border-none outline-none text-sm" placeholder="Bio" /><input value={profileAvatar} onChange={e => setProfileAvatar(e.target.value)} className="w-full p-3 rounded-xl glass-input border-none outline-none text-sm" placeholder="Profile Image URL" /></div></div>
                        <div className="glass-panel bg-white/10 dark:bg-black/10 p-6 rounded-2xl"><h3 className="font-bold mb-4 flex items-center gap-2"><LinkIcon size={18}/> Social Links</h3><div className="space-y-3 mb-4">{socialLinks.map(link => (<div key={link.id} className="flex items-center justify-between p-3 glass-input rounded-xl"><span className="text-sm font-bold">{link.platform}</span><button onClick={() => removeSocial(link.id)} className="text-red-500 active:scale-95"><Trash2 size={16} /></button></div>))}</div><div className="grid grid-cols-2 gap-2"><input placeholder="Platform" value={newSocial.platform} onChange={e => setNewSocial({...newSocial, platform: e.target.value})} className="p-2 rounded-lg glass-input text-xs" /><input placeholder="Handle" value={newSocial.handle} onChange={e => setNewSocial({...newSocial, handle: e.target.value})} className="p-2 rounded-lg glass-input text-xs" /><input placeholder="URL" value={newSocial.url} onChange={e => setNewSocial({...newSocial, url: e.target.value})} className="p-2 rounded-lg glass-input text-xs" /><select value={newSocial.iconName} onChange={e => setNewSocial({...newSocial, iconName: e.target.value})} className="p-2 rounded-lg glass-input text-xs dark:bg-gray-800">{Object.keys(ICON_MAP).map(k => <option key={k} value={k}>{k}</option>)}</select></div><button onClick={addSocial} className="mt-2 w-full py-2 bg-blue-500 text-white rounded-lg text-xs font-bold active:scale-95">Add Link</button></div>
                        <button onClick={handleProfileUpdate} className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-2xl font-bold shadow-lg shadow-green-500/30 active:scale-95">Save Changes</button>
                    </div>
                )}
                {showMoveModal && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-page-enter">
                        <div className="glass-panel bg-white/20 dark:bg-black/40 p-6 rounded-2xl w-full max-w-md shadow-2xl">
                            <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg">Move Item</h3><button onClick={() => { hapticFeedback.light(); setShowMoveModal(false); setItemToMove(null); }} className="active:scale-95"><X size={20} className="text-gray-500" /></button></div>
                            <p className="text-sm text-gray-400 mb-4">Select destination folder:</p>
                            <div className="max-h-64 overflow-y-auto space-y-2 mb-4"><button onClick={() => handleMoveToFolder('root')} className="w-full p-3 rounded-xl glass-input hover:bg-white/20 text-left flex items-center gap-2 active:scale-95"><Home size={18} /><span className="font-bold">Root ({selectedTab})</span></button>{getAllFolders(data[selectedTab] || [], [], itemToMove?.id).map(folder => { const folderPath = folder.path.map(p => p.title).join(' / '); return (<button key={`${folder.id}-${folder.pathIds.join('-')}`} onClick={() => handleMoveToFolder(folder.pathIds)} className="w-full p-3 rounded-xl glass-input hover:bg-white/20 text-left flex items-center gap-2 active:scale-95"><Folder size={18} /><span className="font-bold truncate">{folderPath}</span></button>); })}</div>
                            <button onClick={() => { hapticFeedback.light(); setShowMoveModal(false); setItemToMove(null); }} className="w-full py-3 rounded-xl font-bold glass-input hover:bg-white/10 active:scale-95">Cancel</button>
                        </div>
                    </div>
                )}
            </div>
            <div className="fixed bottom-0 left-0 right-0 p-4 z-50">
                <nav className="glass-panel mx-auto max-w-md bg-white/10 dark:bg-black/10 rounded-3xl h-16 px-6 shadow-2xl flex items-center justify-between pointer-events-auto">
                    <NavIcon name="Content" active={adminTab === 'Content'} onClick={() => { hapticFeedback.light(); setAdminTab('Content'); }} icon={Folder} activeColor={settings.theme.navColor} />
                    <NavIcon name="Profile" active={adminTab === 'Profile'} onClick={() => { hapticFeedback.light(); setAdminTab('Profile'); }} icon={User} activeColor={settings.theme.navColor} />
                    <NavIcon name="Settings" active={adminTab === 'Settings'} onClick={() => { hapticFeedback.light(); setAdminTab('Settings'); }} icon={Settings} activeColor={settings.theme.navColor} />
                    <NavIcon name="Exit" active={false} onClick={() => { hapticFeedback.error(); onLogout(); }} icon={LogOut} activeColor="#ef4444" />
                </nav>
            </div>
        </div>
    );
};

// --- Main App Component ---
export default function App() {
    const [activeTab, setActiveTab] = useState('Udvash');
    const [darkMode, setDarkMode] = useState(() => { const saved = localStorage.getItem('pdfhunt-darkmode'); return saved !== null ? saved === 'true' : true; });
    const [searchQuery, setSearchQuery] = useState('');
    const [navigationStack, setNavigationStack] = useState([]); 
    const [viewingFile, setViewingFile] = useState(null); 
    const [viewMode, setViewMode] = useState('app'); 
    
    // CACHE LOAD
    const [appData, setAppData] = useState(() => { try { const cached = localStorage.getItem('pdfhunt-data-cache'); return cached ? JSON.parse(cached) : initialData; } catch (e) { return initialData; } });

    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loadingData, setLoadingData] = useState(true);
    const dataLoadedRef = useRef(false);
    const [user, setUser] = useState(null);
    const hasCachedData = useRef(!!localStorage.getItem('pdfhunt-data-cache'));
    
    // PWA & Updates
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallPrompt, setShowInstallPrompt] = useState(false);
    const [showFirstVisitTour, setShowFirstVisitTour] = useState(false);
    const [isInstalled, setIsInstalled] = useState(false);
    const [showInstallButton, setShowInstallButton] = useState(false);
    const [showIOSModal, setShowIOSModal] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [showUpdateNotification, setShowUpdateNotification] = useState(false);
    const [swRegistration, setSwRegistration] = useState(null);

    const currentItems = navigationStack.length > 0 ? navigationStack[navigationStack.length - 1].items : appData[activeTab] || [];

    const handleTabChange = (tab) => { if (tab === activeTab && navigationStack.length === 0) return; setActiveTab(tab); setNavigationStack([]); setSearchQuery(''); };
    const handleItemClick = (item) => { if (item.type === 'folder') { setNavigationStack([...navigationStack, { title: item.title, items: item.items }]); setSearchQuery(''); } else { setViewingFile(item); } };
    
    useEffect(() => { const initAuth = async () => { if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) { await signInWithCustomToken(auth, __initial_auth_token); } else { await signInAnonymously(auth); } }; initAuth(); const unsubscribe = onAuthStateChanged(auth, setUser); return () => unsubscribe(); }, []);

    // NEW DATA PATH LOGIC
    const loadAppData = async () => {
        // Path adjusted to: artifacts/{appId}/public/data/app_state/main (6 segments, valid)
        const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'app_state', 'main');
        try {
            if (!auth.currentUser) return; 
            const snap = await getDoc(docRef);
            if (snap.exists()) { const firestoreData = snap.data(); setAppData(firestoreData); localStorage.setItem('pdfhunt-data-cache', JSON.stringify(firestoreData)); hasCachedData.current = true; } else if (!hasCachedData.current) { setAppData(initialData); }
        } catch (error) { console.error('Error loading data:', error); } finally { dataLoadedRef.current = true; setLoadingData(false); }
    };

    const cleanDataForFirestore = (obj) => { if (obj === null || obj === undefined) return null; if (Array.isArray(obj)) { return obj.map(item => cleanDataForFirestore(item)); } if (typeof obj === 'object') { const cleaned = {}; for (const key in obj) { if (obj[key] !== undefined) { cleaned[key] = cleanDataForFirestore(obj[key]); } } return cleaned; } return obj; };
    const persistAppData = async (data) => { if (!user) return; const docRef = doc(db, 'artifacts', appId, 'public', 'data', 'app_state', 'main'); try { const cleanedData = cleanDataForFirestore(data); await setDoc(docRef, cleanedData, { merge: false }); } catch (error) { console.error('Error saving:', error); } };
    const setDataAndPersist = async (updater) => { const next = typeof updater === 'function' ? updater(appData) : updater; setAppData(next); localStorage.setItem('pdfhunt-data-cache', JSON.stringify(next)); hasCachedData.current = true; await persistAppData(next); };

    const handleBack = () => { const newStack = [...navigationStack]; newStack.pop(); setNavigationStack(newStack); };

    useEffect(() => { if (user) loadAppData(); if (window.matchMedia('(display-mode: standalone)').matches) setIsInstalled(true); const hasSeenTour = localStorage.getItem('pdfhunt-tour-seen'); if (!hasSeenTour && !isInstalled) { setTimeout(() => { setShowFirstVisitTour(true); }, 1000); } if ('serviceWorker' in navigator) { const handleUpdate = () => { if (!sessionStorage.getItem('pdfhunt-update-dismissed')) setShowUpdateNotification(true); }; window.addEventListener('sw-update-available', handleUpdate); navigator.serviceWorker.getRegistration().then(reg => { if (reg) { setSwRegistration(reg); reg.addEventListener('updatefound', () => { const newWorker = reg.installing; if (newWorker) newWorker.addEventListener('statechange', () => { if (newWorker.state === 'installed' && navigator.serviceWorker.controller && !sessionStorage.getItem('pdfhunt-update-dismissed')) setShowUpdateNotification(true); }); }); } }); return () => window.removeEventListener('sw-update-available', handleUpdate); } }, [user]);

    useEffect(() => { try { const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; const standalone = window.matchMedia('(display-mode: standalone)').matches; if (standalone) { setIsInstalled(true); return; } const handlePrompt = (e) => { e.preventDefault(); setDeferredPrompt(e); setShowInstallButton(true); }; const handleInstalled = () => { setIsInstalled(true); setDeferredPrompt(null); setShowInstallButton(false); setShowInstallPrompt(false); localStorage.setItem('pdfhunt-install-dismissed', 'true'); }; if (ios && !standalone) setShowInstallButton(true); window.addEventListener('beforeinstallprompt', handlePrompt); window.addEventListener('appinstalled', handleInstalled); return () => { window.removeEventListener('beforeinstallprompt', handlePrompt); window.removeEventListener('appinstalled', handleInstalled); }; } catch (e) {} }, []);

    useEffect(() => { if (darkMode) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark'); localStorage.setItem('pdfhunt-darkmode', darkMode.toString()); }, [darkMode]);
    
    // Ensure theme is applied immediately on first render
    useEffect(() => { const saved = localStorage.getItem('pdfhunt-darkmode'); const isDark = saved !== null ? saved === 'true' : true; if (isDark) document.documentElement.classList.add('dark'); else document.documentElement.classList.remove('dark'); }, []);

    const handleInstallClick = async () => { hapticFeedback.medium(); if (deferredPrompt) { try { await deferredPrompt.prompt(); const { outcome } = await deferredPrompt.userChoice; if (outcome === 'accepted') { setIsInstalled(true); hapticFeedback.success(); } setDeferredPrompt(null); setShowInstallButton(false); } catch (e) { hapticFeedback.error(); if (!deferredPrompt) setShowIOSModal(true); } } else { setShowIOSModal(true); } };
    const handleDismissInstall = () => { setShowInstallPrompt(false); localStorage.setItem('pdfhunt-install-dismissed', 'true'); };
    const handleTourStart = () => { setShowFirstVisitTour(false); localStorage.setItem('pdfhunt-tour-seen', 'true'); setTimeout(() => { if (deferredPrompt && !localStorage.getItem('pdfhunt-install-dismissed')) { setShowInstallPrompt(true); } }, 500); };
    const handleTourSkip = () => { setShowFirstVisitTour(false); localStorage.setItem('pdfhunt-tour-seen', 'true'); };
    const handleUpdateNow = () => { hapticFeedback.success(); if (swRegistration?.waiting) swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' }); window.location.reload(); };
    const handleDismissUpdate = () => { hapticFeedback.light(); setShowUpdateNotification(false); sessionStorage.setItem('pdfhunt-update-dismissed', 'true'); };

    const getAllItemsRecursive = (items) => { let results = []; if (!items) return results; items.forEach(item => { results.push(item); if (item.type === 'folder' && item.items) results = [...results, ...getAllItemsRecursive(item.items)]; }); return results; };
    const filteredItems = useMemo(() => { if (!searchQuery.trim()) return currentItems; const allItems = getAllItemsRecursive(currentItems); return allItems.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())); }, [currentItems, searchQuery]);

    const settings = appData.settings || { appName: "PDF Hunt", appDesc: "Find your resources", tab1: "Udvash", tab2: "ACS", tab3: "Others", theme: { gradientStart: "#10b981", gradientEnd: "#047857", navColor: "#3b82f6" } };
    const activeTheme = settings.theme || { gradientStart: "#10b981", gradientEnd: "#047857", navColor: "#3b82f6" };
    const currentTitle = navigationStack.length > 0 ? navigationStack[navigationStack.length - 1].title : (activeTab === 'Udvash' ? settings.tab1 : activeTab === 'ACS' ? settings.tab2 : activeTab === 'Others' ? settings.tab3 : settings.appName);
    const gradientStyle = { backgroundImage: `linear-gradient(to right, ${activeTheme.gradientStart}, ${activeTheme.gradientEnd})` };

    if (viewMode === 'admin') return <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark text-white' : 'text-gray-800'}`}><GlobalStyles /><DoodleBackground /><AdminDashboard data={appData} setData={setDataAndPersist} onLogout={() => { setIsAdmin(false); setViewMode('app'); }} isDarkMode={darkMode} setDarkMode={setDarkMode} /></div>;
    if (loadingData && !hasCachedData.current) return <LoadingScreen />;

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark text-white' : 'text-gray-800'}`}>
            <GlobalStyles /><DoodleBackground />
            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} onLogin={() => { setIsAdmin(true); setShowLoginModal(false); setViewMode('admin'); }} />}
            {showUpdateNotification && <UpdateNotification onUpdate={handleUpdateNow} onDismiss={() => { setShowUpdateNotification(false); sessionStorage.setItem('pdfhunt-update-dismissed', 'true'); }} />}
            {showIOSModal && <IOSInstallModal onClose={() => setShowIOSModal(false)} />}
            {showInstallPrompt && <InstallPrompt deferredPrompt={deferredPrompt} onInstall={handleInstallClick} onDismiss={() => { setShowInstallPrompt(false); localStorage.setItem('pdfhunt-install-dismissed', 'true'); }} />}
            {showFirstVisitTour && <FirstVisitTour onStart={handleTourStart} onSkip={handleTourSkip} />}
            {viewingFile && <PdfViewer file={viewingFile} onClose={() => setViewingFile(null)} />}

            <div className="flex flex-col h-screen overflow-hidden relative">
                <header className="px-6 pt-6 pb-2 z-10 flex-shrink-0">
                    <div className="flex justify-between items-center mb-6">
                        <div><div className="relative"><h1 className="text-2xl font-extrabold italic bg-clip-text text-transparent" style={gradientStyle}>{settings.appName}</h1><div className="h-1.5 w-12 rounded-full mt-1" style={gradientStyle}></div></div><p className="text-xs text-gray-500 dark:text-gray-400 font-bold mt-2">{settings.appDesc}</p></div>
                        <div className="flex items-center gap-2">{showInstallButton && !isInstalled && (<button onClick={handleInstallClick} className="px-4 py-2 text-white rounded-xl font-bold text-sm transition-all shadow-lg border-2 border-white/20 active:scale-95 flex items-center gap-2 hover:opacity-90" style={gradientStyle}><Download size={16} /><span className="hidden sm:inline">Install App</span></button>)}<button onClick={() => { hapticFeedback.light(); setDarkMode(!darkMode); }} className="p-3 rounded-full bg-white/20 dark:bg-black/20 glass-panel hover:bg-white/30 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-200 active:scale-95">{darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}</button></div>
                    </div>
                    {activeTab !== 'About Me' && <SearchBar value={searchQuery} onChange={setSearchQuery} />}
                </header>

                <main className="flex-1 overflow-y-auto px-6 pb-24 scroll-smooth">
                    {activeTab === 'About Me' ? <AboutMe data={appData.About || initialData.About} onAdminLogin={() => setShowLoginModal(true)} isAdmin={isAdmin} /> : (
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-2 mb-2">{navigationStack.length > 0 && (<button onClick={handleBack} className="p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors active:scale-95"><ArrowLeft size={18} /></button>)}<div className="relative"><h2 className="text-xl font-extrabold italic bg-clip-text text-transparent truncate" style={gradientStyle}>{currentTitle}</h2><div className="h-1.5 w-12 rounded-full mt-1" style={gradientStyle}></div></div></div>
                            {filteredItems.length > 0 ? filteredItems.map((item, index) => (<div key={item.id} className="mb-4"><ItemCard item={item} colorTheme={activeTab === 'Others' ? 'Others' : activeTab} onClick={handleItemClick} index={index} /></div>)) : (<div className="text-center py-10 opacity-50 flex flex-col items-center text-gray-600 dark:text-gray-400"><Folder size={40} className="mb-2 opacity-30" /><p className="font-medium">Empty Folder</p></div>)}
                        </div>
                    )}
                </main>

                <div className="fixed bottom-0 left-0 right-0 p-4 z-40 pointer-events-none">
                    <nav className="glass-panel mx-auto max-w-md bg-white/10 dark:bg-black/10 rounded-3xl h-16 px-6 shadow-2xl flex items-center justify-between pointer-events-auto">
                        <NavIcon name={settings.tab1} active={activeTab === 'Udvash'} onClick={() => handleTabChange('Udvash')} icon={Layers} activeColor={activeTheme.navColor} />
                        <NavIcon name={settings.tab2} active={activeTab === 'ACS'} onClick={() => handleTabChange('ACS')} icon={BookOpen} activeColor={activeTheme.navColor} />
                        <NavIcon name={settings.tab3} active={activeTab === 'Others'} onClick={() => handleTabChange('Others')} icon={MoreHorizontal} activeColor={activeTheme.navColor} />
                        <NavIcon name="About Me" active={activeTab === 'About Me'} onClick={() => handleTabChange('About Me')} icon={User} activeColor={activeTheme.navColor} />
                    </nav>
                </div>
            </div>
        </div>
    );
}