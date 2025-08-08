# Adam Brunson - Portfolio

A modern, interactive portfolio showcasing web development and motion graphics work.

## Features

### 🎨 Modern Design
- **Dark/Light Mode Toggle**: Click the moon/sun icon in the navigation bar to switch themes
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion for engaging transitions

### 🎬 Video Integration
- **Hero Video Background**: Full-screen video with overlay text
- **Video Project Cards**: Click to open videos in modal popups
- **Hover Effects**: Videos play silently on hover
- **Vimeo Integration**: Seamless video embedding with controls

### 💻 Project Showcase
- **Coding Projects**: Display with framework icons and links
- **Video Projects**: Motion graphics and animations
- **Filter System**: Browse by category (All Work, Coding Work, Video Work)
- **GitHub Integration**: Direct links to source code
- **Live Demo Links**: View projects in action

### 🧭 Navigation
- **Smooth Scrolling**: Fast navigation to sections
- **Dropdown Menu**: Work section with category filtering
- **Contact Page**: Professional contact form and social links

### 📱 Interactive Elements
- **Hover Effects**: Cards lift and show additional information
- **Modal Popups**: Video viewing with full controls
- **Framework Icons**: Visual representation of technologies used
- **Social Links**: Connect on various platforms

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Navigate to `http://localhost:3000`

## Customization

### Adding Your Content

1. **Update Project Data**: Modify the project arrays in `src/app/page.tsx` and `src/app/work/page.tsx`
2. **Replace Videos**: Add your Vimeo video URLs
3. **Add Images**: Place project images in the `public` directory
4. **Update Contact Info**: Modify contact details in `src/app/contact/page.tsx`

### Styling

- **Colors**: Update Tailwind classes for custom color schemes
- **Animations**: Modify Framer Motion configurations
- **Layout**: Adjust grid layouts and spacing

### Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Animation library
- **FontAwesome**: Icon library
- **Vimeo Player**: Video integration

## File Structure

```
src/
├── app/
│   ├── page.tsx          # Main portfolio page
│   ├── work/page.tsx     # Work showcase with filtering
│   ├── contact/page.tsx  # Contact form and info
│   └── layout.tsx        # Root layout with navigation
├── components/
│   ├── Navbar.tsx        # Navigation with dark mode
│   ├── VideoModal.tsx    # Video popup component
│   ├── ProjectCard.tsx   # Project display cards
│   └── AboutSection.tsx  # About section with animations
```

## Features in Detail

### Continuous Scrolling
- Smooth transitions between sections
- No repeated animations when scrolling back
- Optimized performance with `viewport={{ once: true }}`

### Video Features
- Background video in hero section
- Click to open video modals
- Hover to play videos silently
- Full Vimeo player integration

### Project Cards
- 3-column responsive grid
- Framework icons with tooltips
- GitHub and live site links
- Hover animations and effects

### Dark Mode
- Persistent theme preference
- Smooth transitions between themes
- System preference detection
- Local storage for user preference

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance

- Optimized images and videos
- Lazy loading for better performance
- Efficient animations with Framer Motion
- Responsive design for all devices

## License

This project is open source and available under the [MIT License](LICENSE).
