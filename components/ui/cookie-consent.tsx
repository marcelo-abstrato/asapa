"use client";

import {useState, useEffect, useCallback} from "react";
import {hasCookie, setCookie} from "@/lib/helpers";
import {Button} from "./button";
import {Modal} from "./modal";
import {Check, Info, FileText, Save} from "lucide-react";

// Cookie consent keys for different types of cookies
const COOKIE_CONSENT_KEYS = {
    necessary: "cookie-consent-necessary",
    analytics: "cookie-consent-analytics",
    marketing: "cookie-consent-marketing",
    preferences: "cookie-consent-preferences"
};

export function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [cookiePreferences, setCookiePreferences] = useState({
        necessary: true, // Necessary cookies are always enabled
        analytics: true, // Set to true by default
        marketing: true, // Set to true by default
        preferences: true // Set to true by default
    });

    // Function to handle keyboard events will be defined after acceptAllCookies

    useEffect(() => {
        // Check if user has already set cookie preferences
        const hasNecessary = hasCookie(COOKIE_CONSENT_KEYS.necessary);
        const hasAnalytics = hasCookie(COOKIE_CONSENT_KEYS.analytics);
        const hasMarketing = hasCookie(COOKIE_CONSENT_KEYS.marketing);
        const hasPreferences = hasCookie(COOKIE_CONSENT_KEYS.preferences);

        // If any cookie preference is set, update the state
        if (hasNecessary || hasAnalytics || hasMarketing || hasPreferences) {
            setCookiePreferences({
                necessary: true, // Always true
                analytics: hasAnalytics || false,
                marketing: hasMarketing || false,
                preferences: hasPreferences || false
            });
        } else {
            // Only show the banner if no cookie preferences are set
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 500);

            return () => clearTimeout(timer);
        }
    }, []);

    const saveCookiePreferences = () => {
        // Always set necessary cookies
        setCookie(COOKIE_CONSENT_KEYS.necessary, "true", 365);

        // Set other cookies based on preferences
        if (cookiePreferences.analytics) {
            setCookie(COOKIE_CONSENT_KEYS.analytics, "true", 365);
        }

        if (cookiePreferences.marketing) {
            setCookie(COOKIE_CONSENT_KEYS.marketing, "true", 365);
        }

        if (cookiePreferences.preferences) {
            setCookie(COOKIE_CONSENT_KEYS.preferences, "true", 365);
        }

        setIsVisible(false);
    };

    const acceptAllCookies = () => {
        setCookiePreferences({
            necessary: true,
            analytics: true,
            marketing: true,
            preferences: true
        });

        // Set all cookie consent keys
        Object.values(COOKIE_CONSENT_KEYS).forEach(key => {
            setCookie(key, "true", 365);
        });

        setIsVisible(false);
    };

    // Handle keyboard events for Enter key
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter' && isVisible) {
            acceptAllCookies();
        }
    }, [isVisible]);

    // Add and remove event listener for keyboard events
    useEffect(() => {
        if (isVisible) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isVisible, handleKeyDown]);

    const handleToggle = (type: keyof typeof cookiePreferences) => {
        if (type === 'necessary') return; // Cannot toggle necessary cookies

        setCookiePreferences(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            className="fixed bottom-0 left-0 right-0 w-full z-50 bg-white shadow-lg border-t border-gray-200 animate-slide-up">
            <div className="container mx-auto p-6">
                <div className="flex flex-col gap-6">
                    {/* Title and description taking up 1/3, and cookie options taking up 2/3 */}
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Title and description - 1/3 */}
                        <div className="w-full md:w-1/3">
                            <div className="flex items-center gap-3 mb-4">
                                <Info className="w-7 h-7 text-[#1d4ed8]"/>
                                <h3 className="text-2xl font-bold text-[#1d4ed8]">Preferências de Cookies</h3>
                            </div>
                            <p className="text-gray-600 text-base leading-relaxed">
                                Utilizamos cookies para melhorar sua experiência em nosso site, personalizar conteúdo e
                                anúncios, fornecer recursos de mídia social e analisar nosso tráfego.
                            </p>
                        </div>

                        {/* Cookie options panel - 2/3 */}
                        <div className="w-full md:w-2/3 flex flex-col gap-3">
                            {/* Necessary Cookies */}
                            <div className="p-4 border rounded-lg bg-gray-50 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-[#1d4ed8]">Cookies Necessários</h4>
                                    <div className="bg-[#dbeafe] text-[#1d4ed8] px-2 py-1 rounded text-xs font-medium">
                                        Sempre Ativo
                                    </div>
                                </div>
                            </div>

                            {/* Analytics Cookies */}
                            <div
                                className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer shadow-sm transition-all duration-200 hover:shadow-md"
                                onClick={() => handleToggle('analytics')}>
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-[#1d4ed8]">Cookies Analíticos</h4>
                                    <div
                                        className={`w-10 h-6 rounded-full flex items-center transition-colors duration-300 ${cookiePreferences.analytics ? 'bg-[#1d4ed8]' : 'bg-gray-300'}`}>
                                        <div
                                            className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${cookiePreferences.analytics ? 'translate-x-5' : 'translate-x-1'}`}>
                                            {cookiePreferences.analytics && <Check className="w-3 h-3 text-[#1d4ed8]"/>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Marketing Cookies */}
                            <div
                                className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer shadow-sm transition-all duration-200 hover:shadow-md"
                                onClick={() => handleToggle('marketing')}>
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-[#1d4ed8]">Cookies de Marketing</h4>
                                    <div
                                        className={`w-10 h-6 rounded-full flex items-center transition-colors duration-300 ${cookiePreferences.marketing ? 'bg-[#1d4ed8]' : 'bg-gray-300'}`}>
                                        <div
                                            className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${cookiePreferences.marketing ? 'translate-x-5' : 'translate-x-1'}`}>
                                            {cookiePreferences.marketing && <Check className="w-3 h-3 text-[#1d4ed8]"/>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Preference Cookies */}
                            <div
                                className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer shadow-sm transition-all duration-200 hover:shadow-md"
                                onClick={() => handleToggle('preferences')}>
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-[#1d4ed8]">Cookies de Preferências</h4>
                                    <div
                                        className={`w-10 h-6 rounded-full flex items-center transition-colors duration-300 ${cookiePreferences.preferences ? 'bg-[#1d4ed8]' : 'bg-gray-300'}`}>
                                        <div
                                            className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform duration-300 ${cookiePreferences.preferences ? 'translate-x-5' : 'translate-x-1'}`}>
                                            {cookiePreferences.preferences &&
                                                <Check className="w-3 h-3 text-[#1d4ed8]"/>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-full h-px bg-gray-200 my-4"></div>

                    {/* Buttons in a row below the options, taking full width but aligned to the right */}
                    <div className="flex justify-end gap-4 w-full">
                        <Button
                            variant="outline"
                            className="text-[#1d4ed8] border-[#1d4ed8] text-base py-3 px-5"
                            onClick={saveCookiePreferences}
                        >
                            <FileText className="w-5 h-5 mr-2"/>
                            Salvar Preferências
                        </Button>
                        <Button
                            variant="default"
                            className="bg-[#1d4ed8] hover:bg-[#1e40af] text-base py-3 px-5"
                            onClick={acceptAllCookies}
                        >
                            <Check className="w-5 h-5 mr-2"/>
                            Aceitar Todos
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
