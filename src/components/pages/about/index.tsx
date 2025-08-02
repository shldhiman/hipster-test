import React from 'react';
import { Button } from '../../ui/button';

const About = () => {
    return (
        <div className="px-4 md:px-16 py-8 space-y-8">
            {/* Title & Paragraph */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold">Welcome to About Page</h1>
                <p className="text-muted-foreground">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
                <Button className="mt-2">Get Started</Button>
            </div>
        </div>
    );
};

export default About;
