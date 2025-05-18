"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import {cn} from "@/lib/helpers/css-utils"

function Tabs({
                  className,
                  ...props
              }: React.ComponentProps<typeof TabsPrimitive.Root>) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            className={cn("flex flex-col gap-2", className)}
            {...props}
        />
    )
}

function TabsList({
                      className,
                      ...props
                  }: React.ComponentProps<typeof TabsPrimitive.List>) {
    const [activeTabElement, setActiveTabElement] = React.useState<HTMLElement | null>(null);
    const listRef = React.useRef<HTMLDivElement>(null);
    const [indicatorStyle, setIndicatorStyle] = React.useState({
        left: 0,
        width: 0,
    });

    React.useEffect(() => {
        const updateIndicator = () => {
            if (activeTabElement && listRef.current) {
                const listRect = listRef.current.getBoundingClientRect();
                const activeRect = activeTabElement.getBoundingClientRect();

                setIndicatorStyle({
                    left: activeRect.left - listRect.left,
                    width: activeRect.width,
                });
            }
        };

        updateIndicator();

        // Update on resize
        window.addEventListener('resize', updateIndicator);
        return () => window.removeEventListener('resize', updateIndicator);
    }, [activeTabElement]);

    React.useEffect(() => {
        // Find the initial active tab
        if (listRef.current) {
            const activeTab = listRef.current.querySelector('[data-state="active"]');
            if (activeTab instanceof HTMLElement) {
                setActiveTabElement(activeTab);
            }
        }

        // Listen for custom event from TabsTrigger
        const handleActiveTabChange = (e: Event) => {
            const customEvent = e as CustomEvent;
            if (customEvent.detail && customEvent.detail.element) {
                setActiveTabElement(customEvent.detail.element);
            }
        };

        const listElement = listRef.current;
        if (listElement) {
            listElement.addEventListener('activetabchange', handleActiveTabChange);

            return () => {
                listElement.removeEventListener('activetabchange', handleActiveTabChange);
            };
        }
    }, []);

    return (
        <TabsPrimitive.List
            ref={listRef}
            data-slot="tabs-list"
            className={cn(
                "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px] relative",
                className
            )}
            {...props}
        >
            {props.children}
            <div
                className="absolute h-[calc(100%-6px)] bg-background rounded-md transition-all duration-300 ease-in-out shadow-sm"
                style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                    bottom: '3px',
                    zIndex: 0,
                }}
            />
        </TabsPrimitive.List>
    )
}

function TabsTrigger({
                         className,
                         ...props
                     }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
    const ref = React.useRef<HTMLButtonElement>(null);

    // Handle initial active state
    React.useEffect(() => {
        if (ref.current && ref.current.dataset.state === 'active') {
            // Dispatch a custom event to notify parent
            const event = new CustomEvent('activetabchange', {
                detail: {element: ref.current},
                bubbles: true
            });
            ref.current.dispatchEvent(event);
        }
    }, []);

    // Create a mutation observer to detect state changes
    React.useEffect(() => {
        if (!ref.current) return;

        const triggerElement = ref.current;

        // Create a mutation observer to watch for data-state changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === 'attributes' &&
                    mutation.attributeName === 'data-state' &&
                    triggerElement.dataset.state === 'active'
                ) {
                    // Dispatch a custom event when this tab becomes active
                    const event = new CustomEvent('activetabchange', {
                        detail: {element: triggerElement},
                        bubbles: true
                    });
                    triggerElement.dispatchEvent(event);
                }
            });
        });

        // Start observing the element for attribute changes
        observer.observe(triggerElement, {attributes: true});

        // Clean up the observer when the component unmounts
        return () => observer.disconnect();
    }, []);

    return (
        <TabsPrimitive.Trigger
            ref={ref}
            data-slot="tabs-trigger"
            className={cn(
                "dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 relative z-10 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                className
            )}
            {...props}
        />
    )
}

function TabsContent({
                         className,
                         ...props
                     }: React.ComponentProps<typeof TabsPrimitive.Content>) {
    return (
        <TabsPrimitive.Content
            data-slot="tabs-content"
            className={cn(
                "flex-1 outline-none transition-opacity duration-300 ease-in-out data-[state=inactive]:opacity-0 data-[state=active]:opacity-100 data-[state=inactive]:absolute data-[state=active]:relative",
                className
            )}
            {...props}
        />
    )
}

export {Tabs, TabsList, TabsTrigger, TabsContent}
