import { useEffect, useMemo, useRef } from "react";
const WompiButton = ({ total, code }) => {
    const dollarToday = 4168
    const scriptRef = useRef(null)
    const scriptSrc = 'https://checkout.wompi.co/widget.js';
    const scriptAttributes = useMemo(() => ({
        type: 'text/javascript',
        'data-render': 'button',
        'data-public-key': 'pub_test_Bb7eLlW4HIhQbKMLDMQiWsxbeyJFm8AL',
        'data-currency': 'COP',
        'data-amount-in-cents': total * dollarToday * 100,
        'data-reference': code(),
        'data-redirect-url': 'https://painstaking-fireman.surge.sh/'
    }), [total, code]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = scriptSrc;
        script.async = true;

        Object.entries(scriptAttributes).forEach(([key, value]) => {
            script.setAttribute(key, value);
        });

        scriptRef.current.appendChild(script);

        return () => {
            if (scriptRef.current) {
                scriptRef.current.removeChild(script);
            }
        };
    }, [scriptAttributes, scriptSrc]);
    return (
        <div>
            <div className="mt-10" ref={scriptRef}></div>
        </div>
    );
}

export default WompiButton;