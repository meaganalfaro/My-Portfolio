# Font Setup Instructions

## White Chapel Font

To use the White Chapel font in your portfolio, please follow these steps:

### 1. Font File Requirements
You need to place your White Chapel font files in this directory (`src/assets/fonts/`) with the following names:

**Required files:**
- `WhiteChapel-Regular.woff2` (or .woff/.ttf)
- `WhiteChapel-Bold.woff2` (or .woff/.ttf)
- `WhiteChapel-Medium.woff2` (or .woff/.ttf)

### 2. Supported Formats
The font will work with these formats (in order of preference):
1. **WOFF2** (recommended - smallest file size)
2. **WOFF** (good compression)
3. **TTF** (fallback)

### 3. File Structure
Your fonts directory should look like this:
```
src/assets/fonts/
├── WhiteChapel.css
├── README.md
├── WhiteChapel-Regular.woff2
├── WhiteChapel-Bold.woff2
└── WhiteChapel-Medium.woff2
```

### 4. Font Weights Available
- **400** (Regular)
- **500** (Medium)
- **700** (Bold)

### 5. Usage
The font is automatically loaded and used for headings in your design system. It will be applied to:
- Hero section name
- All heading classes (`.heading-primary`, `.heading-secondary`, etc.)

### 6. Fallback
If the White Chapel font fails to load, the system will fall back to:
1. Playfair Display (Google Fonts)
2. System serif fonts

---

**Note:** Make sure your font files are properly licensed for web use. 