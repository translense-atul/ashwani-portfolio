# Ashwani Upadhyay Fitness Website

## Overview

This is a professional fitness trainer website built for Ashwani Upadhyay, a certified gym trainer with 10+ years of experience. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on lead generation and client engagement through contact forms and WhatsApp integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (TanStack Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **API Design**: RESTful API with JSON responses
- **Validation**: Zod schemas for request/response validation

### Development Architecture
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Module Replacement**: Vite dev server with Express middleware
- **Type Safety**: Full TypeScript coverage across the stack

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Call-to-action with WhatsApp integration
- **About Section**: Trainer background and philosophy
- **Certifications**: Display of professional credentials
- **Services**: Detailed service offerings
- **Pricing**: Tiered pricing plans
- **Testimonials**: Client success stories
- **Contact Form**: Lead generation with form validation
- **WhatsApp Button**: Floating action button for direct contact

### Backend Components
- **Contact API**: Handles form submissions and stores leads
- **Storage Layer**: Abstracted storage interface (currently in-memory, designed for PostgreSQL)
- **Route Management**: Centralized route registration
- **Error Handling**: Global error handling middleware
- **Request Logging**: Detailed API request logging

## Data Flow

### Contact Form Submission
1. User fills out contact form on frontend
2. Form data is validated using Zod schema
3. Data is sent to `/api/contact` endpoint
4. Backend validates data and stores in database
5. Success/error response is returned to frontend
6. Toast notification shows user feedback

### WhatsApp Integration
1. Multiple WhatsApp buttons throughout the site
2. Direct links to WhatsApp with pre-filled trainer number
3. No backend processing required - direct external link

## External Dependencies

### Frontend Dependencies
- **UI Library**: Radix UI components for accessibility
- **Icons**: Font Awesome for icons, Lucide React for UI icons
- **Fonts**: Google Fonts (Inter) for typography
- **Images**: Unsplash for placeholder images
- **Form Validation**: Zod for schema validation
- **HTTP Client**: Fetch API with custom wrapper

### Backend Dependencies
- **Database**: Neon Database (serverless PostgreSQL)
- **ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod for request validation
- **Session Management**: connect-pg-simple for PostgreSQL sessions

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript compiler
- **Linting**: ESLint (implied by project structure)
- **Replit Integration**: Replit-specific plugins for development

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations managed via `drizzle-kit`

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: Uses Vite dev server with HMR
- **Production**: Serves static files from Express server

### Hosting Requirements
- **Node.js**: ES modules support required
- **PostgreSQL**: Compatible database (Neon recommended)
- **Static Files**: Express serves built React app
- **Environment Variables**: DATABASE_URL for database connection

## Changelog

```
Changelog:
- July 03, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```