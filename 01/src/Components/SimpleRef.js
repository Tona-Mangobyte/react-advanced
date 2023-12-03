import React from "react";

const SimpleRef = () => {
    const [userName, setUserName] = React.useState("Tona");
    const simple = React.useRef();

    React.useEffect(() => {

        const handleChange = (e) => {
            if (simple.current && e.target === simple.current) {
                setUserName(e.target.value);
            }
        }
        window.addEventListener('change', handleChange);
        return () => {
            window.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <div>
            <h1>Hello {userName}!</h1>
            <input type="text" ref={simple} />
        </div>
    );
};

export default SimpleRef;
