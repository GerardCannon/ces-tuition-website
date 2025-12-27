# Planning Guide

A professional marketing website for CES Tuition that showcases services, builds trust, and drives conversions to the app platform at app.cestuition.com.

**Experience Qualities**:
1. **Professional** - Establishes credibility and trust through polished design and clear communication of expertise
2. **Approachable** - Warm and welcoming tone that makes education feel accessible rather than intimidating
3. **Confidence-inspiring** - Bold visual presence that demonstrates the company's commitment to educational excellence

**Complexity Level**: Content Showcase (information-focused)
This is a marketing landing page designed to inform prospective students and parents about CES Tuition's services and direct them to the application platform. The focus is on presenting information clearly and persuasively rather than complex interactions.

## Essential Features

### Hero Section with CTA
- **Functionality**: Immediate introduction to CES Tuition with primary call-to-action
- **Purpose**: Capture attention and communicate value proposition within 3 seconds
- **Trigger**: Page load
- **Progression**: User lands on page → Sees compelling headline and value prop → Clicks "Get Started" CTA → Redirects to app.cestuition.com
- **Success criteria**: Clear headline, visible CTA button, professional imagery/gradient background

### Services Overview
- **Functionality**: Display core tuition services offered (subjects, levels, formats)
- **Purpose**: Inform visitors about what CES Tuition provides
- **Trigger**: User scrolls down from hero
- **Progression**: User scrolls → Sees service cards with icons → Reads brief descriptions → Understands offerings
- **Success criteria**: 3-6 service cards with clear icons, titles, and descriptions

### Why Choose Us / Features Section
- **Functionality**: Highlight competitive advantages and unique selling points
- **Purpose**: Build trust and differentiate from competitors
- **Trigger**: Continued scrolling
- **Progression**: User scrolls → Sees key benefits with supporting details → Builds confidence in service quality
- **Success criteria**: 4-6 feature highlights with icons and compelling copy

### Pricing/Programs Section
- **Functionality**: Display pricing tiers or program options
- **Purpose**: Set expectations and help users self-select appropriate tier
- **Trigger**: User scrolls to pricing area
- **Progression**: User views pricing cards → Compares options → Selects preferred tier → Clicks CTA to sign up
- **Success criteria**: Clear pricing cards with features, visual hierarchy showing recommended option

### Testimonials/Social Proof
- **Functionality**: Display student/parent testimonials
- **Purpose**: Build credibility through social proof
- **Trigger**: User scrolls to testimonials
- **Progression**: User reads authentic testimonials → Gains confidence → Moves toward conversion
- **Success criteria**: 3-6 testimonial cards with names, photos/avatars, and quotes

### Footer with Contact & Links
- **Functionality**: Provide contact information, social links, and secondary navigation
- **Purpose**: Offer additional ways to engage and find information
- **Trigger**: User scrolls to bottom
- **Progression**: User finds contact info → Can email/call or access app link
- **Success criteria**: Clear contact details, app link, organized footer structure

## Edge Case Handling
- **Empty states**: N/A for static content site
- **Mobile navigation**: Hamburger menu collapses navigation on mobile devices
- **Slow loading**: Graceful loading states for any dynamic content
- **External link failures**: All CTAs to app.cestuition.com open in same tab for seamless transition
- **Long content**: Smooth scroll behavior for anchor links if navigation includes jump links

## Design Direction
The design should evoke **confidence, professionalism, and academic excellence** while remaining warm and approachable. Think premium educational institution meets modern tech platform - sophisticated but not stuffy, authoritative but not intimidating. The visual language should appeal to both students and parents, communicating competence and care.

## Color Selection

- **Primary Color**: Deep Academic Blue (oklch(0.45 0.15 250)) - Communicates trust, intelligence, and professionalism associated with education
- **Secondary Color**: Warm Coral (oklch(0.72 0.18 35)) - Adds warmth and approachability, breaks educational stereotype
- **Accent Color**: Vibrant Teal (oklch(0.65 0.18 195)) - For CTAs and important elements, energetic and forward-moving
- **Background**: Soft Cream (oklch(0.98 0.01 85)) - Warmer than pure white, feels premium and comfortable
- **Surface**: Pure White (oklch(1 0 0)) - For cards and elevated content
- **Foreground/Background Pairings**:
  - Primary Blue (oklch(0.45 0.15 250)): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Accent Teal (oklch(0.65 0.18 195)): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓
  - Warm Coral (oklch(0.72 0.18 35)): Dark text (oklch(0.25 0.02 35)) - Ratio 5.8:1 ✓
  - Background Cream (oklch(0.98 0.01 85)): Dark text (oklch(0.2 0.02 250)) - Ratio 13.1:1 ✓

## Font Selection
Typography should balance academic credibility with modern accessibility - professional serifs for headlines to evoke tradition and trust, paired with clean sans-serif for readability in body text.

- **Primary Font**: Crimson Pro (serif) - For headlines and important text, brings editorial quality and gravitas
- **Secondary Font**: Space Grotesk (geometric sans-serif) - For body text and UI elements, modern and highly readable

**Typographic Hierarchy**:
- H1 (Hero Headline): Crimson Pro Bold/56px/tight leading (-0.02em letter spacing)
- H2 (Section Headings): Crimson Pro SemiBold/42px/tight leading
- H3 (Card Titles): Space Grotesk Bold/24px/normal leading
- Body (Paragraphs): Space Grotesk Regular/18px/relaxed leading (1.6)
- Button Text: Space Grotesk Medium/16px/wide letter spacing (0.02em)
- Small/Caption: Space Grotesk Regular/14px/normal leading

## Animations
Animations should feel purposeful and premium - subtle entrance animations for sections as they scroll into view, smooth hover states on interactive elements that suggest depth and physicality, and confident transitions that reinforce the sense of quality. Think gentle fade-ups (20-30px) with slight delays between grouped elements, smooth scale transforms on hover (1.02-1.05), and butter-smooth scrolling. Nothing should feel rushed or bouncy - movements should be deliberate and refined, matching the professionalism of an educational institution.

## Component Selection

**Components**:
- **Button (shadcn)**: Primary CTAs with custom accent color, secondary variants for less prominent actions. Size variants for hero (lg) vs section CTAs (default)
- **Card (shadcn)**: Service cards, pricing tiers, testimonials. Customize with subtle shadows and hover lift effect
- **Separator (shadcn)**: Visual breaks between major sections
- **Avatar (shadcn)**: For testimonial author photos with fallback initials

**Customizations**:
- **Navigation Bar**: Custom component - sticky header with logo left, navigation center, CTA button right. Transparent on hero with backdrop blur, solid on scroll
- **Hero Section**: Custom full-height section with gradient background and diagonal pattern overlay
- **Feature Grid**: Custom 2x2 or 3x2 grid layout with icons from Phosphor
- **Pricing Cards**: Based on Card component but with custom styling for "Popular" badge
- **Testimonial Carousel**: Simple grid or flexbox layout (could use embla-carousel if multiple slides needed)
- **Footer**: Custom multi-column layout

**States**:
- **Buttons**: Default (solid accent), hover (scale 1.05 + brightness increase), active (scale 0.98), focus (ring in accent color)
- **Cards**: Default (subtle shadow), hover (increased shadow + translate -2px), interactive cards have cursor pointer
- **Navigation links**: Default (foreground color), hover (accent color transition), underline on active
- **Input fields** (if contact form): Default (border), focus (accent border + ring), error (destructive border), success (teal border)

**Icon Selection** (from @phosphor-icons/react):
- Navigation/Menu: List, X
- Services: BookOpen, Users, ChalkboardTeacher, Certificate
- Features: CheckCircle, TrendingUp, Clock, Star
- Contact: Envelope, Phone, MapPin
- Social: FacebookLogo, InstagramLogo, LinkedinLogo
- CTA/Action: ArrowRight, CaretRight

**Spacing**:
- Section padding: py-20 md:py-28 (large vertical rhythm)
- Container max-width: max-w-7xl
- Card padding: p-8
- Grid gaps: gap-8 md:gap-12
- Element spacing within components: gap-4 to gap-6
- Consistent use of spacing scale: 4, 6, 8, 12, 16, 20, 24, 28 for predictable rhythm

**Mobile**:
- Navigation: Collapses to hamburger menu below md breakpoint with slide-in mobile menu
- Hero: Headline font size reduces to 36px, single column layout
- Service/Feature grids: Stack to single column on mobile, 2 columns on md, 3 columns on lg
- Pricing cards: Vertical stack on mobile, horizontal row with scroll snap on tablet, grid on desktop
- Testimonials: Single column on mobile, 2-up on md, 3-up on lg
- Footer: Single column stack on mobile, multi-column on md+
- Padding reduction: Mobile uses py-12 instead of py-20 for sections
