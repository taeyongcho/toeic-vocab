// ===== SVG 아이콘 세트 (스트로크 스타일, currentColor 상속) =====
const ICONS = {
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/><path d="M9 7h7"/><path d="M9 11h5"/>',
  home: '<path d="M3 10.8 12 3l9 7.8"/><path d="M5 9.5V21h5v-6h4v6h5V9.5"/>',
  pencil: '<path d="M17 3a2.4 2.4 0 0 1 3.4 3.4L7.5 19.3 3 21l1.7-4.5L17 3z"/><path d="M15 5l4 4"/>',
  headphones: '<path d="M4 14a8 8 0 0 1 16 0"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  doc: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h3.5"/>',
  bookmark: '<path d="M6 3h12v18l-6-4.2L6 21V3z"/>',
  sparkles: '<path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z"/><path d="M5 15l.6 1.7L7.3 17l-1.7.6L5 19.3 4.4 17.6 2.7 17l1.7-.6L5 15z"/>',
  chart: '<path d="M6 20V12"/><path d="M12 20V5"/><path d="M18 20v-6"/><path d="M3 21h18"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3"/>',
  speaker: '<path d="M4 9.5v5h3.5L13 19V5L7.5 9.5H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/>',
  bulb: '<path d="M12 3a6 6 0 0 1 4 10.5c-.8.7-1.3 1.4-1.5 2.5h-5c-.2-1.1-.7-1.8-1.5-2.5A6 6 0 0 1 12 3z"/><path d="M9.5 19.5h5"/><path d="M10.5 22h3"/>',
  flame: '<path d="M12 3s5.5 4.2 5.5 9.2A5.5 5.5 0 0 1 6.5 12c0-1.8.8-3.2 1.9-4.3 0 1.8.9 2.6 1.9 3.1-.5-2.2-.2-5.3 1.7-7.8z"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9.5h18"/><path d="M8 3v4M16 3v4"/><path d="M8 14h3"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.8"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.2L4 21l1.8-5.4A8 8 0 1 1 21 12z"/><path d="M8.5 11h.01M12 11h.01M15.5 11h.01"/>',
  trash: '<path d="M4 7h16"/><path d="M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7"/><path d="M6.5 7l1 13a1.5 1.5 0 0 0 1.5 1.4h6a1.5 1.5 0 0 0 1.5-1.4l1-13"/><path d="M10 11v6M14 11v6"/>',
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 6.3"/><path d="M20 5v6h-6"/>',
};

function icon(name, cls) {
  const body = ICONS[name] || '';
  return '<svg class="ic ' + (cls || '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
}

// data-ic 속성이 붙은 요소에 아이콘 주입
function hydrateIcons(root) {
  (root || document).querySelectorAll('[data-ic]').forEach(el => {
    el.innerHTML = icon(el.dataset.ic, el.dataset.icCls || '');
  });
}
