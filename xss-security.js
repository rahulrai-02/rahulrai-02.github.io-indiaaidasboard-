/**
 * Basic XSS Sanitization Utility
 * Helps prevent Cross-Site Scripting (XSS) attacks by escaping user input.
 */
const XSSUtils = {
    /**
     * Encodes HTML characters to prevent script injection.
     * Use this when inserting user-provided text into the DOM using innerHTML.
     * @param {string} str - The string to sanitize
     * @returns {string} The sanitized string
     */
    escapeHTML: function (str) {
        if (typeof str !== 'string') {
            return str;
        }
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/`/g, '&#x60;');
    },

    /**
     * Sanitizes input specifically for use within a URL attribute (e.g., href, src)
     * Prevents javascript: or data: URL injections.
     * @param {string} url - The URL to sanitize
     * @returns {string} The sanitized URL or '#' if invalid
     */
    sanitizeURL: function(url) {
        if (typeof url !== 'string' || !url.trim()) return '#';
        
        // Strip whitespace
        url = url.trim();
        
        // Allow http, https, mailto, tel, relative paths (/), and anchors (#). 
        // Reject javascript:, data:, vbscript: etc.
        const allowedProtocols = /^(http:\/\/|https:\/\/|mailto:|tel:|\/|#|[a-zA-Z0-9_.-]+\/)/i;
        
        // Check for disallowed protocols directly
        if (/^\s*(javascript|data|vbscript):/i.test(url)) {
            console.warn('Blocked potentially malicious URL:', url);
            return '#';
        }
        
        return this.escapeHTML(url);
    },
    
    /**
     * Safely sets text content of an element without interpreting HTML tags.
     * This is generally safer than innerHTML.
     * @param {HTMLElement} element - The DOM element
     * @param {string} text - The text to set
     */
    setText: function(element, text) {
        if (element && typeof element.textContent !== 'undefined') {
            element.textContent = text;
        } else if (element) {
            element.innerText = text;
        }
    }
};

// Make it available globally
if (typeof window !== 'undefined') {
    window.XSSUtils = XSSUtils;
}
