import { io } from 'socket.io-client';

export const initSocket = async () => {
    const options = {
        'force new connection': true,
        reconnectionAttempts: 'Infinity',
        timeout: 10000,
        transports: ['websocket'],
    };

    // Check if backend URL starts with http and convert to ws/wss accordingly
    let backendUrl = process.env.REACT_APP_BACKEND_URL;
    if (backendUrl.startsWith('https')) {
        backendUrl = backendUrl.replace('https', 'wss');
    } else if (backendUrl.startsWith('http')) {
        backendUrl = backendUrl.replace('http', 'ws');
    }

    return io(backendUrl, options);
};
