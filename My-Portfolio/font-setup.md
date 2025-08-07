# Font Setup Guide

## White Chapel Font Installation

### Step 1: Prepare Your Font Files

1. **Locate your White Chapel font files** (they might be in .ttf, .otf, or other formats)

2. **Convert to web formats** (if needed):
   - Use online converters like [CloudConvert](https://cloudconvert.com/) or [FontSquirrel](https://www.fontsquirrel.com/tools/webfont-generator)
   - Convert to: `.woff2` (preferred), `.woff`, and `.ttf`

### Step 2: Place Font Files

1. **Navigate to the fonts directory:**
   ```bash
   cd src/assets/fonts/
   ```

2. **Copy your font files** to this directory with these exact names:
   - `WhiteChapel-Regular.woff2` (or .woff/.ttf)
   - `WhiteChapel-Bold.woff2` (or .woff/.ttf)  
   - `WhiteChapel-Medium.woff2` (or .woff/.ttf)

### Step 3: Verify Installation

1. **Check your file structure:**
   ```
   src/assets/fonts/
   ├── WhiteChapel.css
   ├── README.md
   ├── WhiteChapel-Regular.woff2  ← Your font file
   ├── WhiteChapel-Bold.woff2     ← Your font file
   └── WhiteChapel-Medium.woff2   ← Your font file
   ```

2. **Restart your development server:**
   ```bash
   npm run dev
   ```

### Step 4: Test the Font

The White Chapel font should now be applied to:
- Your hero section name ("Meagan Alfaro")
- All heading elements using the design system

### Troubleshooting

**If the font doesn't load:**
1. Check browser developer tools (F12) for any 404 errors
2. Verify file names match exactly (case-sensitive)
3. Ensure files are in the correct directory
4. Check that the font files are valid and not corrupted

**Alternative approach:**
If you prefer, you can also place the font files directly in `src/assets/` and update the paths in `src/assets/fonts/WhiteChapel.css` accordingly.

---

**Note:** Make sure you have the proper license to use White Chapel font on your website. 