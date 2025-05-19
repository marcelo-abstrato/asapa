# JUNIE Design System Guidelines

## Overview

JUNIE is a comprehensive design system for the ASAPA project that provides a unified set of components, patterns, and
principles to create consistent and accessible user interfaces. This document outlines the guidelines for using and
contributing to the JUNIE design system.

## Core Principles

- **Consistency**: Maintain visual and functional consistency across all interfaces
- **Accessibility**: Ensure all components are accessible to users with disabilities
- **Simplicity**: Keep components simple and focused on their primary purpose
- **Flexibility**: Design components to be adaptable to different contexts and requirements
- **Performance**: Optimize components for performance and minimal bundle size

## Design Tokens

### Colors

#### Primary Colors

- **Blue Primary**: `#1d4ed8` - Used for primary elements, buttons, links, and highlights
- **Blue Dark**: `#1e40af` - Used for hover states on primary buttons
- **Blue Light**: `#dbeafe` - Used for badge backgrounds and secondary elements

#### Neutral Colors

- **Black**: `#000000` - Used for main text
- **Dark Gray**: `#4b5563` - Used for secondary text
- **Medium Gray**: `#9ca3af` - Used for borders and disabled elements
- **Light Gray**: `#f3f4f6` - Used for section backgrounds
- **White**: `#ffffff` - Used for backgrounds and text on dark backgrounds

#### Semantic Colors

- **Success**: `#10b981` - Used for success states and messages
- **Warning**: `#f59e0b` - Used for warning states and messages
- **Error**: `#ef4444` - Used for error states and messages
- **Info**: `#3b82f6` - Used for informational states and messages

### Typography

#### Fonts

- **Primary**: Geist Sans - Used for all text content
- **Mono**: Geist Mono - Used for code and technical data

#### Font Sizes

- **Display**: 4.5rem (72px) - Used for hero sections and major headlines
- **Heading 1**: 3rem (48px) / 3.75rem (60px) on larger screens
- **Heading 2**: 2.25rem (36px) / 3rem (48px) on larger screens
- **Heading 3**: 1.5rem (24px) / 1.875rem (30px) on larger screens
- **Heading 4**: 1.25rem (20px)
- **Body**: 1rem (16px) / 1.25rem (20px) on larger screens
- **Small**: 0.875rem (14px)
- **XSmall**: 0.75rem (12px)

#### Font Weights

- **Regular**: 400
- **Medium**: 500
- **Bold**: 700

#### Line Heights

- **Tight**: 1.2
- **Normal**: 1.5
- **Loose**: 1.8

### Spacing

- **4xs**: 0.125rem (2px)
- **3xs**: 0.25rem (4px)
- **2xs**: 0.5rem (8px)
- **xs**: 0.75rem (12px)
- **sm**: 1rem (16px)
- **md**: 1.5rem (24px)
- **lg**: 2rem (32px)
- **xl**: 2.5rem (40px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)
- **4xl**: 6rem (96px)

### Borders

- **Radius Small**: 0.25rem (4px)
- **Radius Medium**: 0.5rem (8px)
- **Radius Large**: 0.75rem (12px)
- **Radius XLarge**: 1rem (16px)
- **Radius Full**: 9999px

- **Width Thin**: 1px
- **Width Medium**: 2px
- **Width Thick**: 4px

### Shadows

- **Shadow Small**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Shadow Medium**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **Shadow Large**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **Shadow XLarge**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

## Components

### Core Components

#### Button

Buttons are used to trigger actions or events.

**Variants**:

- **Primary**: Used for primary actions
- **Secondary**: Used for secondary actions
- **Outline**: Used for less prominent actions
- **Ghost**: Used for the least prominent actions
- **Link**: Appears as a link but behaves like a button

**Sizes**:

- **Small**: Compact size for tight spaces
- **Medium**: Default size for most contexts
- **Large**: Larger size for emphasis

**States**:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading

**Example**:

```jsx
<Button variant="primary" size="medium" disabled={false} loading={false}>
    Button Text
</Button>
```

#### Input

Inputs are used to collect user data.

**Variants**:

- **Text**: Standard text input
- **Number**: Input for numerical values
- **Email**: Input for email addresses
- **Password**: Input for passwords with visibility toggle
- **Search**: Input for search queries with clear button

**States**:

- Default
- Focus
- Disabled
- Error
- Success

**Example**:

```jsx
<Input
    type="text"
    label="Username"
    placeholder="Enter your username"
    error={errors.username}
    disabled={isSubmitting}
/>
```

#### Card

Cards are used to group related content and actions.

**Variants**:

- **Default**: Standard card with border and shadow
- **Elevated**: Card with larger shadow for emphasis
- **Flat**: Card without shadow
- **Interactive**: Card that changes on hover/focus

**Example**:

```jsx
<Card variant="default">
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description text</CardDescription>
    </CardHeader>
    <CardContent>
        Main content goes here
    </CardContent>
    <CardFooter>
        <Button>Action</Button>
    </CardFooter>
</Card>
```

### Layout Components

#### Container

Container is used to center and constrain content width.

**Variants**:

- **Default**: Max width of 1280px
- **Small**: Max width of 640px
- **Medium**: Max width of 1024px
- **Large**: Max width of 1536px
- **Fluid**: No max width

**Example**:

```jsx
<Container variant="default">
    Content goes here
</Container>
```

#### Grid

Grid is used for two-dimensional layouts.

**Properties**:

- **columns**: Number of columns (1-12)
- **gap**: Space between grid items
- **rowGap**: Space between rows
- **columnGap**: Space between columns

**Example**:

```jsx
<Grid columns={3} gap="md">
    <GridItem>Item 1</GridItem>
    <GridItem>Item 2</GridItem>
    <GridItem>Item 3</GridItem>
</Grid>
```

#### Stack

Stack is used for one-dimensional layouts.

**Properties**:

- **direction**: Row or column
- **spacing**: Space between stack items
- **align**: Alignment of items
- **justify**: Justification of items

**Example**:

```jsx
<Stack direction="column" spacing="md" align="center">
    <StackItem>Item 1</StackItem>
    <StackItem>Item 2</StackItem>
    <StackItem>Item 3</StackItem>
</Stack>
```

### Navigation Components

#### Tabs

Tabs are used to organize content into multiple sections.

**Variants**:

- **Default**: Standard tabs with underline
- **Enclosed**: Tabs with borders
- **Soft**: Tabs with soft background
- **Solid**: Tabs with solid background

**Example**:

```jsx
<Tabs variant="default">
    <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
    </TabList>
    <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
    </TabPanels>
</Tabs>
```

#### Pagination

Pagination is used to navigate through multiple pages.

**Variants**:

- **Default**: Standard pagination with numbers
- **Simple**: Simplified pagination with previous/next only
- **Compact**: Compact pagination for mobile

**Example**:

```jsx
<Pagination
    currentPage={3}
    totalPages={10}
    onPageChange={(page) => setPage(page)}
    variant="default"
/>
```

### Feedback Components

#### Alert

Alerts are used to communicate status information to users.

**Variants**:

- **Info**: For informational messages
- **Success**: For success messages
- **Warning**: For warning messages
- **Error**: For error messages

**Example**:

```jsx
<Alert variant="success">
    <AlertIcon/>
    <AlertTitle>Success!</AlertTitle>
    <AlertDescription>Your action was completed successfully.</AlertDescription>
</Alert>
```

#### Toast

Toasts are used for temporary notifications.

**Variants**:

- **Info**: For informational notifications
- **Success**: For success notifications
- **Warning**: For warning notifications
- **Error**: For error notifications

**Example**:

```jsx
<Toast variant="success" duration={3000}>
    <ToastIcon/>
    <ToastTitle>Success!</ToastTitle>
    <ToastDescription>Your action was completed successfully.</ToastDescription>
</Toast>
```

## Usage Guidelines

### Component Composition

Components should be composed to create complex interfaces:

```jsx
<Card>
    <CardHeader>
        <CardTitle>User Profile</CardTitle>
    </CardHeader>
    <CardContent>
        <Stack direction="column" spacing="md">
            <Input label="Name" value={name} onChange={handleNameChange}/>
            <Input label="Email" type="email" value={email} onChange={handleEmailChange}/>
            <Select label="Role" options={roleOptions} value={role} onChange={handleRoleChange}/>
        </Stack>
    </CardContent>
    <CardFooter>
        <Button variant="primary" onClick={handleSave}>Save Changes</Button>
        <Button variant="outline" onClick={handleCancel}>Cancel</Button>
    </CardFooter>
</Card>
```

### Responsive Design

All components should be designed with responsiveness in mind:

- Use relative units (rem, em) instead of fixed units (px)
- Use media queries for layout changes
- Use flexible layouts (Grid, Stack) that adapt to different screen sizes
- Test on multiple devices and screen sizes

### Accessibility

All components must follow accessibility best practices:

- Use semantic HTML elements
- Provide appropriate ARIA attributes
- Ensure keyboard navigation works properly
- Maintain sufficient color contrast (WCAG AA compliance minimum)
- Support screen readers
- Handle focus management properly

### Performance

Optimize components for performance:

- Minimize re-renders
- Use memoization where appropriate
- Lazy load components when possible
- Keep bundle size small
- Optimize images and assets

## Contributing to JUNIE

### Adding New Components

1. Identify the need for a new component
2. Research existing solutions and best practices
3. Create a proposal with use cases and requirements
4. Design the component API
5. Implement the component with tests
6. Document the component
7. Submit for review

### Modifying Existing Components

1. Identify the issue or enhancement
2. Create a proposal with justification
3. Implement the changes with tests
4. Update documentation
5. Submit for review

### Documentation Standards

All components should be documented with:

- Description and purpose
- Props/API reference
- Usage examples
- Accessibility considerations
- Edge cases and limitations

## Implementation

### Directory Structure

```
/components
  /junie
    /core
      /Button
        Button.tsx
        Button.test.tsx
        Button.stories.tsx
        index.ts
      /Input
        Input.tsx
        Input.test.tsx
        Input.stories.tsx
        index.ts
      ...
    /layout
      /Container
      /Grid
      /Stack
      ...
    /navigation
      /Tabs
      /Pagination
      ...
    /feedback
      /Alert
      /Toast
      ...
    /data-display
      /Table
      /List
      ...
    /utils
      theme.ts
      types.ts
      ...
    index.ts
```

### Importing Components

```jsx
// Import specific component
import {Button} from '@/components/junie/core/Button';

// Import from category
import {Button, Input, Select} from '@/components/junie/core';

// Import all
import {Button, Container, Tabs, Alert} from '@/components/junie';
```

## Versioning and Releases

JUNIE follows Semantic Versioning (SemVer):

- **Major version**: Breaking changes
- **Minor version**: New features without breaking changes
- **Patch version**: Bug fixes and minor improvements
