/* @ds-bundle: {"format":4,"namespace":"StandexDesignSystem_72f126","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"ThemeToggle","sourcePath":"components/core/ThemeToggle.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/layout/Accordion.jsx"},{"name":"Breadcrumb","sourcePath":"components/layout/Breadcrumb.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"},{"name":"StatBlock","sourcePath":"components/layout/StatBlock.jsx"},{"name":"Tabs","sourcePath":"components/layout/Tabs.jsx"},{"name":"CorpApp","sourcePath":"ui_kits/corporate-website/CorpApp.jsx"},{"name":"CorpBusinesses","sourcePath":"ui_kits/corporate-website/CorpBusinesses.jsx"},{"name":"CorpContact","sourcePath":"ui_kits/corporate-website/CorpContact.jsx"},{"name":"CorpFooter","sourcePath":"ui_kits/corporate-website/CorpFooter.jsx"},{"name":"CorpHeader","sourcePath":"ui_kits/corporate-website/CorpHeader.jsx"},{"name":"CorpHome","sourcePath":"ui_kits/corporate-website/CorpHome.jsx"},{"name":"ElecApp","sourcePath":"ui_kits/electronics-website/ElecApp.jsx"},{"name":"ElecFooter","sourcePath":"ui_kits/electronics-website/ElecFooter.jsx"},{"name":"ElecHeader","sourcePath":"ui_kits/electronics-website/ElecHeader.jsx"},{"name":"ElecHome","sourcePath":"ui_kits/electronics-website/ElecHome.jsx"},{"name":"ElecParametric","sourcePath":"ui_kits/electronics-website/ElecParametric.jsx"},{"name":"ElecProducts","sourcePath":"ui_kits/electronics-website/ElecProducts.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"e67a08280c3d","components/core/Button.jsx":"f8b1aeba2d39","components/core/Icon.jsx":"f5ea809d6a58","components/core/IconButton.jsx":"3517abbf17d0","components/core/Logo.jsx":"d536601b657a","components/core/Tag.jsx":"f762e8857082","components/core/ThemeToggle.jsx":"cfafb913763a","components/feedback/Dialog.jsx":"efb7ab718fdc","components/feedback/Toast.jsx":"ab49f2854e84","components/feedback/Tooltip.jsx":"9d55c1ee7e1f","components/forms/Checkbox.jsx":"61bf5d91e3de","components/forms/FormField.jsx":"f4ab2779e379","components/forms/Input.jsx":"078390cff446","components/forms/Radio.jsx":"0903172b03f3","components/forms/Select.jsx":"02a53f83a0b3","components/forms/Switch.jsx":"1bab8336ec3b","components/forms/Textarea.jsx":"73d3b97bd882","components/layout/Accordion.jsx":"922a06a49693","components/layout/Breadcrumb.jsx":"c2e101d24faf","components/layout/Card.jsx":"72e6806206db","components/layout/SectionHeading.jsx":"3f40b81c5d19","components/layout/StatBlock.jsx":"9e7d4f78b647","components/layout/Tabs.jsx":"9fc170e10d2c","ui_kits/corporate-website/CorpApp.jsx":"2b1326e8443c","ui_kits/corporate-website/CorpBusinesses.jsx":"c98e838bafb7","ui_kits/corporate-website/CorpContact.jsx":"b5a6469452ce","ui_kits/corporate-website/CorpFooter.jsx":"8e3071c52d7b","ui_kits/corporate-website/CorpHeader.jsx":"ab861d7384a8","ui_kits/corporate-website/CorpHome.jsx":"6ae14a99b6b8","ui_kits/electronics-website/ElecApp.jsx":"25b0033139de","ui_kits/electronics-website/ElecFooter.jsx":"578f27bb2de8","ui_kits/electronics-website/ElecHeader.jsx":"959f5d0915e1","ui_kits/electronics-website/ElecHome.jsx":"b025beb98341","ui_kits/electronics-website/ElecParametric.jsx":"1e947857d456","ui_kits/electronics-website/ElecProducts.jsx":"d261e79b0792"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StandexDesignSystem_72f126 = window.StandexDesignSystem_72f126 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  blue: {
    bg: 'var(--blue-050)',
    fg: 'var(--blue-600)',
    border: 'var(--blue-200)'
  },
  green: {
    bg: 'var(--green-100)',
    fg: 'var(--green-700)',
    border: 'var(--green-300)'
  },
  aqua: {
    bg: 'var(--aqua-100)',
    fg: 'var(--aqua-700)',
    border: 'var(--aqua-300)'
  },
  gray: {
    bg: 'var(--gray-100)',
    fg: 'var(--gray-700)',
    border: 'var(--gray-300)'
  },
  solid: {
    bg: 'var(--standex-blue)',
    fg: 'var(--standex-white)',
    border: 'var(--standex-blue)'
  },
  inverse: {
    bg: 'rgba(255,255,255,.14)',
    fg: 'var(--standex-white)',
    border: 'var(--border-on-dark)'
  }
};
function Badge({
  tone = 'blue',
  size = 'md',
  uppercase = true,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: size === 'sm' ? 22 : 26,
      padding: size === 'sm' ? '0 8px' : '0 10px',
      background: t.bg,
      color: t.fg,
      border: `1px solid ${t.border}`,
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-family-core)',
      fontSize: size === 'sm' ? 'var(--font-size-micro)' : 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: uppercase ? 'var(--letter-spacing-eyebrow)' : '0.02em',
      textTransform: uppercase ? 'uppercase' : 'none',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Material Symbols Sharp ligature icon font (loaded by tokens/fonts.css).
   This is a documented substitution — Standex supplied no icon set. */
function Icon({
  name,
  size = 20,
  weight = 400,
  fill = 0,
  color = 'currentColor',
  style,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `standex-icon ${className}`,
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-family-icon)',
      fontWeight: weight,
      fontSize: size,
      lineHeight: 1,
      color,
      display: 'inline-flex',
      flex: '0 0 auto',
      userSelect: 'none',
      fontVariationSettings: `'FILL' ${fill}, 'wght' ${weight}, 'GRAD' 0, 'opsz' ${size}`,
      ...style
    }
  }, rest), name);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HEIGHTS = {
  sm: 'var(--button-height-sm)',
  md: 'var(--button-height)',
  lg: 'var(--button-height-lg)'
};
const PADS = {
  sm: '0 22px',
  md: '0 var(--button-padding-x)',
  lg: '0 40px'
};
const SIZES = {
  sm: 'var(--font-size-body-sm)',
  md: 'var(--font-size-body)',
  lg: 'var(--font-size-body-lg)'
};

/* Brand button spec (Brand Standards p.15): static = navy fill, hover = white
   fill with navy label and navy hairline, 33px corner radius. */
function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  disabled = false,
  onDark = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const skins = {
    primary: {
      base: {
        background: 'var(--button-primary-bg)',
        color: 'var(--button-primary-fg)',
        border: '1px solid var(--button-primary-bg)'
      },
      hover: {
        background: 'var(--button-primary-bg-hover)',
        color: 'var(--button-primary-fg-hover)',
        border: '1px solid var(--button-primary-border-hover)'
      }
    },
    secondary: {
      base: {
        background: 'transparent',
        color: 'var(--button-secondary-fg)',
        border: '1px solid var(--button-secondary-border)'
      },
      hover: {
        background: 'var(--button-primary-bg)',
        color: 'var(--standex-white)',
        border: '1px solid var(--button-primary-bg)'
      }
    },
    accent: {
      base: {
        background: 'var(--standex-green)',
        color: 'var(--standex-white)',
        border: '1px solid var(--standex-green)'
      },
      hover: {
        background: 'var(--green-600)',
        color: 'var(--standex-white)',
        border: '1px solid var(--green-600)'
      }
    },
    ghost: {
      base: {
        background: 'transparent',
        color: 'var(--text-link)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--surface-subtle)',
        color: 'var(--text-link)',
        border: '1px solid transparent'
      }
    },
    inverse: {
      base: {
        background: 'var(--standex-white)',
        color: 'var(--blue-600)',
        border: '1px solid var(--standex-white)'
      },
      hover: {
        background: 'transparent',
        color: 'var(--standex-white)',
        border: '1px solid var(--standex-white)'
      }
    }
  };
  const skin = skins[variant] || skins.primary;
  const onDarkSecondary = onDark && variant === 'secondary' ? {
    base: {
      background: 'transparent',
      color: 'var(--standex-white)',
      border: '1px solid var(--border-on-dark)'
    },
    hover: {
      background: 'var(--standex-white)',
      color: 'var(--blue-600)',
      border: '1px solid var(--standex-white)'
    }
  } : null;
  const s = onDarkSecondary || skin;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      height: HEIGHTS[size],
      padding: PADS[size],
      borderRadius: 'var(--radius-button)',
      fontFamily: 'var(--font-family-core)',
      fontSize: SIZES[size],
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-button)',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: active && !disabled ? 'translateY(1px)' : 'none',
      transition: 'var(--transition-control), transform var(--duration-instant) var(--easing-standard)',
      ...(hover && !disabled ? s.hover : s.base),
      ...style
    }
  }, rest), icon && iconPosition === 'left' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 18 : 20
  }), /*#__PURE__*/React.createElement("span", null, children), icon && iconPosition === 'right' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 18 : 20
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOXES = {
  sm: 36,
  md: 44,
  lg: 52
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'circle',
  disabled = false,
  onDark = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const box = BOXES[size];
  const skins = {
    solid: {
      bg: 'var(--button-primary-bg)',
      fg: 'var(--button-primary-fg)',
      border: 'var(--button-primary-bg)',
      bgHover: 'var(--button-primary-bg-active)',
      fgHover: 'var(--button-primary-fg)'
    },
    outline: {
      bg: 'transparent',
      fg: 'var(--button-secondary-fg)',
      border: 'var(--button-secondary-border)',
      bgHover: 'var(--button-primary-bg)',
      fgHover: 'var(--button-primary-fg)'
    },
    ghost: {
      bg: 'transparent',
      fg: onDark ? 'var(--text-on-dark)' : 'var(--button-secondary-fg)',
      border: 'transparent',
      bgHover: onDark ? 'rgba(255,255,255,.14)' : 'var(--surface-subtle)',
      fgHover: onDark ? 'var(--text-on-dark)' : 'var(--button-secondary-fg)'
    }
  };
  const s = skins[variant] || skins.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: box,
      height: box,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: shape === 'circle' ? 'var(--radius-pill)' : 'var(--radius-sm)',
      background: hover && !disabled ? s.bgHover : s.bg,
      color: hover && !disabled ? s.fgHover : s.fg,
      border: `1px solid ${s.border}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 18 : size === 'lg' ? 24 : 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Supplied logo artwork. Each entry lists the file per colour treatment plus the
   artwork aspect ratio, so a caller only ever sets a height.
   Divisional lockups ship as two files — full colour (RGB) and reversed (for dark
   fields) — so 'blue' and 'gray' both resolve to the full-colour file. */
const FILES = {
  wordmark: {
    blue: 'logo-standex-blue.svg',
    gray: 'logo-standex-gray.svg',
    white: 'logo-standex-white.svg',
    ratio: 1182.938 / 319.93
  },
  block: {
    blue: 's-block-blue.svg',
    gray: 's-block-gray.svg',
    white: 's-block-white.svg',
    ratio: 413.699 / 388.403
  },
  'block-reversed': {
    blue: 's-block-reversed.svg',
    gray: 's-block-reversed.svg',
    white: 's-block-reversed.svg',
    ratio: 298.42 / 291.91
  },
  electronics: {
    blue: 'lockup-electronics.svg',
    gray: 'lockup-electronics.svg',
    white: 'lockup-electronics-reversed.svg',
    ratio: 814.34 / 195.78
  },
  'electronics-stacked': {
    blue: 'lockup-electronics-stacked-blue.svg',
    gray: 'lockup-electronics-stacked-gray.svg',
    white: 'lockup-electronics-stacked-white.svg',
    ratio: 816.456 / 311.065
  },
  'electronics-block': {
    blue: 's-block-electronics.svg',
    gray: 's-block-electronics.svg',
    white: 's-block-electronics-reversed.svg',
    ratio: 298.42 / 290.82
  },
  edge: {
    blue: 'lockup-edge.svg',
    gray: 'lockup-edge.svg',
    white: 'lockup-edge-reversed.svg',
    ratio: 814.34 / 195.78
  },
  grid: {
    blue: 'lockup-grid.svg',
    gray: 'lockup-grid.svg',
    white: 'lockup-grid-reversed.svg',
    ratio: 814.34 / 195.78
  },
  trustmark: {
    blue: 'trustmark-footer.svg',
    gray: 'trustmark-footer.svg',
    white: 'trustmark-footer.svg',
    ratio: 1468.7 / 225.93
  }
};
const LABELS = {
  wordmark: 'Standex',
  block: 'Standex',
  'block-reversed': 'Standex',
  electronics: 'Standex Electronics',
  'electronics-stacked': 'Standex Electronics',
  'electronics-block': 'Standex Electronics',
  edge: 'Standex Edge',
  grid: 'Standex Grid',
  trustmark: 'A Standex Company'
};

/* Tracks <html data-theme> so color="auto" re-renders when the theme flips. */
function useThemeIsDark() {
  const [dark, setDark] = React.useState(typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark');
  React.useEffect(() => {
    const el = document.documentElement;
    const read = () => setDark(el.getAttribute('data-theme') === 'dark');
    read();
    const obs = new MutationObserver(read);
    obs.observe(el, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
    return () => obs.disconnect();
  }, []);
  return dark;
}

/* One-colour logo only: Standex Blue, Gray, or White. Never recolour,
   compress, outline, or place inside a shape (Brand Standards p.6). */
function Logo({
  variant = 'wordmark',
  color = 'auto',
  onDark = false,
  height = 40,
  assetBase = 'assets',
  descriptor,
  style,
  ...rest
}) {
  const set = FILES[variant] || FILES.wordmark;
  const isDark = useThemeIsDark();
  /* Any dark field — a navy section, a photo, a scrim — takes the white artwork.
     onDark wins over the theme, because a navy band stays navy in light mode too. */
  if (onDark) color = 'white';else if (color === 'auto') color = isDark ? 'white' : 'blue';
  const src = `${assetBase.replace(/\/$/, '')}/${set[color] || set.blue}`;
  const tone = color === 'white' ? 'var(--standex-white)' : color === 'gray' ? 'var(--standex-gray)' : 'var(--text-heading)';
  const img = /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: LABELS[variant] || 'Standex',
    style: {
      height,
      width: Math.round(height * set.ratio),
      display: 'block',
      flexShrink: 0
    }
  });
  if (!descriptor) return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexShrink: 0,
      ...style
    }
  }, rest), img);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexShrink: 0,
      flexDirection: 'column',
      gap: Math.max(4, height * 0.14),
      ...style
    }
  }, rest), img, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-family-core)',
      fontWeight: 'var(--font-weight-semibold)',
      fontSize: Math.round(height * 0.5),
      letterSpacing: '0.02em',
      color: tone,
      lineHeight: 1
    }
  }, descriptor));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Interactive filter chip — used for product/market filters. */
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = selected ? 'var(--control-accent)' : hover && !disabled ? 'var(--surface-subtle)' : 'var(--field-bg)';
  const fg = selected ? 'var(--surface-page)' : 'var(--text-link)';
  return /*#__PURE__*/React.createElement("span", _extends({
    role: onClick ? 'button' : undefined,
    tabIndex: onClick && !disabled ? 0 : undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 32,
      padding: onRemove ? '0 8px 0 12px' : '0 14px',
      background: bg,
      color: fg,
      border: `1px solid ${selected ? 'var(--control-accent)' : 'var(--field-border)'}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body-sm)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 1,
      cursor: disabled ? 'not-allowed' : onClick ? 'pointer' : 'default',
      opacity: disabled ? 0.45 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: ev => {
      ev.stopPropagation();
      onRemove(ev);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: 0.8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "close",
    size: 16
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Sets data-theme on <html>, remembers the choice, and honours the OS
   preference on first load. Light is the brand default. */
function ThemeToggle({
  onDark = false,
  size = 'md',
  storageKey = 'standex-theme',
  ...rest
}) {
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => {
    let initial = null;
    try {
      initial = window.localStorage.getItem(storageKey);
    } catch (e) {/* storage blocked */}
    if (!initial && typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches) initial = 'dark';
    apply(initial || 'light');
  }, []);
  function apply(next) {
    setTheme(next);
    if (typeof document !== 'undefined') {
      if (next === 'dark') document.documentElement.setAttribute('data-theme', 'dark');else document.documentElement.removeAttribute('data-theme');
    }
    try {
      window.localStorage.setItem(storageKey, next);
    } catch (e) {/* storage blocked */}
  }
  return /*#__PURE__*/React.createElement(__ds_scope.IconButton, _extends({
    icon: theme === 'dark' ? 'light_mode' : 'dark_mode',
    label: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
    onDark: onDark,
    size: size,
    onClick: () => apply(theme === 'dark' ? 'light' : 'dark')
  }, rest));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  eyebrow,
  width = 640,
  onClose,
  footer,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-6)',
      background: 'var(--surface-overlay)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: width,
      maxHeight: '100%',
      overflow: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-lg)',
      borderTop: 'var(--border-width-rule) solid var(--border-strong)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      padding: 'var(--space-6) var(--space-6) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--font-size-h3)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--text-heading)',
      lineHeight: 'var(--line-height-heading)'
    }
  }, title)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-5) var(--space-6)',
      fontSize: 'var(--font-size-body)',
      lineHeight: 'var(--line-height-body)',
      color: 'var(--text-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      padding: '0 var(--space-6) var(--space-6)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: {
    accent: 'var(--standex-aqua)',
    icon: 'info'
  },
  success: {
    accent: 'var(--standex-green)',
    icon: 'check_circle'
  },
  warning: {
    accent: 'var(--status-warning)',
    icon: 'warning'
  },
  danger: {
    accent: 'var(--status-danger)',
    icon: 'error'
  }
};
function Toast({
  tone = 'info',
  title,
  message,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.info;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      maxWidth: 460,
      padding: 'var(--space-4)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderLeft: `var(--border-width-rule) solid ${t.accent}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-family-core)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 22,
    fill: 1,
    color: t.accent
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      flex: '1 1 auto'
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-body-sm)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-body-sm)',
      lineHeight: 1.45,
      color: 'var(--text-body)'
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "close",
    label: "Dismiss",
    size: "sm",
    onClick: onDismiss
  }));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  placement = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, rest), children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 40,
      padding: '6px 10px',
      whiteSpace: 'nowrap',
      background: 'var(--tooltip-bg)',
      color: 'var(--tooltip-fg)',
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--shadow-sm)',
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-caption)',
      lineHeight: 1.3,
      pointerEvents: 'none'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: 2,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isOn ? 'var(--control-accent)' : 'var(--field-bg)',
      border: `1px solid ${isOn ? 'var(--control-accent)' : 'var(--field-border)'}`,
      borderRadius: 'var(--radius-xs)',
      color: 'var(--surface-page)',
      transition: 'var(--transition-control)'
    }
  }, isOn && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    weight: 600
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body-sm)',
      lineHeight: 1.45,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FormField({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body-sm)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--status-danger)',
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-caption)',
      color: error ? 'var(--status-danger)' : 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, error || hint));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  size = 'md',
  invalid = false,
  icon,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 40 : size === 'lg' ? 56 : 48;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      display: 'flex',
      color: 'var(--text-subtle)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: h,
      padding: icon ? '0 14px 0 44px' : '0 14px',
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body)',
      color: 'var(--field-text)',
      background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
      border: `1px solid ${invalid ? 'var(--status-danger)' : focus ? 'var(--field-border-focus)' : 'var(--field-border)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      marginTop: 2,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--field-bg)',
      border: `1px solid ${checked ? 'var(--control-accent)' : 'var(--field-border)'}`,
      transition: 'var(--transition-control)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--control-accent)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body-sm)',
      lineHeight: 1.45,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  size = 'md',
  invalid = false,
  disabled = false,
  value,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 40 : size === 'lg' ? 56 : 48;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled
  }, value !== undefined ? {
    value
  } : {
    defaultValue: ''
  }, {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: h,
      padding: '0 42px 0 14px',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body)',
      color: 'var(--field-text)',
      background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
      border: `1px solid ${invalid ? 'var(--status-danger)' : focus ? 'var(--field-border-focus)' : 'var(--field-border)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 12,
      display: 'flex',
      color: 'var(--control-accent)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "expand_more",
    size: 22
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInner(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      width: 46,
      height: 26,
      flex: '0 0 auto',
      padding: 3,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: isOn ? 'flex-end' : 'flex-start',
      background: isOn ? 'var(--control-accent)' : 'var(--control-track)',
      borderRadius: 'var(--radius-pill)',
      transition: 'background-color var(--duration-base) var(--easing-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--control-knob)',
      boxShadow: 'var(--shadow-xs)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body-sm)',
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      padding: '12px 14px',
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body)',
      lineHeight: 'var(--line-height-body)',
      color: 'var(--field-text)',
      background: disabled ? 'var(--field-bg-disabled)' : 'var(--field-bg)',
      border: `1px solid ${invalid ? 'var(--status-danger)' : focus ? 'var(--field-border-focus)' : 'var(--field-border)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      outline: 'none',
      resize: 'vertical',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = id => setOpen(cur => cur.includes(id) ? cur.filter(x => x !== id) : allowMultiple ? [...cur, id] : [id]);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), items.map(item => {
    const on = open.includes(item.id);
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      style: {
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(item.id),
      "aria-expanded": on,
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '18px 4px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-family-core)',
        fontSize: 'var(--font-size-h5)',
        fontWeight: 'var(--font-weight-semibold)',
        color: 'var(--text-heading)'
      }
    }, item.title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "expand_more",
      size: 24,
      color: "var(--control-accent)",
      style: {
        transform: on ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--duration-base) var(--easing-standard)'
      }
    })), on && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 4px 22px',
        fontSize: 'var(--font-size-body)',
        lineHeight: 'var(--line-height-body)',
        color: 'var(--text-body)',
        maxWidth: 760
      }
    }, item.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/layout/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumb({
  items = [],
  onDark = false,
  style,
  ...rest
}) {
  const dim = onDark ? 'rgba(255,255,255,.72)' : 'var(--text-muted)';
  const strong = onDark ? 'var(--standex-white)' : 'var(--text-heading)';
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 6,
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-caption)',
      ...style
    }
  }, rest), items.map((item, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, last || !item.href ? /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? strong : dim,
        fontWeight: last ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)'
      }
    }, item.label) : /*#__PURE__*/React.createElement("a", {
      href: item.href,
      style: {
        color: dim,
        textDecoration: 'none'
      }
    }, item.label), !last && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron_right",
      size: 16,
      color: dim
    }));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SKINS = {
  plain: {
    background: 'var(--surface-card)',
    color: 'var(--text-body)',
    border: '1px solid var(--border-subtle)'
  },
  subtle: {
    background: 'var(--surface-card-subtle)',
    color: 'var(--text-body)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-dark-muted)',
    border: '1px solid var(--surface-inverse)'
  },
  accent: {
    background: 'var(--surface-accent)',
    color: 'var(--text-on-dark-muted)',
    border: '1px solid var(--surface-accent)'
  }
};

/* Square-cornered panel with a hairline border. Standex cards do not float:
   elevation appears only on hover for interactive cards. */
function Card({
  variant = 'plain',
  interactive = false,
  href,
  eyebrow,
  title,
  body,
  cta,
  icon,
  accentRule = false,
  image,
  imageHeight = 200,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const skin = SKINS[variant] || SKINS.plain;
  const dark = variant === 'inverse' || variant === 'accent';
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      textDecoration: 'none',
      borderTop: accentRule ? 'var(--border-width-rule) solid var(--rule-accent)' : undefined,
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-none)',
      transform: interactive && hover ? 'translateY(-2px)' : 'none',
      cursor: href || interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--duration-base) var(--easing-standard), transform var(--duration-base) var(--easing-standard), border-color var(--duration-base) var(--easing-standard)',
      ...skin,
      ...(interactive && hover && !dark ? {
        borderColor: 'var(--border-strong)'
      } : null),
      ...style
    }
  }, rest), image && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: imageHeight,
      background: 'var(--surface-subtle)',
      overflow: 'hidden',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: interactive && hover ? 'scale(1.03)' : 'none',
      transition: 'transform var(--duration-slow) var(--easing-standard)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: 'var(--space-6)',
      flex: '1 1 auto'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 32,
    color: dark ? 'var(--surface-page)' : 'var(--text-heading)'
  }), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-eyebrow)',
      textTransform: 'uppercase',
      color: dark ? 'var(--surface-page)' : 'var(--text-accent)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-h4)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-heading)',
      letterSpacing: 'var(--letter-spacing-heading)',
      color: dark ? 'var(--surface-page)' : 'var(--text-heading)'
    }
  }, title), body && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-body-sm)',
      lineHeight: 'var(--line-height-body)'
    }
  }, body), children, cta && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-4)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--font-size-body-sm)',
      fontWeight: 'var(--font-weight-semibold)',
      color: dark ? 'var(--surface-page)' : 'var(--text-link)'
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow_forward",
    size: 18,
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--duration-base) var(--easing-standard)'
    }
  }))));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  onDark = false,
  level = 2,
  maxWidth = 720,
  style,
  ...rest
}) {
  const Tag = `h${level}`;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-accent)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-h2)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-heading)',
      letterSpacing: 'var(--letter-spacing-heading)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, title), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 'var(--line-height-body)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-body)'
    }
  }, body));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/layout/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  icon,
  onDark = false,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    color: onDark ? 'var(--text-on-dark)' : 'var(--text-accent)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-h1)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 1,
      letterSpacing: 'var(--letter-spacing-heading)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-heading)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body-sm)',
      lineHeight: 1.4,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/layout/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  onDark = false,
  style,
  ...rest
}) {
  const [inner, setInner] = React.useState(defaultValue ?? (items[0] && items[0].id));
  const active = value !== undefined ? value : inner;
  const pick = id => {
    if (value === undefined) setInner(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: `1px solid ${onDark ? 'var(--border-on-dark)' : 'var(--border-subtle)'}`,
      ...style
    }
  }, rest), items.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => pick(t.id),
      style: {
        appearance: 'none',
        background: 'none',
        cursor: 'pointer',
        padding: '0 0 12px',
        border: 'none',
        borderBottom: `var(--border-width-thick) solid ${on ? onDark ? 'var(--text-on-dark)' : 'var(--border-strong)' : 'transparent'}`,
        marginBottom: -1,
        fontFamily: 'var(--font-family-core)',
        fontSize: 'var(--font-size-body)',
        fontWeight: on ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
        color: on ? onDark ? 'var(--text-on-dark)' : 'var(--text-heading)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
        transition: 'var(--transition-control)'
      }
    }, t.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/CorpBusinesses.jsx
try { (() => {
const SECTION = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--space-8)'
};
const SEGMENTS = {
  electronics: {
    label: 'Electronics',
    lede: 'Reed switch-based sensor solutions and electro-magnetic components.',
    body: 'From powering the pour of your morning coffee to running your washing machine and improving the efficiency of your car parts, our electronic components empower daily activities and support the safety of essential equipment. Our portfolio includes magnetic reed switches, reed relays, and reed sensors — fluid level, proximity, motion, water flow, HVAC condensate and hydraulic pressure differential.',
    units: ['Standex Detect', 'Standex Edge', 'Standex Grid']
  },
  scientific: {
    label: 'Scientific',
    lede: 'Scientific refrigeration for the life sciences.',
    body: 'Temperature-controlled storage for laboratory, clinical, and pharmaceutical environments — including vaccine refrigeration and cryogenic storage.',
    units: ['Cryosafe', 'Corepoint Scientific']
  },
  engraving: {
    label: 'Engraving & Hydraulics',
    lede: 'Custom textures and surface finishes on tooling.',
    body: 'The Engraving business creates custom textures and surface finishes on tooling to enhance the beauty and function of a wide range of consumer goods and automotive products, from bespoke texture design through engraving, enhancing and polishing, to on-site try-out support. The Hydraulics business manufactures engineered hydraulic cylinders from the U.S. and China.',
    units: ['Standex Engraving Mold-Tech', 'Custom Hoists']
  },
  aerospace: {
    label: 'Aerospace & Defense',
    lede: 'Cutting-edge forming technologies for aviation, space and defense.',
    body: 'Inventing and producing parts for next-generation space vehicles, with deep metal forming expertise across spin forming, hot forming, and precision fabrication.',
    units: ['Spincraft', 'McStarlite', 'GS Engineering']
  }
};
function CorpBusinesses() {
  const [tab, setTab] = React.useState('electronics');
  const seg = SEGMENTS[tab];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--standex-blue)',
      padding: 'var(--space-10) 0 var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    onDark: true,
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Our Businesses'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    onDark: true,
    level: 1,
    eyebrow: "Our Businesses",
    title: "Four segments. One operating company.",
    body: "Standex is organised into twelve operating business units aggregated into four reporting segments, led from our corporate headquarters in Salem, New Hampshire.",
    maxWidth: 840
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y-compact) 0 var(--section-padding-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(__ds_scope.Tabs, {
    value: tab,
    onChange: setTab,
    items: Object.entries(SEGMENTS).map(([id, s]) => ({
      id,
      label: s.label
    }))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-16)',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--font-size-h4)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--text-heading)',
      lineHeight: 'var(--line-height-snug)'
    }
  }, seg.lede), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--font-size-body)',
      lineHeight: 'var(--line-height-body)'
    }
  }, seg.body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "arrow_forward"
  }, "Visit the ", seg.label, " site"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--standex-green)'
    }
  }, "Business units"), seg.units.map(u => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: u,
    variant: "subtle",
    title: u,
    style: {
      padding: 0
    }
  })))))));
}
Object.assign(__ds_scope, { CorpBusinesses });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/CorpBusinesses.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/CorpContact.jsx
try { (() => {
const SECTION = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--space-8)'
};
function CorpContact() {
  const [sent, setSent] = React.useState(false);
  const [consent, setConsent] = React.useState(false);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      padding: 'var(--space-10) 0 var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Contact Us'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 1,
    eyebrow: "Contact",
    title: "Contact Standex",
    body: "Reach out and our team will connect you with the right resource."
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y-compact) 0 var(--section-padding-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 var(--space-6)',
      fontSize: 'var(--font-size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "\"*\" indicates required fields"), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Toast, {
    tone: "success",
    title: "Request received",
    message: "A Standex representative will reply within one business day.",
    onDismiss: () => setSent(false)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "First Name",
    htmlFor: "fn",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "fn"
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Last Name",
    htmlFor: "ln",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "ln"
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Company Name",
    htmlFor: "co"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "co"
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Job Title",
    htmlFor: "jt"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "jt"
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Email",
    htmlFor: "em",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "em",
    type: "email",
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Telephone",
    htmlFor: "tel",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    id: "tel",
    type: "tel"
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Country",
    htmlFor: "cn",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    id: "cn",
    placeholder: "Select a Country",
    options: ['United States', 'Germany', 'Japan', 'China', 'Mexico', 'India', 'Turkey', 'Canada', 'Singapore']
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Segment of interest",
    htmlFor: "sg",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    id: "sg",
    placeholder: "Select a Segment",
    options: ['Electronics', 'Scientific', 'Engraving & Hydraulics', 'Aerospace & Defense']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Application / Notes",
    htmlFor: "nt"
  }, /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    id: "nt",
    rows: 4
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: consent,
    onChange: setConsent,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Agree and consent to the use of my information as described in the ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault()
    }, "Privacy Policy"), ".")
  }), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Subscribe to our newsletter"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "arrow_forward",
    disabled: !consent,
    onClick: () => setSent(true)
  }, "Submit"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "inverse",
    icon: "place",
    title: "Corporate Headquarters",
    body: /*#__PURE__*/React.createElement(React.Fragment, null, "23 Keewaydin Drive, Suite 300", /*#__PURE__*/React.createElement("br", null), "Salem, NH 03079", /*#__PURE__*/React.createElement("br", null), "United States")
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "subtle",
    icon: "call",
    title: "Tel: (603) 893-9701",
    body: "Fax: (603) 893-7324"
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    href: "#",
    variant: "plain",
    icon: "work",
    title: "Careers",
    body: "Bring your talents to our growing global company.",
    cta: "Careers Portal"
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    href: "#",
    variant: "plain",
    icon: "show_chart",
    title: "Investors",
    body: "Quarterly results, filings and stock information.",
    cta: "Investors Portal"
  })))));
}
Object.assign(__ds_scope, { CorpContact });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/CorpContact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/CorpFooter.jsx
try { (() => {
function CorpFooter({
  assetBase = '../../assets'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--standex-blue)',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--space-8) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    onDark: true,
    style: {
      flexShrink: 0
    },
    height: 30,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--font-size-body-sm)',
      lineHeight: 1.7
    }
  }, "Standex International Corporation", /*#__PURE__*/React.createElement("br", null), "23 Keewaydin Drive", /*#__PURE__*/React.createElement("br", null), "Salem, NH 03079", /*#__PURE__*/React.createElement("br", null), "Tel: (603) 893-9701", /*#__PURE__*/React.createElement("br", null), "Fax: (603) 893-7324")), [{
    h: 'Segments',
    links: ['Electronics', 'Scientific', 'Engraving & Hydraulics', 'Aerospace & Defense']
  }, {
    h: 'Company',
    links: ['About Us', 'Careers', 'Sustainability', 'Community']
  }, {
    h: 'Investors',
    links: ['For Investors', 'News', 'SEC Filings', 'Stock Information']
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--standex-white)',
      marginBottom: 'var(--space-4)'
    }
  }, col.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--font-size-body-sm)',
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-8) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      paddingTop: 'var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-caption)'
    }
  }, "\xA9Copyright 1998\u20132026 Standex International Corporation. All Rights Reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginLeft: 'auto'
    }
  }, ['Legal', 'Copyright', 'Privacy Policy', 'Do not sell my personal information'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--font-size-caption)',
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "link",
    size: 18,
    color: "var(--standex-white)"
  })))));
}
Object.assign(__ds_scope, { CorpFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/CorpFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/CorpHeader.jsx
try { (() => {
const NAV = [{
  label: 'Who We Are',
  children: ['About Us', 'Community', 'DEI']
}, {
  label: 'Our Businesses'
}, {
  label: 'Careers',
  children: ['EEO Policy and DOL Posters']
}, {
  label: 'Investors',
  children: ['For Investors', 'News']
}, {
  label: 'Sustainability',
  children: ['Sustainability', 'Environment', 'Social', 'Governance']
}];
function CorpHeader({
  assetBase = '../../assets',
  onNavigate
}) {
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-subtle)'
    },
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-8)',
      minHeight: 84,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    color: "auto",
    height: 34,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      columnGap: 'var(--space-5)',
      rowGap: 'var(--space-2)',
      marginLeft: 'auto',
      flex: '1 1 auto',
      minWidth: 0,
      paddingBlock: 'var(--space-3)'
    }
  }, NAV.map(item => /*#__PURE__*/React.createElement("span", {
    key: item.label,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setOpen(item.children ? item.label : null)
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate && onNavigate(item.label === 'Our Businesses' ? 'businesses' : 'home'),
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '30px 0',
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body-sm)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: '.01em',
      color: open === item.label ? 'var(--standex-blue)' : 'var(--gray-600)',
      borderBottom: `var(--border-width-thick) solid ${open === item.label ? 'var(--standex-green)' : 'transparent'}`,
      transition: 'var(--transition-control)'
    }
  }, item.label), open === item.label && item.children && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -16,
      minWidth: 220,
      background: 'var(--standex-white)',
      border: '1px solid var(--border-subtle)',
      borderTop: 'var(--border-width-thick) solid var(--standex-blue)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-2) 0',
      display: 'flex',
      flexDirection: 'column'
    }
  }, item.children.map(c => /*#__PURE__*/React.createElement("a", {
    key: c,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      padding: '10px 16px',
      fontSize: 'var(--font-size-body-sm)',
      color: 'var(--gray-600)',
      textDecoration: 'none'
    }
  }, c))))), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "search",
    label: "Search"
  }), /*#__PURE__*/React.createElement(__ds_scope.ThemeToggle, null), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: () => onNavigate && onNavigate('contact')
  }, "Contact Us"))));
}
Object.assign(__ds_scope, { CorpHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/CorpHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/CorpHome.jsx
try { (() => {
const SECTION = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--space-8)'
};
function CorpHome({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--blue-800)',
      color: 'var(--standex-white)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(115deg,var(--blue-800) 0%,var(--aqua-600) 62%,var(--aqua-500) 100%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-left)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      position: 'relative',
      paddingTop: 128,
      paddingBottom: 128
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'var(--font-size-display-1)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-tight)',
      letterSpacing: 'var(--letter-spacing-display)',
      color: 'var(--standex-white)',
      maxWidth: 620
    }
  }, "Partners in Progress"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      maxWidth: 620,
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 'var(--line-height-body)',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Every day, we connect people, products and technologies to help create what's next. Our businesses provide vital inputs to propel critical industries to address some of the world's most compelling needs."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse",
    icon: "arrow_forward",
    onClick: () => onNavigate && onNavigate('businesses')
  }, "About Standex"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onDark: true,
    icon: "play_circle",
    iconPosition: "left"
  }, "Watch now"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderTop: '1px solid var(--border-on-dark)',
      background: 'rgba(17,30,46,.45)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      padding: '14px var(--space-8)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 'var(--font-size-body-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "play_circle",
    size: 20,
    color: "var(--standex-white)"
  }), /*#__PURE__*/React.createElement("span", null, "Learn how Standex enhances everyday life."), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--standex-white)',
      fontWeight: 'var(--font-weight-semibold)'
    }
  }, "Watch now \xBB")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Who We Are",
    title: "Meet Standex",
    body: "We are a global industrial growth company operating through our market-leading brands in electronics, cutting-edge forming technologies, engraving and scientific refrigeration. We work with our customers to advance progress through innovation.",
    maxWidth: 860
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    href: "#",
    title: "The Standex Story",
    body: "A traditional New England beginning led us to a legacy of acquiring a robust range of businesses.",
    cta: "About Standex"
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    href: "#",
    title: "Our Values",
    body: "We collaborate to solve problems and support growth.",
    cta: "Our Values"
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    href: "#",
    title: "Community & Leadership",
    body: "Our leadership is focused on accountability, innovation, integrity and teamwork.",
    cta: "Community"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--standex-blue)',
      padding: 'var(--section-padding-y-compact) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 760,
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 'var(--line-height-body)',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Proudly working with leading global brands, our products contribute to their cutting-edge innovations that shape the present and future."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 'var(--space-6)',
      marginTop: 'var(--space-10)'
    }
  }, ['Airbus', 'Toyota', 'GM', 'Volkswagen', 'GE Appliances', 'Rockwell Automation', 'Artemis', "Casey's", 'Whirlpool', 'Siemens', 'Bosch', 'Honeywell'].map(b => /*#__PURE__*/React.createElement("span", {
    key: b,
    style: {
      height: 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--border-on-dark)',
      color: 'var(--text-on-dark-muted)',
      fontSize: 'var(--font-size-caption)',
      letterSpacing: '.04em',
      textAlign: 'center',
      padding: '0 8px'
    }
  }, b))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontSize: 'var(--font-size-micro)',
      color: 'rgba(255,255,255,.5)'
    }
  }, "Placeholder cells \u2014 customer logo artwork is not part of the supplied brand package."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Investors",
    title: "Invest With Us",
    body: "Founded in 1955, Standex International has successfully navigated many market and economic cycles. Standex joined the New York Stock Exchange in 1965 (NYSE: SXI), and today is one of only 10% of companies listed in 1965 still listed today."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    icon: "arrow_forward"
  }, "Investors Portal"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Careers",
    title: "Grow With Us",
    body: "We put people first. Our problem-solving culture and the people at the heart of it are what make Standex a great place to work, grow and thrive. Here, each individual plays a key role and everyone makes a difference."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    icon: "arrow_forward"
  }, "Careers Portal")))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      marginTop: 'var(--space-16)',
      display: 'flex',
      gap: 'var(--space-16)',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-10)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatBlock, {
    icon: "public",
    value: "1955",
    label: "Founded in Salem, New Hampshire"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatBlock, {
    icon: "show_chart",
    value: "NYSE: SXI",
    label: "Listed since 1965"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatBlock, {
    icon: "groups",
    value: "3,800",
    label: "Employees worldwide"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatBlock, {
    icon: "factory",
    value: "4",
    label: "Reporting segments"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      padding: 'var(--section-padding-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Sustainability",
    title: "Our Responsibilities",
    body: "We aspire to make and keep compelling promises to all stakeholders \u2014 our customers, our employees, our shareholders, our communities and the broader world in which we live and work.",
    maxWidth: 860
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-10)'
    }
  }, [['eco', 'Environment', 'Monitoring site consumption and emissions.'], ['diversity_3', 'Social', 'Cultivating an environment of inclusivity.'], ['gavel', 'Governance', 'Accountability across every operating unit.'], ['volunteer_activism', 'Community', 'Supporting where we live and work.']].map(([i, t, b]) => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: t,
    variant: "plain",
    icon: i,
    title: t,
    body: b
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "arrow_forward"
  }, "Learn More")))));
}
Object.assign(__ds_scope, { CorpHome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/CorpHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-website/CorpApp.jsx
try { (() => {
function CorpApp({
  assetBase = '../../assets',
  initialScreen = 'home'
}) {
  const [screen, setScreen] = React.useState(initialScreen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CorpHeader, {
    assetBase: assetBase,
    onNavigate: setScreen
  }), screen === 'home' && /*#__PURE__*/React.createElement(__ds_scope.CorpHome, {
    onNavigate: setScreen
  }), screen === 'businesses' && /*#__PURE__*/React.createElement(__ds_scope.CorpBusinesses, null), screen === 'contact' && /*#__PURE__*/React.createElement(__ds_scope.CorpContact, null), /*#__PURE__*/React.createElement(__ds_scope.CorpFooter, {
    assetBase: assetBase
  }));
}
Object.assign(__ds_scope, { CorpApp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-website/CorpApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/electronics-website/ElecFooter.jsx
try { (() => {
const COLS = [{
  h: 'About',
  links: ['News', 'Locations', 'Contact Us']
}, {
  h: 'Resources',
  links: ['Trade Shows', 'Excellence', 'Responsibility']
}, {
  h: 'Quick Links',
  links: ['Request a Quote', 'Solutions', 'Products']
}, {
  h: 'Corporate',
  links: ['Standex Detect', 'Standex Edge', 'Standex Grid']
}];
function ElecFooter({
  assetBase = '../../assets'
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--standex-blue)',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-16) var(--space-8) var(--space-8)',
      display: 'grid',
      gridTemplateColumns: '1.5fr repeat(4,1fr)',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "electronics",
    onDark: true,
    style: {
      flexShrink: 0
    },
    height: 30,
    assetBase: assetBase
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-6)',
      fontSize: 'var(--font-size-body-sm)',
      lineHeight: 1.7
    }
  }, "Standex Electronics Headquarters", /*#__PURE__*/React.createElement("br", null), "4150 Thunderbird Lane", /*#__PURE__*/React.createElement("br", null), "Fairfield, OH 45014", /*#__PURE__*/React.createElement("br", null), "+1.866.782.6339"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)'
    }
  }, ['share', 'thumb_up', 'chat', 'smart_display'].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 34,
      height: 34,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: i,
    size: 18,
    color: "var(--standex-white)"
  }))))), COLS.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--standex-white)',
      marginBottom: 'var(--space-4)'
    }
  }, col.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--font-size-body-sm)',
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-8) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-dark)',
      paddingTop: 'var(--space-5)',
      display: 'flex',
      gap: 'var(--space-5)',
      flexWrap: 'wrap',
      fontSize: 'var(--font-size-caption)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Copyright 2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginLeft: 'auto'
    }
  }, ['Legal', 'Privacy Policy', 'Do Not Sell My Information', 'CCPA'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, l))))));
}
Object.assign(__ds_scope, { ElecFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/electronics-website/ElecFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/electronics-website/ElecHeader.jsx
try { (() => {
const NAV = [{
  id: 'capabilities',
  label: 'Our Capabilities',
  children: ['Custom Engineered Solutions', 'Products and Components']
}, {
  id: 'brands',
  label: 'Our Brands',
  children: ['Standex Detect', 'Standex Edge', 'Standex Grid']
}, {
  id: 'excellence',
  label: 'Engineering Excellence',
  children: ['Customer Intimacy', 'Why We Win', 'Customer Driven Innovation', 'Quality Standards', 'Global Site Certificates']
}, {
  id: 'responsibility',
  label: 'Responsibility',
  children: ['Corporate Governance', 'Sustainability', 'Social Responsibility']
}, {
  id: 'about',
  label: 'About Standex Electronics',
  children: ['Company History', 'Leadership Team', 'News', 'Office Locations', 'Careers', 'Contact Us']
}];
function ElecHeader({
  assetBase = '../../assets',
  onNavigate,
  onContact
}) {
  const [open, setOpen] = React.useState(null);
  const [search, setSearch] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--surface-page)',
      boxShadow: 'var(--shadow-xs)'
    },
    onMouseLeave: () => setOpen(null)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--blue-800)',
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-8)',
      height: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      fontSize: 'var(--font-size-caption)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "The Right Design, at the Right Time, at the Optimal Cost."), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, "standex.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "language",
    size: 16,
    color: "var(--standex-white)"
  }), "English (United States)"), /*#__PURE__*/React.createElement(__ds_scope.ThemeToggle, {
    onDark: true,
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--space-8)',
      minHeight: 88,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate('home');
    },
    style: {
      display: 'inline-flex',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "electronics",
    color: "auto",
    height: 34,
    assetBase: assetBase
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'flex-end',
      columnGap: 'var(--space-5)',
      rowGap: 'var(--space-2)',
      marginLeft: 'auto',
      flex: '1 1 auto',
      minWidth: 0,
      paddingBlock: 'var(--space-3)'
    }
  }, NAV.map(item => /*#__PURE__*/React.createElement("span", {
    key: item.id,
    style: {
      position: 'relative'
    },
    onMouseEnter: () => setOpen(item.id)
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate && onNavigate(item.id === 'capabilities' ? 'products' : 'home'),
    style: {
      appearance: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '10px 0',
      fontFamily: 'var(--font-family-core)',
      fontSize: 'var(--font-size-body-sm)',
      fontWeight: 'var(--font-weight-semibold)',
      color: open === item.id ? 'var(--standex-blue)' : 'var(--gray-600)',
      borderBottom: `var(--border-width-thick) solid ${open === item.id ? 'var(--standex-green)' : 'transparent'}`,
      transition: 'var(--transition-control)',
      whiteSpace: 'nowrap',
      textAlign: 'left'
    }
  }, item.label), open === item.id && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '100%',
      left: -16,
      minWidth: 260,
      background: 'var(--standex-white)',
      border: '1px solid var(--border-subtle)',
      borderTop: 'var(--border-width-thick) solid var(--standex-blue)',
      boxShadow: 'var(--shadow-md)',
      padding: 'var(--space-2) 0',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      padding: '10px 16px',
      fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--standex-green)',
      textDecoration: 'none'
    }
  }, "View all"), item.children.map(c => /*#__PURE__*/React.createElement("a", {
    key: c,
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (c === 'Products and Components') onNavigate && onNavigate('products');
    },
    style: {
      padding: '10px 16px',
      fontSize: 'var(--font-size-body-sm)',
      color: 'var(--gray-600)',
      textDecoration: 'none'
    }
  }, c))))), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: search ? 'close' : 'search',
    label: "Search",
    onClick: () => setSearch(!search)
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onContact
  }, "Contact Us"))), search && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    icon: "search",
    placeholder: "Search products, part numbers, and resources",
    autoFocus: true
  }))));
}
Object.assign(__ds_scope, { ElecHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/electronics-website/ElecHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/electronics-website/ElecHome.jsx
try { (() => {
const SECTION = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--space-8)'
};
const BRANDS = [{
  id: 'detect',
  name: 'Standex Detect',
  tint: 'var(--blue-700)',
  heading: 'Precision Switching and Sensing Technologies That Power a Smarter, Safer World',
  body: 'From reed switches to sensors and relays, Standex Detect delivers precision-engineered solutions trusted across automotive, industrial, and test applications.',
  cta: 'Explore Standex Detect'
}, {
  id: 'edge',
  name: 'Standex Edge',
  tint: 'var(--aqua-600)',
  heading: 'Powering Progress Through Custom Magnetics',
  body: 'Standex Edge delivers precision-engineered magnetics that drive performance and reliability across demanding applications — from planar transformers to inductors and chokes.',
  cta: 'Explore Standex Edge'
}, {
  id: 'grid',
  name: 'Standex Grid',
  tint: 'var(--green-600)',
  heading: 'Powering a Connected, Electrified Future',
  body: 'Standex Grid delivers precision-engineered transformer solutions that support energy infrastructure and utility applications worldwide, backed by decades of innovation from Amran and Narayan Powertech.',
  cta: 'Explore Standex Grid'
}];
const PROCESS = [['lightbulb', 'Innovate', 'Generate new ideas and concepts for evolving markets'], ['forum', 'Consult', "Listen closely to our customers' needs and requirements"], ['engineering', 'Engineer', 'Consult, create, and refine tangible, effective solutions'], ['local_shipping', 'Deliver', 'Ensure customer satisfaction with every solution']];
function ElecHome({
  onNavigate,
  onContact
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--blue-800)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(112deg,var(--blue-800) 0%,var(--blue-600) 48%,var(--aqua-500) 100%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-left)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      position: 'relative',
      paddingTop: 120,
      paddingBottom: 120,
      display: 'grid',
      gridTemplateColumns: '1.1fr .9fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-eyebrow)',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.72)'
    }
  }, "Standex Electronics"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 'var(--space-4) 0 0',
      fontSize: 'var(--font-size-display-1)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-tight)',
      letterSpacing: 'var(--letter-spacing-display)',
      color: 'var(--standex-white)'
    }
  }, "For When It Matters"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      fontSize: 'var(--font-size-h4)',
      fontStyle: 'italic',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--standex-white)'
    }
  }, "The Right Design, at the Right Time, at the Optimal Cost."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-5) 0 0',
      maxWidth: 620,
      fontSize: 'var(--font-size-body-lg)',
      lineHeight: 'var(--line-height-body)',
      color: 'var(--text-on-dark-muted)'
    }
  }, "At Standex Electronics, we deliver engineered solutions that perform when it matters most. As an extension of our customers' engineering teams, we collaborate closely to turn complex challenges into elegant, manufacturable designs."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-8)',
      display: 'flex',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "inverse",
    icon: "arrow_forward",
    onClick: () => onNavigate && onNavigate('products')
  }, "Browse Products"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onDark: true,
    icon: "play_circle",
    iconPosition: "left"
  }, "Play Video"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-3)'
    }
  }, ['sensors', 'bolt', 'memory', 'electric_meter'].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      aspectRatio: '1',
      border: '1px solid var(--border-on-dark)',
      background: 'rgba(255,255,255,.06)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: i,
    size: 58,
    color: "rgba(255,255,255,.55)"
  })))))), BRANDS.map((b, i) => /*#__PURE__*/React.createElement("section", {
    key: b.id,
    style: {
      background: i % 2 ? 'var(--surface-subtle)' : 'var(--surface-page)',
      padding: 'var(--section-padding-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: 'grid',
      gridTemplateColumns: i % 2 ? '1fr 1.1fr' : '1.1fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      order: i % 2 ? 2 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--standex-green)'
    }
  }, b.name), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 'var(--space-3) 0 0',
      fontSize: 'var(--font-size-h2)',
      fontWeight: 'var(--font-weight-semibold)',
      lineHeight: 'var(--line-height-heading)',
      letterSpacing: 'var(--letter-spacing-heading)',
      color: 'var(--text-heading)'
    }
  }, b.heading), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--space-4) 0 var(--space-8)',
      fontSize: 'var(--font-size-body)',
      lineHeight: 'var(--line-height-body)'
    }
  }, b.body), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    icon: "arrow_forward",
    onClick: () => onNavigate && onNavigate('products')
  }, b.cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      order: i % 2 ? 1 : 2,
      position: 'relative',
      aspectRatio: '16/10',
      background: b.tint,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-bottom)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      color: 'var(--standex-white)',
      fontSize: 'var(--font-size-body-sm)'
    }
  }, "Brand banner image \u2014 supply from the ", b.name, " media library"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--standex-blue)',
      padding: 'var(--section-padding-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    onDark: true,
    eyebrow: "Our Brands",
    title: "Global partner in precision-engineered electronic components",
    maxWidth: 820
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "plain",
    interactive: true,
    href: "#",
    eyebrow: "Standex Detect",
    title: "Sensors, relays and reed switches",
    body: "Precision sensor, relay, and reed switch solutions designed for automation, transportation, test and measurement, and energy applications.",
    cta: "Visit Standex Detect"
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "plain",
    interactive: true,
    href: "#",
    eyebrow: "Standex Edge",
    title: "Custom magnetics",
    body: "Custom magnetic components including transformers, inductors, and EMI components engineered for power conversion across industrial, medical, military and aerospace markets.",
    cta: "Visit Standex Edge"
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "plain",
    interactive: true,
    href: "#",
    eyebrow: "Standex Grid",
    title: "High-voltage transformers",
    body: "High-voltage and instrument transformer solutions supporting grid reliability, modernization, and efficient power delivery for global energy systems.",
    cta: "Visit Standex Grid"
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    href: "#",
    accentRule: true,
    variant: "subtle",
    title: "Custom Engineered Solutions",
    body: "Partner with Standex Electronics for fully tailored solutions designed to meet your exact performance, integration, and reliability needs.",
    cta: "Explore Solutions"
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    variant: "subtle",
    accentRule: true,
    title: "Products and Components",
    body: "Explore our portfolio of proven off-the-shelf components engineered for reliability, rapid availability, and seamless performance across industries.",
    cta: "Browse Products",
    onClick: () => onNavigate && onNavigate('products')
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      padding: 'var(--section-padding-y-compact) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StatBlock, {
    icon: "apartment",
    value: "Fairfield, OH",
    label: "Standex Electronics headquarters"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatBlock, {
    icon: "factory",
    value: "11",
    label: "Manufacturing facilities in seven countries"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatBlock, {
    icon: "hub",
    value: "3",
    label: "Brands: Detect, Edge, Grid"
  }), /*#__PURE__*/React.createElement(__ds_scope.StatBlock, {
    icon: "history",
    value: "1950s",
    label: "Delivering solutions through high-performing products"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "How We Work",
    title: "Innovate. Consult. Engineer. Deliver.",
    maxWidth: 700
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-10)'
    }
  }, PROCESS.map(([icon, t, b], idx) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: 'var(--border-width-rule) solid var(--standex-blue)',
      paddingTop: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 34,
    color: "var(--standex-aqua)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-caption)',
      color: 'var(--text-muted)',
      fontWeight: 'var(--font-weight-semibold)'
    }
  }, "0", idx + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-h4)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, t)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 'var(--font-size-body-sm)',
      lineHeight: 'var(--line-height-body)'
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      padding: 'var(--section-padding-y-compact) 0 var(--section-padding-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    title: "Contact Standex Electronics"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--gutter)',
      marginTop: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    icon: "help",
    title: "General Inquiries",
    body: "Have a question? Reach out and our team will connect you with the right resource.",
    cta: "Contact us",
    onClick: onContact
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    icon: "request_quote",
    title: "Request a Quote",
    body: "Looking for a solution? Talk with our sales team about products and capabilities.",
    cta: "Request a quote",
    onClick: onContact
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    icon: "place",
    title: "Office Locations",
    body: "Explore our global offices to connect with regional teams and access local support.",
    cta: "Find an office"
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    icon: "mail",
    title: "Newsletter",
    body: "Subscribe to stay informed about products, applications and events.",
    cta: "Subscribe",
    onClick: onContact
  })))));
}
Object.assign(__ds_scope, { ElecHome });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/electronics-website/ElecHome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/electronics-website/ElecParametric.jsx
try { (() => {
const SECTION = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--space-8)'
};
const PARTS = [{
  pn: 'MK33-1A66E-500W',
  form: 'Form A',
  at: '15–20',
  power: '10 W',
  voltage: '200 VDC',
  len: '10.5 mm',
  stock: 'In Stock'
}, {
  pn: 'KSK-1A66-1015',
  form: 'Form A',
  at: '10–15',
  power: '10 W',
  voltage: '200 VDC',
  len: '14.0 mm',
  stock: 'In Stock'
}, {
  pn: 'MK24-B-2',
  form: 'Form A',
  at: '20–25',
  power: '10 W',
  voltage: '200 VDC',
  len: '14.0 mm',
  stock: 'Lead time'
}, {
  pn: 'MK15-B-3',
  form: 'Form A',
  at: '15–20',
  power: '10 W',
  voltage: '175 VDC',
  len: '15.0 mm',
  stock: 'In Stock'
}, {
  pn: 'MK06-4-C',
  form: 'Form C',
  at: '25–30',
  power: '5 W',
  voltage: '150 VDC',
  len: '9.0 mm',
  stock: 'Lead time'
}, {
  pn: 'ORD324/24',
  form: 'Form A',
  at: '24–29',
  power: '10 W',
  voltage: '200 VDC',
  len: '19.0 mm',
  stock: 'In Stock'
}, {
  pn: 'MK16-B-2',
  form: 'Form A',
  at: '18–23',
  power: '10 W',
  voltage: '200 VDC',
  len: '15.5 mm',
  stock: 'In Stock'
}];
const FILTERS = ['Reed Switches', 'Form A', 'Ultraminiature', 'High Power', 'SMD', 'Automotive'];
function ElecParametric({
  onContact
}) {
  const [active, setActive] = React.useState(['Reed Switches', 'Form A']);
  const toggle = t => setActive(cur => cur.includes(t) ? cur.filter(x => x !== t) : [...cur, t]);
  const [sort, setSort] = React.useState('pn');
  const rows = React.useMemo(() => {
    const copy = [...PARTS];
    if (sort === 'len') copy.sort((a, b) => parseFloat(a.len) - parseFloat(b.len));
    if (sort === 'at') copy.sort((a, b) => parseFloat(a.at) - parseFloat(b.at));
    if (sort === 'pn') copy.sort((a, b) => a.pn.localeCompare(b.pn));
    return copy;
  }, [sort]);
  const th = {
    textAlign: 'left',
    padding: '12px 14px',
    fontSize: 'var(--font-size-caption)',
    fontWeight: 'var(--font-weight-semibold)',
    letterSpacing: '.06em',
    textTransform: 'uppercase',
    color: 'var(--standex-white)',
    whiteSpace: 'nowrap'
  };
  const td = {
    padding: '14px',
    fontSize: 'var(--font-size-body-sm)',
    borderBottom: '1px solid var(--border-subtle)',
    color: 'var(--text-body)'
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      padding: 'var(--space-8) 0 var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Resources',
      href: '#'
    }, {
      label: 'Parametric Search'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 1,
    eyebrow: "Resources",
    title: "Parametric Search",
    body: "Explore products by key specifications. Filter and compare to find the right part."
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y-compact) 0 var(--section-padding-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: 'grid',
      gridTemplateColumns: '280px 1fr',
      gap: 'var(--space-10)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      border: '1px solid var(--border-subtle)',
      padding: 'var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Part number"
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    icon: "search",
    placeholder: "e.g. MK33"
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Product family"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    placeholder: "All families",
    options: ['Reed Switches', 'Reed Relays', 'Proximity Sensors', 'Liquid Level Sensors']
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Contact form"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    placeholder: "Any",
    options: ['Form A (SPST-NO)', 'Form B (SPST-NC)', 'Form C (SPDT)']
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Industry"
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    placeholder: "Please Select Your Industry",
    options: ['Appliances', 'Medical Devices', 'Renewable Energy', 'Transportation', 'Test and Measurement']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-body-sm)',
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, "Availability"), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    defaultChecked: true,
    label: "In stock only"
  }), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "RoHS compliant"
  }), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "AEC-Q200 qualified"
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    fullWidth: true,
    icon: "tune",
    iconPosition: "left"
  }, "Apply filters")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-5)'
    }
  }, FILTERS.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t,
    selected: active.includes(t),
    onClick: () => toggle(t)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, rows.length, " parts match ", active.length, " filter", active.length === 1 ? '' : 's'), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--font-size-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Sort by"), /*#__PURE__*/React.createElement(__ds_scope.Select, {
    size: "sm",
    style: {
      width: 190
    },
    value: sort,
    onChange: e => setSort(e.target.value),
    options: [{
      value: 'pn',
      label: 'Part number'
    }, {
      value: 'at',
      label: 'Sensitivity (AT)'
    }, {
      value: 'len',
      label: 'Glass length'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-subtle)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      background: 'var(--standex-blue)'
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Part number"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Contact form"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, /*#__PURE__*/React.createElement(__ds_scope.Tooltip, {
    label: "Ampere-turns at closure"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--standex-white)'
    }
  }, "AT range"))), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Power"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Switching voltage"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Glass length"), /*#__PURE__*/React.createElement("th", {
    style: th
  }, "Availability"), /*#__PURE__*/React.createElement("th", {
    style: th
  }))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.pn
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      fontWeight: 'var(--font-weight-semibold)',
      color: 'var(--text-heading)'
    }
  }, r.pn), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.form), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.at), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.power), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.voltage), /*#__PURE__*/React.createElement("td", {
    style: td
  }, r.len), /*#__PURE__*/React.createElement("td", {
    style: td
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: r.stock === 'In Stock' ? 'green' : 'gray',
    size: "sm"
  }, r.stock)), /*#__PURE__*/React.createElement("td", {
    style: {
      ...td,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onContact && onContact();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 'var(--font-size-body-sm)',
      fontWeight: 'var(--font-weight-semibold)'
    }
  }, "Quote", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow_forward",
    size: 16
  })))))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--font-size-caption)',
      color: 'var(--text-muted)'
    }
  }, "Part numbers shown are illustrative Standex Detect series names; specification values are placeholders, not published data.")))));
}
Object.assign(__ds_scope, { ElecParametric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/electronics-website/ElecParametric.jsx", error: String((e && e.message) || e) }); }

// ui_kits/electronics-website/ElecProducts.jsx
try { (() => {
const SECTION = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 var(--space-8)'
};
const FAMILIES = [['All Reed Switches', 'The complete portfolio across sizes, power ratings and contact forms.'], ['Bistable and Latching Reed Switches', 'Hold state without continuous coil power.'], ['Surface Mount SMD Reed Switches', 'Optimised to switch high power in a small footprint.'], ['High Frequency Reed Switches', 'Controlled impedance for RF and test signals.'], ['Changeover Reed Switches', 'Form C contacts for switched signal paths.'], ['High Power Reed Switches', 'Up to 240 VAC power line switching.'], ['High Voltage Reed Switches', 'Hermetic sealing for high-voltage integrity.'], ['Miniature Reed Switches (9–14 mm)', 'Balanced sensitivity and footprint.'], ['Ultraminiature Reed Switches (<8 mm)', 'For wearables and compact consumer devices.']];
const SIDE = [['Reed Switches', true], ['Sensors', false], ['Relays', false], ['Magnets and Actuators', false]];
function ElecProducts({
  onNavigate,
  onContact
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      padding: 'var(--space-8) 0 var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Products and Components',
      href: '#'
    }, {
      label: 'Reed Switches'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "green"
  }, "Standex Detect"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    level: 1,
    title: "Reed Switches",
    body: "Standex Detect reed switches are hermetically sealed components that deliver precise, dependable switching in a simple, compact form. When activated by a magnetic field, they provide an effective method for detecting metal, movement, proximity, liquid level, and flow."
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-4)',
      fontSize: 'var(--font-size-body)',
      lineHeight: 'var(--line-height-body)',
      maxWidth: 720
    }
  }, "Engineered for durability, our reed switches deliver billions of reliable operations and maintain performance even in harsh environments thanks to hermetic sealing that protects against dust, moisture, and contamination."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    icon: "arrow_forward",
    onClick: onContact
  }, "Request a Quote"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: () => onNavigate && onNavigate('parametric')
  }, "Check Stock"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    icon: "tune",
    iconPosition: "left",
    onClick: () => onNavigate && onNavigate('parametric')
  }, "Parametric Search"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--font-size-caption)',
      fontWeight: 'var(--font-weight-semibold)',
      letterSpacing: 'var(--letter-spacing-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--standex-green)',
      marginBottom: 'var(--space-4)'
    }
  }, "Products and Components"), SIDE.map(([label, on]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 0',
      borderBottom: '1px solid var(--border-subtle)',
      textDecoration: 'none',
      color: on ? 'var(--standex-blue)' : 'var(--gray-600)',
      fontWeight: on ? 'var(--font-weight-semibold)' : 'var(--font-weight-regular)',
      fontSize: 'var(--font-size-body-sm)'
    }
  }, label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron_right",
    size: 18,
    color: on ? 'var(--control-accent)' : 'var(--text-muted)'
  }))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y-compact) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: SECTION
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--gutter)'
    }
  }, FAMILIES.map(([name, desc]) => /*#__PURE__*/React.createElement(__ds_scope.Card, {
    key: name,
    interactive: true,
    href: "#",
    title: name,
    body: desc,
    cta: "View family"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 130,
      marginBottom: 'var(--space-3)',
      background: 'var(--surface-subtle)',
      border: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sensors",
    size: 44,
    color: "var(--gray-400)"
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--space-5)',
      fontSize: 'var(--font-size-caption)',
      color: 'var(--text-muted)'
    }
  }, "Product photography placeholders \u2014 the live site uses white-background component photos from the Standex Detect media library."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-subtle)',
      padding: 'var(--section-padding-y-compact) 0 var(--section-padding-y)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...SECTION,
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.SectionHeading, {
    eyebrow: "Knowledge Base",
    title: "Frequently asked questions"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Accordion, {
    defaultOpen: ['a'],
    items: [{
      id: 'a',
      title: 'What is a reed switch?',
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "A hermetically sealed component whose contacts close in the presence of a magnetic field, used to detect metal, movement, proximity, liquid level, and flow.")
    }, {
      id: 'b',
      title: 'How long does a reed switch last?',
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "Reed switches deliver billions of reliable operations and maintain performance in harsh environments.")
    }, {
      id: 'c',
      title: 'Can I get a custom design?',
      content: /*#__PURE__*/React.createElement("p", {
        style: {
          margin: 0
        }
      }, "Yes. Our engineering team collaborates from concept through production to tailor switching and sensing technology to your performance, environmental, and market requirements.")
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "inverse",
    icon: "support_agent",
    title: "Need design assistance?",
    body: "Our experienced engineering team is ready to help \u2014 no matter where you are in the design of your components.",
    cta: "Talk to an engineer",
    interactive: true,
    onClick: onContact
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "subtle",
    icon: "storefront",
    title: "Find a Distributor",
    body: "Locate an authorised distributor to access products and technical support.",
    cta: "Find a distributor",
    interactive: true
  }), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "subtle",
    icon: "description",
    title: "Documentation",
    body: "Brochures, datasheets, certifications and engineering guides.",
    cta: "Open resources",
    interactive: true
  })))));
}
Object.assign(__ds_scope, { ElecProducts });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/electronics-website/ElecProducts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/electronics-website/ElecApp.jsx
try { (() => {
function ElecApp({
  assetBase = '../../assets',
  initialScreen = 'home'
}) {
  const [screen, setScreen] = React.useState(initialScreen);
  const [modal, setModal] = React.useState(false);
  const [consent, setConsent] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const go = s => {
    setScreen(s);
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  };
  const openContact = () => {
    setModal(true);
    setSent(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--surface-page)',
      minHeight: '100vh'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ElecHeader, {
    assetBase: assetBase,
    onNavigate: go,
    onContact: openContact
  }), screen === 'home' && /*#__PURE__*/React.createElement(__ds_scope.ElecHome, {
    onNavigate: go,
    onContact: openContact
  }), screen === 'products' && /*#__PURE__*/React.createElement(__ds_scope.ElecProducts, {
    onNavigate: go,
    onContact: openContact
  }), screen === 'parametric' && /*#__PURE__*/React.createElement(__ds_scope.ElecParametric, {
    onContact: openContact
  }), /*#__PURE__*/React.createElement(__ds_scope.ElecFooter, {
    assetBase: assetBase
  }), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Toast, {
    tone: "success",
    title: "Request received",
    message: "A Standex Electronics engineer will reply within one business day.",
    onDismiss: () => setSent(false)
  })), modal && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Dialog, {
    open: true,
    eyebrow: "Contact",
    title: "General Inquiries",
    width: 620,
    onClose: () => setModal(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setModal(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      size: "sm",
      icon: "arrow_forward",
      disabled: !consent,
      onClick: () => {
        setModal(false);
        setSent(true);
      }
    }, "Submit"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 0
    }
  }, "Have a question or need assistance? Connect with our team for general information about our products, capabilities, or support."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--font-size-caption)',
      color: 'var(--text-muted)'
    }
  }, "\"*\" indicates required fields"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "First Name",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, null)), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Last Name",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, null)), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Email",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "email",
    placeholder: "you@company.com"
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Telephone",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "tel"
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Product",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    placeholder: "Please Select Your Product",
    options: ['Reed Switches', 'Proximity Sensors', 'Position Sensors', 'Liquid Level Sensors', 'Reed Relays', 'Photo-MOSFET Relays', 'Optocouplers', 'Magnets and Actuators', 'Transformers', 'Inductors', 'EMI Components']
  })), /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Industry",
    required: true
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    placeholder: "Please Select Your Industry",
    options: ['Appliances', 'Computing and Data Centers', 'Consumer Electronics', 'Industrial and Automation', 'Medical Devices', 'Renewable Energy', 'Transportation', 'Utilities']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FormField, {
    label: "Application / Notes"
  }, /*#__PURE__*/React.createElement(__ds_scope.Textarea, {
    rows: 3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    checked: consent,
    onChange: setConsent,
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Agree and consent to the use of my information as described in the ", /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault()
    }, "Privacy Policy"), ".")
  }), /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Subscribe To Our Newsletter"
  })))));
}
Object.assign(__ds_scope, { ElecApp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/electronics-website/ElecApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CorpApp = __ds_scope.CorpApp;

__ds_ns.CorpBusinesses = __ds_scope.CorpBusinesses;

__ds_ns.CorpContact = __ds_scope.CorpContact;

__ds_ns.CorpFooter = __ds_scope.CorpFooter;

__ds_ns.CorpHeader = __ds_scope.CorpHeader;

__ds_ns.CorpHome = __ds_scope.CorpHome;

__ds_ns.ElecApp = __ds_scope.ElecApp;

__ds_ns.ElecFooter = __ds_scope.ElecFooter;

__ds_ns.ElecHeader = __ds_scope.ElecHeader;

__ds_ns.ElecHome = __ds_scope.ElecHome;

__ds_ns.ElecParametric = __ds_scope.ElecParametric;

__ds_ns.ElecProducts = __ds_scope.ElecProducts;

})();
