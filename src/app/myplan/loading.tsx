import React from 'react';

const Loading = () => {
    return (
        <div className="flex min-h-75 items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span> Loading workouts...
        </div>
    );
};

export default Loading;