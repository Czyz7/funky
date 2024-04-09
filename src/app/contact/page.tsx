// In App.tsx or your relevant component file
import React from 'react';
import ContactForm from '@/components/ContactForm'; // Import the component
import Navigation from '@/components/Navigation';
import Block from '@/components/block';

// Inside your component's JSX:
const App = () => {
    return (
        <div>
            {/* Other content of your page */}
            <Navigation /> {/* Render the Navigation */}
            <Block /> {/* Render the Block */}
            {/* Other content of your page */}
            <ContactForm /> {/* Render the ContactForm */}
        </div>
    );
};

export default App;