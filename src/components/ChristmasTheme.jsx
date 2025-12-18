
export const ChristmasLights = () => {
    return (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-20 z-50 pointer-events-none overflow-hidden">
            <ul className="christmas-lights">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
};

export const SantaHat = () => {
    return (
        <div className="absolute -top-[2rem] -left-[1.2rem] -rotate-[25deg] z-50 pointer-events-none filter drop-shadow-md origin-bottom-right transform scale-100">
            {/* Switched to Image as requested/fallback */}
            <img src="/images/santa-hat.png" alt="Santa Hat" className="w-12 h-12" />
        </div>
    );
};

export const Snow = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]" aria-hidden="true">
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
            <div className="snowflake">❆</div>
            <div className="snowflake">❅</div>
        </div>
    );
};

const ChristmasTheme = () => {
    return (
        <>
            <ChristmasLights />
        </>
    );
};

export default ChristmasTheme;
