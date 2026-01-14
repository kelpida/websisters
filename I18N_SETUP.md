# Internationalization (i18n) Setup

This project uses **i18next** with **react-i18next** for multi-language support.

## Configuration

### Supported Languages
- **English (en)** - Primary language (default)
- **Greek (gr)** - Secondary language

### File Structure
```
src/
├── i18n/
│   ├── config.ts          # i18n configuration
│   └── locales/
│       ├── en.json        # English translations
│       └── gr.json        # Greek translations
├── hooks/
│   └── use-language.ts    # Custom hook for language management
└── components/
    └── Navbar.tsx         # Language switcher dropdown
```

## Usage

### Basic Translation Usage
```tsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('nav.services')}</h1>;
}
```

### Using the Custom Hook
```tsx
import { useLanguage } from '@/hooks/use-language';

function MyComponent() {
  const { t, currentLanguage, isEnglish, changeLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('nav.services')}</h1>
      <p>Current language: {currentLanguage}</p>
      <button onClick={() => changeLanguage('gr')}>Switch to Greek</button>
    </div>
  );
}
```

## Language Switching

The language switcher is integrated into the Navbar component with:
- **Desktop View**: Dropdown button with globe icon showing current language code (EN/ΕΛ)
- **Mobile View**: Language selector in the mobile menu

The selected language is:
1. Applied immediately to the entire app
2. Saved to localStorage for persistence across sessions
3. Restored on app reload

## Adding New Translations

1. Add new keys to both `en.json` and `gr.json` in the same structure
2. Use the translation key with the `t()` function: `t('path.to.key')`

Example:
```json
// en.json
{
  "footer": {
    "copyright": "© 2024 Web Sisters. All rights reserved."
  }
}

// gr.json
{
  "footer": {
    "copyright": "© 2024 Web Sisters. Όλα τα δικαιώματα διατηρούνται."
  }
}
```

Usage:
```tsx
const { t } = useTranslation();
<p>{t('footer.copyright')}</p>
```

## Dependencies
- `i18next` - Core i18n library
- `react-i18next` - React bindings for i18next
