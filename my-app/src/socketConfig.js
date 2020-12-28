import openSocket from 'socket.io-client';

const ENDPOINT = "http://localhost:4001";
const socket = openSocket(ENDPOINT);

export default socket;